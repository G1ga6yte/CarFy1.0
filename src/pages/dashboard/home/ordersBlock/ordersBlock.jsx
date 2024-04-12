import React, {useEffect, useState} from "react";
import "./ordersBlock.scss"
import {useTranslation} from "react-i18next";
import {Images} from "../images/images";
import Order from "../../globalComponents/RequestItemGlobal/order";
import FiltersDialog from "../../filtersDialog/filtersDialog";

function OrdersBlock (){
  const {t, i18n} = useTranslation()
  const [sortBlock, setSortBlock] = useState(false)
  const [fillOutBlock, setFillOutBlock] = useState(false)
  const [filter, setFilter] = useState(false)
  const [mainFilters, setMainFilters] = useState([])
  const [render, setRender] = useState(false)
  
  // function handleFilterBlock (){
  //   setFilter(false)
  //   setRender(prev=>!prev)
  // }
  //
  // function addNewFilter (newFilter){
  //   let date = filters
  //   date.push(newFilter)
  //   setFilters(date)
  //   setRender(prev=>!prev)
  // }
  //
  // function removeOldFilter (oldFilter){
  //   let date = filters.filter((el)=>{
  //     return el !== oldFilter
  //   })
  //   setFilters(date)
  //   setRender(prev=>!prev)
  // }
  //
  // function clearAllFilters (){
  //   setFilters([])
  //   setRender(prev=>!prev)
  // }
  
  
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
    setMainFilters([])
  }
  const updateFilter = (filterName, value) => {
    setFilterInput((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };
  
  function removeOldFilter (oldFilter){
    let date = mainFilters.filter((el)=>{
      return el !== oldFilter
    })
    setMainFilters(date)
    setRender(prev=>!prev)
  }
  
  return(
     <div className="OrdersBlock">
        <div className="headerBlock G-flex G-align-center G-justify-between">
          
          <div className="filters G-flex G-align-center">
            {mainFilters.map((el, index)=>{
              return(
                 <div className="filteredItem G-flex G-align-center">
                   {el}
                   <img src={Images.closeIconGray} onClick={()=>{removeOldFilter(el)}} alt=""/>
                 </div>
              )
            })}
          </div>
          
          <div className="buttonsBlock G-flex G-align-center">
            
            <div className="sortBtn">
              <div className="G-flex G-align-center" onClick={()=>{
                setFilter(prev=>!prev)
              }}>
                <span>{t("homeP.filter")}</span>
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.41739 3.49984L1.00004 3.49984C0.631851 3.49984 0.333374 3.20136 0.333374 2.83317C0.333374 2.46498 0.631851 2.1665 1.00004 2.1665L8.41739 2.1665C8.71341 1.01635 9.75748 0.166504 11 0.166504C12.4728 0.166504 13.6667 1.36041 13.6667 2.83317C13.6667 4.30593 12.4728 5.49984 11 5.49984C9.75748 5.49984 8.71342 4.64999 8.41739 3.49984Z" fill="#AEAEAE"/>
                  <path d="M3.00004 5.49984C1.52728 5.49984 0.333374 6.69374 0.333374 8.1665C0.333374 9.63926 1.52728 10.8332 3.00004 10.8332C4.2426 10.8332 5.28667 9.98332 5.5827 8.83317L13 8.83317C13.3682 8.83317 13.6667 8.53469 13.6667 8.1665C13.6667 7.79831 13.3682 7.49984 13 7.49984L5.5827 7.49984C5.28667 6.34969 4.2426 5.49984 3.00004 5.49984Z" fill="#AEAEAE"/>
                </svg>
              </div>
              
              <FiltersDialog
                 state={filter}
                 setState={setFilter}
                 mainFilters={mainFilters}
                 setMainFilters={setMainFilters}
              />
            </div>
            
            <div onClick={() => {
              setSortBlock(prevState => !prevState);
              setClearBlock(false);
            }} className="sortBtn G-flex G-align-center">
              <span>{t("homeP.sort")}</span>
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