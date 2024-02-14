import React from "react";
import "./homeAppointment.scss"
import {Link} from "react-router-dom";
import {HomeImg} from "../images/homeImg";
import {HomeSvg} from "../svgs/homeSvg"
import {useTranslation} from "react-i18next";

function HomeAppointment (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="HomeAppointment G-justify-between G-align-center">
        <div className="leftBlock G-flex-column">
          <p className="header G-flex-column">
            <span>{t('home.autoCar')}</span>
            <span>{t('home.Maintenance')}</span>
          </p>
          
          <p className="underHeader">{t('home.bookAppointment')}</p>
          <img className="carImgCenter" src={HomeImg.carImg1} alt=""/>
          <p className="description">{t('home.home2prg1')}</p>
          
         <div className="buttonsBlock G-flex">
           <Link className="G-button G-align-center" to="/">
             <img src={HomeSvg.searchLogo} alt=""/>
             <span>{t('home.findService')}</span>
           </Link>
           <Link className="G-button" to="/">{t('home.carDetails')}</Link>
         </div>


        </div>
       <img className="carImgCenter" src={HomeImg.carImg1} alt=""/>

     </div>
  )
}
export default HomeAppointment