// src/components/layout/navbar/Logo.jsx
import Link from "next/link";
import Image from "next/image";

export function Logo({ isScrolled }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="https://conquermd.com/images/home/logo.svg"
        alt="Conquer MD Logo"
        width={180}
        height={35}
        priority
        className={`h-8 w-auto transition-all duration-300 ${
          isScrolled 
            ? "brightness-0" // Turn black for white navbar
            : "brightness-0 invert" // Turn white for dark background video
        }`}
      />
    </Link>
  );
}