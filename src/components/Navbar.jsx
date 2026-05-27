import { useState, useEffect, useRef } from "react";
import {phone} from "../config/contact";
const sections = ["home", "products", "about", "contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const indicatorRef = useRef(null);
  const linkRefs = useRef({});

  // 🔒 Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // 🔥 Active section tracking (viewport based - stable)
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Move indicator (active)
  const moveIndicator = (el) => {
    if (!el || !indicatorRef.current) return;

    indicatorRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
    indicatorRef.current.style.width = `${el.offsetWidth}px`;
  };

  useEffect(() => {
    moveIndicator(linkRefs.current[active]);
  }, [active]);

  // 🔥 Resize fix
  useEffect(() => {
    const handleResize = () => {
      moveIndicator(linkRefs.current[active]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  // 🔥 Hover-follow (premium effect)
  const handleMouseEnter = (id) => {
    moveIndicator(linkRefs.current[id]);
  };

  const handleMouseLeave = () => {
    moveIndicator(linkRefs.current[active]);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#FFF7F3]/70 backdrop-blur-lg border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="text-2xl font-bold tracking-tight text-[#333]">
            Syirana <span className="text-[#FFB6B9]">Shop</span>
          </a>

          {/* Desktop Nav */}
          <div
            className="hidden md:flex relative gap-10 text-sm font-medium"
            onMouseLeave={handleMouseLeave}
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                ref={(el) => (linkRefs.current[id] = el)}
                onMouseEnter={() => handleMouseEnter(id)}
                className={`transition-all duration-200 ${
                  active === id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            {/* 🔥 Animated Indicator */}
            <span
              ref={indicatorRef}
              className="absolute bottom-0 h-0.5 bg-[#FFB6B9] transition-all duration-300 ease-in-out rounded-full"
              style={{ transform: "translateX(0px)", width: "0px" }}
            />
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${phone}`}
            className="hidden md:inline-block bg-[#FFB6B9] text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition"
          >
            Order on WhatsApp
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl z-50"
            onClick={toggleMenu}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-20 right-4 w-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 z-50 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2.5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-700">

          {sections.map((id) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          <a
            href={`https://wa.me/${phone}`}
            className="mt-2 bg-[#FFB6B9] text-white px-4 py-2 rounded-full text-center"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;