import React from "react";
import "./homeReviews.scss"
import ReviewBlock from "./reviewBlock";
import {useTranslation} from "react-i18next";

function HomeReviews (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="HomeReviews G-container G-flex-column G-align-center">
        <p className="header">{t('home.header7')} <span>{t('home.header71')}</span> {t('home.header72')}</p>
        <p className="underHeader">{t('home.prg7')}</p>
        
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