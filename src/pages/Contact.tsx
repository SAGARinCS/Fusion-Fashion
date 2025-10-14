import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-20 text-gray-800 dark:text-gray-100 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/20 to-transparent dark:via-pink-900/10 pointer-events-none"></div>

      {/* Title */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Have questions, feedback, or ideas? We’d love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition transform"
        >
          <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Contact Information
          </h3>

          <div className="space-y-5 text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-3">
              <MapPin className="text-pink-500" size={22} />
              <span>Butwal, Rupandehi, Nepal</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-500" size={22} />
              <span>+977-9800000000</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-purple-500" size={22} />
              <span>support@fusionfashion.com</span>
            </div>
          </div>

          <p className="mt-8 text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether it’s a partnership idea or a casual hello — our team will
            get back to you within 24 hours. Your voice shapes our fashion.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5 bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition transform"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="h-[2px] mt-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
      />
    </div>
  );
}
