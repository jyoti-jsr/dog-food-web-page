import "./styles.css";

export default function Food() {
  return (
    <div className="food-container" id="product">
      <div className="header-text">Freshly made food for good health.</div>
      <div className="header-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="food-details-container">
        <div className="right">
          <div className="text">
            <div className="header">Real Food</div>
            <div className="sub-heading">
              Human-grade meat and veggies in simple recipes, made for dogs
            </div>
          </div>
          <div className="text">
            <div className="header">Standard Kitchen</div>
            <div className="sub-heading">
              Safety and quality never before available to pets
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="shadow"></div>
          <div className="img-container">
            {/* img */}
            <img src="./images/lamb-card.png" alt="lamb" />
          </div>
        </div>
        <div className="left">
          <div className="text">
            <div className="header">Made Fresh</div>
            <div className="sub-heading">
              Maintain whole food and nutritional integrity
            </div>
          </div>
          <div className="text">
            <div className="header">Expert tested</div>
            <div className="sub-heading">
              Nutrition that exceeds industry standards for dogs (AAFCO)
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <img src="./images/See-your-recipes.png" alt="recipes" />
      </div>
    </div>
  );
}
