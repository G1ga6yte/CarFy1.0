import React, {useState} from "react";
import "./transactionsBlock.scss"
import {Images} from "../images/images";
import {useTranslation} from "react-i18next";

function TransactionsBlock (){
  const {t, i18n} = useTranslation()
  const [timeBlock, setTimeBlock] = useState(false)
  const [selectedTime, setSelectedTime] = useState(t("homeP.time1"))
  
  return(
     <div className="TransactionsBlock statisticBlock">
       <div className="headerBlock G-flex G-align-center G-justify-between">
         <div className="nameBlock G-flex G-align-center">
           <img src={Images.transIcon} alt=""/>
           {t("homeP.miniHeader3")}
         </div>
         <div onClick={()=>{setTimeBlock(prevState => !prevState)}} className={`timeBlock G-flex G-align-center ${timeBlock ? "activeBlock" : ""}`}>
           {selectedTime}
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
             <path fillRule="evenodd" clipRule="evenodd" d="M3.52851 5.52858C3.78886 5.26823 4.21097 5.26823 4.47132 5.52858L7.99992 9.05717L11.5285 5.52858C11.7889 5.26823 12.211 5.26823 12.4713 5.52858C12.7317 5.78892 12.7317 6.21103 12.4713 6.47138L8.47132 10.4714C8.21097 10.7317 7.78886 10.7317 7.52851 10.4714L3.52851 6.47138C3.26816 6.21103 3.26816 5.78892 3.52851 5.52858Z" fill="#AEAEAE"/>
           </svg>
           <div style={{display: `${timeBlock ? "block" : "none"}`}} className="listBlock">
             <p onClick={()=> {
               setSelectedTime(t("homeP.time1"));
             }} className="listItem">{t("homeP.time1")}</p>
             <p onClick={()=> {
               setSelectedTime(t("homeP.time2"));
             }} className="listItem">{t("homeP.time2")}</p>
             <p onClick={()=> {
               setSelectedTime(t("homeP.time3"));
             }} className="listItem">{t("homeP.time3")}</p>
             <p onClick={()=> {
               setSelectedTime(t("homeP.time4"));
             }} className="listItem">{t("homeP.time4")}</p>
           </div>
         </div>
       </div>
  
       <div className="contentBlock G-flex">
         <div className="textContent">
           <p className="grayHeader">{t("homeP.miniHeader6")}</p>
           <span className="totalAmount">0</span>
           <div className="rateBlock G-flex G-align-center">
             0%
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M8.47139 2.86195C8.21104 2.6016 7.78893 2.6016 7.52858 2.86195L2.86192 7.52862C2.60157 7.78896 2.60157 8.21108 2.86192 8.47142C3.12227 8.73177 3.54438 8.73177 3.80473 8.47142L7.33332 4.94283V12.6667C7.33332 13.0349 7.6318 13.3334 7.99999 13.3334C8.36818 13.3334 8.66666 13.0349 8.66666 12.6667L8.66666 4.94283L12.1953 8.47142C12.4556 8.73177 12.8777 8.73177 13.1381 8.47142C13.3984 8.21108 13.3984 7.78896 13.1381 7.52862L8.47139 2.86195Z" fill="#00CC9A"/>
             </svg>
           </div>
         </div>
    
         <div className="statistic">
           <div className="backLine G-flex G-align-center"><span>150</span> <div className="line"></div></div>
           <div className="backLine G-flex G-align-center"><span>100</span> <div className="line"></div></div>
           <div className="backLine G-flex G-align-center"><span>50</span> <div className="line"></div></div>
           <div className="backLine G-flex G-align-center"><span>0</span> <div className="line"></div></div>
      
           <div className="states orangeLines G-flex">
             <div className="statesBlock G-flex-column"><div className="statesLine"></div>9:00</div>
             <div className="statesBlock G-flex-column"><div style={{height: "60px"}} className="statesLine"></div>10:00</div>
             <div className="statesBlock G-flex-column"><div style={{height: "35px"}} className="statesLine"></div>11:00</div>
             <div className="statesBlock G-flex-column"><div className="statesLine"></div>12:00</div>
             <div className="statesBlock G-flex-column"><div className="statesLine"></div>13:00</div>
             <div className="statesBlock G-flex-column"><div className="statesLine"></div>14:00</div>
             <div className="statesBlock G-flex-column"><div className="statesLine"></div>15:00</div>
           </div>
         </div>
  
       </div>
     </div>
  )
}

export default TransactionsBlock