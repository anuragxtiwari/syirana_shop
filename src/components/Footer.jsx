import {phone} from "../config/contact";
function Footer() {

  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden bg-linear-to-b from-white to-[#FFF0F1]">

      {/* Background Glow */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#FFD6D6]/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#FFB6B9]/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">

        {/* BRAND */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-[#333]">
            Syirana <span className="text-[#FFB6B9]">Shop</span>
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Handmade feather keychains crafted with love, designed to bring
            softness and charm to your everyday life.
          </p>

          <p className="text-[#FF6B81] text-sm font-medium">
            Made with love 💖
          </p>
        </div>

        {/* LINKS (cleaned for SPA consistency) */}
        <div>
          <h3 className="font-semibold mb-4 text-[#333]">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-500">

            <li>
              <a href="/" className="hover:text-[#FF6B81] transition">
                Home
              </a>
            </li>

            <li>
              <a href="/products" className="hover:text-[#FF6B81] transition">
                Shop
              </a>
            </li>

          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="font-semibold mb-4 text-[#333]">Connect</h3>

          <ul className="space-y-3 text-sm">

            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF6B81] transition"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF6B81] transition"
              >
                WhatsApp
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-14 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Syirana Shop • All rights reserved
      </div>
    </footer>
  );
}

export default Footer;