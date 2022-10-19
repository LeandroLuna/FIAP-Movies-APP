import { createContext, useState } from 'react';

export const FavoritesContext = createContext([]);

export function FavoritesProvider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [favorites, setFavorites] = useState([]);
  function addFavorite(movie) {
    setQuantity(quantity + 1);
    let newList = favorites;
    newList.push(movie);
    setFavorites(newList);
  }
  return <FavoritesContext.Provider value={{ quantity, addFavorite, favorites }}>{children}</FavoritesContext.Provider>;
}
