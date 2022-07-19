import logo from "../../public/assets/images/airbnb-logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Airbnb's logo" />
    </header>
  );
}

export default Header;
