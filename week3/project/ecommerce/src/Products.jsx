import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "./App.jsx";

export default function Products({ products }) {
  const { favorites, changeFavorites } = useContext(FavoritesContext);

  console.log(favorites);
  let output = <div>Error loading products. Please try again later.</div>;
  products === "error"
    ? output
    : !products || products.length === 0
    ? (output = <div>Loading products...</div>)
    : (output = (
        <ul className="products">
          {products.map((product) => (
            <li key={product.id} className="products--item">
              <Link to={`/product/${product.id}`}>
                <div className="product">
                  <div className="product-image--container">
                    <img className="product-image" src={product.image} />
                    <div className="product-image--favourite-container">
                      <img
                        className="product-image--favourite"
                        src={
                          favorites.has(product.id)
                            ? "/assets/heart-solid.svg"
                            : "/assets/heart-regular.svg"
                        }
                        alt="the favorite icon"
                        onClick={(e) => {
                          e.preventDefault();
                          changeFavorites(product.id);
                        }}
                        role="button"
                        aria-label="toggle favorite"
                      />
                    </div>
                  </div>
                  <span className="product--title" title={product.title}>
                    {product.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ));
  return output;
}
