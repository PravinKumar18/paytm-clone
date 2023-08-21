import React from "react";
import "../Assets/Css/Frameone.css";
import phone from "../Assets/Images/phone.png";
import bill from "../Assets/Images/bill.png";
import gas from "../Assets/Images/gas.png";
import bulb from "../Assets/Images/bulb.png";
import dth from "../Assets/Images/dth.png";
function Frameone() {
  return (


    <>
    <div className="frame1-container">
      <div>
        <p className="new">Recharge & Pay Bills on Paytm.</p>
      </div>
      <div className="frameone-up">
        <div className="frameone-down">
          <img className="frameoneimg" src={phone} />

          <p className="frameonep">
            Recharge <br />
            Prepaid
            <br />
            Mobile
          </p>
        </div>

        <div className="frameone-down">
          <img className="frameoneimg" src={bulb} />

          <p className="frameonep">
            Pay <br />
            Electricity
            <br />
            Bill
          </p>
        </div>

        <div className="frameone-down">
          <img className="frameoneimg" src={dth} />

          <p className="frameonep">
            Recharge <br />
            Dth
            <br />
            Connection
          </p>
        </div>

        <div className="frameone-down">
          <img className="frameoneimg" src={gas} />

          <p className="frameonep">
            Book<br />
            Gas
            <br />
            Cylinder
          </p>
        </div>

        <div className="frameone-down">
          <img className="frameoneimg" src={bill} />

          <p className="frameonep">
            Pay<br />
            Landline
            <br />
            Bill
          </p>
        </div>

        <div className="frameone-down">
          <img className="frameoneimg" src={phone} />

          <p className="frameonep">
            Pay <br />
            Education
            <br />
            Fee
          </p>
        </div>
      </div>
    </div>





    <div className="frame-container2">
      <div>
        <p className="new">Book & Buy on Paytm.</p>
      </div>
      <div className="frameone-up">
        <div className="frameone-down2">
          <img className="frameoneimg" src={phone} />

          <p className="frameonep2">
           Movie <br/> tickets
          </p>
        </div>

        <div className="frameone-down2">
          <img className="frameoneimg" src={bulb} />

          <p className="frameonep2">
          Flight <br/> Tickets
          </p>
        </div>

        <div className="frameone-down2">
          <img className="frameoneimg" src={dth} />

          <p className="frameonep2">
   Bus <br/> Tickets
          </p>
        </div>

        <div className="frameone-down2">
          <img className="frameoneimg" src={gas} />

          <p className="frameonep2">
            Train <br/> Tickets
          </p>
        </div>

        <div className="frameone-down2">
          <img className="frameoneimg" src={bill} />

          <p className="frameonep2">
            Pay<br />
            Landline
            <br />
            Bill
          </p>
        </div>

        <div className="frameone-down2">
          <img className="frameoneimg" src={phone} />

          <p className="frameonep2">
         Buy <br/> Insaurance
          </p>
        </div>
      </div>
    </div>
</>
  );
}

export default Frameone;
