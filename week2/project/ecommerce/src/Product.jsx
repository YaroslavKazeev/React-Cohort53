export default function Product({ product }) {
  let output = <div>Error loading product. Please try again later.</div>;
  product === "error"
    ? output
    : !product || product.length === 0
    ? (output = <div>Loading product...</div>)
    : (output = (
        <div class="product-details" data-testid="product-details-page">
          <div class="title-container">
            <h1 class="title-container--title">{product.title}</h1>
          </div>
          <div class="product-details--information">
            <div class="product-details--image">
              <div class="product-image--container">
                <img
                  class="product-image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>
            <p class="product-details--description">{product.description}</p>
          </div>
        </div>
      ));
  return output;
}
