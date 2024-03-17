import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "./stock.scss"
import {useDashboardContext} from "../dashboardContext";
import Category from "./category/category";
import {Images} from "../images/images";

function Stock (){
  const {t, i18n} = useTranslation()
  const { id } = useParams();
  const navigate = useNavigate()
  const location = useLocation()
  const {categoryPathPrg, selectedCategory, selectedItemName, setCategoryPathPrg, setSelectedCategory, setSelectedItemName} = useDashboardContext()
  const [searchInputIsFocused, setSearchInputIsFocused] = useState(false)
  
  
  ////////////////Mark ////////////////////////////
  const [markSelectBlock, setMarkSelectBlock] = useState(false)
  const [markVal, setMarkVal] = useState(``)
  
  ///////////////Model /////////////////////////////
  const [modelSelectBlock, setModelSelectBlock] = useState(false)
  const [modelVal, setModelVal] = useState(``)
  
  //////////////Engine /////////////////////////////
  const [engineSelectBlock, setEngineSelectBlock] = useState(false)
  const [engineVal, setEngineVal] = useState(``)
  
  //////////////Sort By ////////////////////////////
  const [sortByBlock, setSortByBlock] = useState(false)
  const [filterInput, setFilterInput] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });
  const [clearBlock, setClearBlock] = useState(false);
  
  function handleClearFilters() {
    const clearedFilters = Object.keys(filterInput).reduce((acc, filterName) => {
      acc[filterName] = false;
      return acc;
    }, {});
    setFilterInput(clearedFilters);
    setMarkVal(`${t("stock.mark")}`)
    setModelVal(`${t("stock.model")}`)
    setEngineVal(`${t("stock.engine")}`)
  }
  const updateFilter = (filterName, value) => {
    setFilterInput((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };
  
  useEffect(()=>{
    setMarkVal(`${t("stock.mark")}`)
    setModelVal(`${t("stock.model")}`)
    setEngineVal(`${t("stock.engine")}`)
  }, [])
  function handleOffSelects (){
    setMarkSelectBlock(false)
    setModelSelectBlock(false)
    setEngineSelectBlock(false)
    setSortByBlock(false)
    setCategoryPathPrg(false)
    setSelectedCategory("")
    setSelectedItemName("")
  }
  
  const [categoryBlock, setCategoryBlock] = useState(false)
  function handleOffCategory (){
    setCategoryBlock(false)
  }
  
  
  return(
     <div className="Stock">
      <Category state={categoryBlock} handleClose={handleOffCategory}/>
      
      <p style={{display: `${categoryPathPrg ? "none" : location.pathname.includes("product") ? "none" : "block"}`}} className="miniHeader">{t("stock.miniHeader1")}</p>
       <div onClick={()=>{
         if (categoryPathPrg){
           if (location.pathname.includes("product")){
             navigate(-1)
           } else {
             handleOffSelects()
             handleClearFilters()
           }
         } else {
           if(location.pathname.includes("product")){
             navigate(-1)
           } else {
             setCategoryPathPrg(false)
             handleOffSelects()
             handleClearFilters()
           }
           
         }
       }} style={{display: `${categoryPathPrg ? "flex" : location.pathname.includes("product") ? "flex" : "none"}`}} className="miniHeader">
         <img src={Images.chevronLeft} alt=""/>
         {t("stockItem.back")}
       </div>
       
       <div className="mainCont">
  
         <div className="sortCont">
           
           <div className="headerSortBlock G-flex G-align-center G-justify-between">
             <div className="categoryBtn">
               <button onClick={()=>{
                 if (id){
                   navigate("/partner/stock")
                 }
                 handleOffSelects()
                 setCategoryBlock(true)
               }} className="headerBtn category">{t("stock.btn1")}</button>
             </div>
             
             <div className="searchInputBlock">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M10 2.5C5.58172 2.5 2 6.08172 2 10.5C2 14.9183 5.58172 18.5 10 18.5C11.8487 18.5 13.551 17.8729 14.9056 16.8199L20.2929 22.2071C20.6834 22.5976 21.3166 22.5976 21.7071 22.2071C22.0976 21.8166 22.0976 21.1834 21.7071 20.7929L16.3199 15.4056C17.3729 14.051 18 12.3487 18 10.5C18 6.08172 14.4183 2.5 10 2.5ZM4 10.5C4 7.18629 6.68629 4.5 10 4.5C13.3137 4.5 16 7.18629 16 10.5C16 13.8137 13.3137 16.5 10 16.5C6.68629 16.5 4 13.8137 4 10.5Z" fill={`${searchInputIsFocused ? "#266EFE" : "#AEAEAE"}`}/>
               </svg>
               <input onFocus={()=>setSearchInputIsFocused(true)} onBlur={()=>setSearchInputIsFocused(false)} type="text" placeholder={t("stock.search")}/>
             </div>
             
             <div className="selectCont">
                <div style={{
                  borderColor: `${markSelectBlock ? "#266EFE" : ""}`
                }} onClick={()=>{
                  setModelSelectBlock(false)
                  setEngineSelectBlock(false)
                  setSortByBlock(false)
                  setClearBlock(false)
                  setMarkSelectBlock(prevState => !prevState)
                }} className="selectBlock G-flex G-justify-between G-align-center">
                  <span style={{color: `${markVal !== `${t("stock.mark")}` ? "black" : "#AEAEAE"}`}} className="valSpan">{markVal}</span>
                  <svg className={`${markSelectBlock ? "activeIcon" :""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path  fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z" fill="#AEAEAE"/>
                  </svg>
                </div>
               
               <div style={{display: `${markSelectBlock ? "block" : "none"}`}} onClick={()=>{
                 setMarkSelectBlock(false)
               }} className="optionsBlock">
                 <div onClick={()=>setMarkVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setMarkVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setMarkVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setMarkVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setMarkVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setMarkVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setMarkVal("Mercedes")} className="option">Mercedes</div>
               </div>
             </div>
  
             <div className="selectCont">
               <div style={{
                 borderColor: `${modelSelectBlock ? "#266EFE" : ""}`
               }} onClick={()=>{
                 setMarkSelectBlock(false)
                 setEngineSelectBlock(false)
                 setSortByBlock(false)
                 setClearBlock(false)
                 setModelSelectBlock(prevState => !prevState)
               }} className="selectBlock G-flex G-justify-between G-align-center">
                 <span style={{color: `${modelVal !== `${t("stock.model")}` ? "black" : "#AEAEAE"}`}} className="valSpan">{modelVal}</span>
                 <svg className={`${modelSelectBlock ? "activeIcon" :""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                   <path  fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z" fill="#AEAEAE"/>
                 </svg>
               </div>
    
               <div style={{display: `${modelSelectBlock ? "block" : "none"}`}} onClick={()=>{
                 setModelSelectBlock(false)
               }} className="optionsBlock">
                 <div onClick={()=>setModelVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setModelVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setModelVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setModelVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setModelVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setModelVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setModelVal("Mercedes")} className="option">Mercedes</div>
               </div>
             </div>
  
             <div className="selectCont">
               <div style={{
                 borderColor: `${engineSelectBlock ? "#266EFE" : ""}`
               }} onClick={()=>{
                 setModelSelectBlock(false)
                 setMarkSelectBlock(false)
                 setSortByBlock(false)
                 setClearBlock(false)
                 setEngineSelectBlock(prevState => !prevState)
               }} className="selectBlock G-flex G-justify-between G-align-center">
                 <span style={{color: `${engineVal !== `${t("stock.engine")}` ? "black" : "#AEAEAE"}`}} className="valSpan">{engineVal}</span>
                 <svg className={`${engineSelectBlock ? "activeIcon" :""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                   <path  fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z" fill="#AEAEAE"/>
                 </svg>
               </div>
    
               <div style={{display: `${engineSelectBlock ? "block" : "none"}`}} onClick={()=>{
                 setEngineSelectBlock(false)
               }} className="optionsBlock">
                 <div onClick={()=>setEngineVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setEngineVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setEngineVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setEngineVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setEngineVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setEngineVal("Mercedes")} className="option">Mercedes</div>
                 <div onClick={()=>setEngineVal("Mercedes")} className="option">Mercedes</div>
               </div>
             </div>
             
             <div onClick={()=>{
               setSortByBlock(prevState => !prevState)
               setMarkSelectBlock(false)
               setEngineSelectBlock(false)
               setModelSelectBlock(false)
               setClearBlock(false)
             }} className="sortByBtn G-flex G-align-center">
               {t("stock.sortBy")}
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 17" fill="none">
                 <path d="M7.33325 2.90016C7.33325 2.5268 7.33325 2.34011 7.26059 2.1975C7.19667 2.07206 7.09469 1.97007 6.96925 1.90616C6.82664 1.8335 6.63995 1.8335 6.26659 1.8335H4.10756C3.75614 1.83349 3.45294 1.83348 3.20323 1.85388C2.93967 1.87541 2.67753 1.92296 2.42527 2.05148C2.04895 2.24323 1.74299 2.54919 1.55124 2.92552C1.42271 3.17777 1.37517 3.43992 1.35363 3.70348C1.33323 3.95319 1.33324 4.25635 1.33325 4.60778V12.3925C1.33324 12.7439 1.33323 13.0471 1.35363 13.2968C1.37517 13.5604 1.42271 13.8226 1.55124 14.0748C1.74299 14.4511 2.04895 14.7571 2.42527 14.9488C2.67753 15.0774 2.93967 15.1249 3.20323 15.1465C3.45295 15.1669 3.75612 15.1668 4.10754 15.1668H6.26659C6.63995 15.1668 6.82664 15.1668 6.96925 15.0942C7.09469 15.0303 7.19667 14.9283 7.26059 14.8028C7.33325 14.6602 7.33325 14.4735 7.33325 14.1002V2.90016Z" fill="#AEAEAE"/>
                 <path d="M8.66659 14.1002C8.66659 14.4735 8.66659 14.6602 8.73925 14.8028C8.80316 14.9283 8.90515 15.0303 9.03059 15.0942C9.1732 15.1668 9.35988 15.1668 9.73325 15.1668H11.8923C12.2437 15.1668 12.5469 15.1669 12.7966 15.1465C13.0602 15.1249 13.3223 15.0774 13.5746 14.9488C13.9509 14.7571 14.2569 14.4511 14.4486 14.0748C14.5771 13.8226 14.6247 13.5604 14.6462 13.2968C14.6666 13.0471 14.6666 12.744 14.6666 12.3925V4.60779C14.6666 4.25636 14.6666 3.95319 14.6462 3.70348C14.6247 3.43992 14.5771 3.17777 14.4486 2.92552C14.2569 2.54919 13.9509 2.24323 13.5746 2.05148C13.3223 1.92296 13.0602 1.87541 12.7966 1.85388C12.5469 1.83348 12.2437 1.83349 11.8923 1.8335H9.73325C9.35988 1.8335 9.1732 1.8335 9.03059 1.90616C8.90515 1.97007 8.80316 2.07206 8.73925 2.1975C8.66659 2.34011 8.66659 2.52679 8.66659 2.90016V14.1002Z" fill="#AEAEAE"/>
               </svg>
  
               <div id="sortBlock" style={{display: `${sortByBlock ? "flex" : "none"}`}} className="sortList">
                 <label htmlFor="mostRecent">
                   <input checked={filterInput.checkbox1} onChange={(e) => updateFilter("checkbox1", e.target.checked)}
                          id="mostRecent" type="checkbox"/>
                   {t("homeP.sort1")}
                 </label>
                 <label htmlFor="withPhoto">
                   <input checked={filterInput.checkbox2} onChange={(e) => updateFilter("checkbox2", e.target.checked)}
                          id="withPhoto" type="checkbox"/>
                   {t("homeP.sort2")}
                 </label>
                 <label htmlFor="nearest">
                   <input checked={filterInput.checkbox3} onChange={(e) => updateFilter("checkbox3", e.target.checked)}
                          id="nearest" type="checkbox"/>
                   {t("homeP.sort3")}
                 </label>
                 <label htmlFor="hid">
                   <input checked={filterInput.checkbox4} onChange={(e) => updateFilter("checkbox4", e.target.checked)}
                          id="hid" type="checkbox"/>
                   {t("homeP.sort4")}
                 </label>
               </div>
             </div>
             
             <div onClick={()=>{
               setClearBlock(prevState => !prevState)
               setMarkSelectBlock(false)
               setModelSelectBlock(false)
               setEngineSelectBlock(false)
               setSortByBlock(false)
             }} className="moreBtn">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 17" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M6.66675 8.5C6.66675 7.76362 7.2637 7.16667 8.00008 7.16667C8.73646 7.16667 9.33341 7.76362 9.33341 8.5C9.33341 9.23638 8.73646 9.83333 8.00008 9.83333C7.2637 9.83333 6.66675 9.23638 6.66675 8.5Z" fill="#AEAEAE"/>
                 <path fillRule="evenodd" clipRule="evenodd" d="M6.66675 3.83333C6.66675 3.09695 7.2637 2.5 8.00008 2.5C8.73646 2.5 9.33341 3.09695 9.33341 3.83333C9.33341 4.56971 8.73646 5.16667 8.00008 5.16667C7.2637 5.16667 6.66675 4.56971 6.66675 3.83333Z" fill="#AEAEAE"/>
                 <path fillRule="evenodd" clipRule="evenodd" d="M6.66675 13.1667C6.66675 12.4303 7.2637 11.8333 8.00008 11.8333C8.73646 11.8333 9.33341 12.4303 9.33341 13.1667C9.33341 13.903 8.73646 14.5 8.00008 14.5C7.2637 14.5 6.66675 13.903 6.66675 13.1667Z" fill="#AEAEAE"/>
               </svg>
               <div onClick={()=>{
                 handleClearFilters()
                 handleOffSelects()
               }} style={{display: `${clearBlock ? "block" : "none"}`}}
                    className="clearCont">{t("emergency.clearFilters")}</div>

             </div>

           </div>
           
           <div style={{display: `${id ? "none" : "flex"}`}} className="sectionHeadersBlock G-flex G-align-center">
             <p className="sectionHeader"></p>
             <p className="sectionHeader">{t("stock.sectionH1")}</p>
             <p className="sectionHeader">{t("stock.sectionH2")}</p>
             <p className="sectionHeader">{t("stock.sectionH3")}</p>
             <p className="sectionHeader">{t("stock.sectionH4")}</p>
             <p className="sectionHeader">{t("stock.sectionH5")}</p>
           </div>
           
           <div style={{display: `${categoryPathPrg ? "block" : "none"}`}}  className="categoryPathBlock">
             <p className="pathPrg G-flex G-align-center">
               Category
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#AEAEAE"/>
               </svg>
  
               {selectedCategory} <p style={{width: `20px`}}></p> {selectedItemName}
             </p>
           </div>
         </div>
  
         <Outlet/>
       </div>
     </div>
  )
}

export default Stock