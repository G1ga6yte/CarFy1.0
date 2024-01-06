import React from "react";
import "./businessCities.scss"
import {BusinessImg} from "../images/businessImg";

function BusinessCities (){
  return(
     <div className="businessCities G-container G">
        <div className="CitiesCont G-justify-between">
            <div className="textBlock">
                <p className="header">You can become our partner in <span>these cities</span></p>
                <p className="prg">We work in more than 70 cities and continue to expand our geography</p>
  
              <img className="mapImgInside" src={BusinessImg.mapSide} alt=""/>
              
              <input placeholder="Start writing your city" className="input" type="text"/>
                <button className="learnMoreBtn">Learn More</button>
            </div>
  
          <img className="mapImg" src={BusinessImg.mapSide} alt=""/>
        </div>
     </div>
  )
}

export default BusinessCities