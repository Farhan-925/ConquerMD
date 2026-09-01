// src/components/home/ChoosePath.jsx
import { PathCard } from "./choose-path/PathCard";
import SectionHeader from "./choose-path/SectionHeader";

export function ChoosePath() {
  return (
    <section className=" bg-[#ffffff] py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-8xl mx-auto flex flex-col gap-10">
        
        {/* SECTION HEADER */}
        <SectionHeader />

        {/* FOR HIM CARD */}
        <PathCard
          subtitle="Designed For"
          title="HIM"
          titleStyle="font-bold uppercase tracking-tight border-b-2 border-white md:border-black inline-block pb-1"
          description="Optimize your hormones, health, and performance."
          href="/men-products"
          imageSrc="/images/ChoosePath/sec2 (1).png"
          hoverImageSrc="/images/ChoosePath/for her.png"
          reverse={false}
          bgColor="md:bg-[#EAE6E1]"
        />

        {/* FOR HER CARD */}
        <PathCard
          subtitle="Designed For"
          title="Her"
          titleStyle="font-serif italic font-medium tracking-normal border-b-2 border-white md:border-black inline-block pb-1"
          description="Balance, vitality, and confidence from within."
          href="/women-products"
          imageSrc="/images/ChoosePath/sec2 (2).png"
          hoverImageSrc="/images/ChoosePath/for her.png"
          reverse={true}
          bgColor="md:bg-[#EAE6E1]"
        />

      </div>
    </section>
  );
}

export default ChoosePath;