import React from "react";
import "./responsesBlock.scss"
import ResponseItem from "./responseItem";
import {useTranslation} from "react-i18next";

function ResponsesBlock (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="ResponsesBlock G-container">
        <p className="miniHeader">44 {t("req.btn7")}</p>
       
       <div className="sortButtons G-flex G-align-center">
         <button className="sortBtn">{t("req.btn12")}<div className="recommendedCircle"></div></button>
         <button className="sortBtn">{t("req.btn13")}</button>
         <button className="sortBtn">{t("req.btn14")}</button>
         <button className="sortBtn">{t("req.btn15")}</button>
       </div>
       
       
       <div className="responsesList G-flex G-flex-column">
          <ResponseItem/>
         <ResponseItem/>
       </div>
     </div>
  )
}

export default ResponsesBlock