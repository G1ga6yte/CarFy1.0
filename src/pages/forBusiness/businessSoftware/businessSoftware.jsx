import React from "react";
import "./businessSoftware.scss"
import {BusinessImg} from "../images/businessImg";
import {BusinessSvg} from "../svgs/businessSvg";
import {useTranslation} from "react-i18next";

function BusinessSoftware (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="businessSoftware G-container G-justify-between">
        <p className="header">{t('business.header51')} <span>{t('business.header52')}</span></p>
       
       <div className="softwareBlock G-justify-center G-flex-column">
         <img src={BusinessImg.softwareImg} alt=""/>
         <p className="prg G-align-center">
           <img src={BusinessSvg.barChart} alt=""/>
           {t('business.prg51')}
         </p>
       </div>
       <div className="softwareBlock G-justify-center G-flex-column">
         <p className="prg G-align-center">
           <img src={BusinessSvg.creditCard} alt=""/>
           {t('business.prg52')}
         </p>
         <img src={BusinessImg.softwareImg} alt=""/>

       </div>
     </div>
  )
}

export default BusinessSoftware
