


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-t border-gray-300 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 dark:text-gray-300">
        
       
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide mb-3">
            Fusion<span className="text-blue-500">Fashion</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Elevate your wardrobe with trendsetting styles and timeless classics.  
            Designed with passion, worn with confidence.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
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
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            {[
              { name: "Facebook", icon: "fa-facebook" },
              { name: "Instagram", icon: "fa-instagram" },
              { name: "Twitter", icon: "fa-x-twitter" },
              { name: "LinkedIn", icon: "fa-linkedin" },
            ].map(({ name, icon }) => (
              <a
                key={name}
                href="#"
                className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 text-xl transition"
                aria-label={name}
              >
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-300 dark:border-gray-800 mt-8 py-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {year} <span className="font-semibold text-gray-800 dark:text-gray-200">Fusion-Fashion</span> • Designed with ❤️ by Sagar Pandey
      </div>
    </footer>
  );
}
