import Categories from "./Categories.jsx";
import Products from "./Products.jsx";

function App() {
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
      <Categories />
      <Products />
    </>
  );
}

export default App;
