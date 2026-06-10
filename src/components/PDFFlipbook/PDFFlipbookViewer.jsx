import React, { useState, useRef, useEffect } from "react";
import { usePDFLoader } from "./hooks/usePDFLoader";
import { useSoundEffect } from "./hooks/useSoundEffect";
import PortraitFlipbook from "./PortraitFlipbook";
import LandscapeViewer from "./LandscapeViewer";

export default function PDFFlipbookViewer({
  pdfUrl,
  onClose = () => {},
  isPopup = false,
  pageWidth: forcedWidth,
  pageHeight: forcedHeight,
}) {
  const { pages, loading, error, totalPages, pdfDimensions } =
    usePDFLoader(pdfUrl);
  const { playFlipSound, soundEnabled, setSoundEnabled } = useSoundEffect();

  const [currentPage, setCurrentPage] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [toast, setToast] = useState(null);

  const bookRef = useRef(null);
  const viewerRef = useRef(null);

  // Compute display dimensions
  const [viewport, setViewport] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDisplayDimensions = () => {
    if (!pdfDimensions)
      return {
        pageWidth: forcedWidth || 450,
        pageHeight: forcedHeight || 630,
        mode: "portrait",
      };

    if (pdfDimensions.isLandscape) {
      const maxW = Math.min(viewport.width * 0.85, 1100);
      const maxH = viewport.height * 0.78;
      const scaledHeight = maxW / pdfDimensions.aspectRatio;

      if (scaledHeight <= maxH) {
        return { pageWidth: maxW, pageHeight: scaledHeight, mode: "landscape" };
      } else {
        return {
          pageWidth: maxH * pdfDimensions.aspectRatio,
          pageHeight: maxH,
          mode: "landscape",
        };
      }
    } else {
      const isMobile = viewport.width < 768;
      const maxTotalW = Math.min(viewport.width * 0.85, 1000);

      if (isMobile) {
        // Single page view for mobile
        const pageWidth = viewport.width * 0.85;
        const pageHeight = pageWidth / pdfDimensions.aspectRatio;
        return { pageWidth, pageHeight, mode: "portrait" };
      } else {
        // Double page view for desktop
        const pageWidth = maxTotalW / 2;
        const pageHeight = pageWidth / pdfDimensions.aspectRatio;
        return { pageWidth, pageHeight, mode: "portrait" };
      }
    }
  };

  const { pageWidth, pageHeight, mode } = getDisplayDimensions();
  const isMobile = viewport.width < 768;

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = pdfUrl.split("/").pop();
    a.click();
  };

  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = pdfUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow.print();
      setTimeout(() => document.body.removeChild(iframe), 1000);
    };
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setToast("Link copied!");
      setTimeout(() => setToast(null), 2000);
    });
  };

  const handleFullscreen = () => {
    const el = viewerRef.current;
    if (!document.fullscreenElement) {
      el?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (loading)
    return (
      <div
        style={{
          minHeight: 630,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-t-primary border-white/10 rounded-full animate-spin mb-4"></div>
          <p>Loading PDF...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div
        style={{
          minHeight: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <svg
          width="50"
          height="64"
          viewBox="0 0 50 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-[80px] w-auto text-[#ed1c24] mb-4"
        >
          <path
            d="M10 2H30L46 18V60C46 61.1046 45.1046 62 44 62H10C8.89543 62 8 61.1046 8 60V4C8 2.89543 8.89543 2 10 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="white"
          />
          <path
            d="M30 2V18H46"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <text
            x="27"
            y="44"
            fontFamily="sans-serif"
            fontSize="12"
            fontWeight="bold"
            fill="currentColor"
            textAnchor="middle"
          >
            PDF
          </text>
          <path
            d="M16 28 C 22 25, 30 25, 36 28"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <p className="text-xl font-bold mb-2">Document Unavailable</p>
        <p className="text-gray-400 text-sm max-w-md text-center">
          The requested PDF document could not be loaded or is missing.
        </p>
      </div>
    );

  return (
    <div ref={viewerRef} style={{ position: "relative", width: "100%" }}>
      {toast && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#019cad",
            color: "white",
            padding: "8px 16px",
            borderRadius: 20,
            zIndex: 2000,
          }}
        >
          {toast}
        </div>
      )}

      {mode === "landscape" ? (
        <LandscapeViewer
          pages={pages}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          pdfUrl={pdfUrl}
          isPopup={isPopup}
          isMobile={isMobile}
          onClose={onClose}
          viewerRef={viewerRef}
          playFlipSound={playFlipSound}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          handleDownload={handleDownload}
          handlePrint={handlePrint}
          handleShare={handleShare}
          handleFullscreen={handleFullscreen}
        />
      ) : (
        <PortraitFlipbook
          pages={pages}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          bookRef={bookRef}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          pdfUrl={pdfUrl}
          isPopup={isPopup}
          isMobile={isMobile}
          onClose={onClose}
          viewerRef={viewerRef}
          playFlipSound={playFlipSound}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          scale={scale}
          setScale={setScale}
          handleDownload={handleDownload}
          handlePrint={handlePrint}
          handleShare={handleShare}
          handleFullscreen={handleFullscreen}
        />
      )}
    </div>
  );
}
