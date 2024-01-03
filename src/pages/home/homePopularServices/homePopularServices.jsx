import React from "react";
import "./HomePopularServices.scss"
import {HomeSvg} from "../svgs/homeSvg";
import {HomeImg} from "../images/homeImg";

function HomePopularServices (){
  return(
     <div className="HomePopularServices G-flex-column G-align-center">
        <p className="header">Our most <span>popular services</span></p>
       <div className="contentBlock G-flex G-justify-between G-align-top">
          <div className="servicesBlock G-flex-column">
            <div className="service G-align-center"><span>Fleet services</span><img src={HomeSvg.settings} alt=""/></div>
            <div className="service G-align-center"><span>State of the art technology</span><img src={HomeSvg.speedometer} alt=""/></div>
            <div className="service G-align-center"><span>Convenient location</span><img src={HomeSvg.gpsPoint2} alt=""/></div>
          </div>
         <img className="serviceImg" src={HomeImg.carImg3} alt=""/>
         <div className="servicesBlock G-flex-column">
           <div className="service G-align-center"><img src={HomeSvg.certificate1} alt=""/><span>Ase-certified technicians</span></div>
           <div className="service G-align-center"><img src={HomeSvg.certificate2} alt=""/><span>Membership program</span></div>
           <div className="service G-align-center"><img src={HomeSvg.saleIcon} alt=""/><span>Affordable prices</span></div>
         </div>
       </div>
       
       <div className="ServiceCont G-flex-column G-align-center">
         <img src={HomeSvg.settings} alt=""/>
         <p className="servicePrg">Fleet services</p>
         <img src={HomeSvg.speedometer} alt=""/>
         <p className="servicePrg">State of the art technology</p>
         <img src={HomeSvg.gpsPoint2} alt=""/>
         <p className="servicePrg">Ase-certified technicians</p>
         <img src={HomeSvg.certificate1} alt=""/>
         <p className="servicePrg">Convenient location</p>
         <img src={HomeSvg.certificate2} alt=""/>
         <p className="servicePrg">Affordable prices</p>
         <img src={HomeSvg.saleIcon} alt=""/>
         <p className="servicePrg">Membership program</p>
       </div>
     </div>
  )
}
export default HomePopularServices