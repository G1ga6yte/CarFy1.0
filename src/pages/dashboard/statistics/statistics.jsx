import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Images} from "./images/images";
import "./statistics.scss";
import StatisticBlock from "./statisticBlock";
import {Link} from "react-router-dom";

function Statistics() {
  const {t, i18n} = useTranslation();
  const [newBlock, setNewBlock] = useState(true);
  
  const [sortBlock, setSortBlock] = useState(false);
  const [activeSort, setActiveSort] = useState(t("static.sort2"));
  
  const [exportDialog, setExportDialog] = useState(false)
  const [transactionBlock, setTransactionBlock] = useState(false)
  const [transactionVal, setTransactionVal] = useState(t("static.placeholder1"))
  return (
     <div className="Statistics">
       
       <div style={{display: `${exportDialog ? "flex" : "none"}`}} className="exportDialog">
         <div className="backgroundBlock" onClick={()=>{setExportDialog(false)}}></div>
         
         <div className="dialogBlock">
          <div className="headBlock G-flex G-justify-between G-align-center">
            <p className="header">{t("static.export")}</p>
            <img onClick={()=>{setExportDialog(false)}} className="closeIcon" src={Images.xClose} alt=""/>
          </div>
          
           <div className="inputsBlock G-flex G-justify-between">
  
             <input type="text" className="exportInput" placeholder={t("static.from")}/>
  
             <input type="text" className="exportInput" placeholder={t("static.to")}/>
  
             <div className="selectCont">
               <div style={{
                 borderColor: `${transactionBlock ? "#266EFE" : ""}`
               }} onClick={()=>{
                 setTransactionBlock(prevState => !prevState)
               }} className="selectBlock G-flex G-justify-between G-align-center">
                 <span style={{color: `${transactionVal !== `${t("static.placeholder1")}` ? "black" : "#828282"}`}} className="valSpan">{transactionVal}</span>
                 <svg className={`${transactionBlock ? "activeIcon" :""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                   <path  fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z" fill="#AEAEAE"/>
                 </svg>
               </div>
    
               <div style={{display: `${transactionBlock ? "block" : "none"}`}} onClick={()=>{
                 setTransactionBlock(false)
               }} className="optionsBlock">
                 <div onClick={()=>setTransactionVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setTransactionVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setTransactionVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setTransactionVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setTransactionVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setTransactionVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setTransactionVal("Mercedes")} className="option">Mercedes</div>
               </div>
             </div>
             
           </div>
           
           <div className="buttonsBlock G-flex">
             <button className="exportBtn">{t("static.btn1")}</button>
             <button onClick={()=>{setExportDialog(false)}} className="cancelBtn">{t("static.btn2")}</button>
           </div>
          
          
          
         </div>
         
       </div>
       
       <div style={{display: `${newBlock ? "block" : "none"}`}} className="newNotification">
         <div className="headerLine G-flex G-align-center">
           <p className="new">{t("static.new")}</p>
           <p className="newPrg">{t("static.newUpdate")}</p>
         </div>
         <p className="prg">{t("static.prg1")}</p>
         <img src={Images.xClose} onClick={() => {
           setNewBlock(false);
         }} className="closeImg" alt=""/>
       </div>
       
       <div className="statisticsCont G-flex G-justify-between">
         <p className="header">{t("static.header1")}</p>
         <button onClick={()=>{
           setExportDialog(true)
         }} className="exportBtn G-flex G-align-center">
           {t("static.export")}
           <img src={Images.shareIcon} alt=""/>
         </button>
         
         <StatisticBlock
            img={Images.plusIcon}
            header={t("static.miniHeader1")}
            miniHeader={t("static.totalReq")}
            staticColor={"#00CC9A"}
            sum={"145"}
            percent={45}
         />
         
         <StatisticBlock
            img={Images.checkIcon}
            header={t("static.miniHeader2")}
            miniHeader={t("static.totalReq")}
            staticColor={"#F39A31"}
            sum={"23"}
            percent={23}
         />
         
         <StatisticBlock
            img={Images.fileIcon}
            header={t("static.miniHeader3")}
            miniHeader={t("static.totalReq")}
            staticColor={"#FF7373"}
            sum={"2"}
            percent={-23}
         />
         
         <StatisticBlock
            img={Images.safeIcon}
            header={t("static.miniHeader4")}
            miniHeader={t("static.totalRevenue")}
            staticColor={"#00CC9A"}
            sum={"1324200€"}
            percent={999}
         />
       
       </div>
       
       <div className="statisticsByCustomers">
         <p className="header">{t("static.header2")}</p>
         
         <div className="mainCont">
           <div className="topBlock G-flex G-justify-between G-align-center">
             <img src={Images.userIcon} alt=""/>
             <p className="miniHeader">{t("static.miniHeader5")}</p>
             <p className="date">18 Apr, 2023 - 20 Apr, 2023</p>
             <div onClick={() => {
               setSortBlock(prevState => !prevState);
             }} className="sortBlock G-flex G-align-center">
               {activeSort}
               <img style={{rotate: `${sortBlock ? "180deg" : "0deg"}`}} src={Images.chevronDown} alt=""/>
               
               <div style={{display: `${sortBlock ? "block" : "none"}`}} className="sorts">
                 <p onClick={() => {
                   setActiveSort(t("static.sort1"));
                 }} className="sortPrg">{t("static.sort1")}</p>
                 <p onClick={() => {
                   setActiveSort(t("static.sort2"));
                 }} className="sortPrg">{t("static.sort2")}</p>
                 <p onClick={() => {
                   setActiveSort(t("static.sort3"));
                 }} className="sortPrg">{t("static.sort3")}</p>
                 <p onClick={() => {
                   setActiveSort(t("static.sort4"));
                 }} className="sortPrg">{t("static.sort4")}</p>
               </div>
             </div>
           </div>
           
           <div className="mainBlock">
             
             <div className="reviewBlock">
               <div className="grayText width100">{t("static.reviews")}</div>
               
               <div className="staticBlock">
                 <p className="sum">22</p>
                 <div className="grayText">{t("static.status1")}</div>
               </div>
               
               <div className="staticBlock">
                 <p className="sum">190</p>
                 <div className="grayText">{t("static.status2")}</div>
               </div>
               
               <div className="staticBlock">
                 <p className="sum">1</p>
                 <div className="grayText">{t("static.status3")}</div>
               </div>
               
               <div className="staticBlock">
                 <p className="sum">1</p>
                 <div className="grayText">{t("static.status4")}</div>
               </div>
               
               <div className="staticBlock">
                 <p className="sum">23</p>
                 <div className="grayText">{t("static.status5")}</div>
               </div>
               
               <div className="staticBlock">
                 <p className="sum">3</p>
                 <div className="grayText">{t("static.status6")}</div>
               </div>
               
               
               <Link to="/partner/statistics/reviews" className="manageReviewsBtn G-flex G-align-center">
                 {t("static.manageBtn")}
                 <img src={Images.arrowRightBlue} alt=""/>
               </Link>
             
             </div>
             
             <div className="reqTimes G-flex">
               <div className="timeBlock">
                 <div className="time">4d 12h 34m</div>
                 <p className="grayText">{t("static.time1")}</p>
               </div>
               
               <div className="timeBlock">
                 <div className="time">4d 12h 34m</div>
                 <p className="grayText">{t("static.time1")}</p>
               </div>
               
               <div className="timeBlock">
                 <div className="time">4d 12h 34m</div>
                 <p className="grayText">{t("static.time1")}</p>
               </div>
               
               <div className="underTextBlock">
                 <p className="underText">{t("static.underText1")}</p>
                 <p className="underText">{t("static.underText2")} 16 October, 02:29.</p>
               </div>
             </div>
           
           </div>
         
         </div>
       </div>
     
     </div>
  );
}

export default Statistics;