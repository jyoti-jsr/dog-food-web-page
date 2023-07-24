import "./style.css";
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar-conatiner">
      <div className="navbar">
        <div className="navbar-right">
          <div className="logo">
            <img src="./images/LOGO.png" alt="" />
          </div>
          <ul className="nav-list">
            <li onClick={() => scrollToSection("aboutus")}>About us</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("product")}>Product</li>
            <li onClick={() => scrollToSection("reviews")}>Reviews</li>
            <li>FAQ</li>
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
