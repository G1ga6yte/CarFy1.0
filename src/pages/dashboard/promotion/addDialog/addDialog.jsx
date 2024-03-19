import React, {useState} from "react";
import "./addDialog.scss";
import {useTranslation} from "react-i18next";
import {Images} from "../images/images";
import WorkingHoursDay from "./workingHoursDay";

function AddDialog({state, stateChange}) {
  const {t, i18n} = useTranslation();
  
  const [categoryBlock, setCategoryBlock] = useState(false);
  const [categoryVal, setCategoryVal] = useState(t("promo.select1Def"));
  
  const [categoryBlock2, setCategoryBlock2] = useState(false);
  const [categoryVal2, setCategoryVal2] = useState(t("promo.select2Def"));
  
  const [categoryBlock3, setCategoryBlock3] = useState(false);
  const [categoryVal3, setCategoryVal3] = useState(t("promo.select3Def"));
  
  const [workingHoursBlock, setWorkingHoursBlock] = useState(false);
  
  return (
     <div style={{display: `${state ? "flex" : "none"}`}} className="AddDialog">
       <div className="backgroundBlock" onClick={() => stateChange(false)}></div>
       
       <div className="scrollBlock">
         <div className="DialogBlock">
           <p className="header">{t("promo.btn1")}</p>
           <img className="closeIcon" src={Images.xClose} onClick={() => {
             stateChange(false);
           }} alt=""/>
           <p className="miniHeader">{t("promo.miniHeader2")}</p>
    
           <div className="selectCont">
             <div style={{
               borderColor: `${categoryBlock ? "#266EFE" : ""}`,
             }} onClick={() => {
               setCategoryBlock(prevState => !prevState);
             }} className="selectBlock G-flex G-justify-between G-align-center">
               <span style={{color: `black`}} className="valSpan">{categoryVal}</span>
               <svg className={`${categoryBlock ? "activeIcon" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24"
                    height="25" viewBox="0 0 24 25" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd"
                       d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z"
                       fill="#AEAEAE"/>
               </svg>
             </div>
      
             <div style={{display: `${categoryBlock ? "block" : "none"}`}} onClick={() => {
               setCategoryBlock(false);
             }} className="optionsBlock">
               <div onClick={() => setCategoryVal("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal("Mercedes")} className="option">Mercedes</div>
             </div>
           </div>
    
           <div className="selectCont">
             <div style={{
               borderColor: `${categoryBlock2 ? "#266EFE" : ""}`,
             }} onClick={() => {
               setCategoryBlock2(prevState => !prevState);
             }} className="selectBlock G-flex G-justify-between G-align-center">
               <span style={{color: `black`}} className="valSpan">{categoryVal2}</span>
               <svg className={`${categoryBlock2 ? "activeIcon" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24"
                    height="25" viewBox="0 0 24 25" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd"
                       d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z"
                       fill="#AEAEAE"/>
               </svg>
             </div>
      
             <div style={{display: `${categoryBlock2 ? "block" : "none"}`}} onClick={() => {
               setCategoryBlock2(false);
             }} className="optionsBlock">
               <div onClick={() => setCategoryVal2("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal2("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal2("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal2("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal2("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal2("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal2("Mercedes")} className="option">Mercedes</div>
             </div>
           </div>
    
    
           <p className="miniHeader">{t("promo.miniHeader3")}</p>
    
           <div className="selectCont">
             <div style={{
               borderColor: `${categoryBlock3 ? "#266EFE" : ""}`,
             }} onClick={() => {
               setCategoryBlock3(prevState => !prevState);
             }} className="selectBlock G-flex G-justify-between G-align-center">
               <span style={{color: `black`}} className="valSpan">{categoryVal3}</span>
               <svg className={`${categoryBlock3 ? "activeIcon" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24"
                    height="25" viewBox="0 0 24 25" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd"
                       d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z"
                       fill="#AEAEAE"/>
               </svg>
             </div>
      
             <div style={{display: `${categoryBlock3 ? "block" : "none"}`}} onClick={() => {
               setCategoryBlock3(false);
             }} className="optionsBlock">
               <div onClick={() => setCategoryVal3("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal3("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal3("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal3("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal3("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal3("Mercedes")} className="option">Mercedes</div>
               <div onClick={() => setCategoryVal3("Mercedes")} className="option">Mercedes</div>
             </div>
           </div>
    
    
           <p className="miniHeader workingMiniHeader G-flex G-justify-between G-align-center">
             <span>{t("promo.miniHeader4")}</span>
             <img onClick={() => {
               setWorkingHoursBlock(true);
             }} style={{display: `${workingHoursBlock ? "none" : "block"}`}} src={Images.plusIcon} alt=""/>
             <img onClick={() => {
               setWorkingHoursBlock(false);
             }} style={{display: `${workingHoursBlock ? "block" : "none"}`}} src={Images.minusIcon} alt=""/>
             <div></div>
           </p>
    
           <div style={{display: `${workingHoursBlock ? "block" : "none"}`}} className="workingHoursBlock">
      
             <WorkingHoursDay index={7} weekDay={t("promo.week1")}/>
             <WorkingHoursDay index={6} weekDay={t("promo.week2")}/>
             <WorkingHoursDay index={5} weekDay={t("promo.week3")}/>
             <WorkingHoursDay index={4} weekDay={t("promo.week4")}/>
             <WorkingHoursDay index={3} weekDay={t("promo.week5")}/>
             <WorkingHoursDay index={2} weekDay={t("promo.week6")}/>
             <WorkingHoursDay index={1} weekDay={t("promo.week7")}/>
    
    
           </div>
    
           <div className="buttonBlock">
             <button className="submitBtn">{t("promo.btn3")}</button>
           </div>
  
  
         </div>
       </div>
     
     </div>
  );
}

export default AddDialog;