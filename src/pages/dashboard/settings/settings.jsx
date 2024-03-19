import React from "react";
import {useTranslation} from "react-i18next";
import "./settings.scss"
import {Images} from "./images/images";
import MainSettings from "./mainSettings";
import LanguageSettings from "./languageSettings";
import AccountSettings from "./accountSettings";

function Settings (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="Settings">
       <p className="header">{t("partnerS.header1")}</p>
       <MainSettings/>
       
       <p className="header">{t("partnerS.header2")}</p>
       <LanguageSettings/>
       
       <p className="header">{t("partnerS.header3")}</p>
       <AccountSettings/>
       
     </div>
  )
}

export default Settings