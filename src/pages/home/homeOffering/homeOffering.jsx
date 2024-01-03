import React from "react";
import "./homeOffering.scss"
import {HomeSvg} from "../svgs/homeSvg";

function HomeOffering (){
  return(
     <div className="HomeOffering">
        <p className="header">What we are <span>offering</span></p>
       
       <div className="offers G-justify-between G-align-top">
          <div className="offer">
            <img className="offerLogo" src={HomeSvg.offer1} alt=""/>
            <p className="offerHeader">COVID-19 BARRIERS</p>
            <p className="offerPrg">We use weather-seal during installation to ensure an airtight fit.</p>
          </div>
  
         <div className="offer">
           <img className="offerLogo" src={HomeSvg.offer2} alt=""/>
           <p className="offerHeader">COVID-19 DEEP CLEANING</p>
           <p className="offerPrg">We eradicate bacteria and viruses on virtually all surfaces of the vehicle and the air inside.</p>
         </div>
  
         <div className="offer">
           <img className="offerLogo" src={HomeSvg.offer3} alt=""/>
           <p className="offerHeader">PREVENTIVE MAINTENANCE</p>
           <p className="offerPrg">We provide scheduled maintenance for your vehicle to keep it in top condition.</p>
         </div>
  
         <div className="offer">
           <img className="offerLogo" src={HomeSvg.offer4} alt=""/>
           <p className="offerHeader">PM LUBE PACKAGE</p>
           <p className="offerPrg">Our oil change service is designed to meet the needs of your vehicle</p>
         </div>
       </div>
     </div>
  )
}

export default HomeOffering