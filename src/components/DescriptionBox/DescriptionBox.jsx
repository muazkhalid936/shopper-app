import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="desc-box">
      <b>
        <div className="desc-nav">
          <div className="desc-nav-box">Description</div>
          <div className="desc-nav-box fade">Reviews (122)</div>
        </div>
      </b>

      <div className="desc-desc">
        <p>
          Step up your casual style with our [Brand Name] T-shirt, designed for
          ultimate comfort and versatility. Made from 100% premium cotton, this
          T-shirt offers a soft, breathable fit that keeps you cool and relaxed
          all day long. The classic crew neck and tailored cut provide a modern,
          flattering look that suits any occasion, from a laid-back weekend to a
          casual day at work.
        </p>
        <p>
          Available in a range of colors, this T-shirt is perfect for layering
          or wearing on its own. Elevate your wardrobe with this essential piece
          that combines style and comfort effortlessly.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
