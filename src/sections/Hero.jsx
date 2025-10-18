import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <section
          id="hero"
          className="hero-section"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <span data-aos="zoom-in" className="hero-heading">
            find your next home <br /> in las vegas
          </span>
          <p data-aos="zoom-in" className="hero-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a
            similique earum delectus recusandae laudantium commodi, quidem alias
            sed qui.
          </p>
        </section>
      </div>
      {/* form starts here */}

      <div className={darkMode ? "dark" : "light"}>
        <div data-aos="zoom-in" id="form" className="form-container">
          <div className="location-container">
            <h1 className="location-title">LOCATION</h1>
            <input
              type="text"
              placeholder="enter an address, state, city or pincode"
              className="location-input"
            />
          </div>
          <div className="type-container">
            <h1 className="type-title">TYPE</h1>
            <select
              name="selectoption"
              id="selectoption"
              className="type-select"
            >
              <option value="" disabled selected>
                select property
              </option>
              <option value="option1">rentals</option>
              <option value="option2">sales</option>
              <option value="option3">commercial</option>
            </select>
          </div>

          <div className="category-container">
            <h1 className="category-title">CATEGORY</h1>
            <select
              name="selectoption"
              id="selectoption"
              className="category-select"
            >
              <option value="" disabled selected>
                property category
              </option>
              <option value="option1">apartment</option>
              <option value="option2">duplex</option>
              <option value="option3">condos</option>
              <option value="option3">houses</option>
              <option value="option3">villas</option>
            </select>
          </div>
          <div className="hero-btn">
            <button className="hero-submit">submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
