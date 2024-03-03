import React from "react";
import {BusinessImg} from "../images/businessImg";
import {BusinessSvg} from "../svgs/businessSvg";
import "./businessHead.scss"
import {useTranslation} from "react-i18next";

function BusinessHead (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="BusinessHead G-justify-between G-align-center">
        <div className="TextBlock">
          <div className="textCont">
            <p className="header">{t('business.header11')} <span>{t('business.header12')}</span></p>
            <p className="prg">{t('business.prg11')}</p>
            
            <div className="btnBlock G-justify-between">
              <div className="button">
                {t('business.btn11')}
              </div>
              <div className="button G-align-center G-justify-center">
                <img src={BusinessSvg.PlayCircle} alt=""/>
                {t('business.btn12')}
              </div>
            </div>
  
            <p className="underText">{t('business.underText')}</p>
  
            <div className="partners G-flex">
              <img className="partnerLogo" src={BusinessSvg.company1} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company2} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company3} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company4} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company5} alt=""/>
              <img className="partnerLogo" src={BusinessSvg.company6} alt=""/>
  
            </div>
          </div>
        
        
        </div>
       <div className="BckBlock">
         <p className="header">{t('business.header11')} <span>{t('business.header12')}</span></p>
         <img className="BckVector" src={BusinessSvg.bckVector} alt=""/>
         <img className="dashboard1" src={BusinessImg.dashboard1} alt=""/>
         <img className="dashboard2" src={BusinessImg.dashboard2} alt=""/>
         <img className="dashboard3" src={BusinessImg.dashboard3} alt=""/>

       </div>
     </div>
  )
}

export default BusinessHead