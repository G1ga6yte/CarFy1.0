import React from "react";
import "./businessGrowUp.scss";
import {BusinessSvg} from "../svgs/businessSvg";
import {useTranslation} from "react-i18next";

function BusinessGrowUp() {
  const {t, i18n} = useTranslation()
  
  return (
     <div className="BusinessGrowUp G-container">
       <p className="header">{t('business.header21')} <span>{t('business.header22')}</span></p>
       <p className="underHeader">{t('business.prg21')}</p>
     
     
       
       <div className="TypeBlocks G-justify-between">
         <div className="typeBlock">
           <div className="textBlock">
             <p className="typeHeader">{t('business.miniHeader21')}</p>
             <p className="typePrg">{t('business.miniPrg21')}</p>
           </div>
           <div className="imgBlock1">
             <img src={BusinessSvg.growsUp1} alt=""/>
           </div>
         </div>
  
         <div className="typeBlock">
           <div className="textBlock">
             <p className="typeHeader">{t('business.miniHeader22')}</p>
             <p className="typePrg">{t('business.miniPrg22')}</p>
           </div>
           <div className="imgBlock2">
             <img src={BusinessSvg.growsUp2} alt=""/>
           </div>
         </div>
  
         <div className="typeBlock">
           <div className="textBlock">
             <p className="typeHeader">{t('business.miniHeader23')}</p>
             <p className="typePrg">{t('business.miniPrg23')}</p>
           </div>
           <div className="imgBlock3">
             <img src={BusinessSvg.growsUp3} alt=""/>
           </div>
         </div>
  
         <div className="typeBlock">
           <div className="textBlock">
             <p className="typeHeader">{t('business.miniHeader24')}</p>
             <p className="typePrg">{t('business.miniPrg24')}</p>
           </div>
           <div className="imgBlock4">
             <img src={BusinessSvg.growsUp4} alt=""/>
           </div>
         </div>
       </div>
     </div>
  );
}

export default BusinessGrowUp;