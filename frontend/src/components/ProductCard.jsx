import { useState } from "react";

import { Heart, ArrowRight } from "lucide-react";

{
  /*gets prop from perant component */
}
function ProductCard({ product, className = "" }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className={`group min-w-0 ${className}`}>
      {/* Product Image */}
      <div className="relative  overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* New Arrival Label */}
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-surface px-3 py-1 text-[10px] uppercase tracking-widest text-burgundy">
            New Arrival
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 text-2xl text-white drop-shadow"
        >
          {/* whislist i con importyes */}
          <Heart
            size={22}
            strokeWidth={1.5}
            fill={isFavorite ? "currentColor" : "none"}
            className={isFavorite ? "text-burgundy" : "text-white"}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="pt-3 pb-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold-text">
          {product.category}
        </p>

        <h3 className="mt-1 font-serif text-base text-ink">{product.name}</h3>

        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-sm text-burgundy">
            Rs. {product.price.toLocaleString("en-LK")}
          </p>

          <button
            type="button"
            aria-label={`View ${product.name}`}
            onClick={() => {
              console.log("Selected product:", product.name);
            }}
            className="text-xl text-gold-text transition-transform duration-300 hover:translate-x-1"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
