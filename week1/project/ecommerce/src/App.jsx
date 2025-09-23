function App() {
  return (
    <>
      <div id="root">
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
        <div class="categories">
          <div class="categories--item">electronics</div>
          <div class="categories--item">jewelery</div>
          <div class="categories--item">men's clothing</div>
          <div class="categories--item">women's clothing</div>
        </div>
        <ul class="products">
          <li class="products--item">
            <a href="/product/1">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                >
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/2">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Mens Casual Premium Slim Fit T-Shirts "
                >
                  Mens Casual Premium Slim Fit T-Shirts
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/3">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span class="product--title" title="Mens Cotton Jacket">
                  Mens Cotton Jacket
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/4">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span class="product--title" title="Mens Casual Slim Fit">
                  Mens Casual Slim Fit
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/5">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="John Hardy Women's Legends Naga Gold &amp; Silver Dragon Station Chain Bracelet"
                >
                  John Hardy Women's Legends Naga Gold &amp; Silver Dragon
                  Station Chain Bracelet
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/6">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Solid Gold Petite Micropave "
                >
                  Solid Gold Petite Micropave
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/7">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span class="product--title" title="White Gold Plated Princess">
                  White Gold Plated Princess
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/8">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Pierced Owl Rose Gold Plated Stainless Steel Double"
                >
                  Pierced Owl Rose Gold Plated Stainless Steel Double
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/9">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="WD 2TB Elements Portable External Hard Drive - USB 3.0 "
                >
                  WD 2TB Elements Portable External Hard Drive - USB 3.0
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/10">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
                >
                  SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/11">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
                >
                  Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance
                  Boost SATA III 2.5
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/12">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
                >
                  WD 4TB Gaming Drive Works with Playstation 4 Portable External
                  Hard Drive
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/13">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
                >
                  Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS
                  Ultra-Thin
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/14">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
                >
                  Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor
                  (LC49HG90DMNXZA) – Super Ultrawide Screen QLED
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/15">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
                >
                  BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/16">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
                >
                  Lock and Love Women's Removable Hooded Faux Leather Moto Biker
                  Jacket
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/17">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Rain Jacket Women Windbreaker Striped Climbing Raincoats"
                >
                  Rain Jacket Women Windbreaker Striped Climbing Raincoats
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/18">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="MBJ Women's Solid Short Sleeve Boat Neck V "
                >
                  MBJ Women's Solid Short Sleeve Boat Neck V
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/19">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="Opna Women's Short Sleeve Moisture"
                >
                  Opna Women's Short Sleeve Moisture
                </span>
              </div>
            </a>
          </li>
          <li class="products--item">
            <a href="/product/20">
              <div class="product">
                <div class="product-image--container">
                  <img
                    class="product-image"
                    src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png"
                  />
                  <div class="product-image--favourite-container">
                    <img
                      class="product-image--favourite"
                      src="./src/assets/heart-regular.svg"
                    />
                  </div>
                </div>
                <span
                  class="product--title"
                  title="DANVOUY Womens T Shirt Casual Cotton Short"
                >
                  DANVOUY Womens T Shirt Casual Cotton Short
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
