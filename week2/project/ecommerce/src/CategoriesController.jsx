import { useState, useEffect } from "react";
import Categories from "./Categories.jsx";
import { CATEGORIES_URL } from "./constants.js";
import fetcher from "./fetcher.js";

export default function CategoriesController({
  selectedCategory,
  setCategory,
}) {
  const [categories, setCategories] = useState(null);
  async function getCategories() {
    fetcher(CATEGORIES_URL, setCategories);
    setCategory("all");
  }
  useEffect(() => getCategories, []);
  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      setCategory={setCategory}
    />
  );
}
