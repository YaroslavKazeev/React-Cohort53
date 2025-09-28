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
      <div className="title-container">
        <h1 className="title-container--title">Products</h1>
        <div className="nav">
          <a className="nav-link" href="/">
            Products
          </a>
          <a className="nav-link" href="/favourites">
            Favourites
          </a>
        </div>
      </div>
      <Categories selectedCategory={category} changeCategory={changeCategory} />
      <Products category={category} />
    </>
  );
}

export default App;
