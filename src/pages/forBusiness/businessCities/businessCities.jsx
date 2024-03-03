import React from "react";
import "./businessCities.scss"
import {BusinessImg} from "../images/businessImg";
import {useTranslation} from "react-i18next";

function BusinessCities (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="businessCities G-container G">
        <div className="CitiesCont G-justify-between">
            <div className="textBlock">
                <p className="header">{t('business.header61')} <span>{t('business.header62')}</span></p>
                <p className="prg">{t('business.prg61')}</p>
  
              <img className="mapImgInside" src={BusinessImg.mapSide} alt=""/>
              
              <input placeholder={t('business.placeholder61')} className="input" type="text"/>
                <button className="learnMoreBtn">{t('business.learnMore')}</button>
            </div>
  
          <img className="mapImg" src={BusinessImg.mapSide} alt=""/>
        </div>
     </div>
  )
}

export default BusinessCities