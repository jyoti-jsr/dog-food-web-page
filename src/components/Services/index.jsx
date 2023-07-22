import "./style.css";
export default function Services() {
  return (
    <div className="services-container">
      <div className="servcies-header">Our Services for you</div>
      <div className="services-sub-header">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div className="services-cards-container">
        <div className="service-card card1">
          <div className="service-card-img">
            <img src="./images/GroupIcon-1.png" alt="" />
          </div>
          <div className="service-card-header">Vitamins and minerals</div>
          <div className="service-card-details">
            HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="service-card card2">
          <div className="service-card-img">
            <img src="./images/GroupIcon-2.png" alt="" />
          </div>
          <div className="service-card-header">Vitamins and minerals</div>
          <div className="service-card-details">
            HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="service-card card3">
          <div className="service-card-img">
            <img src="./images/GroupIcon-3.png" alt="" />
          </div>
          <div className="service-card-header">Vitamins and minerals</div>
          <div className="service-card-details">
            HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
}
