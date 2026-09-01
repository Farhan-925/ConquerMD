"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="flex items-center justify-between bg-[#333333] text-white md:text-sm px-4 py-2"
    >
      {/* Centered Promo Text */}
      <div className="flex-1 text-center font-semibold">
        <p className="inline-flex flex-wrap items-center justify-center gap-1.5">
          <span className="">Your Health Journey Starts Here.</span>
          <span>New Customers Get 65% Off Diagnostic Labs</span>
        </p>
      </div>

      {/* Close Button with Lucide Icon */}
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Close announcement"
        className="ml-2 border border-1 border-white md:border-0 cursor-pointer rounded-md p-1 text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
