import "./style.css";
export default function TopBanner() {
  return (
    <div className="top-banner-container " id="aboutus">
      <div className="banner-text">
        <div className="text-container">
          <h1>
            Best Organic food for <br /> your dog
          </h1>
          <h4>Real Food • Made Fresh • Delivered</h4>
          <div className="signup-button">
            <img src="./images/Signup.png" alt="signup-button" />
          </div>
        </div>
      </div>
      <div className="banner-img">
        <div className="img-container">
          <img
            src="./images/BannerDog.png"
            alt="banner-img"
            height="100%"
            // width="100%"
          />
        </div>
      </div>
    </div>
  );
}
