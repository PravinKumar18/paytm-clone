import React from "react";
import "../Assets/Css/Banner2.css";
import logo from "../Assets/Images/logo2.png";
import newbanner from "../Assets/Images/newbanner.webp";

function Banner2() {
  return (
    <div className="banner2-top">
      <div className="center">
        <p className="banner2p">Paytm Payment Instruments</p>
      </div>

      <div className="banner2-container">
        <div className="banner2-wrapup">
            <div className="wrapp">
          <img className="logo" width={100} src={logo} />
          </div>
          <p className="banner2p">
            The Fastest Way to <br />
            Pay In-store & Online.
          </p>   
          <p className="banner2pp">   
            Load up your Paytm Wallet for free and make payments
            <br />
            in a jiffy at over 21 million stores, websites and apps.
          </p>
                 
          <div>
            <button className="bannerbtn">Download Paytm App</button>
          </div>
        </div>

        <div className="banner2-wrapdown">
          <img className="bannerimgdown"  src={newbanner} />
        </div>
      </div>
    </div>
  );
}

export default Banner2;
