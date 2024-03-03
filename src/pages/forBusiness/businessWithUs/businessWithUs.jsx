import React from "react";
import "./businessWithUs.scss"
import {BusinessImg} from "../images/businessImg";
import {BusinessSvg} from "../svgs/businessSvg";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function BusinessWithUs (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="BusinessWithUs G-container G-justify-between G-align-center">
        <div className="textBlock">
            <p className="header">{t('business.header31')} <span>{t('business.header32')}</span></p>
          
          <div className="advantages G-flex">
            <img src={BusinessSvg.arrowBlock} alt=""/>
            <div className="text">
              <p className="miniHeader">{t('business.miniHeader31')}</p>
              <p className="prg">{t('business.miniPrg31')}</p>
            </div>
          </div>
          <div className="advantages G-flex">
            <img src={BusinessSvg.headphones} alt=""/>
            <div className="text">
              <p className="miniHeader">{t('business.miniHeader32')}</p>
              <p className="prg">{t('business.miniPrg32')}</p>
            </div>
          </div>
          <div className="advantages G-flex">
            <img src={BusinessSvg.bankCash} alt=""/>
            <div className="text">
              <p className="miniHeader">{t('business.miniHeader33')}</p>
              <p className="prg">{t('business.miniPrg33')}</p>
            </div>
          </div>
          
          <Link className="LinkToBlog G-flex G-justify-center G-align-center" to="/blog">{t('business.learnMore')}</Link>
        </div>
       
       <div className="imgBlock">
         <img src={BusinessImg.partnership} alt=""/>
       </div>
     </div>
  )
}

export default BusinessWithUs