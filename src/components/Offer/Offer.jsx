import React from "react";
import "./Offer.css";
import img from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        {" "}
        <p>Exclusive</p>
        <p>Offers For You</p>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="check">Chect Now</button>
      </div>

      <div className="offer-right">
        <img src={img} />
      </div>
    </div>
  );
};

export default Offer;
