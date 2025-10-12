import { useState } from "react";
import { useCartStore } from "../store/cart";
import CartDrawer from "../Features/CartDrawer";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../Features/ThemeToggle";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-md transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse shadow-lg">
            E
          </div>
          <span className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 tracking-wide">
            E-Shop
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-200">
          {["Home", "Products", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              className="relative group hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white shadow-2xl hover:scale-110 transition transform"
            >
              <ShoppingCart size={24} />
              <AnimatePresence>
                {items.length > 0 && (
                  <motion.span
                    key={items.length}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow"
                  >
                    {items.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 w-full shadow-inner"
          >
            <ul className="flex flex-col py-4 px-6 space-y-3 text-gray-700 dark:text-gray-200">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </header>
  );
}
