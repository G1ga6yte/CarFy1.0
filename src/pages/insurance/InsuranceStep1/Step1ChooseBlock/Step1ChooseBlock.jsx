import React from "react";
import "./Step1ChooseBlock.scss"
import {InsuranceImg} from "../../insuranceImg/insuranceImg";

function Step1ChooseBlock (){
  return(
     <div className="Step1ChooseBlock">
        <p className="header">Why choose <span>us?</span></p>
        <div className="ItemCont G-justify-between">
          
          <div className="itemBlock G-flex-column">
            <img src={InsuranceImg.rocket} alt=""/>
            <span className="name">Fast</span>
            <p className="prg">Insurance policy will come to your email in 5 minutes after payment</p>
          </div>
  
          <div className="itemBlock G-flex-column">
            <img src={InsuranceImg.like} alt=""/>
            <span className="name">Conveniently</span>
            <p className="prg">Registration and receipt of the policy is completely online: you do not need to go anywhere</p>
          </div>
  
          <div className="itemBlock G-flex-column">
            <img src={InsuranceImg.shieldLogo} alt=""/>
            <span className="name">Safely</span>
            <p className="prg">Online payment for the policy is made directly to the insurance company</p>
          </div>
  
          <div className="itemBlock G-flex-column">
            <img src={InsuranceImg.listPaper} alt=""/>
            <span className="name">Simply</span>
            <p className="prg">Minimum documents required for registration, payment - by bank card</p>
          </div>
          
        </div>
     </div>
  )
}

export default Step1ChooseBlock