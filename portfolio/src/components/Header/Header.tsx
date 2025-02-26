import { useState } from "react";
import portfolio from "../../assets/Screenshot 2025-02-25 130857.png";
import Icons from "../../icons/Icons";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  }

  return (
    <header className="header-parent">
      <div className="header-logo">
        <img src={portfolio} alt="network error" />
      </div>
      <div className={toggle ? "responsive-header-title": 'header-title'}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Certificates</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="header-menu">
        <button onClick={toggleMenu}>{Icons.Menu("#7c7cff", 28)}</button>
      </div>
    </header>
  );
};

export default Header;
