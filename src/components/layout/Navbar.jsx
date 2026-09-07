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
        className={`w-full transition-colors duration-300 border-b relative z-50 ${
          isScrolled
            ? "bg-white text-black border-gray-200 shadow-sm"
            : "bg-transparent text-white border-white/100"
        }`}
      >
        <div className="flex items-center justify-between pl-4 lg:pl-10 h-16 sm:h-18">
          
          {/* Left Section: Logo & Desktop Links */}
          <div className="flex items-center gap-6 min-w-0 shrink h-full">
            <div className="max-w-[120px] sm:max-w-none shrink truncate">
              <Logo isScrolled={isScrolled} />
            </div>
            
            {/* Nav Links: Reduced vertical spacing */}
            <div className="hidden lg:block h-full">
              <NavLinks isScrolled={isScrolled} />
            </div>
          </div>

          {/* Right Section: Actions & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 h-full">
            <div className="flex items-center gap-2 sm:gap-4">
              <NavbarActions />
            </div>

            {/* Consult Button: Height aligned with navbar */}
            <div className="hidden lg:flex shrink-0 h-full items-center">
              <ConsultButton />
            </div>

            {/* Mobile Toggle */}
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