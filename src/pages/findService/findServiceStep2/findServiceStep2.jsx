import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {ImgSvg} from "./images/imgSvg";
import "./findServiceStep2.jsx.scss"
import {InsuranceSvg} from "../../insurance/insuranceSvg/insuranceSvg";


function FindServiceStep2 (){
  
  return(
     <div className="Step2 G-container">
       <div className="headerBlock">
         <div className="backBtnBlock G-flex G-align-center">
           <img src={ImgSvg.arrowLeft} alt=""/>
           <span>Back</span>
         </div>
         <div className="requestBlock G-flex G-justify-between G-align-center">
           <p className="header">New request:</p>
           <div className="clearBlock">
             <img src={ImgSvg.clear} alt=""/>
             <span>Clear</span>
           </div>
         </div>
       </div>
       
       <div className="MainCont G-flex">
         
         <div className="fillingBlock">
           <div className="InputCarNumber G-flex">
             <img src={InsuranceSvg.logoLV} alt=""/>
             <input placeholder="Enter your car number" type="text"/>
           </div>
           
           
         </div>
         
         <div className="advantagesBlock">
           
           <p className="miniHeader">Our advantages</p>
           
           <div className="advantageBlock G-flex G-align-center">
             <img src={ImgSvg.checkGreen} alt=""/>
             <p className="prg">Saves time by finding the nearest repair shop and connecting drivers with it</p>
           </div>
  
           <div className="advantageBlock G-flex G-align-center">
             <img src={ImgSvg.checkGreen} alt=""/>
             <p className="prg">Saves money with discounts at partner service centers</p>
           </div>
  
           <div className="advantageBlock G-flex G-align-center">
             <img src={ImgSvg.checkGreen} alt=""/>
             <p className="prg">Provides quality service with reviews from other drivers</p>
           </div>
  
           <div className="advantageBlock G-flex G-align-center">
             <img src={ImgSvg.checkGreen} alt=""/>
             <p className="prg">Offers convenience with easy scheduling and repair progress tracking</p>
           </div>
  
           <div className="advantageBlock G-flex G-align-center">
             <img src={ImgSvg.checkGreen} alt=""/>
             <p className="prg">Ensures safety by quickly finding a repair shop in an emergency</p>
           </div>
  
           <button className="continueBtn">Continue</button>
           
           <p className="prgTerms">By filling out the form, I accept the <a href="">terms of transmission</a></p>
         
         </div>
         
         
       </div>
     
     </div>
  )
}

export default FindServiceStep2