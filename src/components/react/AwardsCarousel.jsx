import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { images } from "../../data/images";

const slides = images.awards.map((img, i) => ({
  img,
  name: ["Best Woman Entrepreneur", "Best Healthcare Manufacturing Company in the IVD Sector", "Most Trusted Brand", "CEO with HR Orientation", "Most Inspirational Woman Business Leader", "100 Most Impactful Leaders in Healthcare", "Top 100 Leaders in Asia & GCC in Healthcare"][i],
  body: ["Dun and Bradstreet Awards", "Medgate Today & Messe Düsseldorf", "Healthcare India Brand & Leadership Conclave", "National Healthcare Leadership Congress & Awards", "Healthcare India Brand & Leadership Conclave", "World Mental Health & Wellness Congress", "PricewaterhouseCoopers Survey"][i],
  year: ["2019", "2017–18", "2018", "2019", "2018", "2019 & 2020", "2018"][i],
}));

export default function AwardsCarousel() {
  return (
    <section className="awards-section">
      <div className="flex flex-col gap-2 items-center">
        <img src={images.awardsIcon} alt="Award icon" />
        <h2 className="text-3xl font-medium">
          Awards and <span className="text-[#019cad]">Accreditations</span>
        </h2>
      </div>

      <div className="awards-wrapper">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="awards-swiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <img
                src={slide.img}
                alt={`${slide.name} – ${slide.body} ${slide.year}`}
                className="award-img"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .awards-section {
          background: #fff;
          padding: 3rem 0 4rem;
          overflow: hidden;
        }

        .awards-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .awards-swiper {
          padding: 2rem 0 3rem !important;
          width: 100% !important;
          margin: 0 auto !important;
        }

        .awards-swiper .swiper-slide {
          background: transparent;
          height: auto !important;
          visibility: hidden;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .awards-swiper .swiper-slide-prev,
        .awards-swiper .swiper-slide-active,
        .awards-swiper .swiper-slide-next {
          visibility: visible;
          pointer-events: auto;
        }

        .award-img {
          width: 100%;
          height: 180px;
          object-fit: contain;
          display: block;
        }

        @media (min-width: 640px) {
          .award-img { height: 200px; }
        }

        @media (min-width: 1024px) {
          .award-img { height: 230px; }
        }

        .award-caption {
          padding: 0.5rem 0.75rem 0;
          text-align: center;
        }

        .award-name {
          font-size: 0.75rem;
          font-weight: 600;
          color: #222;
          line-height: 1.3;
          margin: 0 0 0.15rem;
        }

        .award-meta {
          font-size: 0.7rem;
          color: #019cad;
          margin: 0;
        }

        /* Navigation arrows */
        .awards-swiper .swiper-button-next,
        .awards-swiper .swiper-button-prev {
          color: #019cad;
          transition: all 0.3s ease;
        }

        .awards-swiper .swiper-button-next::after,
        .awards-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: 700;
        }

        /* Coverflow shadows */
        .awards-swiper .swiper-slide-shadow-left,
        .awards-swiper .swiper-slide-shadow-right {
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
