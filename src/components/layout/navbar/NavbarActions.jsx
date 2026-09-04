"use client";

import { useState } from "react";
import { User, Search, ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import CartDrawer from "../cartdrawer/CartDrawer";


export function NavbarActions() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  return (
    <>
      <div className="flex items-center gap-5 mr-6 md:mr-8">
        <button aria-label="Account" className="hover:opacity-75 transition-opacity cursor-pointer">
          <User className="hidden md:block h-5 w-5" />
        </button>

        <button aria-label="Search" className="hover:opacity-75 transition-opacity cursor-pointer">
          <Search className="h-5 w-5" />
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping Cart"
          className="hover:opacity-75 transition-opacity cursor-pointer relative"
        >
          <ShoppingBag className="h-5 w-5" />
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