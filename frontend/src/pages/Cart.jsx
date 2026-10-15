import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, cartTotal } =
    useCart();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const formatPrice = (price) => `Rs. ${price.toLocaleString("en-LK")}`;

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-gold-text">
          RSK Sarees YOUR SELECTION
        </p>

        <div className="mt-8 border-y border-line py-16 text-center md:py-24">
          <ShoppingBag
            size={30}
            strokeWidth={1}
            className="mx-auto text-burgundy"
          />

          <h1 className="mt-5 font-serif text-3xl text-burgundy md:text-5xl">
            Something beautiful belongs here. 
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">
            Your selection is waiting to begin. Discover a saree that feels
            uniquely yours.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 border border-burgundy
                       px-6 py-3 text-sm text-burgundy transition-colors
                       duration-300 hover:bg-burgundy hover:text-ivory"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Explore the collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      {/* Editorial header */}
      <header className="border-b border-line pb-8 md:pb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-gold-text">
          RSK Saress YOUR SELECTION
        </p>

        <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h1 className="font-serif text-4xl text-burgundy md:text-6xl">
            Pieces you'll treasure.
          </h1>

          <span className="text-sm text-muted">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>

        <Link
          to="/shop"
          className="mt-5 inline-flex items-center gap-2 text-sm text-muted
                     transition-colors hover:text-burgundy"
        >
          <ArrowLeft size={15} strokeWidth={1.5} />
          Continue exploring
        </Link>
      </header>

      {/* Cart content & mobile responsive layout */}
      <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1fr_320px] xl:gap-20">
        {/* Product list */}
        <section aria-label="Cart items">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted">
              Your collection
            </h2>

            <span className="text-xs text-muted">
              {cartItems.length} {cartItems.length === 1 ? "design" : "designs"}
            </span>
          </div>

          <ul className="divide-y divide-line border-y border-line">
            {cartItems.map((item) => (
              <li key={item.id} className="flex gap-4 py-6 sm:gap-6 md:py-8">
                {/* Product image */}
                <Link
                  to="/shop"
                  className="h-36 w-28 shrink-0 overflow-hidden bg-ivory sm:h-44 sm:w-36"
                  aria-label={`View ${item.name}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform
                               duration-500 hover:scale-[1.04]"
                  />
                </Link>

                {/* Product information */}
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg leading-snug text-ink sm:text-xl">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm text-muted">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center border border-line">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                        aria-label={`Decrease ${item.name} quantity`}
                        className="flex h-10 w-10 items-center justify-center
                                   text-ink transition-colors hover:bg-ivory
                                   disabled:cursor-not-allowed disabled:opacity-35"
                      >
                        <Minus size={15} strokeWidth={1.5} />
                      </button>

                      <span
                        aria-live="polite"
                        className="min-w-8 text-center text-sm tabular-nums"
                      >
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        aria-label={`Increase ${item.name} quantity`}
                        className="flex h-10 w-10 items-center justify-center
                                   text-ink transition-colors hover:bg-ivory"
                      >
                        <Plus size={15} strokeWidth={1.5} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs
                                 text-muted transition-colors hover:text-burgundy"
                    >
                      <Trash2 size={14} strokeWidth={1.5} />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Line total */}
                <div className="shrink-0 text-right">
                  <p className="text-sm font-medium tabular-nums text-burgundy sm:text-base">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Order summary */}
        <aside className="border border-line bg-surface p-5 sm:p-7 lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-text">
            A little more to love
          </p>

          <h2 className="mt-3 font-serif text-2xl text-ink">Order summary</h2>

          <div className="mt-7 space-y-4 border-b border-line pb-5 text-sm">
            <div className="flex justify-between gap-4 text-muted">
              <span>Selected pieces</span>
              <span className="tabular-nums">{itemCount}</span>
            </div>

            <div className="flex justify-between gap-4 text-muted">
              <span>Subtotal</span>
              <span className="tabular-nums">{formatPrice(cartTotal)}</span>
            </div>
          </div>

          <div className="mt-5 flex items-start justify-between gap-4">
            <span className="text-sm text-ink">Total</span>

            <div className="text-right">
              <p className="font-serif text-2xl text-burgundy tabular-nums">
                {formatPrice(cartTotal)}
              </p>

              <p className="mt-1 text-xs text-muted">
                Delivery charges, if applicable, are additional.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="group mt-7 flex w-full items-center justify-between
                       bg-burgundy px-5 py-4 text-sm text-ivory
                       transition-colors duration-300 hover:bg-ink"
          >
            <span>Proceed to checkout</span>

            <ArrowRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300
                         group-hover:translate-x-1"
            />
          </button>

          <p className="mt-4 text-center text-xs leading-6 text-muted">
            Thoughtfully chosen. Beautifully yours.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
