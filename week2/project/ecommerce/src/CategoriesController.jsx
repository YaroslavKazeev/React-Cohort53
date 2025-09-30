import { useState, useEffect } from "react";
import Categories from "./Categories.jsx";
import { CATEGORIES_URL } from "./constants.js";

export default function CategoriesController({
  selectedCategory,
  setCategory,
}) {
  const [categories, setCategories] = useState(null);
  async function getCategories() {
    let data = "error";
    try {
      const response = await fetch(CATEGORIES_URL);
      data = await response.json();
    } catch (error) {
      console.log("Fetch error:", error);
    }
    setCategories(data);
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
