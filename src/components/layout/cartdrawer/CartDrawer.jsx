"use client";

import { useSelector, useDispatch } from "react-redux";
import { BsTrash3, BsPlus, BsDash, BsX, BsBagX } from "react-icons/bs";
import { removeFromCart, updateQuantity } from "@/lib/features/CartSlice";
import { useRouter } from "next/navigation";

export default function CartDrawer({ isOpen, onClose }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * (item.quantity || 1),
    0
  );

  if (!isOpen) return null;



const handleProceedToCheckout = () => {
  onClose();
  router.push("/checkout");
};

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <BsX className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200 text-gray-400">
                  <BsBagX className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">
                  Your cart is empty
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Add items from our storefront to get started.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 w-full rounded-full border border-emerald-800 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-4 py-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 rounded-lg bg-gray-100 object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                          <h3 className="line-clamp-1">{item.title}</h3>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="text-gray-400 hover:text-rose-600"
                          >
                            <BsTrash3 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-gray-900">
                          ${(Number(item.price) * (item.quantity || 1)).toFixed(2)}
                        </span>

                        <div className="flex items-center rounded-md border border-gray-200">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({ id: item.id, type: "decrease" })
                              )
                            }
                            className="px-2 py-1 text-gray-500 hover:bg-gray-50"
                          >
                            <BsDash className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({ id: item.id, type: "increase" })
                              )
                            }
                            className="px-2 py-1 text-gray-500 hover:bg-gray-50"
                          >
                            <BsPlus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 p-6">
              <div className="flex justify-between text-base font-bold text-gray-900">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-xs text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                onClick={handleProceedToCheckout}
                className="mt-4 w-full rounded-full bg-emerald-800 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-900 transition-colors cursor-pointer"
              >
              Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}