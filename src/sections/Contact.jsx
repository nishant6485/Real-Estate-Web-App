import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
const Contact = () => {
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
      className={`contact-main-container ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <section
        id="contact"
        className={`contact-outer-container ${
          darkMode ? "contact-dark" : "contact-light"
        }`}
      >
        <div data-aos="zoom-in" className="contact-left-container">
          <span className="contact-left-heading">send us a message today</span>
          <input
            type="text"
            placeholder="enter your full name"
            className="contact-name"
          />
          <input
            type="email"
            placeholder="enter your email"
            className="contact-name"
          />
          <input
            type="tel"
            pattern="[0-9]{10}"
            maxlength="10"
            placeholder="enter your mobile number"
            className="contact-name"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="enter your message..."
            className="contact-name"
          ></textarea>
          <button className="contact-btn">SEND</button>
        </div>
        <div className="contact-right-container">
          <span
            data-aos="zoom-in"
            data-aos-delay="200"
            className="contact-right-title"
          >
            REACH US
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="400"
            className="contact-right-heading"
          >
            get in touch with us today and our team will assist you
          </span>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="contact-paragraph"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            blanditiis unde consequuntur maxime nobis fugiat repellendus
            sapiente quasi suscipit reprehenderit perspiciatis qui odit,
            aspernatur omnis. Optio quae quaerat dignissimos repellat!
          </p>
          <button data-aos="zoom-in" className="contact-us-btn">
            CONTACT US
          </button>
        </div>

        {/* <button onClick={toggleDarkMode} className="toggle-btn">
          Toggle Dark Mode
        </button> */}
      </section>
    </div>
  );
};

export default Contact;
