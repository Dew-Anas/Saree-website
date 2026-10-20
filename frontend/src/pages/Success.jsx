import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Succes() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  

  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="font-serif text-3xl text-burgundy">Thank you!</h1>
        <p className="mt-4 text-muted"> Your payment was received. We will email you the order details soon.

        </p>

        <Link
        to="/shop"
        className="mt-8 inline-block bg-burgundy px-6 py-3 text-ivory"
      >
        Continue Shopping
      </Link>

      
    </div>

    );
}

export default Succes;