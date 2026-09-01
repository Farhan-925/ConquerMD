// components/TrustedMembers.jsx
"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/config/testimonials";


export default function TrustedMembers() {
  // Configured for smooth infinite loop auto-scrolling
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 1, // Scroll speed
        stopOnInteraction: false, // Keeps running after touch
        stopOnMouseEnter: true, // Pauses when hovering over cards
      }),
    ]
  );

  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className=" font-black uppercase tracking-tight">
          <span className="text-3xl sm:text-3xl md:text-4xl font-bold text-white">TRUSTED BY</span><br></br>{" "}
          <span className="text-2xl sm:text-2xl md:text-3xl text-neutral-400  font-semibold">MEMBERS</span>
        </h2>

        {/* Rating Stars & Stats */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm">
          <div className="flex text-white gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
            ))}
          </div>
          <span className="text-neutral-300 text-[12px] text-gray-700 ml-1">
            4.9 average across{" "} 2,400+ reviews
          </span>
        </div>
      </div>

      {/* Auto Scrolling Marquee Track */}
      <div className="w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 pl-4">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_25%] min-w-0"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="bg-[#121212] border border-neutral-800 rounded-[20px] p-8 flex flex-col justify-between h-[280px] sm:h-[300px] transition-colors hover:border-neutral-700">
      {/* Quote Icon */}
      <div>
        <Quote className="w-6 h-6 text-neutral-400 mb-6 rotate-180" />
        <p className="text-base sm:text-lg text-neutral-100 font-semibold leading-snug">
          "{item.quote}"
        </p>
      </div>

      {/* Author Details */}
      <div className="mt-6 pt-4">
        <h4 className="font-bold text-sm text-white">{item.author}</h4>
        <p className="text-[10px] font-semibold tracking-widest text-neutral-500 uppercase mt-0.5">
          MEMBER SINCE {item.memberSince}
        </p>
      </div>
    </div>
  );
}