import React from "react";
import "./businessWithUs.scss"
import {BusinessImg} from "../images/businessImg";
import {BusinessSvg} from "../svgs/businessSvg";
import {Link} from "react-router-dom";

function BusinessWithUs (){
  return(
     <div className="BusinessWithUs G-container G-justify-between G-align-center">
        <div className="textBlock">
            <p className="header">Advantages of working <span>with us</span></p>
          
          <div className="advantages G-flex">
            <img src={BusinessSvg.arrowBlock} alt=""/>
            <div className="text">
              <p className="miniHeader">Low service fee</p>
              <p className="prg">CarFy keeps a low commission on orders and gives partners the opportunity to reduce it</p>
            </div>
          </div>
          <div className="advantages G-flex">
            <img src={BusinessSvg.headphones} alt=""/>
            <div className="text">
              <p className="miniHeader">24/7 driver support</p>
              <p className="prg">Our specialists take questions and solve drivers' problems at any time</p>
            </div>
          </div>
          <div className="advantages G-flex">
            <img src={BusinessSvg.bankCash} alt=""/>
            <div className="text">
              <p className="miniHeader">Transparent withdrawal system</p>
              <p className="prg">Partners decide when and how much to withdraw</p>
            </div>
          </div>
          
          <Link className="LinkToBlog G-flex G-justify-center G-align-center" to="/blog">Learn more</Link>
        </div>
       
       <div className="imgBlock">
         <img src={BusinessImg.partnership} alt=""/>
       </div>
     </div>
  )
}

export default BusinessWithUs