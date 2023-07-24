import "./style.css";

export default function Packaging() {
  return (
    <div className="packaging-container">
      <div className="packaging-header">
        Special secured packaging
        <br /> with multiple layers
      </div>
      <div className="packaging-subheader">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="packaging-content-container">
        <div className="packaging-content-left">
          <div className="packaging-content-textcontainer">
            <div className="packaging-content-header header">Feature 1</div>
            <div className="packaging-content-subheader subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
          <div className="packaging-content-textcontainer">
            <div className="packaging-content-header header">Feature 3</div>
            <div className="packaging-content-subheader subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
        </div>
        <div className="packaging-content-middle">
          <div className="packaging-content-middle-img">
            <img src="./images/Product-package.png" alt="package" />
          </div>
        </div>
        <div className="packaging-content-right">
          <div className="packaging-content-textcontainer">
            <div className="packaging-content-header header">Feature 2</div>
            <div className="packaging-content-subheader subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
          <div className="packaging-content-textcontainer">
            <div className="packaging-content-header header">Feature 4</div>
            <div className="packaging-content-subheader subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
