import React from "react";
import "./businessPartners.scss"
import {BusinessSvg} from "../svgs/businessSvg";
import {useTranslation} from "react-i18next";

function BusinessPartners () {
  const {t, i18n} = useTranslation()
  
  return(
     <div className="BusinessPartners G-container">
        <p className="header">{t('business.header41')} <span>{t('business.header42')}</span></p>
       
       <div className="typesBlock G-justify-between">
          <div className="type">
            <img src={BusinessSvg.carService1} alt=""/>
            <p className="miniHeader">{t('business.miniHeader41')}</p>
            <p className="prg">{t('business.miniPrg41')}</p>
          </div>
         <div className="type">
           <img src={BusinessSvg.carService2} alt=""/>
           <p className="miniHeader">{t('business.miniHeader42')}</p>
           <p className="prg">{t('business.miniPrg42')}</p>
         </div>
         <div className="type">
           <img src={BusinessSvg.carService3} alt=""/>
           <p className="miniHeader">{t('business.miniHeader43')}</p>
           <p className="prg">{t('business.miniPrg43')}</p>
         </div>
       </div>
     </div>
  )
}
export default BusinessPartners