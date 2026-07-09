export function pdfPagePaths(slug: string, pageCount: number): string[] {
  const pad = String(pageCount).length;
  return Array.from(
    { length: pageCount },
    (_, i) => `/pdf-pages/${slug}/page-${String(i + 1).padStart(pad, "0")}.webp`
  );
}
