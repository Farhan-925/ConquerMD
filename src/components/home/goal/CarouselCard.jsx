import Image from "next/image";

export function CarouselCard({ imageSrc, title }) {
  return (
    <div className="relative min-w-[75vw] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] h-[380px] sm:h-[420px] lg:h-[460px] rounded-none overflow-hidden group shrink-0 select-none cursor-pointer">
      {/* Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-135"
      />

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      {/* Title Label */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
}