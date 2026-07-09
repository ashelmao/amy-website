"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { PDFDocumentProxy } from "pdfjs-dist";
import styles from "./PdfViewer.module.css";

export default function PdfViewer({
  src,
  title,
  backHref,
}: {
  src: string;
  title: string;
  backHref?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const renderTokenRef = useRef(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Renders every page as a canvas sized to the current container width, so the
  // PDF looks identical everywhere instead of deferring to each OS's native viewer.
  const renderPages = useCallback(async (pdf: PDFDocumentProxy, token: number) => {
    const pagesEl = pagesRef.current;
    if (!pagesEl) return;
    const width = pagesEl.clientWidth;
    if (!width) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      if (renderTokenRef.current !== token) return;
      const page = await pdf.getPage(pageNum);
      const baseViewport = page.getViewport({ scale: 1 });
      const scale = width / baseViewport.width;
      const viewport = page.getViewport({ scale: scale * dpr });

      let canvas = pagesEl.querySelector<HTMLCanvasElement>(
        `canvas[data-page="${pageNum}"]`
      );
      if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.dataset.page = String(pageNum);
        canvas.className = styles.page;
        pagesEl.appendChild(canvas);
      }
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${viewport.height / dpr}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx || renderTokenRef.current !== token) return;
      await page.render({ canvasContext: ctx, viewport, canvas }).promise;
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const token = ++renderTokenRef.current;
    setStatus("loading");

    (async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        const pdf = await pdfjsLib.getDocument({ url: src }).promise;
        if (cancelled) return;
        pdfRef.current = pdf;
        setStatus("ready");
        await renderPages(pdf, token);
      } catch (err) {
        console.error("Failed to load PDF", err);
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      renderTokenRef.current++;
      pdfRef.current?.loadingTask.destroy();
      pdfRef.current = null;
      if (pagesRef.current) pagesRef.current.innerHTML = "";
    };
  }, [src, renderPages]);

  useEffect(() => {
    if (status !== "ready") return;
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const pdf = pdfRef.current;
        if (pdf) renderPages(pdf, renderTokenRef.current);
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [status, renderPages]);

  return (
    <div ref={containerRef} className={styles.container}>
      {backHref && (
        <Link href={backHref} className={styles.backBtn} aria-label="Back to art">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Art
        </Link>
      )}
      <button
        className={styles.fullscreenBtn}
        onClick={toggleFullscreen}
        title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
      >
        {isFullscreen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 14 10 14 10 20" />
            <polyline points="20 10 14 10 14 4" />
            <line x1="10" y1="14" x2="3" y2="21" />
            <line x1="21" y1="3" x2="14" y2="10" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        )}
      </button>
      <div ref={scrollRef} className={styles.viewer} role="document" aria-label={title}>
        {status === "loading" && <div className={styles.status}>Loading…</div>}
        {status === "error" && (
          <div className={styles.status}>
            Couldn&apos;t load the PDF.{" "}
            <a href={src} target="_blank" rel="noopener noreferrer">
              Open it directly
            </a>
            .
          </div>
        )}
        <div ref={pagesRef} className={styles.pages} />
      </div>
    </div>
  );
}
