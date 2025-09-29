import { useState, useEffect } from "react";
import Products from "./Products.jsx";

export default function ProductsController({ category }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      let URL = "https://fakestoreapi.com/products";
      category === "all" ? URL : (URL += `/category/${category}`);
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    })();
  }, [category]);
  return <Products products={products} />;
}
