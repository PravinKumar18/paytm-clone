import React from "react";
import "../Assets/Css/Banner3.css";
import hdfc from "../Assets/Images/hdfc.png";
import sbi from "../Assets/Images/sbi.png";
import debit from "../Assets/Images/debit.webp";
import credit from "../Assets/Images/credit.webp";

function Banner3() {
  return (
    <div className="banner3-container">
      <div className="banner3-up">
        <div>
          <img className="hdfc" width={200} src={hdfc} />
        </div>
        <div>
          <p className="banner3-p">
            Unlimited Cashback
            <br />
            Every time
          </p>
        </div>
        <div>
          <p className="banner3pp">
            Paytm HDFC Bank Select Credit Card. A card <br />
            with assured Cashback and incredible offers.
          </p>
        </div>
        <div>
          <img  className="debit" src={debit} />
        </div>
      </div>
     

      <div className="banner3-up">
        <div>
          <img className="sbi" width={200} src={hdfc} />
        </div>
        <div>
          <p className="banner3-p">
          India’s Most <br/>   
Sincere Credit Card
          </p>
        </div>
        <div>
          <p className="banner3pp">
          Paytm SBI Card SELECT - With Intelligent<br/> Features & Great Rewards that Never Expire

          </p>
        </div>
        <div>
          <img  className="debit" src={credit} />
        </div>
      </div>

     


     
    </div>
  );
}

export default Banner3;
