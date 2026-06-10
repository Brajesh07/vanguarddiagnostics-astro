import { useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Download,
  Expand,
  Grid2x2,
  Minus,
  Plus,
  Printer,
  Share2,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  X,
} from "lucide-react";

import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

type FlipBookViewerProps = {
  fileUrl: string;
};

type FlipEventPayload = {
  data: number;
};

type FlipbookApi = {
  pageFlip: () => {
    flip: (page: number, corner?: string) => void;
    turnToPage: (page: number) => void;
  };
};

export default function FlipBookViewer({ fileUrl }: FlipBookViewerProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const flipbookRef = useRef<FlipbookApi | null>(null);
  const lastFlipSoundRef = useRef(0);

  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [showPagesStrip, setShowPagesStrip] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [containerWidth, setContainerWidth] = useState(1000);

  useEffect(() => {
    const node = wrapperRef.current;

    if (!node) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect.width;
      if (nextWidth) {
        setContainerWidth(nextWidth);
      }
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const pageWidth = useMemo(() => {
    const mobileWidth = Math.max(240, containerWidth - 28);
    const desktopWidth = Math.min(
      420,
      Math.max(280, Math.floor(containerWidth * 0.35)),
    );
    const isMobile = containerWidth < 768;
    const base = isMobile ? mobileWidth : desktopWidth;
    return Math.round(base * zoom);
  }, [containerWidth, zoom]);

  const pageHeight = Math.round(pageWidth * 1.414);

  const onDocumentLoad = ({ numPages: loadedPages }: { numPages: number }) => {
    setNumPages(loadedPages);
    setCurrentPage(1);
  };

  const handleFlip = (event: FlipEventPayload) => {
    setCurrentPage((event?.data ?? 0) + 1);

    if (!soundOn) {
      return;
    }

    const now = Date.now();

    // Debounce rapid animation callbacks so one flip produces one sound.
    if (now - lastFlipSoundRef.current < 120) {
      return;
    }

    lastFlipSoundRef.current = now;
    playFlipSound();
  };

  const safeFlip = (targetPageIndex: number) => {
    const flipApi = flipbookRef.current?.pageFlip?.();
    if (!flipApi) {
      return;
    }

    try {
      flipApi.flip(targetPageIndex, "top");
    } catch {
      // Some builds expose turnToPage instead of flip.
      try {
        flipApi.turnToPage(targetPageIndex);
      } catch {
        // No-op when API is unavailable.
      }
    }
  };

  const goPrev = () => {
    const next = Math.max(1, currentPage - 1);
    safeFlip(next - 1);
  };

  const goNext = () => {
    const next = Math.min(numPages, currentPage + 1);
    safeFlip(next - 1);
  };

  const toggleFullscreen = async () => {
    const el = wrapperRef.current;

    if (!el) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await el.requestFullscreen();
  };

  const onShare = async () => {
    const absolutePdf = `${window.location.origin}${fileUrl}`;

    if (navigator.share) {
      await navigator.share({
        title: "Vanguard Diagnostics Handbook",
        text: "View this Vanguard Diagnostics handbook",
        url: absolutePdf,
      });
      return;
    }

    await navigator.clipboard.writeText(absolutePdf);
    window.alert("Flipbook URL copied to clipboard");
  };

  const onDownload = () => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "vanguard-diagnostics-hand-book-print.pdf";
    a.click();
  };

  const onPrint = () => {
    const printWindow = window.open(fileUrl, "_blank");
    if (printWindow) {
      printWindow.onload = () => printWindow.print();
    }
  };

  return (
    <div
      className="rounded-lg border border-[#3f444c] bg-[#54595f] p-0 shadow-[0_10px_30px_rgba(20,30,40,0.35)]"
      ref={wrapperRef}
    >
      <div className="flex items-center justify-between bg-[#2f343a] px-4 py-2 text-sm text-white/90">
        <span className="rounded bg-black/30 px-3 py-1 font-medium">
          {currentPage} / {Math.max(numPages, 1)}
        </span>
      </div>

      <div className="relative overflow-hidden px-3 py-5 md:px-8 md:py-8">
        <button
          aria-label="Previous page"
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 text-white/70 transition hover:text-white"
          onClick={goPrev}
          type="button"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>

        <button
          aria-label="Next page"
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 text-white/70 transition hover:text-white"
          onClick={goNext}
          type="button"
        >
          <ChevronRight className="h-10 w-10" />
        </button>

        <div className="mx-auto flex w-full justify-center overflow-auto rounded bg-[#54595f]">
          <Document
            file={fileUrl}
            loading={
              <p className="py-16 text-center text-white">
                Loading handbook...
              </p>
            }
            onLoadError={() => {
              window.alert("Unable to load flipbook PDF.");
            }}
            onLoadSuccess={onDocumentLoad}
          >
            {/* @ts-expect-error react-pageflip types require style/maxWidth/minHeight/maxHeight but they function as optional */}
            <HTMLFlipBook
              autoSize
              className="flipbook-canvas"
              clickEventForward
              drawShadow
              flippingTime={900}
              height={pageHeight}
              maxHeight={pageHeight * 2}
              maxShadowOpacity={0.3}
              maxWidth={pageWidth * 2}
              minHeight={pageHeight}
              minWidth={240}
              mobileScrollSupport
              onFlip={handleFlip}
              ref={flipbookRef}
              showCover
              size="stretch"
              startPage={0}
              style={{}}
              useMouseEvents
              usePortrait
              width={pageWidth}
            >
              {Array.from({ length: numPages || 1 }).map((_, index) => (
                <div className="bg-white" key={`flip-${index + 1}`}>
                  <Page
                    pageNumber={index + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    width={pageWidth}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </Document>
        </div>

        {showPagesStrip && numPages > 0 ? (
          <div className="absolute inset-x-3 top-4 z-30 rounded-md bg-[#1f2429]/95 p-3 md:inset-x-8 md:p-4">
            <div className="mb-3 flex items-center justify-between text-white">
              <p className="text-sm font-medium">Pages</p>
              <button
                aria-label="Close pages"
                className="rounded p-1 text-white/80 hover:bg-white/10 hover:text-white"
                onClick={() => setShowPagesStrip(false)}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              <Document file={fileUrl} loading={null}>
                {Array.from({ length: numPages }).map((_, index) => (
                  <button
                    className={`shrink-0 overflow-hidden rounded border ${
                      currentPage === index + 1
                        ? "border-[#2f80ff]"
                        : "border-white/20"
                    }`}
                    key={`thumb-${index + 1}`}
                    onClick={() => {
                      safeFlip(index);
                      setShowPagesStrip(false);
                    }}
                    type="button"
                  >
                    <Page
                      pageNumber={index + 1}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                      width={86}
                    />
                    <span className="block bg-black/70 px-2 py-1 text-xs text-white">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </Document>
            </div>
          </div>
        ) : null}
      </div>

      <div className="relative flex items-center justify-center gap-3 border-t border-black/15 bg-[#ececec] px-3 py-3 text-[#1f2429]">
        <button
          aria-label="Zoom out"
          className="rounded p-1 hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={zoom <= 0.8}
          onClick={() =>
            setZoom((prev) => Math.max(0.8, Number((prev - 0.1).toFixed(1))))
          }
          type="button"
          title="Zoom out"
        >
          <Minus className="h-5 w-5" />
        </button>

        <button
          aria-label="Zoom in"
          className="rounded p-1 hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={zoom >= 1.5}
          onClick={() =>
            setZoom((prev) => Math.min(1.5, Number((prev + 0.1).toFixed(1))))
          }
          type="button"
          title="Zoom in"
        >
          <Plus className="h-5 w-5" />
        </button>

        <button
          aria-label="Toggle pages"
          className="rounded p-1 hover:bg-black/5"
          onClick={() => setShowPagesStrip((prev) => !prev)}
          type="button"
          title="Pages"
        >
          <Grid2x2 className="h-5 w-5" />
        </button>

        <button
          aria-label="Share"
          className="rounded p-1 hover:bg-black/5"
          onClick={onShare}
          type="button"
          title="Share"
        >
          <Share2 className="h-5 w-5" />
        </button>

        <button
          aria-label="Toggle sound"
          className="rounded p-1 hover:bg-black/5"
          onClick={() => setSoundOn((prev) => !prev)}
          type="button"
          title={soundOn ? "Sound on" : "Sound off"}
        >
          {soundOn ? (
            <Volume2 className="h-5 w-5" />
          ) : (
            <VolumeX className="h-5 w-5" />
          )}
        </button>

        <button
          aria-label="Menu"
          className="rounded p-1 hover:bg-black/5"
          onClick={() => setShowMenu((prev) => !prev)}
          type="button"
          title="More"
        >
          <MoreVertical className="h-5 w-5" />
        </button>

        <button
          aria-label="Toggle fullscreen"
          className="rounded p-1 hover:bg-black/5"
          onClick={toggleFullscreen}
          type="button"
          title="Toggle fullscreen"
        >
          <Expand className="h-5 w-5" />
        </button>

        {showMenu ? (
          <div className="absolute bottom-12 right-3 w-44 overflow-hidden rounded border border-black/20 bg-white shadow-lg">
            <button
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-[#f5f7f9]"
              onClick={() => {
                onPrint();
                setShowMenu(false);
              }}
              type="button"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-[#f5f7f9]"
              onClick={() => {
                onDownload();
                setShowMenu(false);
              }}
              type="button"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
            <button
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-[#f5f7f9]"
              onClick={() => {
                setSoundOn((prev) => !prev);
                setShowMenu(false);
              }}
              type="button"
            >
              {soundOn ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
              {soundOn ? "Sound On" : "Sound Off"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function playFlipSound() {
  try {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.value = 600;

    gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContext.currentTime + 0.08,
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.08);
  } catch {
    // Ignore environments where audio context is restricted.
  }
}
