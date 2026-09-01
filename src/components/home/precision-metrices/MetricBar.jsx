// src/components/home/precision-metrices/MetricBar.jsx
"use client";

import { useState, useEffect } from "react";
import { Stethoscope, ShieldCheck } from "lucide-react";

function useCountUp(target, duration = 800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return count;
}

export function MetricBar() {
  const count50 = useCountUp(50, 800);
  const count48 = useCountUp(48, 800);

  const metricsData = [
    { id: "states", type: "number", value: count50, label: "STATES" },
    { id: "labs", type: "number", value: count48, unit: "HR", label: "LAB RESULTS" },
    { id: "physicians", type: "icon", icon: Stethoscope, label: "BOARD CERTIFIED PHYSICIANS" },
    { id: "hipaa", type: "icon", icon: ShieldCheck, label: "HIPAA PROTECTED" },
  ];

  return (
    <section className="w-[100%] pt-8 pb-12 overflow-hidden border-t border-white/10">
      {/* Responsive 2-column mobile grid, 4-column desktop grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-0 justify-items-center items-center">
        {metricsData.map((item, idx) => (
          <div
            key={item.id}
            className="group relative w-full flex flex-col items-center justify-center p-4 md:p-6 cursor-pointer select-none"
          >
            {/* Shortened Vertical Divider (Desktop Only) */}
            {idx < metricsData.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-white/10" />
            )}

            {/* Interactive Vertical Lift Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
              {/* Metric Icon/Number Display */}
              <div className="h-14 flex items-center justify-center">
                {item.type === "number" ? (
                  <div className="flex items-baseline text-4xl sm:text-5xl font-light tracking-tight text-white">
                    <span>{item.value}</span>
                    {item.unit && (
                      <span className="text-xs sm:text-sm font-semibold ml-1 text-gray-300 uppercase">
                        {item.unit}
                      </span>
                    )}
                  </div>
                ) : (
                  <item.icon className="w-9 h-9 text-white stroke-[1.25]" />
                )}
              </div>

              {/* Sub-label */}
              <span className="mt-3 text-[10px] sm:text-[11px] font-bold text-neutral-400 group-hover:text-white transition-colors duration-200 text-center uppercase">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}