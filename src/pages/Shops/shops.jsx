import React from "react";
import {ImgSvg} from "./imgSvg/imgSvg";
import "./shops.scss"


function Shops (){
  
  
  return(
     <div className="Shops G-container">
        <p className="header">Shops</p>
       <div className="mainBlock G-flex G-justify-center">
         <img src={ImgSvg.Logo} className="LogoImg" alt=""/>
         <p className="header">Coming soon!</p>
       </div>
     </div>
  )
}

export default Shops