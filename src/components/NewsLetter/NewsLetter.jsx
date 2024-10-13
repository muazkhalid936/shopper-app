import React from "react";
import "./NewLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1 className="newsletter-h1">Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div className="new-email">
        <input type="email" placeholder="Your Email" />
        <button>
          <b>Subscribe</b>
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
