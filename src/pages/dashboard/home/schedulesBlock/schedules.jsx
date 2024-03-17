import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDashboardContext} from "../../dashboardContext";
import EveryReq from "./everyReq";

function Schedules (){
  const {t, i18n} = useTranslation()
  const {value} = useDashboardContext()
  const months = [
    `${t("homeP.month1")}`,
    `${t("homeP.month2")}`,
    `${t("homeP.month3")}`,
    `${t("homeP.month4")}`,
    `${t("homeP.month5")}`,
    `${t("homeP.month6")}`,
    `${t("homeP.month7")}`,
    `${t("homeP.month8")}`,
    `${t("homeP.month9")}`,
    `${t("homeP.month10")}`,
    `${t("homeP.month11")}`,
    `${t("homeP.month12")}`,
    `${t("homeP.month1")}`,
    `${t("homeP.month2")}`,
    `${t("homeP.month3")}`
  ]
  
  const [inputIsFocused, setInputIsFocused] = useState(false)
  const [searchVal, setSearchVal] = useState("")
  function handleSearchVal(event){
    setSearchVal(event.target.value)
  }
  
  
  return(
     <div className="Schedules">
       
       <div className="headerBlock G-flex G-align-center G-justify-between">
          <div className="dateBlock">
            {value.getDate()}, {months[value.getMonth()]}
          </div>
         
         <div className="rightSide G-flex G-align-center">
           <div className="inputBlock">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
               <path fillRule="evenodd" clipRule="evenodd" d="M10 2.5C5.58172 2.5 2 6.08172 2 10.5C2 14.9183 5.58172 18.5 10 18.5C11.8487 18.5 13.551 17.8729 14.9056 16.8199L20.2929 22.2071C20.6834 22.5976 21.3166 22.5976 21.7071 22.2071C22.0976 21.8166 22.0976 21.1834 21.7071 20.7929L16.3199 15.4056C17.3729 14.051 18 12.3487 18 10.5C18 6.08172 14.4183 2.5 10 2.5ZM4 10.5C4 7.18629 6.68629 4.5 10 4.5C13.3137 4.5 16 7.18629 16 10.5C16 13.8137 13.3137 16.5 10 16.5C6.68629 16.5 4 13.8137 4 10.5Z" fill={`${inputIsFocused ? "#266EFE" : "#AEAEAE"}`}/>
             </svg>
             <input placeholder={t("homeP.search")} className="searchInput" type="text" onChange={handleSearchVal} onFocus={()=>setInputIsFocused(true)} onBlur={()=>{setInputIsFocused(false)}} value={searchVal} />
           </div>
  
           <button className="headerButton">{t("homeP.btn4")}</button>
           <button className="headerButton">{t("homeP.btn5")}</button>


         </div>
       </div>
       
       <div className="schedulesCont">
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>
         <EveryReq/>


       </div>
       
     </div>
  )
}

export default Schedules