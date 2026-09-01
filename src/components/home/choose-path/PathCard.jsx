// src/components/home/choose-path/PathCard.jsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PathCard({
  subtitle,
  title,
  titleStyle,
  description,
  href,
  imageSrc,
  hoverImageSrc, // 👈 New prop for hover image
  reverse = false,
  bgColor = "bg-[#EAE6E1]",
}) {
  return (
    <div className="relative w-full h-[550px] md:h-[650px] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 group">
      
      {/* 1. MEDIA PANEL (Set to white background) */}
      <div
        className={`relative w-full h-full bg-black overflow-hidden ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* Secondary Image (Revealed on Hover) */}
        {hoverImageSrc && (
          <Image
            src={hoverImageSrc}
            alt={`${title} hover`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center z-0 p-4 transition-transform duration-500 group-hover:scale-105"
            priority
          />
        )}

        {/* Primary Image (Fades out on Hover) */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover object-center z-10 transition-all duration-500 ${
            hoverImageSrc ? "group-hover:opacity-0 group-hover:scale-105" : "group-hover:scale-105"
          }`}
          priority
        />
      </div>

      {/* 2. CONTENT PANEL */}
      <div
        className={`
          absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/50 to-transparent text-white p-8 
          md:static md:z-auto md:bg-none ${bgColor} md:text-black md:p-14 
          flex flex-col justify-end md:justify-center items-start w-full h-full
          ${reverse ? "md:order-1" : "md:order-2"}
        `}
      >
        <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-300 md:text-neutral-500 uppercase">
          {subtitle}
        </span>

        <h3 className={`mt-2 text-4xl md:text-5xl ${titleStyle}`}>
          {title}
        </h3>

        <div className="w-10 h-[2px] bg-white md:bg-black/80 my-4" />

        <p className="text-xs md:text-sm text-neutral-200 md:text-neutral-600 font-medium leading-relaxed max-w-sm">
          {description}
        </p>

        <Link
          href={href}
          className="mt-6 md:mt-8 group/link inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-white md:text-black hover:opacity-75 transition-opacity"
        >
          <span>Learn More</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>

    </div>
  );
}