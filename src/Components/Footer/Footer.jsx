import React from "react";
import "./footer.css";
import { FaFacebookF,FaTwitter,FaInstagram,FaPinterestP,FaYoutube   } from "react-icons/fa";

import FooterLinks from "./FooterLinks";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-flex-left  flex-width flex-mob responsive-flex">
        <img src="images/logo.png" alt="" className="img-logo" />

        <p className="footer-contact">
          <strong>Contact</strong>
        </p>

        <div className="flex-contact">
          <p className="footer-address">
            <strong>Address:</strong> 562 Wellington Road treet 32.San Francisco
          </p>
          <p className="footer-phone">
            <strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789
          </p>
          <p className="footer-Hours">
            <strong>Hours:</strong> 10.00 - 18.00.Mon - Sat
          </p>
        </div>

        <p className="footr-social-media-contact">
          <strong>Follow Us</strong>
        </p>
        <div className="footer-social-icons">
          <a href="#" className="numberwise-icons">
          <FaFacebookF />
          </a>
          <a href="#" className="numberwise-icons">
        <FaTwitter />
          </a>
          <a href="#" className="numberwise-icons">
            <FaInstagram />
          </a>
          <a href="#" className="numberwise-icons">
            <FaPinterestP />
          </a>
          <a href="#" className="numberwise-icons">
        <FaYoutube />
          </a>
        </div>
      </div>

      <FooterLinks
        f_Name="About"
        footer_link_1="About Us"
        footer_link_2="Delievery Information"
        footer_link_3="Privacy Policy"
        footer_link_4="Terms & Conditions"
        footer_link_5="Contact Us"
      />
      <FooterLinks
        f_Name="My Account"
        footer_link_1="Sign In"
        footer_link_2="View Cart"
        footer_link_3="My Wishlist"
        footer_link_4="Track My Order"
        footer_link_5="Help"
      />

      <div className="footer-flex-right flex-width mob-media">
        <p className="footer-apps">
          <strong>Install App</strong>
        </p>
        <p className="footer-appstore-dis">From App Store or Google Play</p>
        <div className="footer-app-img">
          <img src="images/pay/app.jpg" alt="" className="apps" />
          <img src="images/pay/play.jpg" alt="" className="apps" />
        </div>
        <p className="footer-payment-dis">Secure Payment Gateways</p>
        <img
          src="images/pay/pay.png"
          alt=""
          className="footer-payment-methods"
        />
      </div>
      <div className="copyright">
        <span className="c">©</span> 2021.Teck2 etc - (C  a  r  a) Medi Mart
      </div>
    </footer>
  );
};

export default Footer;
