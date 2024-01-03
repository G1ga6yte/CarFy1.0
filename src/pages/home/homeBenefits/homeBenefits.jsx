import React from "react";
import "./homeBenefits.scss"
import {HomeSvg} from "../svgs/homeSvg";
import {HomeImg} from "../images/homeImg";

function HomeBenefits (){
  return(
     <div className="HomeBenefits G-justify-between">
       <div className="TextBlock G-flex-column">
         <p className="header">Benefits of using the <span>app</span></p>
         <p className="prg">Download our app now and transform your auto repair experience</p>
  
         <div className="ImgBlock G-align-top">
           <img src={HomeImg.benefits1} alt=""/>
           <img src={HomeImg.benefits2} alt=""/>
           <img src={HomeImg.benefits3} alt=""/>
         </div>
         
          <div className="benefits G-flex-column">
            
            <div className="benefit G-flex">
              <img className="benefitImg" src={HomeSvg.benefits1} alt=""/>
              <div className="text">
                <p className="benefitH">Save Time and Money</p>
                <p className="benefitPrg">Our app helps you find trusted professionals and offers competitive prices for repair services</p>
              </div>
            </div>
  
            <div className="benefit G-flex">
              <img className="benefitImg" src={HomeSvg.benefits2} alt=""/>
              <div className="text">
                <p className="benefitH">Convenience at Your Fingertips</p>
                <p className="benefitPrg">With our app's intuitive interface, easily access information and book services with just a few taps</p>
              </div>
            </div>
  
            <div className="benefit G-flex">
              <img className="benefitImg" src={HomeSvg.benefits3} alt=""/>
              <div className="text">
                <p className="benefitH">Enhanced Repair Quality</p>
                <p className="benefitPrg">Gain access to experienced professionals ensuring high-quality and reliable auto repairs</p>
              </div>
            </div>
            
          </div>
       </div>
       <div className="ImgBlock G-align-top">
         <img src={HomeImg.benefits1} alt=""/>
         <img src={HomeImg.benefits2} alt=""/>
         <img src={HomeImg.benefits3} alt=""/>
       </div>
     </div>
  )
}

export default HomeBenefits