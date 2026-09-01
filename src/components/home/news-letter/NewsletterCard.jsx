// components/NewsletterCard.jsx
"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed:", email);
    setEmail("");
  };

  const phrases = [
    "Conquer More",
    "Feel Better",
    "Live Stronger",
    "Conquer More",
    "Feel Better",
    "Live Stronger",
  ];

  return (
    <section className="bg-[#dedede] py-8 px-4 flex justify-center items-center">
      {/* Container configured for 80% width and 25vh height */}
      <div className="bg-[#f2f2f0] rounded-[24px] px-8 py-6 w-[80%] max-w-5xl h-[25vh] md:h-[30vh]  flex flex-col justify-between overflow-hidden shadow-xs">
        
        {/* --- INFINITE AUTO-SCROLLING MARQUEE TEXT --- */}
        <div className="overflow-hidden whitespace-nowrap text-neutral-400 font-serif italic text-2xl sm:text-3xl md:text-4xl">
          <div className="animate-marquee flex gap-4">
            {/* First track */}
            {phrases.map((phrase, idx) => (
              <span key={`a-${idx}`} className="flex items-center gap-4 shrink-0">
                <span>·</span>
                <span>{phrase}</span>
              </span>
            ))}
            {/* Duplicate track for seamless infinite looping */}
            {phrases.map((phrase, idx) => (
              <span key={`b-${idx}`} className="flex items-center gap-4 shrink-0">
                <span>·</span>
                <span>{phrase}</span>
              </span>
            ))}
          </div>
        </div>

        {/* --- EMAIL INPUT FORM --- */}
        <form onSubmit={handleSubmit} className="relative w-full mb-2">
          <div className="relative border-b border-black/30 pb-2 flex items-center justify-between group focus-within:border-black transition-colors">
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent font-serif italic text-xl sm:text-4xl text-black placeholder:text-neutral-500 focus:outline-none pr-10"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-0 text-black/70 hover:text-black transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}