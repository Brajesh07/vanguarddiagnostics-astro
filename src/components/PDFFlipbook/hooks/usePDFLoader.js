import { useState, useEffect } from "react";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

export function usePDFLoader(pdfUrl) {
  const [pages, setPages] = useState([]); // array of { src, width, height }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pdfDimensions, setPdfDimensions] = useState(null);

  useEffect(() => {
    if (!pdfUrl) return;
    setLoading(true);
    setPages([]);
    setPdfDimensions(null);

    async function loadPDF() {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        // Use Vite's ?url import to properly bundle the worker in production
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

        const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
        const pdf = await loadingTask.promise;
        setTotalPages(pdf.numPages);

        // Get dimensions from FIRST page to determine orientation
        const firstPage = await pdf.getPage(1);
        const rawViewport = firstPage.getViewport({ scale: 1 });
        const naturalWidth = rawViewport.width;
        const naturalHeight = rawViewport.height;
        const isLandscape = naturalWidth > naturalHeight;
        const aspectRatio = naturalWidth / naturalHeight;

        setPdfDimensions({
          width: naturalWidth,
          height: naturalHeight,
          isLandscape,
          aspectRatio,
        });

        const SCALE = isLandscape ? 1.5 : 1.8;
        const pageImages = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: SCALE });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: ctx, viewport }).promise;
          pageImages.push({
            src: canvas.toDataURL("image/jpeg", 0.92),
            width: viewport.width,
            height: viewport.height,
          });
        }

        setPages(pageImages);
        setLoading(false);
      } catch (err) {
        console.error("Error loading PDF:", err);
        setError(err.message);
        setLoading(false);
      }
    }

    loadPDF();
  }, [pdfUrl]);

  return { pages, loading, error, totalPages, pdfDimensions };
}
