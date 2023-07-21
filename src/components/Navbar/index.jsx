import "./style.css";
const Navbar = () => {
  return (
    <div className="navbar-conatiner">
      <div className="navbar">
        <div className="navbar-right">
          <div className="logo">
            <img src="./images/LOGO.png" alt="" />
          </div>
          <ul className="nav-list">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-left">
          <img src="./images/login.png" alt="login-button" />
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
