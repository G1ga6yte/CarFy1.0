import React from "react";
import {BlogImg} from "../images/blogImg";
import "./blogFeatured.scss"

function BlogFeatured (){
  return(
     <div className="BlogFeatured G-container">
       <div className="featureBlock G-justify-between G-align-center">
          <div className="gradientBlock">
            <img src={BlogImg.carRepair} className="carRepairImg" alt=""/>
          </div>
          <div className="textBlock">
            <span className="span">FEATURED</span>
            <p className="header">Cheap Airline Tickets Great Ways <span>To Save </span></p>
            <p className="prg">In this digital generation where information can be easily obtained within seconds, business cards ...</p>
          </div>
       </div>
     </div>
  )
}

export default BlogFeatured