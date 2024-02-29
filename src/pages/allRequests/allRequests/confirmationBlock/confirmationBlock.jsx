import React from "react";
import "./confirmationGlobal.scss"
import ConfirmationGlobalBlock from "./confirmationGlobalBlock";

function ConfirmationBlock (){
  return(
     <div className="ConfirmationBlock G-container">
       
       <div className="confirmationCont confirmationRoute">
       <ConfirmationGlobalBlock/>
       </div>
       
     </div>
  )
}

export default ConfirmationBlock