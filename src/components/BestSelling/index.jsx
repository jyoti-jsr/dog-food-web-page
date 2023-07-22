import "./style.css";
export default function BestSelling() {
  let cards = [1, 2, 3];
  return (
    <div className="bestSelling-container">
      <div className="bestSelling-header">Our best selling product</div>
      <div className="bestSelling-subHeader">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="bestSelling-products-container">
        {cards.map((card) => (
          <div className="bestSelling-product-card" key={card}>
            <div className="bestSelling-product-card-img-container">
              <img
                src="./images/BestSellingProduct.png"
                alt="best-selling-product"
              />
            </div>
            <div className="bestSelling-products-card-with-shadow">
              <div className="bestSelling-product-header">Product Name</div>
              <div className="bestSelling-product-price">Price</div>
              <div className="bestSelling-product-buy-button">Buy Now</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
