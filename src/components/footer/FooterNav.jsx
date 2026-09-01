import React from "react";
import Link from "next/link";
import { footerLinks } from "@/config/footerData";

export default function FooterNav() {
  return (
    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {footerLinks.map((col, idx) => (
        <div key={idx} className="flex flex-col gap-3">
          <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
            {col.title}
          </h4>
          {col.links.map((link, lIdx) => (
            <Link
              key={lIdx}
              href={link.href}
              className="text-xs text-neutral-300 hover:text-white transition-colors leading-snug"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}