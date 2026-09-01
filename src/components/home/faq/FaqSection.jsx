// components/FaqSection.jsx
"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/config/faq";

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    // Changed items-center to items-start so content aligns to the top
    <section className="bg-[#e9e7e4] h-[40vh] min-h-[360px] pt-6 px-6 sm:px-12 md:px-20 text-[#121212] overflow-hidden flex items-start">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-start h-full">
        
        {/* Left Header Area (Aligned to Top) */}
        <div className="md:col-span-5 flex flex-col justify-start">
          <span className="inline-block bg-[#e5ded4] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm mb-2 w-fit">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold md:text-5xl font-black uppercase tracking-tight leading-none text-black">
            HAVE <br /> QUESTIONS?
          </h2>
          <p className="text-xl sm:text-2xl md:text-5xl font-light italic text-neutral-500 mt-1 tracking-tight">
            WE'RE HERE TO HELP.
          </p>
        </div>

        {/* Right Accordion List (Scrollable within 40vh container) */}
        <div className="md:col-span-7 h-full overflow-y-auto pr-2 divide-y divide-black/10">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-3 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                >
                  <span className="font-semibold text-xs sm:text-sm text-black group-hover:text-neutral-700 transition-colors">
                    {item.question}
                  </span>

                  <div className="w-6 h-6 rounded-full bg-neutral-200/60 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-neutral-300">
                    {isOpen ? (
                      <Minus className="w-3 h-3 text-black" />
                    ) : (
                      <Plus className="w-3 h-3 text-black" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <p className="text-xs text-neutral-600 leading-relaxed mt-1.5 pr-6 animate-in fade-in slide-in-from-top-1 duration-200">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}