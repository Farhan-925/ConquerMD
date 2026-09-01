// components/MedicalAdvisors.jsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { medicalAdvisors } from "@/config/advisors";


export default function MedicalAdvisors() {
  const scrollContainerRef = useRef(null);

  // Convert vertical mouse wheel scrolling into horizontal scrolling
  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      if (e.deltaY !== 0) {
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <section className="bg-[#efe8df] py-16 text-[#121212] overflow-hidden">
      {/* Centered Header */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
          <span className="font-extrabold text-black">OUR</span> MEDICAL ADVISORS
        </h2>
        <p className="text-neutral-600 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Board-certified physicians and researchers who obsess over the outcomes traditional medicine ignores.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/providers"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-7 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
          >
            SEE ALL PROVIDERS <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Non-Click Scroll Container */}
      <div
        ref={scrollContainerRef}
        onWheel={handleWheel}
        className="w-full overflow-x-auto scrollbar-hide scroll-smooth pl-4 sm:pl-8 md:pl-16 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-5 pr-8 sm:pr-16 w-max">
          {medicalAdvisors.map((doctor) => (
            <div
              key={doctor.id}
              className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0"
            >
              <AdvisorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvisorCard({ doctor }) {
  return (
    <div className="bg-[#fcfbfa] rounded-[24px] overflow-hidden flex flex-col h-full border border-black/5 shadow-xs">
      {/* Doctor Image */}
      <div className="relative w-full h-[260px] sm:h-[370px] bg-neutral-200">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top select-none pointer-events-none"
        />
      </div>

      {/* Doctor Details */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-lg sm:text-xl text-black">
            {doctor.name}
          </h3>
          <p className="text-xs font-medium text-neutral-500 mt-1">
            {doctor.role}
          </p>
        </div>

        <div className="mt-6 flex items-start gap-2">
          <span className="text-neutral-300 font-serif text-2xl leading-none select-none">
            “
          </span>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            "{doctor.quote}"
          </p>
        </div>
      </div>
    </div>
  );
}