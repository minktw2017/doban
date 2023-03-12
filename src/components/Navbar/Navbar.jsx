import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <div className="side-menu">
          <ul>
            <li><Link className="link" to={"/"}>首頁</Link></li>
            <li><Link className="link" to={"https://twitter.com/DobanMedia"}>TWITTER</Link></li>
            <li><Link className="link" to={"https://www.xvideos.com/?k=%E5%8F%B0%E7%81%A3&top"}>XVIDEOS</Link></li>
          </ul>
        </div>
      )}
      <span className="logo">渡邊傳媒</span>
    </nav>
  );
};

export default Navbar;
