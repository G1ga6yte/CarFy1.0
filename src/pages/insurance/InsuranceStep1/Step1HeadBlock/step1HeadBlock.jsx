import React from "react";
import "./step1HeadBlock.scss";
import {InsuranceImg} from "../../insuranceImg/insuranceImg";
import {useTranslation} from "react-i18next";

function Step1HeadBlock() {
  const {t, i18n} = useTranslation()
  
  return (
     <div className="step1HeadBlock G-container G-flex G-justify-between G-align-center">
       <div className="TextBlock">
         <p className="header">{t("insVig.header11")} <span>{t("insVig.header12")}</span></p>
         <p className="prg">{t("insVig.prg1")}</p>
         
         <div className="btnBlock G-flex G-justify-between">
           <button className="btnPay">{t("insVig.payBtn")}</button>
           <button className="btnLearn">{t("insVig.learnMore")}</button>
         </div>
       </div>
       
       <img className="shieldImg" src={InsuranceImg.shield} alt=""/>
     </div>
  );
}

export default Step1HeadBlock;