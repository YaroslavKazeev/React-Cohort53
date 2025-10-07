import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import ProductController from "./ProductController.jsx";

export const FavoriteIDsContext = createContext([1, 2, 3]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoriteIDsContext.Provider value={[1, 2, 3]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductController />} />
        </Routes>
      </BrowserRouter>
    </FavoriteIDsContext.Provider>
  </StrictMode>
);
