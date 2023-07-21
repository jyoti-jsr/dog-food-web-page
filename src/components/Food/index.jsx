import "./styles.css";

export default function Food() {
  return (
    <div className="food-container">
      <h1>Freshly made food for good health.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="food-details-container">
        <div className="text-first">
          <div className="upper text">
            <h2>Real Food</h2>
            <h6>
              Human-grade meat and veggies in simple recipes, made for dogs
            </h6>
          </div>
          <div className="lower text">
            <h2>Standard Kitchen</h2>
            <h6>Safety and quality never before available to pets</h6>
          </div>
        </div>
        <div className="food-img">
          <div className="shadow">shadow</div>
          <div className="img">
            <img
              src="./images/lamb-card.png"
              alt="lamb"
              width="95%"
              // height="397px"
            />
          </div>
        </div>
        <div className="text-second">
          <div className="upper text">
            <h2>Made Fresh</h2>
            <h6>Maintain whole food and nutritional integrity</h6>
          </div>
          <div className="lower text">
            <h2>Expert tested</h2>
            <h6>Nutrition that exceeds industry standards for dogs (AAFCO)</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
