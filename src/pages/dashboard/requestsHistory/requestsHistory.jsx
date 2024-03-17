import React, {useState} from "react";
import "./requestsHistory.scss"
import {useTranslation} from "react-i18next";
import EachReqBlock from "./eachReqBlock";

function RequestsHistory (){
  const {t, i18n} = useTranslation()
  const [activeSortBtn, setActiveSortBtn] = useState("All")
  const [isInputFocused, setIsInputFocused] = useState(false)
  
  return(
     <div className="RequestsHistory">
        <p className="miniHeader">{t("reqH.miniHeader1")}</p>
       
       <div className="mainCont">
         
          <div className="headerCont">
            <div className="headCont G-flex G-align-center G-justify-between">
              <div className="sortButtons G-flex G-align-center">
                <button onClick={()=>{setActiveSortBtn("All")}} className={`sortBtn ${activeSortBtn === "All" ? "activeBtn" : ""}`}>{t("reqH.sortBtn1")}</button>
                <button onClick={()=>{setActiveSortBtn("Sent")}} className={`sortBtn ${activeSortBtn === "Sent" ? "activeBtn" : ""}`}>{t("reqH.sortBtn2")}</button>
                <button onClick={()=>{setActiveSortBtn("Approved")}} className={`sortBtn ${activeSortBtn === "Approved" ? "activeBtn" : ""}`}>{t("reqH.sortBtn3")}</button>
                <button onClick={()=>{setActiveSortBtn("Completed")}} className={`sortBtn ${activeSortBtn === "Completed" ? "activeBtn" : ""}`}>{t("reqH.sortBtn4")}</button>
                <button onClick={()=>{setActiveSortBtn("Canceled")}} className={`sortBtn ${activeSortBtn === "Canceled" ? "activeBtn" : ""}`}>{t("reqH.sortBtn5")}</button>
              </div>
              
              <div className="inputBlock">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 2.5C5.58172 2.5 2 6.08172 2 10.5C2 14.9183 5.58172 18.5 10 18.5C11.8487 18.5 13.551 17.8729 14.9056 16.8199L20.2929 22.2071C20.6834 22.5976 21.3166 22.5976 21.7071 22.2071C22.0976 21.8166 22.0976 21.1834 21.7071 20.7929L16.3199 15.4056C17.3729 14.051 18 12.3487 18 10.5C18 6.08172 14.4183 2.5 10 2.5ZM4 10.5C4 7.18629 6.68629 4.5 10 4.5C13.3137 4.5 16 7.18629 16 10.5C16 13.8137 13.3137 16.5 10 16.5C6.68629 16.5 4 13.8137 4 10.5Z" fill={`${isInputFocused ? "#266EFE" : "#AEAEAE"}`}/>
                </svg>
                <input className="searchInput" onFocus={()=>setIsInputFocused(true)} onBlur={()=>setIsInputFocused(false)} placeholder={t("reqH.search")} type="text"/>
              </div>
            </div>
            <div className="sectionsCont G-flex G-align-center">
              <p className="sectionHeader">{t("reqH.sectionH1")}</p>
              <p className="sectionHeader">{t("reqH.sectionH2")}</p>
              <p className="sectionHeader">{t("reqH.sectionH3")}</p>
              <p className="sectionHeader">{t("reqH.sectionH4")}</p>
              <p className="sectionHeader">{t("reqH.sectionH5")}</p>
              <p className="sectionHeader">{t("reqH.sectionH6")}</p>

            </div>
          </div>
         
         <div className="requestsBlock">
           {Array.from({length: 30}, (_, index)=>(
              <EachReqBlock/>
           ))}
         </div>
         
       </div>
     </div>
  )
}
export default RequestsHistory