import "./style.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-left-content">
          <div className="footer-left-text">Free Health and Nutrition Tips</div>

          <div className="footer-left-input-box">
            <input type="email" name="email" placeholder="Enter email" />
            <div className="footer-left-input-button">
              <img src="./images/Iconly.png" alt="" />
            </div>
          </div>
        </div>

        <div className="footer-middle-content">
          <div className="footer-middle-content-icon">
            <img src="./images/facebook.png" alt="" />
          </div>
          <div className="footer-middle-content-icon">
            <img src="./images/facebook.png" alt="" />
          </div>
          <div className="footer-middle-content-icon">
            <img src="./images/instagram.png" alt="" />
          </div>
          <div className="footer-middle-content-icon">
            <img src="./images/instagram.png" alt="" />
          </div>
        </div>
        <div className="footer-rightt-content">
          <div className="footer-rightt-content-header">
            Made with love in India
          </div>
          <div className="footer-rightt-content-subheader">© 2021 name™</div>
          <div className="footer-rightt-content-policy">
            Privacy Policy . Terms and Conditions
          </div>
        </div>
      </div>
    </div>
  );
}
