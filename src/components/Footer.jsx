import React from "react";
import "./Footer.css";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/assets/images/prop7.jpg";
import prop8 from "../assets/assets/images/prop8.jpg";
const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer
        className={`footer-container ${
          darkMode ? "footer-dark" : "footer-light"
        }`}
      >
        <div className="footer-parent">
          <span className="footer-about">about us</span>
          <p className="footer-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quia sequi itaque repellendus minima iure animi ea nihil magnam
            numquam?
          </p>
          <div id="social-icons" className="footer-social-icons">
            <div className="footer-icons">
              <FaFacebookF className="footer-common-icon" />
            </div>
            <div className="footer-icons">
              <FaInstagram className="footer-common-icon" />
            </div>
            <div className="footer-icons">
              <FaTwitter className="footer-common-icon" />
            </div>
            <div className="footer-icons">
              <FaYoutube className="footer-common-icon" />
            </div>
          </div>
          <span className="footer-reserved">
            copyright real estate, all rights reserved
          </span>
        </div>
        <div className="footer-contact">
          <span className="footer-contact-us">contact us</span>
          <div className="footer-contact-icons">
            <FaBuilding className="footer-building" />
            <p className="footer-contact-paragraph">
              10845 Griffith Peak Dr, Las Vegas, NV 89135
            </p>
          </div>
          <div className="footer-contact-icons">
            <FaMobile className="footer-building" />
            <p className="footer-contact-paragraph">+91 879 098 8901</p>
          </div>
          <div className="footer-contact-icons">
            <FaFax className="footer-building" />
            <p className="footer-contact-paragraph">+91 123 678 0912</p>
          </div>
          <div className="footer-contact-icons">
            <IoMdMail className="footer-building" />
            <p className="footer-contact-paragraph">office23@gmail.com</p>
          </div>
        </div>
        <div className="footer-prperties">
          <span className="footer-latest-properties">latest properties</span>
          <div className="footer-images">
            <img src={prop7} alt="" className="footer-prop7" />
            <div>
              <span className="footer-prperties-title">
                Villa with amazing view
              </span>
              <p className="footer-properties-price">$ 287.98</p>
            </div>
          </div>
          <div className="footer-images">
            <img src={prop8} alt="" className="footer-prop7" />
            <div>
              <span className="footer-prperties-title">Sea View Villa</span>
              <p className="footer-properties-price">$ 789.23</p>
            </div>
          </div>
        </div>
      </footer>
      {/* slide to top btn */}
      <div id="icon-box" className="footer-icon-box">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="footer-arrow-up" />
        </Link>
      </div>
      {/* dark mode toggle btn section */}
      <div>
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? (
            <FaMoon className="dark-icon" />
          ) : (
            <FaSun className="dark-icon" />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
