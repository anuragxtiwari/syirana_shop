function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#FDECEC] to-white">

      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#FFD6D6]/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#FFB6B9]/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 relative z-10">

        {/* IMAGE */}
        <div className="flex justify-center relative">

          <div className="absolute w-72 h-72 bg-[#FFD6D6]/40 rounded-full blur-2xl"></div>

          <img
            src="./src/assets/images/about.png"
            alt="About Syirana"
            className="relative w-full max-w-sm rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />

          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#FFD6D6] rounded-full blur-xl"></div>
        </div>

        {/* TEXT */}
        <div className="space-y-6">

          <p className="text-xs text-[#FFB6B9] font-semibold uppercase tracking-[0.2em]">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#333] leading-tight">
            The Heart Behind <br />
            <span className="text-[#FFB6B9]">Syirana</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            What started as a small creative passion slowly turned into something
            much more meaningful. Each feather keychain is carefully handcrafted,
            carrying not just design—but emotion, patience, and personal touch.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Syirana isn’t just about accessories. It’s about creating little
            moments of joy—something soft, something beautiful, something that
            feels truly yours.
          </p>

          <p className="text-[#FF6B81] font-medium">
            Made with love. Designed to feel special.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;