
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useSearchParams } from "react-router-dom";
import{ Check, SlidersHorizontal } from "lucide-react";

const categories =[
  { 
    name: "All Sarees",
     value: "All" 
  },

  { 
    name: "Silk Sarees", 
    value: "Silk" 
  },

  { name: "Cotton Sarees",
    value: "Cotton" 
  },

  {
     name: "Georgette Sarees", 
     value: "Georgette" 
  },

];




function Shop() {

  const [searchParams, setSearchParams] = useSearchParams();

  const selected = searchParams.get("category") || "All";

  const filteredProducts=
    selected ==="All"
      ?products
      :products.filter(
        (product)=>product.category ===selected
      );

      const handleSelect = (value) => {
        if (value === "All") {
          setSearchParams({});
        }else{
          setSearchParams({category:value});
        }
      };

 


  return (

    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">

      {/* Premium collection heading */}
      <section className="pb-10 text-center md:pb-14">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-text">
          The Art of Indian Draping
        </p>

        <h1 className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl md:text-6xl">
          Discover Our{" "}
          <span className="italic text-burgundy">
            Sarees
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted md:text-base">
          Explore timeless drapes, exquisite craftsmanship,
          and elegant designs curated for every special moment.
        </p>

        <div className="mx-auto mt-6 h-px w-16 bg-gold" />
      </section>

      {/* Shop layout sidebar & products */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-18">

        {/* Left category sidebar */}
        <aside className="self-start md:sticky md:top-24">

          <div className="flex items-center justify-between border-b border-line pb-4">
            <h2 className="font-serif text-xl text-ink">
              Collections
            </h2>

            <SlidersHorizontal
              size={17}
              strokeWidth={1.5}
              className="text-burgundy"
              aria-hidden="true"
            />
          </div>

          <p className="mb-3 mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            Shop by category
          </p>

          <nav
            aria-label="Filter sarees by category"
            className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:gap-0 md:overflow-visible"
          >
            {categories.map((category) => {
              const isSelected = selected === category.value;

              const count =
                category.value === "All"
                  ? products.length
                  : products.filter(
                      (product) =>
                        product.category === category.value
                    ).length;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => handleSelect(category.value)}
                  aria-pressed={isSelected}
                  className={`group flex shrink-0 items-center justify-between gap-3 rounded-sm  border-b px-3 py-3 text-left text-sm  font-medium transition-colors duration-200 md:px-2 md:py-4 ${
                    isSelected
                      ? "border-burgundy bg-burgundy/[0.04] text-burgundy"
                      : "border-transparent text-ink/75 hover:border-line hover:bg-surface hover:text-burgundy"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isSelected && (
                      <Check
                        size={14}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    )}

                    <span>{category.name}</span>
                  </span>

                  <span
                    className={`text-xs tabular-nums ${
                      isSelected
                        ? "text-burgundy"
                        : "text-muted"
                    }`}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 hidden border-t border-line pt-5 md:block">
            <p className="font-serif text-lg italic text-burgundy">
              Woven for every occasion.
            </p>

            <p className="mt-2 text-xs leading-6 text-muted">
              Discover the beauty of timeless Indian craftsmanship.
            </p>
          </div>
        </aside>

        {/* Right product area */}
        <div className="min-w-0">

          {/* Results heading */}
          <div className="mb-8 flex items-end justify-between gap-3 border-b border-line pb-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-text">
                Curated for you
              </p>

              <h2 className="mt-1 font-serif text-2xl text-ink sm:text-3xl">
                {categories.find(
                  (category) => category.value === selected
                )?.name || "All Sarees"}
              </h2>
            </div>

            <p className="shrink-0 pb-1 text-xs text-muted">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "piece"
                : "pieces"}
            </p>
          </div>

          {/* Asymmetric product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-5 md:grid-cols-6 md:gap-x-6 md:gap-y-10">

              {filteredProducts.map((product, index) => {
                const layout = index % 4;

                const layoutClass =
                  layout === 0
                    ? "col-span-2 md:col-span-4"
                    : layout === 1
                    ? "col-span-1 md:col-span-2"
                    : layout === 2
                    ? "col-span-1 md:col-span-2"
                    : "col-span-2 md:col-span-4";

                return (
                  <div
                    key={product.id}
                    className={`min-w-0 ${layoutClass}`}
                  >
                    <ProductCard product={product} />
                  </div>
                );
              })}

            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-ink">
                A little pause in this collection.
              </p>

              <p className="mt-3 text-sm leading-6 text-muted">
                We couldn't find sarees in this category right now.
              </p>

              <button
                type="button"
                onClick={() => handleSelect("All")}
                className="mt-6 border-b border-burgundy pb-1 text-sm text-burgundy transition-opacity hover:opacity-70"
              >
                Explore all sarees
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
    
  );
}

export default Shop;
