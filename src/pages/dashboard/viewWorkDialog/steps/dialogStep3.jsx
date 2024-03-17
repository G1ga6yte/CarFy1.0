import React from "react";
import {Images} from "../images/images";
import {useTranslation} from "react-i18next";
import {useDashboardContext} from "../../dashboardContext";

function DialogStep3 (){
  const {t, i18n} = useTranslation()
  const {setViewWorkDialog} = useDashboardContext()
  
  return(
     <div className="DialogStep">
        <div className="mainCont step3 G-flex G-flex-column G-align-center G-justify-center">
          <img className="closeX" onClick={() => {
            setViewWorkDialog(false);
          }} src={Images.closeIcon} alt=""/>
          <img src={Images.planeLogo} className="planeLogo" alt=""/>
          <p className="header">{t("viewWork.miniHeader9")}</p>
          <button onClick={()=>setViewWorkDialog(false)} className="BackButton">{t("viewWork.back")}</button>
          <p className="underText">{t("viewWork.underText")}</p>
        </div>
     </div>
  )
}

export default DialogStep3