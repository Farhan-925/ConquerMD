"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { megaMenuData, popularProducts } from "@/config/menuProducts";

export function NavLinks() {
  const [activeTab, setActiveTab] = useState(null); // 'men' | 'women' | null

  return (
    <nav
      className="hidden md:flex items-center gap-6 font-semibold text-xs tracking-wider h-full"
      onMouseLeave={() => setActiveTab(null)}
    >
      {/* MEN Trigger */}
      <div className="relative py-5">
        <Link
          href="/men-products"
          onMouseEnter={() => setActiveTab("men")}
          className={`hover:opacity-75 transition-opacity pb-1 text-lg font-semibold border-b-2 ${
            activeTab === "men" ? "border-black  text-black" : "border-transparent "
          }`}
        >
          MEN
        </Link>
      </div>

      {/* WOMEN Trigger */}
      <div className="relative py-5">
        <Link
          href="/women-products"
          onMouseEnter={() => setActiveTab("women")}
          className={`hover:opacity-75 transition-opacity pb-1 text-lg font-semibold border-b-2 ${
            activeTab === "women" ? "border-black text-black" : "border-transparent"
          }`}
        >
          WOMEN
        </Link>
      </div>

      {/* Full-Width Desktop Mega Menu Dropdown */}
      {activeTab && (
        <div
          onMouseEnter={() => setActiveTab(activeTab)}
          onMouseLeave={() => setActiveTab(null)}
          className="fixed left-0 right-0 top-[121px] z-50 w-full bg-[#F7F6F4] text-black shadow-xl border-t border-gray-200 transition-all duration-200"
        >
          <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-12 gap-8">
            {/* Column 1: Section Title & CTA Button */}
            <div className="col-span-3 flex flex-col justify-between items-start">
              <div>
                <h3 className="text-3xl font-extrabold tracking-tight text-black mb-6">
                  {megaMenuData[activeTab].title}
                </h3>
                <Link
                  href={megaMenuData[activeTab].allUrl}
                  className="inline-block bg-[#1E252B] text-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-black transition-colors"
                >
                  ALL {megaMenuData[activeTab].title.toUpperCase()}
                </Link>
              </div>
            </div>

            {/* Column 2: Categories List */}
            <div className="col-span-3 border-r border-gray-200/60 pr-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">
                Categories
              </p>
              <ul className="flex flex-col gap-3.5 text-sm font-medium text-gray-800">
                {megaMenuData[activeTab].categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      href={cat.href}
                      onClick={() => setActiveTab(null)}
                      className="hover:text-black hover:font-semibold transition-all"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 & 4: Best Sellers Showcase */}
            <div className="col-span-6 pl-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">
                Best Sellers
              </p>
              <div className="grid grid-cols-3 gap-4">
                {popularProducts[activeTab].slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveTab(null)}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-square w-full bg-[#EAEAEA] rounded-sm overflow-hidden mb-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-black leading-tight group-hover:underline">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}