// src/components/home/precision-metrices/Text.jsx
export default function Text() {
  return (
    <div className="mb-6 md:mb-10 px-4 flex justify-center">
      {/* Centered Heading Block */}
      <div className="flex flex-col items-center justify-center text-center max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#BBBBBB]">
          Precision Medicine
        </span>
        <h2 className="mt-3 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-relaxed">
          Designed to help you perform better,<br className="hidden sm:inline" /> recover faster, and live longer.
        </h2>
      </div>
    </div>
  );
}