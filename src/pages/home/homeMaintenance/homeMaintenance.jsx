import React from "react";
import "./homeMaintenance.scss";
import {HomeImg} from "../images/homeImg";
import {Link} from "react-router-dom";
import {HomeSvg} from "../svgs/homeSvg";
import {useTranslation} from "react-i18next";

function HomeMaintenance() {
  const {t, i18n} = useTranslation()
  
  return (
     <div className="HomeMaintenance G-justify-between G-align-center">
       
       <div className="leftBlock G-flex-column">
         <p className="header G-flex-column">
           <span>{t('home.header4')}</span>
           <span>{t('home.header41')}</span>
         </p>
         <p className="description">{t('home.prg4')}</p>
         <img className="carImgCenter" src={HomeImg.carImg2} alt=""/>
         
         <div className="acceptsBlock">
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>{t('home.text41')}</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>{t('home.text42')}</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>{t('home.text43')}</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>{t('home.text44')}</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>{t('home.text45')}</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>{t('home.text46')}</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>{t('home.text47')}</span></div>
           <div className="accept G-align-center"><img src={HomeSvg.accept} alt=""/><span>{t('home.text48')}</span></div>


         </div>
         
         <div className="buttonsBlock">
           <Link className="G-button" to="/">{t('home.btn4')}</Link>
         </div>
       </div>
       
       <img className="carImgCenter" src={HomeImg.carImg2} alt=""/>
     
     </div>
  );
}

export default HomeMaintenance;