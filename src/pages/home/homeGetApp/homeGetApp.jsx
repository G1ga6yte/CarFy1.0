import React from "react";
import "./homeGetApp.scss"
import {HomeImg} from "../images/homeImg";
import {HomeSvg} from "../svgs/homeSvg";
import {useTranslation} from "react-i18next";

function HomeGetApp (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="HomeGetApp G-align-center G-justify-between">
       <p className="header1">{t('home.header12')} <span>{t('home.header121')}</span> </p>
       <p className="header1">{t('home.header122')}</p>
       
        <div className="ImgBlock G-flex">
          <img src={HomeImg.appImg} alt=""/>
          <div className="imgShadow"></div>
        </div>
       
       <div className="TextBlock">
          <p className="header2">{t('home.header12')} <span>{t('home.header121')}</span> </p>
         <p className="header2">{t('home.header122')}</p>
         <p className="prg">{t('home.prg12')}</p>
         
          <div className="Links G-align-center">
            <a className="G-align-center G-justify-center" href="">
              <img className="logo" src={HomeSvg.googleLogo} alt=""/>
              <img src={HomeSvg.googleText} alt=""/>
            </a>
            <a className="G-align-center G-justify-center" href="">
              <img className="logo" src={HomeSvg.appleLogo} alt=""/>
              <img src={HomeSvg.appleText} alt=""/>
            </a>
          </div>
       </div>
     </div>
  )
}
export default HomeGetApp