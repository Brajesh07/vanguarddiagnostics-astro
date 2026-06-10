import React, { useState, useEffect } from "react";
import PageComponent from "./PageComponent";
import { Toolbar } from "./Toolbar";

export default function PortraitFlipbook({
  pages,
  pageWidth,
  pageHeight,
  bookRef,
  currentPage,
  setCurrentPage,
  totalPages,
  pdfUrl,
  isPopup,
  isMobile,
  onClose,
  viewerRef,
  playFlipSound,
  soundEnabled,
  setSoundEnabled,
  scale,
  setScale,
  handleDownload,
  handlePrint,
  handleShare,
  handleFullscreen,
}) {
  const [HTMLFlipBook, setHTMLFlipBook] = useState(null);
  const [showThumbs, setShowThumbs] = useState(false);

  useEffect(() => {
    import("react-pageflip").then((module) => {
      setHTMLFlipBook(() => module.default);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: isMobile ? pageWidth : pageWidth * 2,
          height: pageHeight,
          transform: `scale(${scale})`,
          transition: "transform 0.3s ease",
          margin: "0 auto",
          maxWidth: "100vw",
        }}
      >
        {/* Left arrow */}
        <button
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          style={{
            position: "absolute",
            left: isMobile ? 10 : -45,
            top: "50%",
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
          title="Previous page"
        >
          ‹
        </button>

        {HTMLFlipBook && (
          <HTMLFlipBook
            width={pageWidth}
            height={pageHeight}
            size="fixed"
            showCover={true}
            usePortrait={isMobile}
            drawShadow={true}
            flippingTime={700}
            useMouseEvents={true}
            mobileScrollSupport={true}
            ref={bookRef}
            onFlip={(e) => {
              setCurrentPage(e.data);
              playFlipSound();
            }}
            style={{
              margin: "0 auto",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {pages.map((page, i) => (
              <PageComponent key={i} image={page.src} pageNum={i + 1} />
            ))}
          </HTMLFlipBook>
        )}

        {/* Right arrow */}
        <button
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          style={{
            position: "absolute",
            right: isMobile ? 10 : -45,
            top: "50%",
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
          title="Next page"
        >
          ›
        </button>

        {/* Thumbnail Panel */}
        {showThumbs && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 180,
              background: "rgba(30,30,30,0.95)",
              overflowY: "auto",
              zIndex: 20,
              padding: 12,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              alignContent: "start",
            }}
          >
            {pages.map((page, i) => (
              <div
                key={i}
                onClick={() => {
                  bookRef.current?.pageFlip().flip(i);
                  setShowThumbs(false);
                }}
                style={{
                  cursor: "pointer",
                  border:
                    currentPage === i
                      ? "2px solid #019cad"
                      : "2px solid transparent",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <img
                  src={page.src}
                  alt={`Page ${i + 1}`}
                  style={{ width: "100%", display: "block" }}
                />
                <div
                  style={{
                    color: "#aaa",
                    fontSize: 10,
                    textAlign: "center",
                    padding: "2px 0",
                  }}
                >
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Toolbar
        mode="portrait"
        currentPage={currentPage}
        totalPages={totalPages}
        onZoomIn={() => setScale((s) => Math.min(2.0, s + 0.1))}
        onZoomOut={() => setScale((s) => Math.max(0.5, s - 0.1))}
        onToggleThumbs={() => setShowThumbs(!showThumbs)}
        onShare={handleShare}
        onPrint={handlePrint}
        onDownload={handleDownload}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        onFullscreen={handleFullscreen}
        onClose={onClose}
        isPopup={isPopup}
        isMobile={isMobile}
      />
    </div>
  );
}
