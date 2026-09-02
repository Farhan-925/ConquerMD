// components/ProductSection.jsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSection({ collection }) {
  const { badge, heading, shopAllUrl, theme, products } = collection;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className={`${theme.sectionBg} py-12 px-4 sm:px-8 md:px-12 transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <span
              className={`inline-block ${theme.badgeBg} ${theme.badgeText} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 shadow-sm`}
            >
              {badge}
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight ${theme.headingColor}`}
            >
              {heading}
            </h2>
          </div>

          <Link
            href={shopAllUrl}
            className={`hidden md:inline-flex items-center gap-2 ${theme.buttonBg} ${theme.buttonText} px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90`}
          >
            Shop All <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* --- DESKTOP & TABLET GRID --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} theme={theme} />
          ))}
        </div>

        {/* --- MOBILE CAROUSEL VIEW --- */}
        <div className="block md:hidden">
          <div className="relative mb-6">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {products.map((product) => (
                  <div key={product.id} className="flex-[0_0_100%] min-w-0 px-1">
                    <ProductCard product={product} theme={theme} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              aria-label="Previous product"
              className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 ${theme.buttonBg} ${theme.buttonText} rounded-full flex items-center justify-center shadow-md z-10`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next product"
              className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 ${theme.buttonBg} ${theme.buttonText} rounded-full flex items-center justify-center shadow-md z-10`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-1 bg-neutral-700/50 rounded-full overflow-hidden">
              <div
                className={`h-full ${theme.buttonBg} transition-all duration-300 ease-out`}
                style={{
                  width: `${100 / products.length}%`,
                  transform: `translateX(${selectedIndex * 100}%)`,
                }}
              />
            </div>
          </div>

          {/* Mobile Shop All Button */}
          <div className="flex justify-center">
            <Link
              href={shopAllUrl}
              className={`inline-flex items-center justify-center gap-2 ${theme.buttonBg} ${theme.buttonText} px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider transition-opacity hover:opacity-90 w-full max-w-xs`}
            >
              SHOP ALL <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, theme }) {
  return (
    <div className="rounded-[24px] overflow-hidden flex flex-col h-full shadow-sm">
      {/* TOP SECTION: Height set to h-[320px] sm:h-[360px] */}
      <div className={`${theme.cardBgTop} p-5 relative flex flex-col justify-between h-[200px] sm:h-[230px]`}>
        
        {/* Badges Bar */}
        <div className="flex items-center justify-between z-10 w-full">
          {product.badge ? (
            <span className="text-[11px] font-semibold tracking-wider text-neutral-600 bg-neutral-200/80 px-3 py-1 rounded-full uppercase">
              {product.badge}
            </span>
          ) : (
            <div />
          )}

          {product.priceTag && (
            <span className="text-[10px] font-bold text-white bg-black px-3 py-1.5 rounded-full uppercase tracking-wider">
              {product.priceTag}
            </span>
          )}
        </div>

        {/* Product Bottle Image Wrapper */}
        <div className="relative w-full h-[220px] sm:h-[260px] my-auto">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-2 hover:scale-125 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* BOTTOM SECTION: Card Info */}
      <div className={`${theme.cardBgBottom} p-6 flex items-end justify-between gap-4 flex-1`}>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg sm:text-xl text-black leading-snug">
            {product.title}
          </h3>
          <p className="text-sm text-neutral-600 mt-1.5 font-normal leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <Link
          href={product.link}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 hover:bg-neutral-800 transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}