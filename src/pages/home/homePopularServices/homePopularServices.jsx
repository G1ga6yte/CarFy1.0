import React from "react";
import "./HomePopularServices.scss"
import {HomeSvg} from "../svgs/homeSvg";
import {HomeImg} from "../images/homeImg";
import {useTranslation} from "react-i18next";

function HomePopularServices (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="HomePopularServices G-flex-column G-align-center">
        <p className="header">{t('home.header6')}<span>{t('home.header61')}</span></p>
       <div className="contentBlock G-flex G-justify-between G-align-top">
          <div className="servicesBlock G-flex-column">
            <div className="service G-align-center"><span>{t('home.text61')}</span><img src={HomeSvg.settings} alt=""/></div>
            <div className="service G-align-center"><span>{t('home.text62')}</span><img src={HomeSvg.speedometer} alt=""/></div>
            <div className="service G-align-center"><span>{t('home.text63')}</span><img src={HomeSvg.gpsPoint2} alt=""/></div>
          </div>
         <img className="serviceImg" src={HomeImg.carImg3} alt=""/>
         <div className="servicesBlock G-flex-column">
           <div className="service G-align-center"><img src={HomeSvg.certificate1} alt=""/><span>{t('home.text64')}</span></div>
           <div className="service G-align-center"><img src={HomeSvg.certificate2} alt=""/><span>{t('home.text65')}</span></div>
           <div className="service G-align-center"><img src={HomeSvg.saleIcon} alt=""/><span>{t('home.text66')}</span></div>
         </div>
       </div>
       
       <div className="ServiceCont G-flex-column G-align-center">
         <img src={HomeSvg.settings} alt=""/>
         <p className="servicePrg">{t('home.text61')}</p>
         <img src={HomeSvg.speedometer} alt=""/>
         <p className="servicePrg">{t('home.text62')}</p>
         <img src={HomeSvg.gpsPoint2} alt=""/>
         <p className="servicePrg">{t('home.text63')}</p>
         <img src={HomeSvg.certificate1} alt=""/>
         <p className="servicePrg">{t('home.text64')}</p>
         <img src={HomeSvg.certificate2} alt=""/>
         <p className="servicePrg">{t('home.text65')}</p>
         <img src={HomeSvg.saleIcon} alt=""/>
         <p className="servicePrg">{t('home.text66')}</p>
       </div>
     </div>
  )
}
export default HomePopularServices