import React, { useState } from "react";
import { Toolbar } from "./Toolbar";

export default function LandscapeViewer({
  pages,
  pageWidth,
  pageHeight,
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
  handleDownload,
  handlePrint,
  handleShare,
  handleFullscreen,
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null); // 'left' | 'right'
  const [showThumbs, setShowThumbs] = useState(false);

  const goTo = (targetPage, direction) => {
    if (isAnimating) return;
    if (targetPage < 0 || targetPage >= totalPages) return;
    setSlideDirection(direction);
    setIsAnimating(true);
    playFlipSound();
    setTimeout(() => {
      setCurrentPage(targetPage);
      setIsAnimating(false);
      setSlideDirection(null);
    }, 350);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Page display area */}
      <div
        style={{
          width: pageWidth,
          height: pageHeight,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          borderRadius: 2,
          background: "#fff",
        }}
      >
        {/* Current page */}
        <img
          src={pages[currentPage]?.src}
          alt={`Page ${currentPage + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            transform: isAnimating
              ? `translateX(${slideDirection === "left" ? "-4%" : "4%"})`
              : "translateX(0)",
            opacity: isAnimating ? 0 : 1,
            transition: "transform 0.35s ease, opacity 0.35s ease",
            userSelect: "none",
            pointerEvents: "none",
          }}
          draggable={false}
        />

        {/* Left nav overlay arrow */}
        <button
          onClick={() => goTo(currentPage - 1, "right")}
          disabled={currentPage === 0}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 60,
            background: "transparent",
            border: "none",
            cursor: currentPage === 0 ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: currentPage === 0 ? 0.2 : 0,
            transition: "opacity 0.2s",
            zIndex: 5,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.opacity = currentPage === 0 ? "0.2" : "1")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.opacity = currentPage === 0 ? "0.2" : "0")
          }
        >
          <span
            style={{
              background: "rgba(0,0,0,0.5)",
              color: "white",
              width: 40,
              height: 40,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
            }}
          >
            ‹
          </span>
        </button>

        {/* Right nav overlay arrow */}
        <button
          onClick={() => goTo(currentPage + 1, "left")}
          disabled={currentPage >= totalPages - 1}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 60,
            background: "transparent",
            border: "none",
            cursor: currentPage >= totalPages - 1 ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.2s",
            zIndex: 5,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity =
              currentPage >= totalPages - 1 ? "0.2" : "1";
          }}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
        >
          <span
            style={{
              background: "rgba(0,0,0,0.5)",
              color: "white",
              width: 40,
              height: 40,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
            }}
          >
            ›
          </span>
        </button>
      </div>

      {/* Landscape Thumbnails (Filmstrip) */}
      {showThumbs && (
        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            padding: "12px 16px",
            background: "rgba(20,20,20,0.9)",
            borderRadius: 8,
            marginTop: 8,
            maxWidth: pageWidth,
            scrollbarWidth: "thin",
          }}
        >
          {pages.map((page, i) => (
            <div
              key={i}
              onClick={() => setCurrentPage(i)}
              style={{
                flexShrink: 0,
                cursor: "pointer",
                border:
                  currentPage === i
                    ? "2px solid #019cad"
                    : "2px solid transparent",
                borderRadius: 3,
                overflow: "hidden",
                width: 120,
              }}
            >
              <img
                src={page.src}
                style={{ width: "100%", display: "block" }}
                alt={`Page ${i + 1}`}
              />
            </div>
          ))}
        </div>
      )}

      <Toolbar
        mode="landscape"
        currentPage={currentPage}
        totalPages={totalPages}
        showZoom={false}
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
