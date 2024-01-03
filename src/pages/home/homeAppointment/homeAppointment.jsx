import React from "react";
import "./homeAppointment.scss"
import {Link} from "react-router-dom";
import {HomeImg} from "../images/homeImg";
import {HomeSvg} from "../svgs/homeSvg"

function HomeAppointment (){
  return(
     <div className="HomeAppointment G-justify-between G-align-center">
        <div className="leftBlock G-flex-column">
          <p className="header G-flex-column">
            <span>Auto car</span>
            <span> Maintenance</span>
          </p>
          
          <p className="underHeader">Book Your Appointment Now</p>
          <img className="carImgCenter" src={HomeImg.carImg1} alt=""/>
          <p className="description">Our qualified technicians are ready to assist you with all your service needs, including oil changes, tire rotations, brake pads, and transmission problems.</p>
          
         <div className="buttonsBlock G-flex">
           <Link class="G-button G-align-center" to="/">
             <img src={HomeSvg.searchLogo} alt=""/>
             <span>Find service</span>
           </Link>
           <Link class="G-button" to="/">Car details</Link>
         </div>


        </div>
       <img className="carImgCenter" src={HomeImg.carImg1} alt=""/>

     </div>
  )
}
export default HomeAppointment