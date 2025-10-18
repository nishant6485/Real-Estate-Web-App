import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import area1 from "../assets/assets/images/area1.jpg";
import area2 from "../assets/assets/images/area2.jpg";
import area3 from "../assets/assets/images/area3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PopularAreas.css";

const PopularAreas = () => {
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
    <div
      className={
        darkMode ? "popularareas-container dark" : "popularareas-container light"
      }
    >
      <section className="popularareas-section">
        <div id="top" className="popularareas-superset">
          <div className="popularareas-subset">
            <span data-aos="zoom-in" className="popularareas-title">
              popular areas
            </span>
            <h1 data-aos="zoom-in" className="popularareas-heading">
              explore most<br></br>popular areas
            </h1>
          </div>
          <div className="popularareas-content">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="popular-areas-card"
              style={{ backgroundImage: `url(${area1})` }}
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="popular-areas-card"
              style={{ backgroundImage: `url(${area2})` }}
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="popular-areas-card"
              style={{ backgroundImage: `url(${area3})` }}
            ></div>
          </div>
        </div>
        <div id="bottom" className="popular-areas-bottom">
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="popular-areas-bottom-item"
          >
            <span className="popular-areas-bottom-heading">5K</span>
            <h3>
              ACTIVE <br />LISTIGS
            </h3>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="popular-areas-bottom-item"
          >
            <span className="popular-areas-bottom-heading">9K</span>
            <h3>
              SOLID <br />LISTIGS
            </h3>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="popular-areas-bottom-item"
          >
            <h1 className="popular-areas-bottom-heading">6K</h1>
            <h3>
              CLIENTS <br />WE'VE SERVED
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
