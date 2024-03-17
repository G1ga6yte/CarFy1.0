import React,{useState} from "react";
import {useCartContext} from "../../../../CartContext";
import {useTranslation} from "react-i18next";

function LogInStep3 (){
  const {t, i18n} = useTranslation()
  const {logInStep, setLogInStep} = useCartContext()
  
  const [BtnCont3, setBtnCont3] = useState(true)
  const [password, setPassword] = useState("")
  function OnKeyUp3 (event){
    setPassword(event.target.value)
  }
  function OnKeyUp33 (event){
    if (event.target.value.trim().length === 0){
      setBtnCont3(true)
    } else if (event.target.value.trim().length >= 8){
      if (event.target.value === password){
        setBtnCont3(false)
      } else {
        setBtnCont3(true)
      }
    } else {
      setBtnCont3(true)
    }
  }
  return(
     <div className="logInStep">
       <p className="header">{t("login.bHeader4")}</p>
       <p className="desc">{t("login.miniHeader2")}</p>
  
  
       <div className="loginBlock">
         <input onKeyUp={OnKeyUp3} placeholder={t("login.password")} type="password" className="input"/>
         <input onKeyUp={OnKeyUp33} placeholder={t("login.retry")} type="password" className="input"/>
    
         <button disabled={BtnCont3} onClick={()=>{
           if (!BtnCont3){
             setLogInStep(4)
           }
         }}  id="MailBtn" className="continueBtn">{t("login.continue")}</button>
       </div>
     </div>
  )
}

export default LogInStep3