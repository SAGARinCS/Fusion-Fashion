import { useCartStore } from "../store/cart";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function CartDrawer({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const { removeFromCart, increaseQty, decreaseQty, clearCart } = useCartStore();

  return (
    <>
      <Toaster position="top-right" />
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Your Cart
                </h2>
                <button
                  className="text-gray-500 dark:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  ✖
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 p-4 overflow-y-auto">
                {items.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">Cart is empty</p>
                ) : (
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-100">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            ${item.price.toFixed(2)} × {item.quantity}
                          </p>
                          <div className="flex gap-2 mt-1">
                            <button
                              onClick={() => increaseQty(item.id)}
                              className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded"
                            >
                              +
                            </button>
                            <button
                              onClick={() => decreaseQty(item.id)}
                              className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded"
                            >
                              -
                            </button>
                            <button
                              onClick={() => {
                                removeFromCart(item.id);
                                toast.error("Item removed");
                              }}
                              className="px-2 py-0.5 bg-red-500 text-white rounded"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="flex justify-between font-semibold text-gray-800 dark:text-gray-100">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => {
                        clearCart();
                        toast("Cart cleared");
                      }}
                      className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      Clear
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-700 transition">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
