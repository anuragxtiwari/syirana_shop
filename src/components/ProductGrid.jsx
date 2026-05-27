import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <section
      id="products"
      className="relative py-28 overflow-hidden bg-linear-to-b from-[#FFF0F1] to-[#FDECEC]"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute -top-20 -left-20 w-62.5 h-62.5 bg-[#FFD6D6]/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-15 -right-15 w-75 h-75 bg-[#FFB6B9]/30 rounded-full blur-3xl"></div>

      {/* ✨ Decorative dots */}
      <div className="absolute top-20 right-1/3 w-3 h-3 bg-[#FFB6B9] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-[#FFD6D6] rounded-full opacity-60 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-xl mx-auto space-y-4 animate-fadeUp">
          
          <p className="text-xs text-[#FFB6B9] font-semibold uppercase tracking-[0.2em]">
            Our Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#333] leading-tight">
            Handmade Feather <br />
            <span className="text-[#FFB6B9]">Keychains</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Each piece is crafted with care, bringing softness, charm, and a
            personal touch to your everyday essentials.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {products.map((p) => (
            <div
              key={p.id}
              className="transform hover:-translate-y-2 transition duration-300"
            >
              <ProductCard {...p} />
            </div>
          ))}

        </div>

        {/* 🔥 CTA */}
        <div className="mt-16 text-center">
          <a
            href="/products"
            className="inline-block bg-white border border-[#FFB6B9] text-[#FFB6B9] px-6 py-3 rounded-full hover:bg-[#FFB6B9] hover:text-white transition duration-300 shadow-sm"
          >
            View All Products →
          </a>
        </div>

      </div>
    </section>
  );
}

export default ProductGrid;