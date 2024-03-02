import React from "react";
import "./footer.scss"
import {Link, useLocation} from "react-router-dom";
import {ImgData} from "../../source/images/imgData";
import {SvgData} from "../../source/svgs/svgsData";
import {HomeSvg} from "../home/svgs/homeSvg";
import {useTranslation} from "react-i18next";

function Footer (){
  const location = useLocation()
  const {t, i18n} = useTranslation()
  return(
     <div style={{display: `${location.pathname === "/profile/map" ? "none" : location.pathname === "/chat" ? "none" : "block"}`}} className="Footer">
       
       <div className="footerCont G-container G-justify-between">
         <div className="LinksCont G-justify-between">
           <div className="globalLinks G-flex-column">
             <Link className="LinkToHome" to="/home"><img className="logo" src={SvgData.Logo} alt=""/></Link>
             <p className="logoUnderText">CarFy product of Fy Technology OU</p>
      
             <div className="MobileAppLinks G-flex G-justify-between G-align-center">
               <a className="G-align-center G-justify-center" href="">
                 <img className="logo" src={HomeSvg.googleLogo} alt=""/>
                 <img src={HomeSvg.googleText} alt=""/>
               </a>
               <a className="G-align-center G-justify-center" href="">
                 <img className="logo" src={HomeSvg.appleLogo} alt=""/>
                 <img src={HomeSvg.appleText} alt=""/>
               </a>
             </div>
             <div className="MobileLinksBlock G-flex">
               <div className="LinksToPage G-flex-column">
                 <Link className="headerLink" to="/home">{t('navigator.link1')}</Link>
                 <Link className="pageLink" to="/blog">{t('navigator.link4')}</Link>
                 <Link className="pageLink" to="/products">{t('navigator.link2')}</Link>
                 <Link className="pageLink" to="/shops">{t('navigator.link3')}</Link>
                 <Link className="pageLink" to="/service">{t('navigator.service')}</Link>
                 <Link className="pageLink" to="/forBusiness">{t('navigator.link5')}</Link>
               </div>
        
               <div className="LinksToPage G-flex-column">
                 <Link className="headerLink" to="/help">{t('navigator.help')}</Link>
                 <Link className="pageLink" to="/">{t('navigator.support')}</Link>
                 <Link className="pageLink" to="/">{t('navigator.details')}</Link>
                 <Link className="pageLink" to="/">{t('navigator.conditions')}</Link>
                 <Link className="pageLink" to="/">{t('navigator.privacy')}</Link>
               </div>
             </div>
      
             <div className="webSites G-align-center">
               <a href=""><img src={SvgData.xLogo} alt=""/></a>
               <a href=""><img src={SvgData.instagram} alt=""/></a>
               <a href=""><img src={SvgData.facebook} alt=""/></a>
               <a href=""><img src={SvgData.youtube} alt=""/></a>
             </div>
      
             <img className="cardTypes" src={ImgData.cardTypes} alt=""/>
           </div>
    
           <div className="LinksToPage G-flex-column">
             <Link className="headerLink" to="/home">{t('navigator.link1')}</Link>
             <Link className="pageLink" to="/blog">{t('navigator.link4')}</Link>
             <Link className="pageLink" to="/products">{t('navigator.link2')}</Link>
             <Link className="pageLink" to="/shops">{t('navigator.link3')}</Link>
             <Link className="pageLink" to="/service">{t('navigator.service')}</Link>
             <Link className="pageLink" to="/forBusiness">{t('navigator.link5')}</Link>
           </div>
    
           <div className="LinksToPage G-flex-column">
             <Link className="headerLink" to="/help">{t('navigator.help')}</Link>
             <Link className="pageLink" to="/">{t('navigator.support')}</Link>
             <Link className="pageLink" to="/">{t('navigator.details')}</Link>
             <Link className="pageLink" to="/">{t('navigator.conditions')}</Link>
             <Link className="pageLink" to="/">{t('navigator.privacy')}</Link>
           </div>
  
         </div>
  
         <div className="AppsCont G-flex-column">
           <p className="header">{t('navigator.download')}</p>
           <a className="G-align-center G-justify-center" href="">
             <img className="logo" src={HomeSvg.googleLogo} alt=""/>
             <img src={HomeSvg.googleText} alt=""/>
           </a>
           <a className="G-align-center G-justify-center" href="">
             <img className="logo" src={HomeSvg.appleLogo} alt=""/>
             <img src={HomeSvg.appleText} alt=""/>
           </a>
         </div>
  
  
         <p className="rightsText">© Copyright 2023, All Rights Reserved by Fy Technology OU</p>

       </div>
     
       
     </div>
  )
}

export default Footer