import React from "react";
import "./businessSoftware.scss"
import {BusinessImg} from "../images/businessImg";
import {BusinessSvg} from "../svgs/businessSvg";

function BusinessSoftware (){
  return(
     <div className="businessSoftware G-container G-justify-between">
        <p className="header">Software for <span>partners</span></p>
       
       <div className="softwareBlock G-justify-center G-flex-column">
         <img src={BusinessImg.softwareImg} alt=""/>
         <p className="prg G-align-center">
           <img src={BusinessSvg.barChart} alt=""/>
           Statistics on clients and the ability to obtain summary data for any period.
         </p>
       </div>
       <div className="softwareBlock G-justify-center G-flex-column">
         <p className="prg G-align-center">
           <img src={BusinessSvg.creditCard} alt=""/>
           Statistics on clients and the ability to obtain summary data for any period.
         </p>
         <img src={BusinessImg.softwareImg} alt=""/>

       </div>
     </div>
  )
}

export default BusinessSoftware
