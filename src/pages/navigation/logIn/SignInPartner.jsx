import React from "react";
import {LoginImg} from "./ImgSvg/loginImg";
import {useCartContext} from "../../../CartContext";


function SignInPartner (){
  
  const {setTypeLogIn} = useCartContext()
  return(
     <div className="SignUpClient  G-justify-between">
       <div className="ImgBlock G-flex-column G-align-center">
         <img src={LoginImg.serviceDone} alt=""/>
         <p className="headText">Welcome back!</p>
         <span className="underText">Sign in</span>
       </div>
       
       <div className="loginBlock">
         <div className="toggleBlock G-flex">
           <div onClick={()=> setTypeLogIn("SignUp")} className="toggle">
             Sign up
           </div>
           <div onClick={()=> setTypeLogIn("SignIn")} className="toggle marked">
             Sign in
           </div>
         </div>
         <input placeholder="Email or phone number" type="text" className="input"/>
         <button className="continueBtn">Continue</button>
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

export default SignInPartner