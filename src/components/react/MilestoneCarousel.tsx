import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Milestone {
  date: string;
  title: string; // milestone event name — rendered as visible HTML text
  image: string;
}

interface MilestoneCarouselProps {
  milestones: Milestone[];
}

export default function MilestoneCarousel({
  milestones,
}: MilestoneCarouselProps) {
  return (
    <div className="pb-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="milestone-swiper"
      >
        {milestones.map((milestone, index) => (
          <SwiperSlide key={index}>
            {/* Award / milestone image */}
            <img
              alt={`${milestone.date} – ${milestone.title}`}
              className="w-full h-auto object-cover"
              src={milestone.image}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .milestone-swiper {
          padding-bottom: 50px !important;
        }

        .milestone-swiper .swiper-pagination-bullet-active {
          background: var(--primary);
        }

        .milestone-caption {
          padding: 0.5rem 0.5rem 0;
          text-align: center;
        }

        .milestone-date {
          font-size: 0.7rem;
          font-weight: 700;
          color: #019cad;
          margin: 0 0 0.1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .milestone-title {
          font-size: 0.72rem;
          color: #444;
          line-height: 1.35;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
