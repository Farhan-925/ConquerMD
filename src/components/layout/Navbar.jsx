// src/components/layout/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Logo } from "./navbar/Logo";
import { NavLinks } from "./navbar/NavLinks";
import { ConsultButton } from "./navbar/ConsultButton";
import { NavbarActions } from "./navbar/NavbarActions";
import { MobileMenu } from "./navbar/MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full  transition-colors duration-300 border-b relative z-50 ${
          isScrolled
            ? "bg-white text-black border-gray-200 shadow-sm"
            : "bg-transparent text-white border-white/10"
        }`}
      >
        <div className="flex items-center justify-between pl-4 lg:pl-10 py-4 lg:py-0 ">
          
          {/* Left Section: Logo strictly constrained on mobile */}
          <div className="flex items-center gap-4 min-w-0 shrink">
            <div className="max-w-[130px] sm:max-w-none shrink truncate">
              <Logo isScrolled={isScrolled} />
            </div>
            
            {/* Nav Links: Desktop Only */}
            <div className="hidden lg:block">
              <NavLinks />
            </div>
          </div>

          {/* Right Section: Actions & Hamburger Menu bundled together */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="flex items-center gap-2 sm:gap-4">
              <NavbarActions />
            </div>

            {/* Consult Button: Desktop Only */}
            <div className="hidden lg:block shrink-0">
              <ConsultButton />
            </div>

            {/* Mobile/Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden cursor-pointer flex items-center justify-center p-1 ml-1"
              aria-label="Open Navigation"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}