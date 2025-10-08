import { useState, useEffect, useContext } from "react";
import Favorites from "./Favorites.jsx";
import Products from "./Products.jsx";
import { PRODUCTS_URL } from "./constants.js";
import fetcher from "./fetcher.js";
import { FavIDsContext } from "./App.jsx";

export default function FavoritesController() {
  const { favIDs } = useContext(FavIDsContext);
  const [favProducts, setFavProducts] = useState("NoFavorites");

  useEffect(() => {
    (async () => {
      setFavProducts([]);
      let favoritesList = [];
      console.log(favIDs);
      if (favIDs && favIDs.size > 0) {
        for (let id of favIDs) {
          const data = await fetcher(`${PRODUCTS_URL}/${id}`);
          if (data !== "error") {
            favoritesList.push(data);
          } else {
            favoritesList = data;
            return;
          }
        }
      } else {
        favoritesList = "NoFavorites";
      }
      setFavProducts(favoritesList);
    })();
  }, [favIDs]);
  console.log(favProducts);
  return <Products products={favProducts} />;
}
