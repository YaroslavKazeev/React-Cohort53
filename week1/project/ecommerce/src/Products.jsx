import products from "./fake-data/all-products.js";
export default function Products() {
  return (
    <ul class="products">
      {products.map((product) => (
        <li class="products--item">
          <a href={`/product/${product.id}`}>
            <div class="product">
              <div class="product-image--container">
                <img class="product-image" src={product.image} />
                <div class="product-image--favourite-container">
                  <img
                    class="product-image--favourite"
                    src="./src/assets/heart-regular.svg"
                  />
                </div>
              </div>
              <span
                class="product--title"
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
