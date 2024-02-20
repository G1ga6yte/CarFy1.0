import React, {useState} from "react";
import {useCartContext} from "../../../../CartContext";

function LogInStep2 (){
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
  
       <p className="header">Last step!</p>
       <p className="underHeader">You need to sign in</p>
       <p className="desc">We sent you the secret code enter it below</p>
  
       <div className="loginBlock">
         <input onKeyUp={OnKeyUp2} placeholder="Code" type="number" className="input"/>
         <button disabled={BtnCont2} onClick={()=>{
           if (!BtnCont2){
             setLogInStep(3)
           }
         }}  id="MailBtn" className="continueBtn">Continue</button>
       </div>
       
     </div>
  )
}

export default LogInStep2