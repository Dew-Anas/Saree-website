
import { Link } from "react-router-dom";

function Cancel() {
    return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="font-serif text-3xl text-burgundy">Payment cancelled</h1>
      <p className="mt-4 text-muted">
        No payment was made. Your cart is still saved.
      </p>
      <Link
        to="/cart"
        className="mt-8 inline-block bg-burgundy px-6 py-3 text-ivory"
      >
        Back to Cart
      </Link>
    </div>
  );
}

export default Cancel;