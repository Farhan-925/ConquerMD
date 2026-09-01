import React from "react";
import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-neutral-900">
      <div className="w-[80%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-4">
          <FooterBrand />
          <FooterNav />
        </div>

        <div className="border-t border-neutral-800 my-8" />

        <FooterBottom />
      </div>
    </footer>
  );
}