// One-time conversion of the site's lecture PDFs to page images, so they render
// identically everywhere instead of depending on the browser/OS's PDF viewer.
// Re-run this (`node scripts/convert-pdfs-to-images.mjs`) whenever a source PDF changes.
import { createCanvas } from "@napi-rs/canvas";
import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const TARGET_WIDTH = 1600;

const docs = [
  { pdf: "Born to Create Lecture for website.pdf", slug: "born-to-create" },
  { pdf: "Organization in Memoir for website.pdf", slug: "organization-in-memoir" },
];

for (const { pdf, slug } of docs) {
  const pdfPath = path.join(publicDir, pdf);
  const outDir = path.join(publicDir, "pdf-pages", slug);
  await mkdir(outDir, { recursive: true });

  const existing = await readdir(outDir);
  await Promise.all(existing.map((f) => unlink(path.join(outDir, f))));

  const loadingTask = getDocument({ url: pdfPath });
  const pdfDocument = await loadingTask.promise;
  const pad = String(pdfDocument.numPages).length;

  for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
    const page = await pdfDocument.getPage(pageNum);
    const baseViewport = page.getViewport({ scale: 1 });
    const scale = TARGET_WIDTH / baseViewport.width;
    const viewport = page.getViewport({ scale });

    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext("2d");
    await page.render({ canvasContext: context, viewport }).promise;

    const fileName = `page-${String(pageNum).padStart(pad, "0")}.webp`;
    await writeFile(path.join(outDir, fileName), await canvas.encode("webp", 82));
    console.log(`${slug}: wrote ${fileName} (${viewport.width}x${Math.round(viewport.height)})`);
  }

  await loadingTask.destroy();
  console.log(`${slug}: ${pdfDocument.numPages} pages -> public/pdf-pages/${slug}/`);
}
