import { useState } from "react";
import portfolio from "../../assets/Screenshot 2025-02-25 130857.png";
import Icons from "../../icons/Icons";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header className="header-parent">
      <div className="header-logo">
        <img src={portfolio} alt="Logo" />
      </div>
      <div className={toggle ? "responsive-header-title" : "header-title"}>
        <ul>
          <li>
            {Icons.Home("#1e90ff", 20)}
            <a href="#home">Home</a>
          </li>
          <li>
            {Icons.Skills("#1e90ff", 20)}
            <a href="#skills">Skills</a>
          </li>
          <li>
            {Icons.Services("#1e90ff", 20)}
            <a href="#services">Services</a>
          </li>
          <li>
            {Icons.Projects("#1e90ff", 20)}
            <a href="#projects">Projects</a>
          </li>
          <li>
            {Icons.Contact("#1e90ff", 20)}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header-menu">
        <button onClick={toggleMenu}>
          {toggle ? Icons.Close("#1e90ff", 28) : Icons.Menu("#1e90ff", 28)}
        </button>
      </div>
    </header>
  );
};

export default Header;
