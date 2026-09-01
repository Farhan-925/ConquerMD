// src/components/home/carousel/CarouselControls.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselControls({ onScrollLeft, onScrollRight }) {
  return (
    <>
      {/* Left Navigation Arrow */}
      <button
        onClick={onScrollLeft}
        type="button"
        aria-label="Previous Slide"
        className="hidden lg:flex absolute left-2 xl:-left-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white text-black items-center justify-center shadow-xl hover:bg-neutral-200 transition-transform active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={onScrollRight}
        type="button"
        aria-label="Next Slide"
        className="hidden lg:flex absolute right-2 xl:-right-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white text-black items-center justify-center shadow-xl hover:bg-neutral-200 transition-transform active:scale-95 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>
    </>
  );
}