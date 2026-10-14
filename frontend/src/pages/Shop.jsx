
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Shop() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
     

     <section className="py-12 text-center md:py-16">

    {/* Small heading label */}
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-text">
    The Art of Indian Draping
    </p>

    {/* Premium collection heading */}
    <h1 className="font-serif text-4xl font-normal tracking-tight text-ink transition-colors duration-300 hover:text-burgundy sm:text-5xl md:text-6xl">
    Discover Our <span className="italic text-burgundy">Sarees</span>
    </h1>

    { /* Supporting paragraph */}
    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted md:text-base">
    Explore timeless drapes, exquisite craftsmanship, and
    elegant designs curated for every special moment.
    </p>

    {/* underline */}
    <div className="mx-auto mt-6 h-px w-16 bg-gold transition-all duration-500 hover:w-28" />

    </section>

      <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={
              index === 0
                ? "row-span-2"
                : "col-span-1"
            }
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
