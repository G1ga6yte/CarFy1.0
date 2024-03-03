import React, {useState} from "react";
import {LoginImg} from "./ImgSvg/loginImg";
import {useCartContext} from "../../../CartContext";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


function SignInClient (){
  const {setTypeLogIn} = useCartContext()
  const {t, i18n} = useTranslation()
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
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
           <div onClick={()=> setTypeLogIn("SignUp")} className="toggle">
             {t("login.signUp")}
           </div>
           <div onClick={()=> setTypeLogIn("SignIn")} className="toggle marked">
             {t("login.signIn")}
           </div>
         </div>
         <input onKeyUp={OnKeyUp} placeholder={t("login.placeholder1")} type="text" className="input"/>
         <button disabled={BtnCont} onClick={()=>{
           if (!BtnCont){
             setStep("step2")
           }
         }}  className="continueBtn">{t("login.continue")}</button>
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
    
  
    return(
       <div className="loginBlock">
         <div className="account G-flex G-align-center">
           <div className="userImg"><img src="" alt=""/></div>
           <div className="infoBlock">
             <p className="userName">{t("login.hi")}, Kris!</p>
             <p className="mailPhone">kris@gmail.com</p>
           </div>
           <img onClick={()=>setStep("step1")} className="deleteAccount" src={LoginImg.deleteC} alt=""/>
         </div>
         
         
         <button onClick={()=>{
           setStep("step3")
         }}  className="continueBtn">{t("login.continue")}</button>
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
  function Step3 (){
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
         
         <input onKeyUp={OnKeyUp} placeholder={t("login.password")} type="password" className="input"/>
         <button disabled={BtnCont} onClick={()=>{
           if (!BtnCont){
             goBack()
           }
         }}  className="continueBtn">{t("login.continue")}</button>
         
         <p  onClick={()=>setTypeLogIn("SignInPartner")} className="becomeAPartner">{t("login.partnerPrg")}</p>
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
    } else {
    
    }
  }
  
  return(
     <div className="SignUpClient  G-justify-between G-align-center">
  
       <img style={{zIndex: 9999, display: `${step === "step1" ? "none" : "block"}`}} className="backButton" src={LoginImg.chevronLeft} onClick={()=>{
         if (step === "step2"){
           setStep("step1")
         } else if (step === "step3"){
           setStep("step2")
         } else if (step === "finish"){
           setStep("step3")
         }
       }} alt=""/>
       
       <div className="ImgBlock G-flex-column G-align-center">
         <img src={LoginImg.lockImg} alt=""/>
         <p className="headText">{t("login.bHeader1")}</p>
         <span className="underText">{t("login.signIn")}</span>
       </div>
  
       {<Main/>}
       
     </div>
  )
}

export default SignInClient