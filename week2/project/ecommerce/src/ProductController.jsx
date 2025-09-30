import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product.jsx";
import { PRODUCTS_URL } from "./constants.js";

export default function ProductController() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  console.log("ProductController id:", id);

  useEffect(() => {
    (async () => {
      console.log("Fetching product with id:", id);
      if (!id) return;
      setProduct([]);
      const URL = `${PRODUCTS_URL}/${id}`;
      let data = "error";
      try {
        const response = await fetch(URL);
        data = await response.json();
      } catch (error) {
        console.log("Fetch error:", error);
      }
      setProduct(data);
    })();
  }, [id]);
  return <Product product={product} />;
}
