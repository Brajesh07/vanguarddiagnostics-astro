import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Milestone {
  date: string;
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
            <img
              alt={milestone.date}
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
      `}</style>
    </div>
  );
}
