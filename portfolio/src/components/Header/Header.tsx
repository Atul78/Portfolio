import { useState } from "react";
import portfolio from "../../assets/Screenshot 2025-02-25 130857.png";
import Icons from "../../icons/Icons";
import "./Header.css";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Icons.Home },
  { id: "skills", label: "Skills", icon: Icons.Skills },
  { id: "services", label: "Services", icon: Icons.Services },
  { id: "projects", label: "Projects", icon: Icons.Projects },
  { id: "contact", label: "Contact", icon: Icons.Contact },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header-parent">
      <div className="header-logo">
        <img src={portfolio} alt="Logo" />
      </div>
      <nav className={isMenuOpen ? "responsive-header-title" : "header-title"}>
        <ul>
          {NAV_ITEMS.map(({ id, label, icon }) => (
            <li key={id}>
              {icon("#1e90ff", 20)}
              <a href={`#${id}`} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-menu">
        <button onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isMenuOpen ? Icons.Close("#1e90ff", 28) : Icons.Menu("#1e90ff", 28)}
        </button>
      </div>
    </header>
  );
};

export default Header;
