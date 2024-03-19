import React from "react";
import {useTranslation} from "react-i18next";

function AccountSettings (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="settingsCont">
       
       <div className="emailPhoneBlock G-flex">
         <div className="emailBlock">
           <p className="miniHeader">{t("partnerS.miniHeader8")}</p>
           <input placeholder="cafry@carfy.com" type="email" className="infoInput"/>
         </div>
         <div className="phoneBlock">
           <p className="miniHeader">{t("partnerS.miniHeader9")}</p>
           <input placeholder={t("partnerS.miniHeader9")} type="number" className="infoInput"/>
         </div>
       </div>
       
       <p className="miniHeader">{t("partnerS.miniHeader10")}</p>
       <input placeholder={t("partnerS.placeholder1")} type="password" className="infoInput"/>
       <input placeholder={t("partnerS.placeholder2")} type="password" className="infoInput"/>
       <input placeholder={t("partnerS.placeholder2")} type="password" className="infoInput"/>


     </div>
  )
}

export default AccountSettings