import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './Features/ThemeToggle'; // ✅ import toggle button

export default function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1 container py-8 relative z-10 pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer />
      {/* Floating dark/light toggle */}
      <ThemeToggle />
    </div>
  );
}
