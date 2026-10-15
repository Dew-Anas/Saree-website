import { createContext, useContext, useEffect, useState } from "react";

{/*create genral Storage */}
const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(()=>{
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved):[]
  });

  useEffect(()=>{
    localStorage.setItem("favourites", JSON.stringify(favourites));
  },[favourites]);

  const isFavourite = (id) => favourites.some((item) => item.id === id);

  const toggleFavourite = (product) => {
    if (isFavourite(product.id)) {
      setFavourites(favourites.filter((item) => item.id !== product.id));
    } else {
      setFavourites([...favourites, product]);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, isFavourite, toggleFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}