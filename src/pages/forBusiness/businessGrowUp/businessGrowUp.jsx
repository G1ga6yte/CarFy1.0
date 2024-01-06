import React from "react";
import "./businessGrowUp.scss";
import {BusinessSvg} from "../svgs/businessSvg";

function BusinessGrowUp() {
  return (
     <div className="BusinessGrowUp G-container">
       <p className="header">We help your car service <span>grows up</span></p>
       <p className="underHeader">From marketing and advertising to streamlined operations and customer service, we
         offer the tools and expertise to take your car service to the next level.</p>
     
     
       
       <div className="TypeBlocks G-justify-between">
         <div className="typeBlock">
           <div className="textBlock">
             <p className="typeHeader">Increased Revenue</p>
             <p className="typePrg">By utilizing our services, your car service business can grow its customer base, leading to increased revenue and profitability.</p>
           </div>
           <div className="imgBlock1">
             <img src={BusinessSvg.growsUp1} alt=""/>
           </div>
         </div>
  
         <div className="typeBlock">
           <div className="textBlock">
             <p className="typeHeader">Improved Operations</p>
             <p className="typePrg">Our solutions are designed to streamline operations, making it easier for your team to manage day-to-day tasks and deliver high-quality service to customers.</p>
           </div>
           <div className="imgBlock2">
             <img src={BusinessSvg.growsUp2} alt=""/>
           </div>
         </div>
  
         <div className="typeBlock">
           <div className="textBlock">
             <p className="typeHeader">Enhanced Customer Experience</p>
             <p className="typePrg">With our support, your car service can provide an exceptional customer experience, leading to increased loyalty and positive word-of-mouth recommendations.</p>
           </div>
           <div className="imgBlock3">
             <img src={BusinessSvg.growsUp3} alt=""/>
           </div>
         </div>
  
         <div className="typeBlock">
           <div className="textBlock">
             <p className="typeHeader">Competitive Edge</p>
             <p className="typePrg">By leveraging our expertise and tools, your car service can gain a competitive edge in the market, standing out from the competition and attracting new customers.</p>
           </div>
           <div className="imgBlock4">
             <img src={BusinessSvg.growsUp4} alt=""/>
           </div>
         </div>
       </div>
     </div>
  );
}

export default BusinessGrowUp;