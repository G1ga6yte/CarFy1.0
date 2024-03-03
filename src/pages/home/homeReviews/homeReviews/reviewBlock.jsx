import React from "react";
import {HomeSvg} from "../../svgs/homeSvg";

function ReviewBlock (props){
  return(
     <div className="reviewBlock">
        <p className="name">{props.name}</p>
        <p className="typePrice">{props.type} <span>{props.price}</span></p>
        <p className="comment">{props.comment}</p>
       <div className="classStars G-justify-between G-align-center">
         <p>Autofavorīts</p>
         <span className="G-align-center"><img src={HomeSvg.starGreen} alt=""/> 4.9 (88)</span>
       </div>
       
     </div>
  )
}

export default ReviewBlock