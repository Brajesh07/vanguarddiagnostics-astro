import { useEffect, useRef, useState } from "react";
import { homeContent } from "../../data/content";

const { hero } = homeContent;

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const totalSlides = hero.slides.length;

  const handleSlideChange = (nextIndex: number) => {
    const normalized = (nextIndex + totalSlides) % totalSlides;
    setActiveSlide(normalized);
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
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {/* Slide 1: Image Banner */}
            <article className="min-h-[520px] w-full shrink-0 flex justify-center items-center">
              <img
                alt="Hero background"
                className="absolute inset-0 h-full w-full object-cover opacity-85 -z-[1]"
                src={hero.slides[0].bg}
              />
              <div className="flex w-full lg:w-[1200px] h-fit shrink-0 items-center lg:items-end gap-8 p-6 md:p-10 flex-col lg:flex-row">
                <div className="overflow-hidden">
                  <img
                    alt="Vanscan product"
                    className="h-full w-full object-cover"
                    src={hero.slides[0].productImg}
                  />
                </div>
                <div className="max-w-full md:max-w-[460px] xl:max-w-[540px]">
                  <img
                    alt="Vanguard Diagnostics"
                    className="ml-auto h-8 w-auto md:h-12"
                    src={hero.slides[0].vanguardLogo}
                  />
                  <img
                    alt="Launched Vanscan"
                    className="mt-6 h-auto w-[260px] max-w-full"
                    src={hero.slides[0].launchBadge}
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
                    <a
                      href={hero.slides[0].cta?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-[#017d8c]"
                    >
                      {hero.slides[0].cta?.text}
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Slide 2: Video Banner */}
            <article className="relative w-full shrink-0 overflow-hidden bg-white">
              <video
                className="h-[calc(100vh-96px)] min-h-[520px] w-full md:w-[1200px] mx-auto object-contain"
                poster={hero.slides[1].poster}
                preload="metadata"
                ref={videoRef}
                autoPlay
                muted
                playsInline
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

        <div className="absolute inset-0 w-full xl:w-[1200px] mx-auto">
          <button
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-sm bg-[#8a8f95] text-xl text-white transition hover:bg-[#6f757d] md:left-4"
            onClick={() => handleSlideChange(activeSlide - 1)}
            type="button"
          >
            &lt;
          </button>
          <button
            aria-label="Next slide"
            className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-sm bg-[#8a8f95] text-xl text-white transition hover:bg-[#6f757d] md:right-4"
            onClick={() => handleSlideChange(activeSlide + 1)}
            type="button"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="h-[4px] w-full bg-primary" />
    </section>
  );
}
