const phone = import.meta?.env?.VITE_WHATSAPP_NUMBER || "919999999999";
function ProductCard({ name, price, image }) {

  const message = `Hi, I want to order:\n\nProduct: ${name}\nPrice: ${price}`;

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/40">

      {/* Badge */}
      <span className="absolute top-3 left-3 z-10 text-xs font-semibold bg-[#FFB6B9] text-white px-3 py-1 rounded-full shadow">
        Handmade
      </span>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition"></div>

        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center space-y-3">

        <h3 className="font-semibold text-[#333] text-lg tracking-tight">
          {name}
        </h3>

        <p className="text-[#FF6B81] font-semibold text-md">
          {price}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-[#FFB6B9] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Buy on WhatsApp →
        </a>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 bg-[#FFB6B9]/10"></div>
    </div>
  );
}

export default ProductCard;