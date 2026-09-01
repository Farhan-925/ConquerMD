import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="lg:col-span-4 flex flex-col justify-between">
      <div>
        <div className="mb-6">
          <Link href="/">
            <Image
              src="https://conquermd.com/images/home/logo.svg"
              alt="Conquer MD Logo"
              width={180}
              height={40}
              className="object-contain h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <p className="text-neutral-400 text-sm max-w-sm leading-relaxed mb-6 font-normal">
          Health is power. Physician-guided optimization, delivered.
        </p>

        <div className="flex items-center gap-6 text-xs font-semibold mb-8">
          <Link href="/about" className="hover:text-neutral-300 transition-colors">
            About Us
          </Link>
          <Link href="/consult" className="hover:text-neutral-300 transition-colors">
            Schedule a Consult
          </Link>
        </div>
      </div>

      <div>
        <Link
          href="/start"
          className="inline-flex items-center justify-between gap-4 bg-white text-black px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
        >
          <span>START TODAY</span>
          <div className="w-6 h-6 rounded-full bg-[#e8a355] flex items-center justify-center text-black">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>
    </div>
  );
}