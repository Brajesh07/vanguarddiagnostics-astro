import { useEffect, useRef, useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { homeContent } from "../../data/content";
import VanguardButton from "./ui/VanguardButton";

const { hero } = homeContent;

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const totalSlides = hero.slides.length;

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const handleSlideChange = (nextIndex: number) => {
    const normalized = (nextIndex + totalSlides) % totalSlides;
    setActiveSlide(normalized);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    // Set initial end position in case the user lifts their finger without moving
    touchEndX.current = touch.clientX;
    touchEndY.current = touch.clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchEndX.current = touch.clientX;
    touchEndY.current = touch.clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null ||
      touchEndX.current === null ||
      touchEndY.current === null
    ) {
      return;
    }

    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    const absDiffX = Math.abs(diffX);
    const absDiffY = Math.abs(diffY);

    // Only change slides if the horizontal swipe is clearly dominant over vertical scrolling
    // and exceeds the minimum threshold of 50px
    if (absDiffX > absDiffY && absDiffX > 50) {
      if (diffX > 0) {
        // Swiped left -> next slide
        handleSlideChange(activeSlide + 1);
      } else {
        // Swiped right -> previous slide
        handleSlideChange(activeSlide - 1);
      }
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (activeSlide === 1) {
      video.play().catch(() => {});
      return;
    }
    video.pause();
  }, [activeSlide]);

  return (
    <section className="relative isolate overflow-hidden bg-[#ececec] text-[#3f3f3f]">
      <div className="absolute inset-0 bg-white/55" />
      <div className="relative">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out lg:h-[calc(100vh-296px)] lg:min-h-[520px]"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slide 1: Image Banner */}
            <article className="min-h-[520px] w-full shrink-0 flex justify-center items-center">
              <img
                alt="Hero background"
                className="absolute inset-0 h-full w-full object-cover opacity-85 -z-[1]"
                src={hero.slides[0].bg}
                fetchPriority="high"
                width={1920}
                height={1080}
              />
              <div className="flex w-full lg:w-[1200px] h-fit shrink-0 items-center lg:items-end gap-8 p-6 md:p-10 flex-col lg:flex-row">
                <div className="overflow-hidden max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-none w-full">
                  <img
                    alt="Vanscan product"
                    className="h-full w-full object-cover"
                    src={hero.slides[0].productImg}
                    width={500}
                    height={600}
                  />
                </div>
                <div className="max-w-full md:max-w-[460px] xl:max-w-[540px] text-center lg:text-left">
                  <img
                    alt="Vanguard Diagnostics"
                    className="mx-auto lg:ml-auto h-8 w-auto md:h-12"
                    src={hero.slides[0].vanguardLogo}
                    width={200}
                    height={48}
                  />
                  <img
                    alt="Launched Vanscan"
                    className="mt-6 h-auto w-[260px] max-w-full mx-auto lg:mx-0"
                    src={hero.slides[0].launchBadge}
                    width={260}
                    height={100}
                  />
                  <h2 className="mt-4 text-2xl font-bold leading-[1.02] text-[#3f434a] md:text-5xl">
                    {hero.slides[0].title}
                  </h2>
                  <p className="mt-3 text-2xl font-bold leading-[1.05] text-[#1a9cb0] md:text-[40px]">
                    {hero.slides[0].subtitle}
                  </p>
                  <p className="mt-5 text-xl leading-[1.25] text-[#4f565f] md:text-2xl">
                    {hero.slides[0].description}
                  </p>
                  <div className="mt-6">
                    <VanguardButton
                      href={hero.slides[0].cta?.href || "#"}
                      className="px-6 py-3"
                      aria-label={`Read more about our ${hero.slides[0].title}`}
                    >
                      {hero.slides[0].cta?.text}
                    </VanguardButton>
                  </div>
                </div>
              </div>
            </article>


            {/* Slide 2: Video Banner */}
            <article className="relative flex w-full shrink-0 overflow-hidden bg-white">
              <video
                className="w-full md:w-[1200px] mx-auto object-contain"
                poster={hero.slides[1].poster}
                preload="metadata"
                ref={videoRef}
                autoPlay
                muted
                playsInline
                width={1200}
                height={675}
              >
                <source
                  src={hero.slides[1].video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
                </video>
                </article>
          </div>
        </div>

        <div className="absolute inset-0 w-full pointer-events-none">
          <button
            aria-label="Previous slide"
            className="hidden md:block absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-sm bg-[#339cae]/70 text-xl text-white transition hover:bg-[#339cae] md:left-4 cursor-pointer pointer-events-auto"
            onClick={() => handleSlideChange(activeSlide - 1)}
            type="button"
          >
            <BiSolidLeftArrow className="mx-auto" />
          </button>
          <button
            aria-label="Next slide"
            className="hidden md:block absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-sm bg-[#339cae]/70 text-xl text-white transition hover:bg-[#339cae] md:right-4 cursor-pointer pointer-events-auto"
            onClick={() => handleSlideChange(activeSlide + 1)}
            type="button"
          >
            <BiSolidRightArrow className="mx-auto" />
          </button>
        </div>
      </div>
      <div className="h-[4px] w-full bg-primary" />
    </section>
  );
}
