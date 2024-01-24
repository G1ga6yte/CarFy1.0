import React from "react";
import Step1HeadBlock from "./Step1HeadBlock/step1HeadBlock";
import Step1ChooseBlock from "./Step1ChooseBlock/Step1ChooseBlock";
import Step1RegOnlineBlock from "./Step1RegOnlineBlock/Step1RegOnlineBlock";

function InsuranceStep1 (){
  return(
     <div className="InsuranceStep1">
        <Step1HeadBlock/>
       <Step1ChooseBlock/>
       <Step1RegOnlineBlock/>
     </div>
  )
}

export default InsuranceStep1