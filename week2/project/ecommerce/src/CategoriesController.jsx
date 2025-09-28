import { useState, useEffect } from "react";
import Categories from "./Categories.jsx";

export default function CategoriesController({
  selectedCategory,
  setCategory,
}) {
  const [categories, setCategories] = useState(null);
  async function getCategories() {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    setCategories(data);
  }
  useEffect(() => getCategories, []);
  console.log(categories);
  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      setCategory={setCategory}
    />
  );
}
