import React, { useEffect } from "react";
import "./About.css";
import aboutimg from "../assets/assets/images/about.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import { FaStar } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="about"
      className={darkMode ? "about-section dark" : "about-section light"}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimg}
          alt="about image"
          className="about-img"
        />
      </div>
      <div className="about-container">
        <span data-aos="zoom-in" className="about-title">
          WHO WE ARE
        </span>
        <span data-aos="zoom-in" data-aos-delay="200" className="about-heading">
          We help clients buy and sell houses since 1989
        </span>
        <p data-aos="zoom-in" data-aos-delay="400" className="about-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
          fugit eaque debitis culpa quasi, iure sit optio aspernatur non
          deleniti ipsam quos vitae quidem suscipit!
        </p>
        <button data-aos="zoom-in" className="about-btn">
          read more
        </button>
      </div>
    </section>
  );
};

export default About;
