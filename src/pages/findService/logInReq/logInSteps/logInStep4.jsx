import React from "react";
import {useNavigate} from "react-router-dom";

import ApprovedImg from "../approve 1.png"
function LogInStep4 (){
  const navigate = useNavigate()
  return(
     <div className="logInStep">
       <img className="approveImg" src={ApprovedImg} alt=""/>
       <p className="underHeader">You need to sign in</p>
       <div className="loginBlock">
         <button  onClick={()=>{navigate("/allRequests")}}  id="MailBtn" className="continueBtn">To requests</button>
       </div>
     </div>
  )
}

export default LogInStep4