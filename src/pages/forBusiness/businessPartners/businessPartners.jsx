import React from "react";
import "./businessPartners.scss"
import {BusinessSvg} from "../svgs/businessSvg";

function BusinessPartners () {
  return(
     <div className="BusinessPartners G-container">
        <p className="header">Recommendations for <span>partners</span></p>
       
       <div className="typesBlock G-justify-between">
          <div className="type">
            <img src={BusinessSvg.carService1} alt=""/>
            <p className="miniHeader">Office availability</p>
            <p className="prg">This will create a unified image of the company in the eyes of drivers</p>
          </div>
         <div className="type">
           <img src={BusinessSvg.carService2} alt=""/>
           <p className="miniHeader">Certified staff</p>
           <p className="prg">In this way we create a high level of service for our customers and reduce the possible number of further requests for support.</p>
         </div>
         <div className="type">
           <img src={BusinessSvg.carService3} alt=""/>
           <p className="miniHeader">Remote support channel</p>
           <p className="prg">The personnel of our partners should be able to solve the problem remotely, including on weekends</p>
         </div>
       </div>
     </div>
  )
}
export default BusinessPartners