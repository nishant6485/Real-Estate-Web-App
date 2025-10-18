import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaMapMarkedAlt,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Properties.css";
const Properties = () => {
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
    <div className={darkMode ? "properties-dark" : "properties-light"}>
      <section id="properties" className="properties-section">
        <div className="properties-item">
          <span data-aos="zoom-in" className="properties-item-title">
            PROPERTIES
          </span>
          <h1 data-aos="zoom-in" className="properties-item-heading">
            explore the latest properties available
          </h1>
        </div>
        {/* properties grids starts from here */}
        <div id="grid-box" className="properties-grid-box">
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="properties-grid-item"
            >
              <div
                id="image-box"
                className="properties-image-box"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div id="top" className="properties-image-top">
                  <div>
                    <button className="properties-image-top-btn">
                      featured
                    </button>
                  </div>
                  <div className="properties-image-top-right-btn">
                    <button className="properties-image-top-btn">Sales</button>
                    <button className="properties-image-top-btn">Active</button>
                  </div>
                </div>
                <div id="bottom" className="properties-image-bottom">
                  <div className="properties-image-bottom-address">
                    <FaMapMarkerAlt className="properties-image-bottom-mapmarker" />
                    <span className="properties-image-bottom-mapmarker">
                      {item.address}{" "}
                    </span>
                  </div>
                  <div className="properties-image-bottom-icons">
                    <FaVideo className="icon" />
                    <FaCamera className="icon" />
                  </div>
                </div>
              </div>
              <div className="properties-container">
                <span className="properties-name"> {item.name} </span>
                <span className="properties-price">{item.price}</span>
                <p className="properties-about">{item.about}</p>
                <div id="icons" className="properties-outer">
                  <div className="properties-icons">
                    <FaBath className="properties-bath-icon" />
                    <span className="properties-bath-icon-count">
                      {item.bath}
                    </span>
                  </div>
                  <div className="properties-icons">
                    <FaBed className="properties-bath-icon" />
                    <span className="properties-bath-icon-count">
                      {item.bed}
                    </span>
                  </div>
                  <div className="properties-icons">
                    <MdSpaceDashboard className="properties-bath-icon" />
                    <span className="properties-bath-icon-count">
                      {item.area}
                    </span>
                  </div>
                </div>
                <div className="properties-owner"></div>
                <div id="owner-info" className="properties-owner-info">
                  <div className="properties-owner-items">
                    <FaUserCircle className="owner-icon" />
                    <span className="owner-name">{item.owner}</span>
                  </div>
                  <div className="properties-social-icons">
                    <div className="social-icons">
                      <FaShareAlt className="share-icon" />
                    </div>
                    <div className="social-icons">
                      <FaHeart className="share-icon" />
                    </div>
                    <div className="social-icons">
                      <FaPlus className="share-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
