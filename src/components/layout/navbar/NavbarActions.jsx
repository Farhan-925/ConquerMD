"use client";

import { useState, useEffect } from "react";
import { User, Search, ShoppingBag, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import CartDrawer from "../cartdrawer/CartDrawer";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export function NavbarActions() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const supabase = createClient();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const fetchUser = async () => {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      setUser(currentUser);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsDropdownOpen(false);
    setUser(null);
    window.location.href = "/";
  };

  const getDisplayName = () => {
    if (!user) return "";
    return (
      user.user_metadata?.display_name ||
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      (user.email ? user.email.split("@")[0] : "User")
    );
  };

  const getInitials = () => {
    const name = getDisplayName();
    if (name) {
      const parts = name.trim().split(" ");
      if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
      return name[0].toUpperCase();
    }
    return "U";
  };

  const avatarUrl = user?.user_metadata?.avatar_url;
  const displayName = getDisplayName();

  const textColorClass = isScrolled ? "text-black" : "text-white";

  return (
    <>
      <div className="flex items-center gap-5 mr-4 sm:mr-6">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
            >
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Profile"
                  className="h-7 w-7 rounded-full border border-emerald-500 object-cover"
                />
              ) : (
                <div className="h-7 w-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-md border border-emerald-400">
                  {getInitials()}
                </div>
              )}

              <span className={`hidden sm:inline-block text-xs font-bold capitalize transition-colors duration-300 ${textColorClass}`}>
                {displayName}
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-neutral-800 border border-neutral-700 rounded-2xl shadow-2xl py-2 z-50 text-white">
                <div className="px-4 py-2 border-b border-neutral-700">
                  <p className="text-xs font-bold truncate capitalize">{displayName}</p>
                  <p className="text-[10px] text-neutral-400 truncate">{user.email}</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-red-400 hover:bg-neutral-700/50 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <LogOut className="h-3.5 w-3.5" /> Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <button aria-label="Account" className="hover:opacity-75 transition-opacity cursor-pointer">
              <User className={`hidden md:block h-5 w-5 transition-colors duration-300 ${textColorClass}`} />
            </button>
          </Link>
        )}

        <button aria-label="Search" className="hover:opacity-75 transition-opacity cursor-pointer">
          <Search className={`h-5 w-5 transition-colors duration-300 ${textColorClass}`} />
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping Cart"
          className="hover:opacity-75 transition-opacity cursor-pointer relative"
        >
          <ShoppingBag className={`h-5 w-5 transition-colors duration-300 ${textColorClass}`} />
          {cartItems.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-800 text-[10px] font-bold text-white">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}