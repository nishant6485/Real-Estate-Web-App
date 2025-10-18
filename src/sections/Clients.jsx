import React, { useEffect } from "react";
import "./Clients.css";
import { client } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const Clients = () => {
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
      className={`client-main-container ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <section id="testimonials" className="client-outer-container">
        <div className="clients-container">
          <span data-aos="zoom-in" className="clients-title">
            OUR CLIENTS
          </span>
          <span data-aos="zoom-in" className="clients-heading">
            what are our clients <br /> say about us?
          </span>
        </div>
        <div id="client-box" className="client-box">
          {client.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="inner-client-box"
            >
              <div className="client-images">
                <img src={item.image} alt="" className="inner-client-images" />
                <div className="client-name-container">
                  <span className="client-name">{item.name}</span>
                  <span className="client-text">{item.text}</span>
                </div>
              </div>
              <p className="client-feedback">{item.feedback}</p>
              <div className="outer-client-star">
                <FaStar className="inner-client-star" />
                <FaStar className="inner-client-star" />
                <FaStar className="inner-client-star" />
                <FaStar className="inner-client-star" />
                <FaStar className="inner-client-star" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
