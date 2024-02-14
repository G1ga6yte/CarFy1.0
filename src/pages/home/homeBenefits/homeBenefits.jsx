import React from "react";
import "./homeBenefits.scss"
import {HomeSvg} from "../svgs/homeSvg";
import {HomeImg} from "../images/homeImg";
import {useTranslation} from "react-i18next";

function HomeBenefits (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="HomeBenefits G-justify-between">
       <div className="TextBlock G-flex-column">
         <p className="header">{t('home.header5')}<span> {t('home.header51')}</span></p>
         <p className="prg">{t('home.prg5')}</p>
  
         <div className="ImgBlock G-align-top">
           <img src={HomeImg.benefits1} alt=""/>
           <img src={HomeImg.benefits2} alt=""/>
           <img src={HomeImg.benefits3} alt=""/>
         </div>
         
          <div className="benefits G-flex-column">
            
            <div className="benefit G-flex">
              <img className="benefitImg" src={HomeSvg.benefits1} alt=""/>
              <div className="text">
                <p className="benefitH">{t('home.miniHeader51')}</p>
                <p className="benefitPrg">{t('home.miniPrg51')}</p>
              </div>
            </div>
  
            <div className="benefit G-flex">
              <img className="benefitImg" src={HomeSvg.benefits2} alt=""/>
              <div className="text">
                <p className="benefitH">{t('home.miniHeader52')}</p>
                <p className="benefitPrg">{t('home.miniPrg52')}</p>
              </div>
            </div>
  
            <div className="benefit G-flex">
              <img className="benefitImg" src={HomeSvg.benefits3} alt=""/>
              <div className="text">
                <p className="benefitH">{t('home.miniHeader53')}</p>
                <p className="benefitPrg">{t('home.miniPrg53')}</p>
              </div>
            </div>
            
          </div>
       </div>
       <div className="ImgBlock G-align-top">
         <img src={HomeImg.benefits1} alt=""/>
         <img src={HomeImg.benefits2} alt=""/>
         <img src={HomeImg.benefits3} alt=""/>
       </div>
     </div>
  )
}

export default HomeBenefits