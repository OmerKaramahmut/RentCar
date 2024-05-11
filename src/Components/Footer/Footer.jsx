import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerPage">
        <div className="footerTop">
          <h1>SOYKAN RENTAL</h1>
        </div>
        <div className="footerMenu">
          <div className="menuItem">
            <ul>
              <h1>Our dealerships</h1>
              <li>
                <a href="">Turkiye</a>
              </li>
              <li>
                <a href="">Germany</a>
              </li>
              <li>
                <a href="">France</a>
              </li>
              <li>
                <a href="">Greece</a>
              </li>
            </ul>
            <ul>
              <h1>Help</h1>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <ul>
              <h1>Social Media</h1>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
              <li>
                <a href="">İnstagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBot">
          <h3>All our rights reserved © 2024</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
