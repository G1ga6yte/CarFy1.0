import React from "react";
import "./step1HeadBlock.scss";
import {InsuranceImg} from "../../insuranceImg/insuranceImg";

function Step1HeadBlock() {
  return (
     <div className="step1HeadBlock G-container G-flex G-justify-between G-align-center">
       <div className="TextBlock">
         <p className="header">Protect Your Car with Reliable <span>Auto Insurance</span></p>
         <p className="prg">Whether you are an experienced driver or have just acquired your first car, auto insurance is an essential
           part of car ownership. It provides protection against various risks, such as accidents, theft, natural
           disasters, and other unforeseen circumstances.</p>
         
         <div className="btnBlock G-flex G-justify-between">
           <button className="btnPay">Pay</button>
           <button className="btnLearn">Learn more</button>
         </div>
       </div>
       
       <img className="shieldImg" src={InsuranceImg.shield} alt=""/>
     </div>
  );
}

export default Step1HeadBlock;