import products from "./fake-data/all-products.js";
export default function Products({ category }) {
  return (
    <ul className="products">
      {products
        .filter(
          (product) => category === product.category || category === "all"
        )
        .map((product) => (
          <li className="products--item">
            <a href={`/product/${product.id}`}>
              <div className="product">
                <div className="product-image--container">
                  <img className="product-image" src={product.image} />
                  <div className="product-image--favourite-container">
                    <img
                      className="product-image--favourite"
                      src="/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  className="product--title"
                  title={(product.title = product.title.replace("Fake: ", ""))}
                >
                  {product.title}
                </span>
              </div>
            </a>
          </li>
        ))}
    </ul>
  );
}
