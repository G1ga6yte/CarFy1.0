import React from "react";
import {Images} from "../images/images";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function EveryReq (){
  const {t, i18n} = useTranslation()
  const arr = [
    "Exhaust system repair",
    "Exhaust system repair",
    "Exhaust system repair",
    "Exhaust system repair",
    "Tow truck required",
    "Exhaust system repair",
    "Exhaust system repair",
    "Exhaust system repair",
    "Exhaust system repair"
  ]
  
  return(
     <div className="EveryReq G-flex G-align-center G-justify-between">
        <div className="customerBlock G-flex G-align-center">
          <img src={Images.userIcon} alt=""/>
          <div className="textBlock">
            <p className="name">Customer Name</p>
            <p className="car">Citroen,C5, 2005</p>
          </div>
        </div>
       <div className="dateBlock G-flex G-align-center">
        <div className="circle"></div>
         <p className="date">10 December 11:00</p>
       </div>
       <div className="workBlock">
         {arr.map((el, index)=>{
           if (arr.length > 1){
             if (index === 0){
               return(
                  <div key={index} className="work G-flex G-align-center">
                    {el} +{arr.length-1}
                  </div>
               )
             }
           }
         })}
       </div>
       <div className="buttonsBlock G-flex G-align-center">
         <button className="getStarted">{t("homeP.btn6")}</button>
         <Link className="LinkToChat" to="/chat">
           <img src={Images.chatIcon} alt=""/>
           <div className="notesCircle"></div>
         </Link>
       </div>
     </div>
  )
}

export default EveryReq