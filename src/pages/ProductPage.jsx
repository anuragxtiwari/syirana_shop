import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cute", "Premium", "Custom"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="pt-32 pb-24 bg-linear-to-b from-[#FFF7F3] to-[#FFEDEE] min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333]">
            All Products
          </h1>
          <p className="text-gray-600">
            Explore our full collection of handmade keychains
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border transition ${
                selectedCategory === cat
                  ? "bg-[#FFB6B9] text-white"
                  : "bg-white text-gray-600 hover:bg-[#FFB6B9]/20"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found.
          </p>
        )}

      </div>
    </section>
  );
}

export default ProductPage;