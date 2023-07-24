import "./style.css";

export default function BottomAddressBar() {
  return (
    <div className="bottom-address-bar-container">
      <div className="bottom-address-bar-card">
        <div className="bottom-address-bar-content">
          <div className="bottom-address-bar-icon">
            <img src="./images/Location.png" alt="" />
          </div>
          Address
        </div>
        <div className="bottom-address-bar-content">
          <div className="bottom-address-bar-icon">
            <img src="./images/Call.png" alt="" />
          </div>
          Contact
        </div>
        <div className="bottom-address-bar-content">
          <div className="bottom-address-bar-icon">
            <img src="./images/Message.png" alt="" />
          </div>
          mail
        </div>
      </div>
    </div>
  );
}
