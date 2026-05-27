import {phone} from "../config/contact";
function CTA() {

  const message = "Hi, I want a custom feather keychain.";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-r from-[#FFB6B9] via-[#FF9AA2] to-[#FFB6B9]">

      {/* Background Glow */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          Want Something <span className="underline decoration-white/60">Custom Made</span>?
        </h2>

        <p className="text-white/90 text-md md:text-lg max-w-xl mx-auto">
          Get your own personalized feather keychain designed just for you.
          Message us directly and we’ll create something unique.
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-white text-[#FF6B81] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Chat on WhatsApp →
        </a>

        <p className="text-white/80 text-sm mt-2">
          Quick replies • Custom designs • Friendly support
        </p>
      </div>
    </section>
  );
}

export default CTA;