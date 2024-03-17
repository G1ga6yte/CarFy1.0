import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import "./emergency.scss";
import {Images} from "../home/images/images";
import Order from "../globalComponents/RequestItemGlobal/order";

function Emergency() {
  const {t, i18n} = useTranslation();
  const [sortBlock, setSortBlock] = useState(false);
  const [clearBlock, setClearBlock] = useState(false);
  const [sortDistance, setSortDistance] = useState(999);
  const [filters, setFilters] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });
  
  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };
  
  
  useEffect(() => {
    let timeoutId;
    
    const handleMouseEnter = () => {
      setSortBlock(true);
      clearTimeout(timeoutId);
    };
    
    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
        setSortBlock(false);
      }, 4000);
    };
    
    const cleanup = () => {
      clearTimeout(timeoutId);
    };
    
    const sortBlock = document.getElementById("sortBlock");
    
    if (sortBlock) {
      sortBlock.addEventListener("mouseenter", handleMouseEnter);
      sortBlock.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      cleanup();
      if (sortBlock) {
        sortBlock.removeEventListener("mouseenter", handleMouseEnter);
        sortBlock.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  
  function handleClearFilters() {
    setSortDistance(999);
    const clearedFilters = Object.keys(filters).reduce((acc, filterName) => {
      acc[filterName] = false;
      return acc;
    }, {});
    setFilters(clearedFilters);
    
  }
  
  
  return (
     <div className="Emergency">
       <p className="miniHeader G-flex G-align-center">{t("emergency.miniHeader1")} <span
          className="requestsCount">+4</span></p>
       
       <div className="mainCont">
         
         <div className="sortButtonsBlock G-flex G-align-center G-justify-between">
           <div className="distanceButtons G-flex G-align-center">
             <span className="sortHeader">{t("emergency.sortH")}</span>
             <button onClick={() => setSortDistance(3)}
                     className={`sortBtn ${sortDistance === 3 ? "activeBtn" : ""}`}>{t("emergency.sort1")} 3{t("emergency.km")}</button>
             <button onClick={() => setSortDistance(5)}
                     className={`sortBtn ${sortDistance === 5 ? "activeBtn" : ""}`}>{t("emergency.sort1")} 5{t("emergency.km")}</button>
             <button onClick={() => setSortDistance(10)}
                     className={`sortBtn ${sortDistance === 10 ? "activeBtn" : ""}`}>{t("emergency.sort1")} 10{t("emergency.km")}</button>
             <button onClick={() => setSortDistance(20)}
                     className={`sortBtn ${sortDistance === 20 ? "activeBtn" : ""}`}>{t("emergency.sort1")} 20{t("emergency.km")}</button>
             <button onClick={() => setSortDistance(50)}
                     className={`sortBtn ${sortDistance === 50 ? "activeBtn" : ""}`}>{t("emergency.sort1")} 50{t("emergency.km")}</button>
           </div>
           
           <div className="buttonsBlock G-flex G-align-center">
             <div onClick={() => {
               setSortBlock(prevState => !prevState);
               setClearBlock(false);
             }} className="sortBtn G-flex G-align-center">
               {t("homeP.sort")}
               <img src={Images.sortIcon} alt=""/>
               <div id="sortBlock" style={{display: `${sortBlock ? "flex" : "none"}`}} className="sortList">
                 <label htmlFor="mostRecent">
                   <input checked={filters.checkbox1} onChange={(e) => updateFilter("checkbox1", e.target.checked)}
                          id="mostRecent" type="checkbox"/>
                   {t("homeP.sort1")}
                 </label>
                 <label htmlFor="withPhoto">
                   <input checked={filters.checkbox2} onChange={(e) => updateFilter("checkbox2", e.target.checked)}
                          id="withPhoto" type="checkbox"/>
                   {t("homeP.sort2")}
                 </label>
                 <label htmlFor="nearest">
                   <input checked={filters.checkbox3} onChange={(e) => updateFilter("checkbox3", e.target.checked)}
                          id="nearest" type="checkbox"/>
                   {t("homeP.sort3")}
                 </label>
                 <label htmlFor="hid">
                   <input checked={filters.checkbox4} onChange={(e) => updateFilter("checkbox4", e.target.checked)}
                          id="hid" type="checkbox"/>
                   {t("homeP.sort4")}
                 </label>
               </div>
             </div>
             
             <div onClick={() => {
               setClearBlock(prevState => !prevState);
               setSortBlock(false);
             }} className="sortBtn G-flex G-align-center">
               <img src={Images.dots} alt=""/>
               <div onClick={handleClearFilters} style={{display: `${clearBlock ? "block" : "none"}`}}
                    className="clearCont">{t("emergency.clearFilters")}</div>
             </div>
           </div>
         </div>
         
         <div className="RequestsBlock">
           <Order state="emergency"/>
           <Order state="emergency"/>
           <Order state="emergency"/>
           <Order state="emergency"/>
           <Order state="emergency"/>
           <Order state="emergency"/>


         </div>
       
       
       </div>
     
     </div>
  );
}

export default Emergency;