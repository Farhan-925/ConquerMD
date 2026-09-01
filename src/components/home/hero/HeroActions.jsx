// src/components/home/hero/HeroActions.jsx
"use client";

import Link from "next/link";
import { Play } from "lucide-react";

export function HeroActions() {
  return (
    <div className="mt-6 mb-6 flex items-center gap-4">
      <Link
        href="/men-products"
        className="rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black shadow-lg hover:bg-neutral-200 transition-all"
      >
        Explore
      </Link>

      <button
        onClick={() => {}}
        className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-black shadow-lg hover:bg-neutral-200 transition-all cursor-pointer"
      >
        <span>Watch</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-white">
          <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
        </span>
      </button>
    </div>
  );
}