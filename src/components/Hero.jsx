import { Link } from "react-router-dom";
import {hero} from "../assets/images/hero1.png";
function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 overflow-hidden bg-linear-to-b from-[#FFF7F3] via-[#FFF0F1] to-[#FFEDEE]"
    >
      {/* 🔥 Background Glow Layers */}
      <div className="absolute -top-24 -right-24 w-75 h-75 bg-[#FFB6B9]/40 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-62.5 h-62.5 bg-[#FFD6D6]/40 rounded-full blur-3xl"></div>

      {/* ✨ Floating Decorative Dots */}
      <div className="absolute top-20 left-1/4 w-3 h-3 bg-[#FFB6B9] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-[#FFD6D6] rounded-full opacity-60 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 relative z-10">

        {/* 🔥 TEXT SECTION */}
        <div className="space-y-6 animate-fadeUp">

          <p className="text-xs text-[#FFB6B9] font-semibold uppercase tracking-[0.2em]">
            Handmade with love
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#333] leading-tight">
            Cute Keychains, <br />
            <span className="text-[#FFB6B9]">Happy Hearts</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Beautiful handcrafted keychains designed to add charm,
            softness, and a touch of personality to your everyday essentials.
          </p>

          <div className="flex items-center gap-4">

            
            <a
              href="#products"
              className="inline-block bg-[#FFB6B9] text-white px-7 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Shop Now →
            </a>

            <span className="text-sm text-gray-500">
              Loved by 100+ customers
            </span>
          </div>
        </div>

        {/* 🖼️ IMAGE SECTION */}
        <div className="flex justify-center relative animate-fadeUp delay-100">

          {/* Glow behind image */}
          <div className="absolute w-70 h-70 bg-[#FFD6D6]/40 rounded-full blur-2xl"></div>

          <img
            src={hero}
            alt="Feather keychains"
            className="relative w-full max-w-md rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />

          {/* Floating small accent */}
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#FFD6D6] rounded-full blur-xl"></div>

          {/* Floating animation */}
          <div className="absolute inset-0 animate-float pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;