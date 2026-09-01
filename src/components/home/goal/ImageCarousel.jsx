"use client";
import Image from "next/image";
import { useRef } from "react";
import { CarouselControls } from "./CarouselControls";
import { CarouselCard } from "./CarouselCard";

// 👈 ADD THIS ARRAY DEFINITION HERE
const slidesData = [
  { id: 1, title: "Peptide Therapy", imageSrc: "/images/Goal/Peptide Therapy.png" },
  { id: 2, title: "Longevity & Performance", imageSrc: "/images/Goal/Longevity & Performance.png" },
  { id: 3, title: "Menopause", imageSrc: "/images/Goal/HRT.png" },
  { id: 4, title: "Weight Loss", imageSrc: "/images/Goal/Weightloss.png" },
  { id: 5, title: "Hormone Optimization", imageSrc: "/images/Goal/SEXUAL HEALTH.png" },
  { id: 6, title: "Precision Recovery", imageSrc: "/images/Goal/HAIR & SKIN (1).png" },
];

export function ImageCarousel() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 300;
      const scrollAmount = direction === "left" ? -(cardWidth + 24) : (cardWidth + 24);
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className=" py-12 px-4 sm:px-6 md:px-12">
      <div className=" mx-auto">
        
        {/* Arrow Navigation */}
        <CarouselControls
          onScrollLeft={() => scroll("left")}
          onScrollRight={() => scroll("right")}
        />

        {/* Carousel Tracks */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto scroll-smooth py-2 no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {slidesData.map((slide) => (
            <CarouselCard
              key={slide.id}
              title={slide.title}
              imageSrc={slide.imageSrc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ImageCarousel;