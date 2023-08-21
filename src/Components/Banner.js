import React from "react";
import "../Assets/Css/Banner.css";
import 'animate.css';
import logo from "../Assets/Images/logo2.png";
import frameimg from "../Assets/Images/frame-image.webp";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-one">
        <div>
          <img className="logo" width={100} src={logo} />
        </div>
        <div>
          <p className="animate__animated animate__backInLeft bannerp1" >India's Most-loved <br/> Payments App</p>
          <br />
          <p className="animate__animated animate__zoomIn animate__delay-1s bannerp2">
            Recharge & pay bills, book flights & movie tickets, <br />
            open a savings account, invest in stocks & mutual
            <br /> funds, and do a lot more.
          </p>
        </div>
        <div>
          <button className="animate__animated animate__zoomIn animate__delay-2s bannerbtn">Download Paytm App</button>
        </div>
      </div>

      <div className="frameimg-top">
        <img className="frameimg" width={550} src={frameimg} />
      </div>
    </div>
  );
}

export default Banner;
