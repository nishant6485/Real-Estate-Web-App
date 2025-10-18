import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/assets/images/logo.png";
import { useDarkMode } from "./DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Properties",
      path: "properties",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav className={`nav-container ${darkMode ? "nav-dark" : "nav-light"}`}>
      <div id="logo" className="nav-logo">
        <img src={logo} alt="company logo" className="nav-logo-img" />
      </div>
      <ul className="nav-items">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="nav-link"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
      {/* mobile menu icon starts here */}

      <div className="mobile-icon" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? (
            <FaXmark className="mobile-menu" />
          ) : (
            <FaBars className="mobile-menu" />
          )}
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} menu-container`}
        onClick={closeMenu}
      >
        <ul className="menu-list">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="menu-dropdown"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div className="phone-cotainer">
        <div className="phone-logo">
          <FaPhoneAlt className="phone-icon" />
          <span className="phone-number">888-908-9102</span>
        </div>
        <div>
          <FaUserCircle className="phone-userCircle" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
