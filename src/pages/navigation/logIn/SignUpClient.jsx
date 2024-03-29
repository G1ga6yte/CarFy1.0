import React, {useState} from "react";
import {LoginImg} from "./ImgSvg/loginImg";
import {useCartContext} from "../../../CartContext";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function SignUpClient (){
  const {setTypeLogIn} = useCartContext()
  const {t, i18n} = useTranslation()
  
  const [step, setStep] = useState("step1")
   function Step1 (){
    const [BtnCont, setBtnCont] = useState(true)
    
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
       <div className="loginBlock">
         <div className="toggleBlock G-flex">
           <div onClick={()=> setTypeLogIn("SignUp")} className="toggle marked">
             {t("login.signUp")}
           </div>
           <div onClick={()=> setTypeLogIn("SignIn")} className="toggle">
             {t("login.signIn")}
           </div>
         </div>
         <input onKeyUp={OnKeyUp} placeholder={t("login.placeholder1")} type="text" className="input"/>
         <button disabled={BtnCont} onClick={()=>{
           if (!BtnCont){
             setStep("step2")
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
         <p onClick={()=>setTypeLogIn("SignInPartner")} className="becomeAPartner">{t("login.partnerPrg")}</p>
       </div>
    )
  }
  function Step2 (){
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
       <div className="loginBlock">
         <p className="message">{t("login.prg1")}</p>
         <input onKeyUp={OnKeyUp2} placeholder={t("login.code")} type="number" className="input"/>
         <button disabled={BtnCont2} onClick={()=>{
           if (!BtnCont2){
             setStep("step3")
           }
         }}  id="MailBtn" className="continueBtn">{t("login.continue")}</button>
         <p onClick={()=>setTypeLogIn("SignInPartner")} className="becomeAPartner">{t("login.partnerPrg")}</p>
       </div>
    )
  }
  function Step3 (){
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
       <div className="loginBlock">
         <input onKeyUp={OnKeyUp3} placeholder={t("login.password")} type="password" className="input"/>
         <input onKeyUp={OnKeyUp33} placeholder="Retry" type={t("login.retry")} className="input"/>
  
         <button disabled={BtnCont3} onClick={()=>{
           if (!BtnCont3){
             setStep("finish")
           }
         }}  id="MailBtn" className="continueBtn">{t("login.continue")}</button>
         <p onClick={()=>setTypeLogIn("SignInPartner")} className="becomeAPartner">{t("login.partnerPrg")}</p>
       </div>
    )
  }
  function Finish (){
    return(
       <div className="loginBlock G-flex-column G-align-center">
          <p className="questPrg">{t("login.nav")}</p>
         
         <Link className="linkToPage G-flex G-justify-between G-align-center" to="/service">
           <span>{t("login.nav1")}</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
             <path fillRule="evenodd" clipRule="evenodd" d="M11.0585 7.05727C11.5792 6.53657 12.4234 6.53657 12.9441 7.05727L20.9441 15.0573C21.4648 15.578 21.4648 16.4222 20.9441 16.9429L12.9441 24.9429C12.4234 25.4636 11.5792 25.4636 11.0585 24.9429C10.5378 24.4222 10.5378 23.578 11.0585 23.0573L18.1157 16.0001L11.0585 8.94289C10.5378 8.42219 10.5378 7.57797 11.0585 7.05727Z" fill="#266EFE"/>
           </svg>
         </Link>
  
         <Link className="linkToPage G-flex G-justify-between G-align-center" to="/shops">
           <span>{t("login.nav2")}</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
             <path fillRule="evenodd" clipRule="evenodd" d="M11.0585 7.05727C11.5792 6.53657 12.4234 6.53657 12.9441 7.05727L20.9441 15.0573C21.4648 15.578 21.4648 16.4222 20.9441 16.9429L12.9441 24.9429C12.4234 25.4636 11.5792 25.4636 11.0585 24.9429C10.5378 24.4222 10.5378 23.578 11.0585 23.0573L18.1157 16.0001L11.0585 8.94289C10.5378 8.42219 10.5378 7.57797 11.0585 7.05727Z" fill="#266EFE"/>
           </svg>
         </Link>
  
         <Link className="linkToPage G-flex G-justify-between G-align-center" to="/vignette">
           <span>{t("login.nav3")}</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
             <path fillRule="evenodd" clipRule="evenodd" d="M11.0585 7.05727C11.5792 6.53657 12.4234 6.53657 12.9441 7.05727L20.9441 15.0573C21.4648 15.578 21.4648 16.4222 20.9441 16.9429L12.9441 24.9429C12.4234 25.4636 11.5792 25.4636 11.0585 24.9429C10.5378 24.4222 10.5378 23.578 11.0585 23.0573L18.1157 16.0001L11.0585 8.94289C10.5378 8.42219 10.5378 7.57797 11.0585 7.05727Z" fill="#266EFE"/>
           </svg>
         </Link>
  
         <Link className="linkToPage G-flex G-justify-between G-align-center" to="/insurance">
           <span>{t("login.nav4")}</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
             <path fillRule="evenodd" clipRule="evenodd" d="M11.0585 7.05727C11.5792 6.53657 12.4234 6.53657 12.9441 7.05727L20.9441 15.0573C21.4648 15.578 21.4648 16.4222 20.9441 16.9429L12.9441 24.9429C12.4234 25.4636 11.5792 25.4636 11.0585 24.9429C10.5378 24.4222 10.5378 23.578 11.0585 23.0573L18.1157 16.0001L11.0585 8.94289C10.5378 8.42219 10.5378 7.57797 11.0585 7.05727Z" fill="#266EFE"/>
           </svg>
         </Link>
       </div>
    )
  }
  
  function Main (){
    if (step === "step1"){
      return <Step1/>
    } else if (step === "step2"){
      return <Step2/>
    } else if (step === "step3"){
      return <Step3/>
    } else if (step === "finish"){
      return <Finish/>
    }
  }
  
  return(
     <div className="SignUpClient  G-justify-between G-align-center">
  
       <img style={{zIndex: 9999, display: `${step === "step1" ? "none" : "block"}`}} className="backButton" src={LoginImg.chevronLeft} onClick={(event)=>{
         if (step === "step2"){
            setStep("step1")
         } else if (step === "step3"){
           setStep("step2")
         } else if (step === "finish"){
           setStep("step3")
         }
       }} alt=""/>
  
  
       <div className="ImgBlock G-flex-column G-align-center">
         <img style={{display: `${step === "finish" ? "none" : "block"}`}} src={LoginImg.lockImg} alt=""/>
         <img style={{display: `${step === "finish" ? "block" : "none"}`}} src={LoginImg.trophy} alt=""/>
         <p className="headText">{step === "finish" ? `${t("login.bHeader2")}` : `${t("login.bHeader1")}`}</p>
         <span style={{display: `${step === "finish" ? "none" : "block"}`}} className="underText">{t("login.signUp")}</span>
       </div>
  
       {<Main/>}
     </div>
  )
}

export default SignUpClient