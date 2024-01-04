import React from "react";
import "./homeGetApp.scss"
import {HomeImg} from "../images/homeImg";
import {HomeSvg} from "../svgs/homeSvg";

function HomeGetApp (){
  return(
     <div className="HomeGetApp G-align-center G-justify-between">
       <p className="header1">Get the <span>Free</span> </p>
       <p className="header1">Online appointment App!</p>
       
        <div className="ImgBlock G-flex">
          <img src={HomeImg.appImg} alt=""/>
          <div className="imgShadow"></div>
        </div>
       
       <div className="TextBlock">
          <p className="header2">Get the <span>Free</span> </p>
         <p className="header2">Online appointment App!</p>
         <p className="prg">Our team of qualified service technicians are standing by to help you with any of your service related needs. From oil changes, tire rotations, brake pads or transmission problems, we've got trained technicians who are able to help.</p>
         
          <div className="Links G-align-center">
            <a className="G-align-center G-justify-center" href="">
              <img className="logo" src={HomeSvg.googleLogo} alt=""/>
              <img src={HomeSvg.googleText} alt=""/>
            </a>
            <a className="G-align-center G-justify-center" href="">
              <img className="logo" src={HomeSvg.appleLogo} alt=""/>
              <img src={HomeSvg.appleText} alt=""/>
            </a>
          </div>
       </div>
     </div>
  )
}
export default HomeGetApp