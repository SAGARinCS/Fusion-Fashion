
import { useState } from "react";
import { useCartStore } from "../store/cart";
import { Link } from "react-router-dom"; 

import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/SmallSquareLogoJpg.jpg";

export default function Header({ setIsCartOpen }: { setIsCartOpen: (v: boolean) => void }) {
  const items = useCartStore((state) => state.items);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse shadow-lg">
            <img src={logo} alt="logo" className="w-full h-full object-cover rounded-full" />
          </div>

          <span className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 tracking-wide">
            Fusion-Fashion
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-200">
          {["Home", "Products", "About", "Contact"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`} 
              className="relative group hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        
        <div className="flex items-center space-x-4">
          
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(true)} // ✅ still works
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

          <div className="hidden md:flex"></div>

          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
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
                  <Link
                    to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`} // ✅ changed
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                    onClick={() => setMenuOpen(false)} // ✅ closes mobile menu
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
