import React, {useState} from "react";
import {LoginImg} from "../../../navigation/logIn/ImgSvg/loginImg";
import {useCartContext} from "../../../../CartContext";

function LogInStep1 (){
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
       <p className="header">Last step!</p>
       <p className="underHeader">You need to sign in</p>
       <div className="loginBlock">
         <div className="toggleBlock G-flex">
           <div onClick={()=> setLogInType("SignUp")} className={`toggle ${logInType === "SignUp" ? "marked" : ""}`}>
             Sign up
           </div>
           <div onClick={()=> setLogInType("SignIn")} className={`toggle ${logInType === "SignIn" ? "marked" : ""}`}>
             Sign in
           </div>
         </div>
         <input onKeyUp={OnKeyUp} placeholder="Email or phone number" type="text" className="input"/>
         <button disabled={BtnCont} onClick={()=>{
           if (!BtnCont){
             setLogInStep(2)
           }
         }}  id="MailBtn" className="continueBtn">Continue</button>
         <div className="line">
           <span className="lineText">or continue with</span>
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