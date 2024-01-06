import React from "react";
import {BusinessImg} from "../images/businessImg";
import {BusinessSvg} from "../svgs/businessSvg";
import "./businessHead.scss"

function BusinessHead (){
  return(
     <div className="BusinessHead G-justify-between G-align-center">
        <div className="TextBlock">
          <div className="textCont">
            <p className="header">Become <span>a CarFy partner</span></p>
            <p className="prg">At our company, we are committed to providing the tools and support you need to succeed. Our powerful software solutions are designed to help you establish and grow your business, and we are always by your side to offer guidance and assistance.</p>
            
            <div className="btnBlock G-justify-between">
              <div className="button">
                Become a partner
              </div>
              <div className="button G-align-center G-justify-center">
                <img src={BusinessSvg.PlayCircle} alt=""/>
                View demo
              </div>
            </div>
  
            <p className="underText">Car services that have already joined us</p>
  
            <div className="partners G-flex">
              <img className="partnerLogo" src={BusinessSvg.company1} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company2} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company3} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company4} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company5} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company6} alt=""/>
  
            </div>
          </div>
        
        
        </div>
       <div className="BckBlock">
         <p className="header">Become <span>a CarFy partner</span></p>
         <img className="BckVector" src={BusinessSvg.bckVector} alt=""/>
         <img className="dashboard1" src={BusinessImg.dashboard1} alt=""/>
         <img className="dashboard2" src={BusinessImg.dashboard2} alt=""/>
         <img className="dashboard3" src={BusinessImg.dashboard3} alt=""/>

       </div>
     </div>
  )
}

export default BusinessHead