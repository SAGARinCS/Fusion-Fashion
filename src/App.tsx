import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./Features/CartDrawer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";


export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
     
      <Header setIsCartOpen={setIsCartOpen} />

      
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />

      
      <main className="flex-1 container py-8 pt-28 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/products" element={<Products />} />

        </Routes>
      </main>

      <Footer />
     
    </div>
  );
}
