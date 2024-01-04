import React from "react";
import "./homePlan.scss"
import {Link} from "react-router-dom";
import {HomeSvg} from "../svgs/homeSvg";


function HomePlan (){
  return(
     <div className="HomePlan">
       <p className="header">We have the plan for you to give you <span>best</span></p>
       
       <div className="PlanCont G-justify-between G-align-center">
         <div className="PlanBlock G-flex-column">
           <div className="ImgBlock">
             <img src={HomeSvg.messageQuestion} alt=""/>
           </div>
           <p className="PlanHeader">Problem Solver</p>
           <p className="prg">We have the best service for you to make and this is one of the best service.</p>
           <Link to="/">Read More </Link>
         </div>
         
         <div className="PlanBlock G-flex-column">
           <div className="ImgBlock">
             <img src={HomeSvg.clock1} alt=""/>
           </div>
           <p className="PlanHeader">On-time Deliveries</p>
           <p className="prg">We have the best service for you to make and this is one of the best service.</p>
           <Link to="/">Read More </Link>
         </div>
         
         <div className="PlanBlock G-flex-column">
           <div className="ImgBlock">
             <img src={HomeSvg.thumbsUp} alt=""/>
           </div>
           <p className="PlanHeader">Services by Experts</p>
           <p className="prg">We have the best service for you to make and this is one of the best service.</p>
           <Link to="/">Read More </Link>
         </div>
       </div>
     
     </div>
  )
}

export default HomePlan