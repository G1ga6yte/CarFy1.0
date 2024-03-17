import React, {useState} from "react";
import {useCartContext} from "../../../../CartContext";
import {useTranslation} from "react-i18next";

function LogInStep2 (){
  const {t, i18n} = useTranslation()
  const {logInStep, setLogInStep} = useCartContext()
  
  const [BtnCont2, setBtnCont2] = useState(true)
  
  function OnKeyUp2 (event){
    if (event.target.value.trim().length === 0){
      setBtnCont2(true)
    } else if (event.target.value.trim().length >= 6){
      setBtnCont2(false)
    } else {
      setBtnCont2(true)
    }
  }
  
  return(
     <div className="logInStep">
  
       <p className="header">{t("login.bHeader3")}</p>
       <p className="underHeader">{t("login.miniHeader1")}</p>
       <p className="desc">{t("login.prg1")}</p>
  
       <div className="loginBlock">
         <input onKeyUp={OnKeyUp2} placeholder={t("login.code")} type="number" className="input"/>
         <button disabled={BtnCont2} onClick={()=>{
           if (!BtnCont2){
             setLogInStep(3)
           }
         }}  id="MailBtn" className="continueBtn">{t("login.continue")}</button>
       </div>
       
     </div>
  )
}

export default LogInStep2