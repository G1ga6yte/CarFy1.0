import React, {useState} from "react";
import {Images} from "../images/images";
import {useDashboardContext} from "../../dashboardContext";
import {useTranslation} from "react-i18next";

function DialogStep2 (){
  const {setViewWorkDialogStep, setViewWorkDialog, orderState} = useDashboardContext();
  const {t, i18n} = useTranslation()
  
  const [selected, setSelected] = useState(`2 ${t("viewWork.days")}`)
  const [selectActive, setSelectActive] = useState(false)
  
  function Selecting (event){
    setSelected(event.target.innerHTML)
    setSelectActive(false)
  }
  
  return(
     <div className="DialogStep">
        <div className="mainCont">
          <div className="headerBlock G-flex G-align-center G-justify-between">
            <div onClick={()=>{setViewWorkDialogStep(1)}} className="backBtn G-flex G-align-center">
              <img src={Images.arrowLeft} alt=""/>
              {t("viewWork.miniHeader5")}
            </div>
            
            <img className="closeIcon" onClick={() => {
              setViewWorkDialog(false);
            }} src={Images.closeIcon} alt=""/>
          </div>
          
          <div style={{display: `${orderState !== "emergency" ? "block" : "none"}`}} className="dateBlock">
            <p className="miniHeader">{t("viewWork.miniHeader6")}</p>
            <p className="date">23 March, 11:00</p>
          </div>
          
          <p className="selectHeader">{t("viewWork.miniHeader7")}</p>
  
          <input placeholder="150€" className="inputPrice" type="text"/>
          
          <p className="selectHeader">{t("viewWork.miniHeader8")}</p>
  
          <div className="Select">
            <div style={{borderColor: `${selectActive ? "#266EFE" : "#D9D9D9"}`}} onClick={()=>setSelectActive(prev => !prev)} className="selectBlock G-justify-between G-align-center">
              <span style={{color: `${selected !== 'Your country' ? "black" : "#AEAEAE"}`}}>{selected}</span>
              <svg style={{transform: `rotate(${selectActive ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path style={{stroke: `${selectActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
    
            <div style={{display: `${selectActive ? "block" : "none"}`}} className="optionsBlock">
              <p onClick={Selecting} className="option">1 {t("viewWork.day")}</p>
              <p onClick={Selecting} className="option">2 {t("viewWork.days")}</p>
              <p onClick={Selecting} className="option">3 {t("viewWork.days")}</p>
              <p onClick={Selecting} className="option">4-5 {t("viewWork.days")}</p>
              <p onClick={Selecting} className="option">6-8 {t("viewWork.days")}</p>
              <p onClick={Selecting} className="option">9-12 {t("viewWork.days")}</p>
            </div>
  
          </div>
          
          
          <div className="nav">
            <div className="buttonsBlock">
              <button onClick={()=>{setViewWorkDialogStep(3)}} className="btn btnApply">{t("viewWork.btn3")}</button>
              <button onClick={()=>{setViewWorkDialog(false)}} className="btn btnHide">{t("viewWork.btn4")}</button>
            </div>
          </div>



        </div>
     </div>
  )
}

export default DialogStep2