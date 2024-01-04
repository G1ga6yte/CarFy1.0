import React from "react";
import {HomeSvg} from "../../svgs/homeSvg";

function ReviewBlock (){
  return(
     <div className="reviewBlock">
        <p className="name">Nick</p>
        <p className="typePrice">Toyota Ractis, repair cost <span>80€</span></p>
        <p className="comment">Everything was done quickly</p>
       <div className="classStars G-justify-between G-align-center">
         <p>Autofavorīts</p>
         <span className="G-align-center"><img src={HomeSvg.starGreen} alt=""/> 4.9 (88)</span>
       </div>
       
     </div>
  )
}

export default ReviewBlock