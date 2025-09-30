import { useState, useEffect } from "react";
import Products from "./Products.jsx";
import { PRODUCTS_URL } from "./constants.js";

export default function ProductsController({ category }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      setProducts([]);
      let URL = PRODUCTS_URL;
      category === "all" ? URL : (URL += `/category/${category}`);
      let data = "error";
      try {
        const response = await fetch(URL);
        data = await response.json();
      } catch (error) {
        console.log("Fetch error:", error);
      }
      setProducts(data);
    })();
  }, [category]);
  return <Products products={products} />;
}
