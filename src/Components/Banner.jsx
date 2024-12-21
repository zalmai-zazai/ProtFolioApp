import React from "react";
import bannerImg from "../assets/banner.jpg";
import { SocialIcon } from "react-social-icons";
import { FaPhoneVolume } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Typed from "typed.js";
import { Nav } from "react-bootstrap";

function Banner() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Frontend Developer", "UI Designer"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="banner">
      <div className="profile-img"></div>
      <div className="content">
        <h3>Hi, This is</h3>
        <h1>
          Zalmai <span>Zazai</span>
        </h1>

        <h2 ref={el} />
        <p className="shortSummary">
          I am a Full Stack developer ranging from small scale websites to large
          scale eCommerce web applications. Using React, JavaScript, Stripe,
          Paypal, Coinbase commerce payment gateway integrations too !
        </p>
        <div className="buttons">
          <button className="resume">
            <a
              href="/Zalmai_Zazai_Resume.pdf"
              download="Zalmai_Zazai_Resume.pdf"
              style={{ textDecoration: "none", color: "black" }}
            >
              Download CV
            </a>
          </button>
          <button className="hire">
            <Nav.Link href="#contact">Contact</Nav.Link>
          </button>
        </div>
        <div className="bottomBanner">
          <div className="emailContact">
            <h5>
              <FcGoogle className="contact-icon ml-4" />
              {"   "}
              Shahzalmai98@gmail.com
            </h5>
            <h5>
              <FaPhoneVolume className="contact-icon ml-4" /> {"   "}
              (+1-206-670-6888)
            </h5>
          </div>

          <div className="social-media">
            <ul>
              <li>
                <SocialIcon url="https://github.com/zalmai-zazai" />
              </li>
              <li>
                <SocialIcon url="https://instagram.com/zalmai.king.1" />
              </li>
              <li>
                <SocialIcon url="https://twitter.com/ZalmaiShah" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
