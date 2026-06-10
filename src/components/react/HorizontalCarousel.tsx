import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type HorizontalCarouselProps = {
  title: string;
  items: string[];
  itemHeight?: string;
};

export default function HorizontalCarousel({
  title,
  items,
  itemHeight = "h-60 md:h-72",
}: HorizontalCarouselProps) {
  return (
    <section className="py-10 md:py-14">
      <div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView="auto"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          className="w-full horizontal-carousel-swiper"
        >
          {items.map((src) => (
            <SwiperSlide key={src} style={{ width: "auto" }}>
              <article className="w-[280px] overflow-hidden rounded border border-border bg-white md:w-[360px]">
                <img
                  alt={title}
                  className={`w-full object-cover ${itemHeight}`}
                  loading="lazy"
                  src={src}
                />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .horizontal-carousel-swiper {
            padding-bottom: 48px !important;
          }

          .horizontal-carousel-swiper .swiper-pagination {
            bottom: 0;
          }

          .horizontal-carousel-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #d1d5db;
            opacity: 1;
            transition: background 0.3s ease, transform 0.3s ease;
          }

          .horizontal-carousel-swiper .swiper-pagination-bullet-active {
            background: #019cad;
            transform: scale(1.3);
          }
        `}</style>
      </div>
    </section>
  );
}
