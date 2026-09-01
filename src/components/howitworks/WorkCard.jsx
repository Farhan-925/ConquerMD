// src/components/home/steps/HowItWorks.jsx
import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="pb-14 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="mx-auto">
        
        {/* 3 CARDS GRID */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          
          {/* CARD 1 */}
          <div className="relative h-[420px] md:h-[350px] lg:h-[470px] border border-16 border-black rounded-3xl overflow-hidden group shadow-md cursor-pointer bg-black">
            <video
              src="https://conquermd.com/images/home-v2/steps/IMG_7472.MP4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-125"
            />
          </div>

          {/* CARD 2 */}
          <div className="relative h-[420px] md:h-[350px] lg:h-[470px] border border-16 border-black rounded-3xl overflow-hidden group shadow-md cursor-pointer bg-black">
            <video
              src="https://conquermd.com/images/home-v2/steps/IMG_7511.MP4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-125"
            />
          </div>

          {/* CARD 3 */}
          <div className="relative h-[420px] md:h-[350px] lg:h-[470px] border border-16 border-black rounded-3xl overflow-hidden group shadow-md cursor-pointer bg-black">
            <Image
              src="https://conquermd.com/images/home-v2/steps/Gemini_Generated_Image_2wrswb2wrswb2wrs.png"
              alt="Step 3"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-125"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;