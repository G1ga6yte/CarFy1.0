import React from "react";
import "./errorBlock.scss"
import errorImg from "./404 1.png"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function ErrorBlock (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="ErrorBlock G-flex G-flex-column G-align-center">
       <img src={errorImg} alt=""/>
       <p className="header">{t("error.header")}</p>
       <Link className="homeLink" to="/home">{t("error.prg")}</Link>
     </div>
  )
}

export default ErrorBlock