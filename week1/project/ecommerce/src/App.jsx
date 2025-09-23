import Categories from "./Categories.jsx";
import Products from "./Products.jsx";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("all");
  function changeCategory(newCategory) {
    setCategory(newCategory);
  }

  return (
    <>
      <div class="title-container">
        <h1 class="title-container--title">Products</h1>
        <div class="nav">
          <a class="nav-link" href="/">
            Products
          </a>
          <a class="nav-link" href="/favourites">
            Favourites
          </a>
        </div>
      </div>
      <Categories changeCategory={changeCategory} />
      <Products category={category} />
    </>
  );
}

export default App;
