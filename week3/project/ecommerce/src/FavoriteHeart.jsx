import { useContext } from "react";
import { FavoritesContext } from "./App.jsx";

export default function FavoriteHeart({ productId }) {
  const { favorites, changeFavorites } = useContext(FavoritesContext);
  return (
    <div className="product-image--favourite-container">
      <img
        className="product-image--favourite"
        src={
          favorites.has(productId)
            ? "/assets/heart-solid.svg"
            : "/assets/heart-regular.svg"
        }
        alt="the favorite icon"
        onClick={(e) => {
          e.preventDefault();
          changeFavorites(productId, favorites);
        }}
        role="button"
        aria-label="toggle favorite"
      />
    </div>
  );
}
