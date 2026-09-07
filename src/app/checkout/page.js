"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CreditCard, Banknote, ShieldCheck, Lock, ArrowLeft, CheckCircle2 } from "lucide-react";

import {
  updateShippingAddress,
  setPaymentMethod,
  startCheckoutProcess,
  completeOrder,
} from "@/lib/features/CheckoutSlice";
import createClient from "@/utils/supabase/client";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const supabase = createClient();

  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const checkoutState = useSelector((state) => state.checkout) || {};

  const {
    shippingAddress = { fullName: "", email: "", phone: "", address: "", city: "", postalCode: "" },
    paymentMethod = "card",
    isProcessing = false,
    orderComplete = false,
  } = checkoutState;

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * (item.quantity || 1),
    0
  );

  const handleInputChange = (e) => {
    dispatch(
      updateShippingAddress({
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    dispatch(startCheckoutProcess());

    try {
      // Get logged-in user if available
      const { data: { user } } = await supabase.auth.getUser();

      // 1. Save order to Supabase
      const { error: dbError } = await supabase.from("orders").insert([
        {
          user_id: user?.id || null,
          full_name: shippingAddress.fullName,
          email: shippingAddress.email,
          phone: shippingAddress.phone,
          address: shippingAddress.address,
          city: shippingAddress.city,
          postal_code: shippingAddress.postalCode,
          payment_method: paymentMethod,
          subtotal: subtotal,
          cart_items: cartItems,
          status: "pending",
        },
      ]);

      if (dbError) {
        console.error("Supabase Order Error:", dbError.message);
        alert("Failed to save order to database. Please try again.");
        return;
      }

      // 2. Trigger email notification route
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shippingAddress,
          cartItems,
          subtotal,
          paymentMethod,
        }),
      });

      if (response.ok) {
        dispatch(completeOrder());
      } else {
        alert("Order placed, but failed to send email notification.");
        dispatch(completeOrder());
      }
    } catch (error) {
      console.error("Order error:", error);
    }
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 px-4 py-16">
        <div className="max-w-md w-full bg-neutral-800 border border-neutral-700 p-8 rounded-3xl text-center shadow-2xl">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Order Confirmed!</h2>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Thank you for your purchase. We have received your order details and are preparing your shipment.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-8 w-full rounded-full bg-emerald-700 py-3.5 text-sm font-bold text-white hover:bg-emerald-600 transition-all uppercase tracking-wider shadow-lg shadow-emerald-900/30 cursor-pointer"
          >
            Return to Store
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to store
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form Details */}
          <div className="lg:col-span-7 bg-neutral-800/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-neutral-700/60 shadow-xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-700/60">
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Checkout
              </h1>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <Lock className="w-3.5 h-3.5" /> 256-Bit Encrypted
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                  1. Shipping Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. John Doe"
                      required
                      value={shippingAddress.fullName || ""}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. john@example.com"
                        required
                        value={shippingAddress.email || ""}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. +1 234 567 8900"
                        required
                        value={shippingAddress.phone || ""}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="e.g. 123 Health Ave"
                      required
                      value={shippingAddress.address || ""}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        required
                        value={shippingAddress.city || ""}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        required
                        value={shippingAddress.postalCode || ""}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="pt-4 border-t border-neutral-700/60">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                  2. Payment Method
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label
                    className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "border-emerald-500 bg-emerald-500/10 text-white"
                        : "border-neutral-700 bg-neutral-900/40 text-neutral-400 hover:border-neutral-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
                      className="accent-emerald-500"
                    />
                    <CreditCard className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-semibold">Credit Card</span>
                  </label>

                  <label
                    className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-emerald-500 bg-emerald-500/10 text-white"
                        : "border-neutral-700 bg-neutral-900/40 text-neutral-400 hover:border-neutral-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
                      className="accent-emerald-500"
                    />
                    <Banknote className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-semibold">Cash on Delivery</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || cartItems.length === 0}
                className="w-full mt-8 rounded-full bg-emerald-700 py-4 text-sm font-extrabold text-white uppercase tracking-wider shadow-xl shadow-emerald-900/40 hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isProcessing
                  ? "Processing Order..."
                  : `Complete Order • $${subtotal.toFixed(2)}`}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Guaranteed safe and secure checkout
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-800/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-neutral-700/60 shadow-xl sticky top-28">
              <h2 className="text-lg font-black uppercase tracking-tight text-white mb-6 pb-4 border-b border-neutral-700/60">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="divide-y divide-neutral-700/50 max-h-80 overflow-y-auto pr-1">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-neutral-400 py-4 text-center">
                    Your cart is empty.
                  </p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="py-4 flex gap-4 items-center">
                      <div className="relative w-14 h-14 bg-neutral-900 rounded-xl overflow-hidden shrink-0 border border-neutral-700/50">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain p-1"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white truncate">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Qty: {item.quantity || 1}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-white">
                        ${(Number(item.price) * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Total Breakdown */}
              <div className="border-t border-neutral-700/60 pt-6 mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-400">Free</span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-3 border-t border-neutral-700/60">
                  <span>Total</span>
                  <span className="text-emerald-400">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}