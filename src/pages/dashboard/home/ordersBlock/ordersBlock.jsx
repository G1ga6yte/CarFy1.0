import React, {useEffect, useState} from "react";
import "./ordersBlock.scss"
import {useTranslation} from "react-i18next";
import {Images} from "../images/images";
import Order from "../../globalComponents/RequestItemGlobal/order";

function OrdersBlock (){
  const {t, i18n} = useTranslation()
  const [inputIsFocused, setInputIsFocused] = useState(false)
  const [sortBlock, setSortBlock] = useState(false)
  const [fillOutBlock, setFillOutBlock] = useState(false)
  
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
    
    const sortBlock = document.getElementById('sortBlock');
    
    if (sortBlock) {
      sortBlock.addEventListener('mouseenter', handleMouseEnter);
      sortBlock.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      cleanup();
      if (sortBlock) {
        sortBlock.removeEventListener('mouseenter', handleMouseEnter);
        sortBlock.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  const [searchInputVal, setSearchInputVal] = useState("")
  const [searchedBlock, setSearchedBlock] = useState(false)
  function handleInputChange (event){
    setSearchInputVal(event.target.value)
  }
  
  const [filters, setFilters] = useState(["citroen", "Exhaust system", "Exhaust system", "Exhaust system", "Exhaust system", "Exhaust system"])
  function handleRemoveFilter (el){
    const indexToRemove = filters.findIndex(item => item === el);
  
    if (indexToRemove !== -1) {
      const newArray = [...filters.slice(0, indexToRemove), ...filters.slice(indexToRemove + 1)];
      setFilters(newArray);
    }
  }
  
  
  
  const [filtersHideAfter, setFiltersHideAfter] =useState(4)
  useEffect(()=>{
    if (window.innerWidth <= 1440){
      setFiltersHideAfter(3)
    }
    if (window.innerWidth <= 1256){
      setFiltersHideAfter(2)
    }
  }, [])
  
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
    setFilters([])
  }
  const updateFilter = (filterName, value) => {
    setFilterInput((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };
  
  
  return(
     <div className="OrdersBlock">
        <div className="headerBlock G-flex G-align-center G-justify-between">
          
          <div className="leftSide G-flex G-align-center">
            <div className="inputBlock">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 2.5C5.58172 2.5 2 6.08172 2 10.5C2 14.9183 5.58172 18.5 10 18.5C11.8487 18.5 13.551 17.8729 14.9056 16.8199L20.2929 22.2071C20.6834 22.5976 21.3166 22.5976 21.7071 22.2071C22.0976 21.8166 22.0976 21.1834 21.7071 20.7929L16.3199 15.4056C17.3729 14.051 18 12.3487 18 10.5C18 6.08172 14.4183 2.5 10 2.5ZM4 10.5C4 7.18629 6.68629 4.5 10 4.5C13.3137 4.5 16 7.18629 16 10.5C16 13.8137 13.3137 16.5 10 16.5C6.68629 16.5 4 13.8137 4 10.5Z" fill={`${inputIsFocused ? "#266EFE" : "#AEAEAE"}`}/>
              </svg>
              <input value={searchInputVal} onChange={handleInputChange} onFocus={()=>setInputIsFocused(true)} onBlur={()=>setInputIsFocused(false)} className="searchInput" type="text" placeholder={t("homeP.search")}/>
              <div style={{display: `${searchedBlock ? "block" : "none"}`}} className="searchedBlock">
                <span className="searchedItem">Oil filter</span>
                <span className="searchedItem">Exhaust system</span>
                <span className="searchedItem">Exhaust system</span>
                <span className="searchedItem">Exhaust system</span>
                <span className="searchedItem">Exhaust system</span>
                <span className="searchedItem">Exhaust system</span>
                <span className="searchedItem">Exhaust system</span>
                <span className="searchedItem">Exhaust system</span>
                <span className="searchedItem">Exhaust system</span>
                <span className="searchedItem">Exhaust system</span>
              </div>
  
            </div>
  
            <div className="filters G-flex G-align-center">
              {filters.map((el, index)=>{
                if (filters.length >filtersHideAfter){
                  if (index <filtersHideAfter){
                    return(
                       <div key={index} className="filteredItem G-flex G-align-center">
                         {el}
                         <img src={Images.closeIconGray} onClick={()=>{handleRemoveFilter(el)}} alt=""/>
                       </div>
                    )
                  } else if (index === filtersHideAfter){
                    return (
                       <div key={index} className="filteredItem G-flex G-align-center">
                          +{filters.length-filtersHideAfter}
                       </div>
                    )
                  }
                } else {
                  return (
                     <div key={index} className="filteredItem G-flex G-align-center">
                       {el}
                       <img src={Images.closeIconGray} onClick={()=>{handleRemoveFilter(el)}} alt=""/>
                     </div>
                  )
                }
                
              })}
            </div>
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
        <div className="mainBlock">
          
          <div style={{display: `${fillOutBlock ? "flex" : "none"}`}} className="fillOutBlock G-flex G-flex-column G-align-center">
            <p className="grayPrg">{t("homeP.miniHeader9")}</p>
            <p className="count">+34</p>
            <div className="textBlock G-flex G-align-center">
              <p className="important">{t("homeP.important")}</p>
              <p className="importantPrg">{t("homeP.prg11")} <span>{t("homeP.prg12")}</span></p>
            </div>
          </div>
        
          <div className="ordersCont">
            <Order state="home"/>
            <Order state="home"/>
            <Order state="home"/>
            <Order state="home"/>
            <Order state="home"/>
            <Order state="home"/>
            <Order state="home"/>
            <Order state="home"/>
            <Order state="home"/>

          </div>
          
        </div>
     
     </div>
  )
}

export default OrdersBlock