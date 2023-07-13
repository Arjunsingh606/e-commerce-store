import React, { Fragment } from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-title">
            <h2>E commerce Store</h2>
          </div>
          <div className="footer-item">
            <h3 className="footerItemHeading">Products</h3>
            <ul>
              <li>Fashion</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Shoes</li>
            </ul>
          </div>
          <div className="footer-item">
            <h3 className="footerItemHeading">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Partnership</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="footer-item">
            <h3 className="footerItemHeading">Social</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="copywrite">@ All Rights are reserved</div>
      </div>
    </>
  );
};

export default Footer;
