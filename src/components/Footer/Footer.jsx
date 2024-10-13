import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import wtsp from "../Assets/whatsapp_icon.png";
import pin from "../Assets/pintester_icon.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt />
          <p>SHOPPER</p>
        </div>

        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social">
          <div className="footer-icon">
            <img src={insta} alt="Instagram" />
          </div>
          <div className="footer-icon">
            <img src={wtsp} alt="Whatsapp" />
          </div>
          <div className="footer-icon">
            <img src={pin} alt="Pintrest" />
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <hr />
        <p>Copyright @2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
