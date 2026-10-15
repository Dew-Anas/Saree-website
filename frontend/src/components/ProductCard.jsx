import { useFavourites } from "../context/FavouritesContext";

import { useCart } from "../context/CartContext";

import { Heart, ShoppingCart } from "lucide-react";

{
  /*gets prop from perant component */
}
function ProductCard({ product, className = "" }) {
  const{isFavourite,toggleFavourite} =useFavourites();

  const { addToCart } = useCart();

  return (
    <article className={`group min-w-0 ${className}`}>
      {/* Product Image */}
      <div className="relative overflow-hidden bg-surface">
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
          onClick={() => toggleFavourite(product)}
          aria-label={isFavourite (product.id) ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 text-2xl text-white drop-shadow"
        >
          {/* whislist i con importyes */}
          <Heart
            size={22}
            strokeWidth={1.5}
            fill={isFavourite(product.id) ? "currentColor" : "none"}
            className={isFavourite (product.id) ? "text-burgundy" : "text-white"}
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

         
        </div>
         {/* add to cart buttoun */}

          <button
            type="button"
            onClick={() => addToCart(product)}
             className="mt-3 flex w-full items-center justify-center gap-2 bg-burgundy py-2.5 text-xs uppercase tracking-widest text-ivory transition-colors hover:bg-ink"
              >
            <ShoppingCart size={16} strokeWidth={1.5} />
           Add to Cart
          </button>
      </div>
    </article>
  );
}

export default ProductCard;
