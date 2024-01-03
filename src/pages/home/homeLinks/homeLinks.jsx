import React from "react";
import "./homeLinks.scss";
import {Link} from "react-router-dom";
import {HomeSvg} from "../svgs/homeSvg";
import {HomeImg} from "../images/homeImg";


function HomeLinks() {
  return (
     <div className="HomeLinks G-container G-justify-between G-align-center">
       <Link class="LinkBlock G-flex-column" to="/">
         <img className="logo" src={HomeSvg.gpsPoint} alt=""/>
         <span>Find</span>
         <span>a service</span>
         <img className="png1" src={HomeImg.map} alt=""/>
       </Link>
       
       <Link class="LinkBlock G-flex-column" to="/">
         <img className="logo" src={HomeSvg.bankIcon} alt=""/>
         <span>Check the fine</span>
         <img className="png2" src={HomeImg.roadSign} alt=""/>
       </Link>
       
       <Link class="LinkBlock G-flex-column" to="/">
         <img className="logo" src={HomeSvg.rocket} alt=""/>
         <span>Become</span>
         <span>a partner</span>
         <img className="underLine" src={HomeSvg.underLine} alt=""/>
         <img className="png3" src={HomeImg.contract} alt=""/>
       </Link>
       
       <Link class="LinkBlock G-flex-column" to="/">
         <img className="logo" src={HomeSvg.shield} alt=""/>
         <span>Insurance </span>
         <span>& vignette</span>
         <img className="png4" src={HomeImg.shield} alt=""/>
       </Link>
     
     </div>
  );
}

export default HomeLinks;