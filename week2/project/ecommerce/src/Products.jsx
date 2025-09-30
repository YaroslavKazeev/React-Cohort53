export default function Products({ products }) {
  let output = <div>Error loading products. Please try again later.</div>;
  products === "error"
    ? output
    : !products || products.length === 0
    ? (output = <div>Loading products...</div>)
    : (output = (
        <ul className="products">
          {products.map((product) => (
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
                  <span className="product--title" title={product.title}>
                    {product.title}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ));
  return output;
}
