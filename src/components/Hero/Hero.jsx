import React from "react";
import hand_logo from "../Assets/hand_icon.png";
import hero_img from "../Assets/hero_image.png";
import arrow from "../Assets/arrow.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <h2>New Arrivals only</h2>

        <div className="fonts">
          <div className="new">
            <span>New</span>
            <img src={hand_logo} />
          </div>
          <div className="col">
            <span>Collections</span>
            <span>For Everyone</span>
          </div>
        </div>

        <div className="collection-btn">
          <p>Latest Collections</p>
          <img src={arrow} alt="123123" className="arrow" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} />
      </div>
    </div>
  );
};

export default Hero;
