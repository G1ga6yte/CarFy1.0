import React from "react";
import "./InsuranceVignette.scss";
import {InsuranceImg} from "../insurance/insuranceImg/insuranceImg";
import {Link} from "react-router-dom";

function InsuranceVignette() {
  return (
     <div className="InsuranceVignette G-container">
       <div className="InsuranceBlock G-flex G-justify-between G-align-center">
         <div className="TextBlock">
           <p className="header">Protect Your Car with Reliable <span>Auto Insurance</span></p>
           <p className="prg">Whether you are an experienced driver or have just acquired your first car, auto insurance
             is an essential
             part of car ownership. It provides protection against various risks, such as accidents, theft, natural
             disasters, and other unforeseen circumstances.</p>
           
           <div className="btnBlock G-flex G-justify-between">
             <Link onClick={()=>window.scrollTo(0, 0)} className="btnLearn" to="/insurance/step1">Learn more</Link>
           </div>
         </div>
         
         <img className="shieldImg" src={InsuranceImg.shield} alt=""/>
       </div>
       
       <div className="VignetteBlock G-flex G-justify-between G-align-center">
         <div className="TextBlock">
           <p className="header">Vignette purchase</p>
           <p className="prg">All cars, motorbikes and camper vans up to 3.5 mpw (maximum permissible weight) must
             properly display a toll sticker or have purchased online in time a digital vignette when they drive onto a
             motorway or expressway.</p>
           
           <div className="btnBlock G-flex G-justify-between">
             <Link onClick={()=>window.scrollTo(0, 0)} className="btnLearn" to="/vignette">Learn more</Link>

           </div>
         </div>
         
         <img className="shieldImg" src={InsuranceImg.roadLogo} alt=""/>
       </div>
     
     </div>
  );
}

export default InsuranceVignette;