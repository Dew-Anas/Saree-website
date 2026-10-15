import { createContext, useContext, useEffect,useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(()=>{
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved):[]
  });

  useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  },[cartItems]);

  const addToCart = (product) => {
    const exists = cartItems.some((item) => item.id === product.id);

    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

   {/*  decrees card quantity */}

   const decreaseQuantity = (id) => {
  setCartItems(
    cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  return (
    <CartContext.Provider
      value={{
         cartItems, 
         addToCart, 
         removeFromCart, 
         cartCount,
        decreaseQuantity,
        cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}