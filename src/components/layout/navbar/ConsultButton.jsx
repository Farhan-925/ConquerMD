import Link from "next/link";

export function ConsultButton({ className = "" }) {
  return (
    <Link
      href="/schedule-consult"
      className={`h-full flex items-center justify-center bg-[#EAE3DD] text-black font-[500] text-[14px] tracking-wider uppercase px-14 hover:bg-[#c7bcb1] transition-colors ${className}`}
    >
      SCHEDULE A CONSULT
    </Link>
  );
}