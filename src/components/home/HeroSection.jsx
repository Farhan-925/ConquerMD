// src/components/home/HeroSection.jsx
"use client";

import { HeroVideo } from "./hero/HeroVideo";
import { HeroHeadline } from "./hero/HeroHeadline";
import { HeroActions } from "./hero/HeroActions";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <HeroVideo />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <HeroHeadline />
          <HeroActions />
        </div>
      </div>
    </section>
  );
}