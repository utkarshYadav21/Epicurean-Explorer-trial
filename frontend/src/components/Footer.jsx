import React from "react";
import "../css/Home.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = () => {
    const element = document.getElementById("top-recipes-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="footer-top">
        <div className="footer-top-left">
          <h4 className="footer-head">Epicurean Explorer</h4>
          <p className="footer-left-content">
            Find the recipes that you want to taste.
          </p>
          <button className="footer-adopt-btn" onClick={scrollToSection}>
            Top recipes
          </button>
        </div>
        <div className="footer-top-center">
          <h3>Get In Touch</h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <IoLocationSharp />
            <p>Indian Institute of Information Technology-177209</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <IoMdMail />
            <p>utkarshyadav329@gmail.com</p>
          </div>
          <p style={{ marginTop: "5px" }}>Follow Us</p>
          <div style={{ display: "flex", marginTop: "8px", gap: "10px" }}>
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="footer-top-right">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/recipe">Recipes</a>
          <a href="contactus">ContactUs</a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2024 Pet Palace. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
