import React from "react";
import "./Step1ChooseBlock.scss"
import {InsuranceImg} from "../../insuranceImg/insuranceImg";
import {useTranslation} from "react-i18next";

function Step1ChooseBlock (){
  const {t, i18n} = useTranslation()
  return(
     <div className="Step1ChooseBlock">
        <p className="header">{t("insurance.header11")} <span>{t("insurance.header12")}</span></p>
        <div className="ItemCont G-justify-between">
          
          <div className="itemBlock G-flex-column">
            <img src={InsuranceImg.rocket} alt=""/>
            <span className="name">{t("insurance.miniHeader1")}</span>
            <p className="prg">{t("insurance.prg1")}</p>
          </div>
  
          <div className="itemBlock G-flex-column">
            <img src={InsuranceImg.like} alt=""/>
            <span className="name">{t("insurance.miniHeader2")}</span>
            <p className="prg">{t("insurance.prg2")}</p>
          </div>
  
          <div className="itemBlock G-flex-column">
            <img src={InsuranceImg.shieldLogo} alt=""/>
            <span className="name">{t("insurance.miniHeader3")}</span>
            <p className="prg">{t("insurance.prg3")}</p>
          </div>
  
          <div className="itemBlock G-flex-column">
            <img src={InsuranceImg.listPaper} alt=""/>
            <span className="name">{t("insurance.miniHeader4")}</span>
            <p className="prg">{t("insurance.prg4")}</p>
          </div>
          
        </div>
     </div>
  )
}

export default Step1ChooseBlock