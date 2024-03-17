import React from "react";
import {useNavigate} from "react-router-dom";

import ApprovedImg from "../approve 1.png"
import {useTranslation} from "react-i18next";
function LogInStep4 (){
  const {t, i18n} = useTranslation()
  const navigate = useNavigate()
  return(
     <div className="logInStep">
       <img className="approveImg" src={ApprovedImg} alt=""/>
       <p className="underHeader">{t("login.miniHeader3")}</p>
       <div className="loginBlock">
         <button  onClick={()=>{navigate("/requests")}}  id="MailBtn" className="continueBtn">{t("login.btn1")}</button>
       </div>
     </div>
  )
}

export default LogInStep4