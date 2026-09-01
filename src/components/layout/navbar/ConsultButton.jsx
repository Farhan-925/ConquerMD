// src/components/layout/header/ConsultButton.jsx
import Link from "next/link";

export function ConsultButton({ className = "" }) {
  return (
    <Link
      href="/schedule-consult"
      className={`hidden sm:flex py-8 items-center justify-center bg-[#EAE3DD] text-black font-semibold text-lg tracking-wider uppercase px-6 py-6 hover:bg-[#c7bcb1] transition-colors ${className}`}
    >
      SCHEDULE A CONSULT
    </Link>
  );
}