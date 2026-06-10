import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ImageGalleryWithPopup({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="cursor-pointer group overflow-hidden border border-gray-300 bg-white relative rounded-sm shadow-sm hover:shadow-md transition-shadow"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-[4/3] w-full flex items-center justify-center p-4">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
               <span className="bg-black/75 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm flex items-center gap-2">
                 Enlarge Image
               </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm">
          <div className="relative w-full max-w-[90%] md:max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col h-fit">
            
            {/* Header / Close */}
            <div className="absolute top-4 right-4 z-[99]">
              <button 
                onClick={closeLightbox}
                className="bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Slider Content */}
            <div className="flex-1 w-full h-full p-4 md:p-8 flex items-center justify-center bg-white relative">
              <Swiper
                modules={[Navigation, Keyboard]}
                navigation={{
                  prevEl: ".lightbox-prev",
                  nextEl: ".lightbox-next",
                }}
                keyboard={{ enabled: true }}
                initialSlide={currentIndex}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                className="w-full h-full"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index} className="flex items-center justify-center p-4">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation Buttons */}
              <button className="lightbox-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[50] bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg border border-gray-100 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="lightbox-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[50] bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg border border-gray-100 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* Footer */}
            <div className="bg-[#4b4f58] text-white p-4 md:px-8 text-center flex justify-between items-center">
              <span className="font-medium">{images[currentIndex].title || images[currentIndex].alt}</span>
              <span className="opacity-80 text-sm">Item {currentIndex + 1} of {images.length}</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
