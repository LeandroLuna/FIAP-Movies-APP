import { createContext, useState } from 'react';

export const FavoritesContext = createContext([]);

export function FavoritesProvider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [favorites, setFavorites] = useState([]);
  function isFavorite(media) {
    // Add new media
    const { id } = media;
    if (!favorites.some((media) => media.id === id)) {
      setQuantity(quantity + 1);
      let newList = favorites;
      newList.push(media);
      setFavorites(newList);
    } else {
      // Remove media
      setQuantity(quantity - 1);
      let newList = favorites.filter((media) => media.id !== id);
      setFavorites(newList);
    }
  }

  return <FavoritesContext.Provider value={{ quantity, isFavorite, favorites }}>{children}</FavoritesContext.Provider>;
}
