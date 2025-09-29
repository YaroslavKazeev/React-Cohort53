import { useState } from "react";
import CategoriesController from "./CategoriesController.jsx";
import ProductsController from "./ProductsController.jsx";

function App() {
  const [category, setCategory] = useState();

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
      <CategoriesController
        selectedCategory={category}
        setCategory={setCategory}
      />
      <ProductsController category={category} />
    </>
  );
}

export default App;
