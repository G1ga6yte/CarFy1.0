import React, {useState} from "react";
import {LoginImg} from "../../../navigation/logIn/ImgSvg/loginImg";
import {useCartContext} from "../../../../CartContext";
import {useTranslation} from "react-i18next";

function LogInStep1 (){
  const {t, i18n} = useTranslation()
  const {logInStep, setLogInStep} = useCartContext()
  const [BtnCont, setBtnCont] = useState(true)
  const [logInType, setLogInType] = useState("SignUp")
  
  function OnKeyUp (event){
    if (event.target.value.trim().length === 0){
      setBtnCont(true)
    } else if (event.target.value.trim().length > 1){
      setBtnCont(false)
    } else {
      setBtnCont(true)
    }
  }
  
  return(
     <div className="logInStep">
       <p className="header">{t("login.bHeader3")}</p>
       <p className="underHeader">{t("login.miniHeader1")}</p>
       <div className="loginBlock">
         <div className="toggleBlock G-flex">
           <div onClick={()=> setLogInType("SignUp")} className={`toggle ${logInType === "SignUp" ? "marked" : ""}`}>
             {t("login.signUp")}
           </div>
           <div onClick={()=> setLogInType("SignIn")} className={`toggle ${logInType === "SignIn" ? "marked" : ""}`}>
             {t("login.signIn")}
           </div>
         </div>
         <input onKeyUp={OnKeyUp} placeholder={t("login.placeholder1")} type="text" className="input"/>
         <button disabled={BtnCont} onClick={()=>{
           if (!BtnCont){
             setLogInStep(2)
           }
         }}  id="MailBtn" className="continueBtn">{t("login.continue")}</button>
         <div className="line">
           <span className="lineText">{t("login.underText")}</span>
         </div>
         <div className="authorizationSystems G-justify-between">
           <div className="authBlock G-justify-center G-align-center"><img src={LoginImg.apple} alt=""/></div>
           <div className="authBlock G-justify-center G-align-center"><img src={LoginImg.googleP} alt=""/></div>
           <div className="authBlock G-justify-center G-align-center"><img src={LoginImg.facebook} alt=""/></div>
         </div>
       </div>
     </div>
  )
}

export default LogInStep1