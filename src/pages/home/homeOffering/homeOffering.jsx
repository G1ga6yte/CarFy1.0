import React from "react";
import "./homeOffering.scss"
import {HomeSvg} from "../svgs/homeSvg";
import {useTranslation} from "react-i18next";

function HomeOffering (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="HomeOffering">
        <p className="header">{t('home.header3')}<span> {t('home.header31')}</span></p>
       
       <div className="offers G-justify-between G-align-top">
          <div className="offer">
            <img className="offerLogo" src={HomeSvg.offer1} alt=""/>
            <p className="offerHeader">{t('home.miniHeader1')}</p>
            <p className="offerPrg">{t('home.miniPrg1')}</p>
          </div>
  
         <div className="offer">
           <img className="offerLogo" src={HomeSvg.offer2} alt=""/>
           <p className="offerHeader">{t('home.miniHeader2')}</p>
           <p className="offerPrg">{t('home.miniPrg2')}</p>
         </div>
  
         <div className="offer">
           <img className="offerLogo" src={HomeSvg.offer3} alt=""/>
           <p className="offerHeader">{t('home.miniHeader3')}</p>
           <p className="offerPrg">{t('home.miniPrg3')}</p>
         </div>
  
         <div className="offer">
           <img className="offerLogo" src={HomeSvg.offer4} alt=""/>
           <p className="offerHeader">{t('home.miniHeader4')}</p>
           <p className="offerPrg">{t('home.miniPrg4')}</p>
         </div>
       </div>
     </div>
  )
}

export default HomeOffering