import React from "react";
import "./responsesBlock.scss"
import ResponseItem from "./responseItem";

function ResponsesBlock (){
  
  return(
     <div className="ResponsesBlock G-container">
        <p className="miniHeader">44 responses</p>
       
       <div className="sortButtons G-flex G-align-center">
         <button className="sortBtn">Nearest<div className="recommendedCircle"></div></button>
         <button className="sortBtn">Most affordable</button>
         <button className="sortBtn">Best rated</button>
         <button className="sortBtn">Featured</button>
       </div>
       
       
       <div className="responsesList G-flex G-flex-column">
          <ResponseItem/>
         <ResponseItem/>
       </div>
     </div>
  )
}

export default ResponsesBlock