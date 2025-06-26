import React from "react";
import img from "../assets/img 7.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-img">
        <img src={img} alt="chef" />
      </div>
      <div className="footer-text">
        <p>Visit us every Christmas 🍽️</p>
        <p>📍 5209 Cypress Ave, CA 90630</p>
        <p>
          © {new Date().getFullYear()} petter's kitchen. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
