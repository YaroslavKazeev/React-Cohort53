import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import ProductController from "./ProductController.jsx";

const FavoritesContext = createContext();

function App() {
  const [favorites, setFavorites] = useState(() => new Set());

  function changeFavorites(productId, favorites) {
    setFavorites(() => {
      const newFavSet = new Set(favorites);
      newFavSet.has(productId)
        ? newFavSet.delete(productId)
        : newFavSet.add(productId);
      return newFavSet;
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, changeFavorites }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductController />} />
        </Routes>
      </BrowserRouter>
    </FavoritesContext.Provider>
  );
}

export { App, FavoritesContext };
