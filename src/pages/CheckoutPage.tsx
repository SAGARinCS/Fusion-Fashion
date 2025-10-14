import React, { useState } from "react";
import { useCartStore } from "../store/cart";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clear);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (items.length === 0)
    return <div className="text-center mt-20 text-gray-700 dark:text-gray-200">Your cart is empty.</div>;

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000)); // mock API delay
    clearCart();
    setLoading(false);
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Checkout Form */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-2 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-8 rounded-3xl shadow-xl space-y-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Checkout</h2>
        <input
          required
          placeholder="Full Name"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
        />
        <input
          required
          placeholder="Address"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
        />
        <input
          required
          placeholder="City"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
        />
        <div className="flex gap-3">
          <input
            required
            placeholder="Postal Code"
            className="w-1/2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
          />
          <input
            required
            placeholder="Country"
            className="w-1/2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="text-right text-lg font-semibold text-gray-800 dark:text-gray-100">
          Total: ${total.toFixed(2)}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          {loading ? "Placing..." : "Place Order"}
        </button>
      </form>

      {/* Order Summary */}
      <aside className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-6 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Order Summary</h3>
        <div className="space-y-3">
          {items.map((it) => (
            <div key={it.id} className="flex justify-between text-gray-900 dark:text-gray-100">
              <span>{it.title} x{it.quantity}</span>
              <span>${(it.price * it.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
