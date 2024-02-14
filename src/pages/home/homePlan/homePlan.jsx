import React from "react";
import "./homePlan.scss"
import {Link} from "react-router-dom";
import {HomeSvg} from "../svgs/homeSvg";
import {useTranslation} from "react-i18next";


function HomePlan (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="HomePlan">
       <p className="header">{t('home.header8')} <span>{t('home.header81')}</span></p>
       
       <div className="PlanCont G-justify-between G-align-center">
         <div className="PlanBlock G-flex-column">
           <div className="ImgBlock">
             <img src={HomeSvg.messageQuestion} alt=""/>
           </div>
           <p className="PlanHeader">{t('home.miniHeader81')}</p>
           <p className="prg">{t('home.prg81')}</p>
           <Link to="/">{t('home.btn8')} </Link>
         </div>
         
         <div className="PlanBlock G-flex-column">
           <div className="ImgBlock">
             <img src={HomeSvg.clock1} alt=""/>
           </div>
           <p className="PlanHeader">{t('home.miniHeader82')}</p>
           <p className="prg">{t('home.prg82')}</p>
           <Link to="/">{t('home.btn8')}</Link>
         </div>
         
         <div className="PlanBlock G-flex-column">
           <div className="ImgBlock">
             <img src={HomeSvg.thumbsUp} alt=""/>
           </div>
           <p className="PlanHeader">{t('home.miniHeader83')}</p>
           <p className="prg">{t('home.prg83')}</p>
           <Link to="/">{t('home.btn8')} </Link>
         </div>
       </div>
     
     </div>
  )
}

export default HomePlan