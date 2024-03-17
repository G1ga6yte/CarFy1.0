import React, {useState} from "react";
import "./balance.scss";
import {useTranslation} from "react-i18next";
import Calendar from "react-calendar";
import {Images} from "../images/images";

function Balance() {
  const {t, i18n} = useTranslation();
  const [noteBlock, setNoteBlock] = useState(false);
  const months = [
    `${t("insVig.month1")}`,
    `${t("insVig.month2")}`,
    `${t("insVig.month3")}`,
    `${t("insVig.month4")}`,
    `${t("insVig.month5")}`,
    `${t("insVig.month6")}`,
    `${t("insVig.month7")}`,
    `${t("insVig.month8")}`,
    `${t("insVig.month9")}`,
    `${t("insVig.month10")}`,
    `${t("insVig.month11")}`,
    `${t("insVig.month12")}`,
    `${t("insVig.month1")}`,
    `${t("insVig.month2")}`,
    `${t("insVig.month3")}`,
  ];
  
  const [selected, setSelected] = useState(`${t("balance.miniHeader2")}`);
  const [selectActive, setSelectActive] = useState(false);
  
  
  function Selecting(event) {
    setSelected(event.target.innerHTML);
    setSelectActive(false);
  }
  
  const [selectedFromDate, setSelectedFromDate] = useState(t("balance.from"));
  const [fromDateValue, setFromDateValue] = useState(new Date());
  const [fromDateBlock, setFromDateBlock] = useState(false);
  
  function handleChangeFromDate(event) {
    setFromDateValue(event);
    let newDate = `${t("balance.from")}  ${event.getDate()} ${months[event.getMonth()]}, ${event.getFullYear()}`;
    setSelectedFromDate(newDate);
    setFromDateBlock(false);
  }
  
  
  const [selectedToDate, setSelectedToDate] = useState(t("balance.to"));
  const [toDateValue, setToDateValue] = useState(new Date());
  const [toDateBlock, setToDateBlock] = useState(false);
  
  function handleChangeToDate(event) {
    setToDateValue(event);
    let newDate = `${t("balance.to")}  ${event.getDate()} ${months[event.getMonth()]}, ${event.getFullYear()}`;
    setSelectedToDate(newDate);
    setToDateBlock(false);
  }
  
  return (
     <div className="Balance">
       <p className="miniHeader">{t("balance.miniHeader1")}</p>
       
       <div className="mainCont G-flex G-flex-column">
         <div className="balanceBlock G-flex G-align-center G-justify-between">
           <div className="balanceWithdraw G-flex G-align-center">
             <p className="balancePrice">1324200€</p>
             <p className="withdrawBtn G-flex G-align-center">
               {t("balance.btn1")}
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                 <path
                    d="M9.80474 4.02858C9.54439 3.76823 9.12228 3.76823 8.86193 4.02858C8.60158 4.28892 8.60158 4.71103 8.86193 4.97138L11.7239 7.83331H2.66667C2.29848 7.83331 2 8.13179 2 8.49998C2 8.86817 2.29848 9.16665 2.66667 9.16665H11.7239L8.86193 12.0286C8.60158 12.2889 8.60158 12.711 8.86193 12.9714C9.12228 13.2317 9.54439 13.2317 9.80474 12.9714L13.8047 8.97138C14.0651 8.71103 14.0651 8.28893 13.8047 8.02858L9.80474 4.02858Z"
                    fill="#266EFE"/>
               </svg>
             </p>
           </div>
           
           <div className="holdBlock">
             <p onMouseOver={() => setNoteBlock(true)} onMouseLeave={() => setNoteBlock(false)}
                className="balanceHold">200€/{t("balance.Hold")}</p>
             <div style={{display: `${noteBlock ? "block" : "none"}`}} className="noteBlock">
               {t("balance.prg1")}
             </div>
           </div>
         </div>
         
         <div className="sortBlock G-flex G-align-center G-justify-between">
           
           <p className="miniHeader">{t("balance.miniHeader2")}</p>
           
           <div className="SelectDateBlock">
             <div onClick={() => {
               setFromDateBlock(prevState => !prevState);
               setToDateBlock(false);
               setSelectActive(false);
             }}
                  style={{borderColor: `${fromDateBlock ? "#266EFE" : ""}`}}
                  className="dateInputBlock">
               <span className="dateSpan"
                     style={{color: `${selectedFromDate === `${t("balance.from")}` ? "#AEAEAE" : "black"}`}}>{selectedFromDate}</span>
             </div>
             
             <div style={{display: `${fromDateBlock ? "block" : "none"}`}} className="calendarBlock">
               <Calendar onChange={(event) => {
                 handleChangeFromDate(event);
               }} locale={i18n.resolvedLanguage.toLowerCase()} value={fromDateValue}/>
             </div>
           </div>
           
           <div className="SelectDateBlock">
             <div onClick={() => {
               setToDateBlock(prevState => !prevState);
               setFromDateBlock(false);
               setSelectActive(false);
             }}
                  style={{borderColor: `${toDateBlock ? "#266EFE" : ""}`}}
                  className="dateInputBlock">
               <span className="dateSpan"
                     style={{color: `${selectedToDate === `${t("balance.to")}` ? "#AEAEAE" : "black"}`}}>{selectedToDate}</span>
             </div>
             
             <div style={{display: `${toDateBlock ? "block" : "none"}`}} className="calendarBlock">
               <Calendar onChange={(event) => {
                 handleChangeToDate(event);
               }} locale={i18n.resolvedLanguage.toLowerCase()} value={toDateValue}/>
             </div>
           </div>
           
           <div className="Select">
             <div style={{borderColor: `${selectActive ? "#266EFE" : "#D9D9D9"}`}} onClick={() => {
               setSelectActive(prev => !prev);
               setToDateBlock(false);
               setFromDateBlock(false);
             }} className="selectBlock G-justify-between G-align-center">
               <span
                  style={{color: `${selected !== `${t("balance.miniHeader2")}` ? "black" : "#AEAEAE"}`}}>{selected}</span>
               <svg style={{transform: `rotate(${selectActive ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path style={{stroke: `${selectActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             
             <div style={{display: `${selectActive ? "block" : "none"}`}} className="optionsBlock">
               <p onClick={Selecting} className="option"></p>
               <p onClick={Selecting} className="option"></p>
               <p onClick={Selecting} className="option"></p>
               <p onClick={Selecting} className="option"></p>
               <p onClick={Selecting} className="option"></p>
               <p onClick={Selecting} className="option"></p>
             </div>
           
           </div>
         </div>
         
         <div className="sectionsBlock G-flex">
           <p className="sectionHeader">{t("balance.sectionH1")}</p>
           <p className="sectionHeader">{t("balance.sectionH2")}</p>
           <p className="sectionHeader">{t("balance.sectionH3")}</p>
         </div>
         
         <div className="balanceHistory">
           {Array.from({length: 12}, (_, index)=>(
              <div className="transactionBlock G-flex G-align-center">
                <div className="customerBlock G-flex G-align-center">
                  <img src={Images.userLogo} alt=""/>
                  <div className="textBlock">
                    <p className="name">Customer Name</p>
                    <p className="carName">Citroen,C5, 2005</p>
                  </div>
                </div>
                
                <p className="dateAmount">12.02.21</p>
                
                <p className="dateAmount">90€</p>
              </div>
           ))}
         </div>
  
         <div className="bottomFilter"></div>


       </div>
     </div>
  );
}

export default Balance;