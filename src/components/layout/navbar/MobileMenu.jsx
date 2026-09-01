"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Search, ShoppingBag, X, ChevronDown, ChevronUp } from "lucide-react";
import { popularProducts } from "@/config/menuProducts";

export function MobileMenu({ isOpen, onClose }) {
  const [womenOpen, setWomenOpen] = useState(false);
  const [menOpen, setMenOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white text-black overflow-y-auto">
      {/* Top Header Row with Icons */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <Link href="/" onClick={onClose}>
          <Image
            src="https://conquermd.com/images/home/logo.svg"
            alt="Conquer MD Logo"
            width={160}
            height={30}
            priority
            className="h-7 w-auto invert brightness-0"
          />
        </Link>

        {/* Right Action Icons */}
        <div className="flex items-center gap-5 text-black">
          <button aria-label="Search" className="cursor-pointer">
            <Search className="h-6 w-6" />
          </button>
          <button aria-label="Shopping Cart" className="cursor-pointer">
            <ShoppingBag className="h-6 w-6" />
          </button>
          <button onClick={onClose} aria-label="Close menu" className="cursor-pointer">
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Main Drawer Content */}
      <div className="px-6 py-6 flex flex-col gap-4">
        {/* Rounded Action CTA Buttons */}
        <Link
          href="/doctor-login"
          onClick={onClose}
          className="w-full rounded-full border border-black py-3.5 text-center font-bold text-xs tracking-widest uppercase text-black hover:bg-black hover:text-white transition-colors"
        >
          LOGIN
        </Link>

        <Link
          href="/schedule-consult"
          onClick={onClose}
          className="w-full rounded-full bg-[#EAE4DC] py-3.5 text-center font-bold text-xs tracking-widest uppercase text-black hover:bg-[#ded6cb] transition-colors"
        >
          SCHEDULE A CONSULT
        </Link>

        {/* Navigation Accordions */}
        <div className="mt-2 border-t border-gray-200">
          {/* WOMEN Category Accordion */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setWomenOpen(!womenOpen)}
              className="flex w-full items-center justify-between py-5 font-bold text-xl tracking-wider uppercase text-black"
            >
              <span>WOMEN</span>
              {womenOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {womenOpen && (
              <div className="pb-4 pl-2 flex flex-col gap-3 text-sm text-gray-700">
                <Link href="/sermorelin" onClick={onClose}>Peptide Therapy</Link>
                <Link href="/weight-loss" onClick={onClose}>Weight Loss</Link>
                <Link href="/hormone-health" onClick={onClose}>Hormone Health</Link>
                <Link href="/skin-care" onClick={onClose}>Hair & Skin</Link>
              </div>
            )}
          </div>

          {/* MEN Category Accordion */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setMenOpen(!menOpen)}
              className="flex w-full items-center justify-between py-5 font-bold text-xl tracking-wider uppercase text-black"
            >
              <span>MEN</span>
              {menOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {menOpen && (
              <div className="pb-4 pl-2 flex flex-col gap-3 text-sm text-gray-700">
                <Link href="/men/testosterone-replacement" onClick={onClose}>Testosterone (TRT)</Link>
                <Link href="/weight-loss" onClick={onClose}>Weight Loss</Link>
                <Link href="/longevity" onClick={onClose}>Longevity & Performance</Link>
                <Link href="/sexual-health" onClick={onClose}>Sexual Health</Link>
              </div>
            )}
          </div>
        </div>

        {/* Global Popular Items Section (Positioned Below Accordions) */}
        <div className="mt-4 pb-6">
          <p className="text-xs font-semibold text-gray-500 mb-4 tracking-wider">
            Popular Items
          </p>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x">
            {popularProducts.men.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                onClick={onClose}
                className="min-w-[200px] max-w-[200px] shrink-0 snap-start group"
              >
                <div className="relative aspect-square w-full bg-[#EAEAEA] rounded-md overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-bold text-sm text-black leading-snug">
                  {product.title}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}