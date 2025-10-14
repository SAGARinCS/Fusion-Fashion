import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20 text-gray-800 dark:text-gray-100 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent dark:via-purple-900/10 pointer-events-none"></div>

      {/* Title Section */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          About Fusion-Fashion
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Redefining fashion with creativity, sustainability, and individuality since 2024.
        </p>
      </motion.div>

      {/* Story Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          At <span className="font-semibold text-blue-500 dark:text-blue-400">Fusion-Fashion</span>, 
          we believe that clothes are not just garments — they are statements. 
          Our mission is to create designs that blend **comfort, confidence, and creativity**, 
          empowering you to express your **true self** every day.
        </p>
      </motion.div>

      {/* Vision & Mission Cards */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {[
          {
            title: "Our Vision",
            desc: "To redefine modern fashion with sustainable designs that inspire individuality and self-expression.",
            color: "from-blue-500 to-indigo-500",
            delay: 0.2,
          },
          {
            title: "Our Mission",
            desc: "Deliver premium-quality fashion at affordable prices — made with passion and care for the planet.",
            color: "from-pink-500 to-purple-500",
            delay: 0.4,
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: item.delay }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
          >
            {/* Gradient border glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 blur-3xl`}
            ></div>

            <h3
              className={`text-2xl font-semibold mb-3 bg-gradient-to-r ${item.color} text-transparent bg-clip-text relative z-10`}
            >
              {item.title}
            </h3>
            <p className="relative z-10 text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
        className="h-[2px] mt-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
      />
    </div>
  );
}
