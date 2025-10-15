import esewa from "../assets/payments/esewa.jpg"
import visa from "../assets/payments/visa.jpg"
import khalti from "../assets/payments/khalti.jpg"
import mastercard from "../assets/payments/mastercard.jpg"
import fonepay from "../assets/payments/fonepay.jpg"
import { motion } from "framer-motion";




export default function Footer() {
  const paymentLogos = [
    { src: visa, alt: "Visa" },
    { src: mastercard, alt: "MasterCard" },
    { src: esewa, alt: "eSewa" },
    { src: khalti, alt: "Khalti" },
    { src: fonepay, alt: "Fonepay" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 mt-10">
      <div className="container mx-auto px-6 py-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Fusion-Fashion</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Redefining modern fashion with comfort, confidence, and creativity.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="/products" className="hover:text-blue-500 transition">Products</a></li>
              <li><a href="/about" className="hover:text-blue-500 transition">About</a></li>
              <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Contact Us</h4>
            <p className="text-sm">📍 Butwal, Nepal</p>
            <p className="text-sm">📞 +977-9812345678</p>
            <p className="text-sm">✉️ support@fusionfashion.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-6"></div>

        {/* Payment Partners */}
        <div className="text-center">
          <h5 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4">Payment Partners</h5>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {paymentLogos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-sm mt-6 text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Fusion-Fashion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
