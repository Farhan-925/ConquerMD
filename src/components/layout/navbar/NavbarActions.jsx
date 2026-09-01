// src/components/layout/header/HeaderActions.jsx
import { User, Search, ShoppingBag } from "lucide-react";

export function NavbarActions() {
  return (
    <div className="flex items-center gap-5 mr-6 md:mr-8">
      <button aria-label="Account" className="hover:opacity-75 transition-opacity cursor-pointer">
        <User className="hidden md:block h-5 w-5" />
      </button>
      <button aria-label="Search" className="hover:opacity-75 transition-opacity cursor-pointer">
        <Search className="h-5 w-5" />
      </button>
      <button aria-label="Shopping Cart" className="hover:opacity-75 transition-opacity cursor-pointer relative">
        <ShoppingBag className="h-5 w-5" />
      </button>
    </div>
  );
}