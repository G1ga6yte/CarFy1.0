import React from "react";
import "./InsuranceVignette.scss";
import {InsuranceImg} from "../insurance/insuranceImg/insuranceImg";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function InsuranceVignette() {
  const {t, i18n} = useTranslation()
  return (
     <div className="InsuranceVignette G-container">
       <div className="InsuranceBlock G-flex G-justify-between G-align-center">
         <div className="TextBlock">
           <p className="header">{t("insVig.header11")}<span>{t("insVig.header12")}</span></p>
           <p className="prg">{t("insVig.prg1")}</p>
           
           <div className="btnBlock G-flex G-justify-between">
             <Link onClick={()=>window.scrollTo(0, 0)} className="btnLearn" to="/insurance/step1">{t("insVig.learnMore")}</Link>
           </div>
         </div>
         
         <img className="shieldImg" src={InsuranceImg.shield} alt=""/>
       </div>
       
       <div className="VignetteBlock G-flex G-justify-between G-align-center">
         <div className="TextBlock">
           <p className="header">{t("insVig.header21")}</p>
           <p className="prg">{t("insVig.prg2")}</p>
           
           <div className="btnBlock G-flex G-justify-between">
             <Link onClick={()=>window.scrollTo(0, 0)} className="btnLearn" to="/vignette">{t("insVig.learnMore")}</Link>

           </div>
         </div>
         
         <img className="shieldImg" src={InsuranceImg.roadLogo} alt=""/>
       </div>
     
     </div>
  );
}

export default InsuranceVignette;