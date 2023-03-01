import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">MY LOGO</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/index">Home</a>
        <a href="/Lands">Lands</a>
        <a href="/Exportation">Exportation</a>
        <a href="/LegalInfo">Lands Info</a>
        <a href="/Register">Register</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
