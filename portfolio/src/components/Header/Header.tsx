// import portfolio from "../../assets/portfolio.webp";
import portfolio from "../../assets/Screenshot 2025-02-25 130857.png"
import './Header.css'

const Header = () => {
  return (
    <header className="header-parent">
      <div className="header-logo">
        <img src={portfolio} alt="network error" />
      </div>
      <div className="header-title">
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
    </header>
  );
};

export default Header;
