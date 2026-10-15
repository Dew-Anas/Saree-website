import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFavourites } from "../context/FavouritesContext";

function Favourites() {
  const { favourites } = useFavourites();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-burgundy">Favourites</h1>

      {favourites.length === 0 ? (
        <div className="mt-8">
          <p className="text-muted">You have not added any favourites yet.</p>
          <Link
            to="/shop"
            className="mt-4 inline-block bg-burgundy px-6 py-3 text-ivory"
          >
            Browse Shop
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
          {favourites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;