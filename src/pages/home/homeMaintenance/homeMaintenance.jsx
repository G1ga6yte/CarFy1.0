import React from "react";
import "./homeMaintenance.scss";
import {HomeImg} from "../images/homeImg";
import {Link} from "react-router-dom";
import {HomeSvg} from "../svgs/homeSvg";

function HomeMaintenance() {
  return (
     <div className="HomeMaintenance G-justify-between G-align-center">
       
       <div className="leftBlock G-flex-column">
         <p className="header G-flex-column">
           <span>The preventive </span>
           <span>maintenance package</span>
         </p>
         <p className="description">We check the manufactures recommended maintenance schedule for your vehicle to
           ensure it’s in top condition. here are the items we check:</p>
         <img className="carImgCenter" src={HomeImg.carImg2} alt=""/>
         
         <div className="acceptsBlock">
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>Fluids</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>Underhood</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>Exterior</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>Under Vehicle</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>Interior</span></div>
         
         </div>
         
         <div className="buttonsBlock">
           <Link className="G-button" to="/">Learn more</Link>
         </div>
       </div>
       
       <img className="carImgCenter" src={HomeImg.carImg2} alt=""/>
     
     </div>
  );
}

export default HomeMaintenance;