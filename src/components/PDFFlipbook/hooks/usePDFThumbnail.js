import { useState, useEffect } from "react";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

export function usePDFThumbnail(pdfUrl) {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pdfUrl) return;

    let isMounted = true;

    async function loadPDFThumbnail() {
      try {
        setLoading(true);
        setError(null);

        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

        const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
        const pdf = await loadingTask.promise;

        if (!isMounted) return;

        const page = await pdf.getPage(1);
        const SCALE = 1.0;
        const viewport = page.getViewport({ scale: SCALE });
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: ctx, viewport }).promise;

        if (!isMounted) return;

        setThumbnailUrl(canvas.toDataURL("image/jpeg", 0.92));
        setLoading(false);
      } catch (err) {
        if (!isMounted) return;
        console.error("Error loading PDF thumbnail:", err);
        setError(err.message);
        setLoading(false);
      }
    }

    loadPDFThumbnail();

    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  return { thumbnailUrl, loading, error };
}
