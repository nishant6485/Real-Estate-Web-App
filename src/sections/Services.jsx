import React, { useEffect } from "react";
import "./Services.css";
import { service } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
    <div className={`main-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <section
        id="services"
        className={`services ${darkMode ? "services-dark" : "services-light"}`}
      >
        <div className="outer-container">
          <span data-aos="zoom-in" className="services-title">
            our services
          </span>
          <span data-aos="zoom-in" className="services-heading">
            top real estate <br />
            services available
          </span>
        </div>
        <div id="service-box" className="services-outer-box">
          {service.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="services-box"
            >
              <div className="services-inner-box">
                <item.icon className="services-icon-container" />
              </div>
              <span className="services-inner-title">{item.title}</span>
              <p className="services-inner-paragraph">{item.desc}</p>
              <button className="box-inner-btn">READ MORE</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
