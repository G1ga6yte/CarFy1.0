import React from "react";
import {useDashboardContext} from "../../dashboardContext";
import {Images} from "../images/images";
import {useTranslation} from "react-i18next";

function DialogStep1() {
  const {t, i18n} = useTranslation()
  const {setViewWorkDialogStep, setViewWorkDialog, orderState, setOrderState} = useDashboardContext();
  const arr = [
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair"
  ]
  
  return (
     <div className="DialogStep">
       <div className="mainCont">
         <div className="headerBlock G-flex G-justify-between G-align-center">
           <div className="customerBlock G-align-center G-flex">
             <img src={Images.userIcon} alt=""/>
             <p className="name">Customer Name</p>
             <p className="name">Citroen,C5, 2005</p>
             <p className="redText">14{t("reqH.miniHeader2")}</p>
           </div>
  
           <div className="closeIconBlock G-flex G-align-center">
             <p style={{display: `${orderState !== "history" ? "none" : "block"}`}} className="sentPrg">{t("reqH.sortBtn2")}</p>
             <img className="closeIcon" onClick={() => {
               setViewWorkDialog(false)
             }} src={Images.closeIcon} alt=""/>
           </div>
         
         </div>
         <p className="messageBlock">I am writing to request your services for my car. I have been experiencing some
           issues with my vehicle and I believe it requires professional attention. I have been experiencing some issues
           with my vehicle and I believe it requires professional attention. I am writing to request your services for
           my car. I have been experiencing some issues with my vehicle and I believe it requires professional
           attention. I have been experiencing some issues with my vehicle and I believe it requires professional
           attention.</p>
         <p className="postedDate">{t("homeP.posted1")} 23 {t("homeP.posted2")}</p>
       
         <div className="issuesBlock G-flex G-align-center">
           <p className="miniHeader">{t("viewWork.miniHeader1")}</p>
           {arr.map((el, index)=>{
             return(
                <p className="issuesItem" key={index}>{el}</p>
             )
           })}
         </div>
         
         <div className="photosBlock G-flex G-align-center">
           <p className="miniHeader">{t("viewWork.miniHeader2")}</p>
           <div style={{backgroundImage: `url("${Images.serviceImg}")`}} className="imageBlock"></div>
           <div style={{backgroundImage: `url("${Images.serviceImg}")`}} className="imageBlock"></div>
           <div style={{backgroundImage: `url("${Images.serviceImg}")`}} className="imageBlock"></div>
         </div>
         
         <div className="nav">
           <p className="miniHeader">{t("viewWork.miniHeader3")}</p>
           <p className="date">23 March, 11:00</p>
           <div style={{display: `${orderState === "history" ? "none" : "flex"}`}} className="buttonsBlock G-flex G-align-center">
             <button onClick={()=>{setViewWorkDialogStep(2)}} className="btn btnApply">{t("viewWork.btn1")}</button>
             <button className="btn btnHide">{t("viewWork.btn2")}</button>
           </div>
           
           <p style={{display: `${orderState === "history" ? "none" : "flex"}`}} className="flagBlock G-flex G-align-center">
             <img src={Images.flagIcon} alt=""/>
             {t("viewWork.grayText1")}
           </p>
         </div>
         
       </div>
       
       <div className="historyCont">
          <div className="header">
            {t("viewWork.miniHeader4")} (50)
          </div>
         <div className="historyBlock">
           {Array.from({length: 10}, (_, index) =>(
              <div className="historyItem">
                <p className="itemDate">12 January, 2022</p>
                <div className="works G-flex G-align-center">
                  <span className="workItem">Exhaust system repair</span>
                  <span className="workItem">Exhaust system repair</span>
                </div>
              </div>
           ))}
         </div>
       </div>
     </div>
  );
}

export default DialogStep1;