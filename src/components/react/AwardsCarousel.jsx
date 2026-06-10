import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const slides = [
  { img: "/images/homepage/awards-1.png", alt: "Best Woman Entrepreneur – Dun and Bradstreet Awards 2019" },
  { img: "/images/homepage/awards-2.png", alt: "Best Healthcare Manufacturing Company in the IVD sector – Medgate Today & Messe Dusseldorf 2017-18" },
  { img: "/images/homepage/awards-3.png", alt: "Most Trusted Brand – Healthcare India Brand & Leadership Conclave 2018" },
  { img: "/images/homepage/awards-4.png", alt: "CEO with HR Orientation – National Healthcare Leadership Congress & Awards 2019" },
  { img: "/images/homepage/awards-5.png", alt: "Most Inspirational Woman Business Leader – Healthcare India Brand & Leadership Conclave 2018" },
  { img: "/images/homepage/awards-6.png", alt: "100 Most Impactful Leaders in Healthcare – World Mental Health & Wellness Congress 2019 & 2020" },
  { img: "/images/homepage/awards-7.png", alt: "Top 100 Leaders in Asia & GCC in Healthcare – PricewaterhouseCoopers Survey 2018" },
];

export default function AwardsCarousel() {
  return (
    <section className="awards-section">
      <div className="flex flex-col gap-2 items-center">
        <img src="/images/homepage/awards-icon-2.png" alt="Award icon" />
        <h2 className="text-3xl font-medium">
          Awards and <span className="text-[#019cad]">Accreditations</span>
        </h2>
      </div>

      <div className="awards-wrapper">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation]}
          height="230px"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280:{
              slidesPerView: 3,
            }
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
              <a href={slide.img}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }} />
              </a>
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

        .awards-heading {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .awards-heading h2 span {
          color: #00b8a9;
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
          height: 180px !important;
          visibility: hidden;
          pointer-events: none;
        }

        @media (min-width: 640px) {
          .awards-swiper .swiper-slide {
            height: 200px !important;
          }
        }

        @media (min-width: 1024px) {
          .awards-swiper .swiper-slide {
            height: 230px !important;
          }
        }

        .awards-swiper .swiper-slide-prev,
        .awards-swiper .swiper-slide-active,
        .awards-swiper .swiper-slide-next {
          visibility: visible;
          pointer-events: auto;
        }

        .awards-swiper .swiper-slide a {
          display: block;
          text-decoration: none;
          height: 100%;
        }

        .awards-swiper .swiper-slide figure {
          margin: 0;
          padding: 0;
          line-height: 0;
        }

        .awards-swiper .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Navigation arrows */
        .awards-swiper .swiper-button-next,
        .awards-swiper .swiper-button-prev {
          color: #00b8a9;
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
