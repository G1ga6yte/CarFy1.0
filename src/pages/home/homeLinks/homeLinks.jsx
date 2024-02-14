import React from "react";
import "./homeLinks.scss";
import {Link} from "react-router-dom";
import {HomeSvg} from "../svgs/homeSvg";
import {HomeImg} from "../images/homeImg";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";


function HomeLinks() {
  
  const {t, i18n} = useTranslation()
  
  
  return (
     <div className="HomeLinks G-container G-justify-between G-align-center">
       <Link className="LinkBlock G-flex-column" to="/findService">
         <img className="logo" src={HomeSvg.gpsPoint} alt=""/>
         <span>{t('home.find')}</span>
         <span>{t('home.aService')}</span>
         <img className="png1" src={HomeImg.map} alt=""/>
       </Link>
       
       <Link className="LinkBlock G-flex-column" to="/">
         <img className="logo" src={HomeSvg.bankIcon} alt=""/>
         <span>{t('home.checkTheFine')}</span>
         <img className="png2" src={HomeImg.roadSign} alt=""/>
       </Link>
       
       <Link className="LinkBlock G-flex-column" to="/">
         <img className="logo" src={HomeSvg.rocket} alt=""/>
         <span>{t('home.become')}</span>
         <span>{t('home.aPartner')}</span>
         <img className="underLine" src={HomeSvg.underLine} alt=""/>
         <img className="png3" src={HomeImg.contract} alt=""/>
       </Link>
       
       <Link className="LinkBlock G-flex-column" to="/insurance&vignette">
         <img className="logo" src={HomeSvg.shield} alt=""/>
         <span>{t('home.Insurance')}</span>
         <span>{t('home.vignette')}</span>
         <img className="png4" src={HomeImg.shield} alt=""/>
       </Link>
     
     </div>
  );
}

export default function WrappedHomeLinks(){
  return(
     <Suspense fallback="...loading">
       <HomeLinks/>
     </Suspense>
  )
};