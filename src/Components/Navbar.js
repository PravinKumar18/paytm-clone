import React, { useState } from "react";
import paytmlogo from "../Assets/Images/paytmlogo.png";
import '../Assets/Css/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div>
        <img className="mainlogo"  src={paytmlogo} alt="Paytm Logo" />
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul className="navul">
          <li className="navli">Paytm for Consumer</li>
          <li className="navli">Paytm for Business</li>
          <li className="navli">Investor Relations</li>
          <li className="navli">Company</li>
          <li className="navli">Career</li>
        </ul>
        <button className="navbtn">Sign In</button>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
      </div>
    </nav>
  );
}

export default Navbar;

