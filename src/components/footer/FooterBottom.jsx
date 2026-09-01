import React from "react";
import Link from "next/link";
import { legalLinks, socialIcons } from "@/config/footerData";


export default function FooterBottom() {
  return (
    <div className="flex flex-col gap-6">
      {/* Row 1: Copyright & Socials */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
          © 2026 CONQUER CLINIC. ALL RIGHTS RESERVED.
        </p>

        <div className="flex items-center gap-3">
          {socialIcons.map(({ Icon, href, label }, sIdx) => (
            <a
              key={sIdx}
              href={href}
              aria-label={label}
              className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Row 2: Legal Links */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] text-neutral-500 font-medium">
        {legalLinks.map((link, idx) => (
          <Link key={idx} href={link.href} className="hover:text-neutral-400 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Row 3: Disclaimer */}
      <p className="text-[10px] text-neutral-600 leading-relaxed max-w-5xl mt-2">
        Medical Disclaimer: Content is for informational purposes only and does not constitute medical advice. Services are provided by licensed medical professionals. Prescription products require a valid prescription from a licensed clinician.
      </p>
    </div>
  );
}