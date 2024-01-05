import React from "react";
import "./homeReviews.scss"
import ReviewBlock from "./reviewBlock";

function HomeReviews (){
  return(
     <div className="HomeReviews G-container G-flex-column G-align-center">
        <p className="header">Customer <span>reviews</span> of car services</p>
        <p className="underHeader">Here we publish reviews from our customers</p>
        
       <div className="reviewsCont G-align-center G-flex-column ">
         <div className="horizontalLine G-flex G-justify-center G-align-center">
           {Array.apply(null, Array(5)).map(function (el, index){
             return(
                <ReviewBlock key={index}/>
             )
           })}
         </div>
  
         <div className="horizontalLine G-flex G-justify-between">
           {Array.apply(null, Array(5)).map(function (el, index){
             return(
                <ReviewBlock key={index}/>
             )
           })}
         </div>
         
       </div>
     
     </div>
  )
}

export default HomeReviews