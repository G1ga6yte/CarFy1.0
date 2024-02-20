import React,{useState} from "react";
import {useCartContext} from "../../../../CartContext";

function LogInStep3 (){
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
       <p className="header">Almost done!</p>
       <p className="desc">Make up your own password</p>
  
  
       <div className="loginBlock">
         <input onKeyUp={OnKeyUp3} placeholder="Password" type="password" className="input"/>
         <input onKeyUp={OnKeyUp33} placeholder="Retry" type="password" className="input"/>
    
         <button disabled={BtnCont3} onClick={()=>{
           if (!BtnCont3){
             setLogInStep(4)
           }
         }}  id="MailBtn" className="continueBtn">Continue</button>
       </div>
     </div>
  )
}

export default LogInStep3