import React,{useEffect} from "react";
import "./logInReq.scss"
import {useCartContext} from "../../../CartContext";
import LogInStep1 from "./logInSteps/logInStep1";
import LogInStep2 from "./logInSteps/logInStep2";
import LogInStep3 from "./logInSteps/logInStep3";
import LogInStep4 from "./logInSteps/logInStep4";
import {useTranslation} from "react-i18next";


function LogInReq (){
  const {t, i18n} = useTranslation()
  const {logInStep, setLogInStep} = useCartContext()
  useEffect(()=>{
    setLogInStep(1)
  }, [])
  function LogInStep (){
    switch (logInStep){
      case 1:
        return <LogInStep1/>;
      case 2:
        return <LogInStep2/>;
      case 3:
        return <LogInStep3/>;
      case 4:
        return <LogInStep4/>;
      default:
        return <LogInStep1/>
    }
  }
  
  return(
     <div className="LogInReq">
       <div onClick={()=>{setLogInStep(prev=>prev-1)}} style={{display: `${logInStep === 1 ? "none" : "flex"}`}} className="backBtnBlock G-flex G-align-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
           <path fillRule="evenodd" clipRule="evenodd" d="M26.1772 8.82214C26.8281 9.47301 26.8281 10.5283 26.1772 11.1792L17.3557 20.0007L26.1772 28.8221C26.8281 29.473 26.8281 30.5283 26.1772 31.1792C25.5263 31.83 24.4711 31.83 23.8202 31.1792L13.8202 21.1792C13.1693 20.5283 13.1693 19.473 13.8202 18.8221L23.8202 8.82214C24.4711 8.17127 25.5263 8.17127 26.1772 8.82214Z" fill="#266EFE"/>
         </svg>
         <span>{t("login.goBack")}</span>
       </div>
       
       {LogInStep()}
     </div>
  )
}

export default LogInReq