import React, {useEffect, useState} from "react";
import {useCartContext} from "../../../CartContext";
import "./searchOnMap.scss";
import {ImagesData} from "./images/imagesData";
import ServiceMapBlock from "./serviceMapBlock/serviceMapBlock";
import ServiceFilterBlock from "./serviceFilterBlock/serviceFilterBlock";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function SearchOnMap() {
  const {t, i18n} = useTranslation()
  const {mapDialog, setMapDialog} = useCartContext();
  useEffect(() => {
    const handlePopstate = () => {
      setMapDialog(false);
    };
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
  
  
  //////////////////filters ////////////////////////////
  const [filterBlock, setFilterBlock] = useState(false);
  const [tabletFilter, setTabletFilter] = useState(false)
  return (
     <div style={{display: `${window.innerWidth <=992 ? "block" : mapDialog ? "block" : "none"}`}} className="SearchOnMap">
       
       <div onClick={() => {
         setFilterBlock(false);
         setMapDialog(false);
       }} className="backgroundDiv"></div>
       
       <div className="dialogBlock G-container G-flex">
         <div style={{display: `${window.innerWidth <= 992 ? filterBlock ? "block" : "none" : "block"}`}} className="searchTextBlock">
           <div className="filterBlock">
             <img onClick={()=>{
               setMapDialog(false)
               setFilterBlock(false)
             }} className="closeIcon" src={ImagesData.xCloseIcon} alt=""/>
             <p className="filterHeader">{t("map.header1")}</p>
             <p className="filterPrg">{t("map.prg1")}</p>
             <div className="filtersButtons G-flex G-align-center">
               <div onClick={() => {
                 setFilterBlock(prevState => !prevState);
               }} className="filterBtn">
                 <img style={{display: `${filterBlock ? "none" : "block"}`}} src={ImagesData.filterIcon} alt=""/>
                 <img style={{display: `${filterBlock ? "block" : "none"}`}} src={ImagesData.xCloseIcon} alt=""/>
               </div>
               <div className="filterBtn">{t("map.btn1")}</div>
               <div className="filterBtn">{t("map.btn2")}</div>
               <div className="resetBtn">{t("map.btn3")}</div>
             </div>
           </div>
           
           <div className="servicesCont">
             <div className="services">
               <ServiceMapBlock/>
               <ServiceMapBlock/>
             </div>
             
             <div style={{display: `${filterBlock ? "block" : "none"}`}} className="filters">
              <ServiceFilterBlock/>
             </div>
           </div>
         
         
         </div>
  
  
  
         <div className="MapBlock">
           <div className="inputBlock">
             <img src={ImagesData.searchIcon} alt=""/>
             <input placeholder={t("map.placeholder")} type="text"/>
           </div>
           <div className="buttonsBlock G-flex">
             <div onClick={() => {
               setFilterBlock(prevState => !prevState);
             }} className="filterBtn">
               <img style={{display: `${filterBlock ? "none" : "block"}`}} src={ImagesData.filterIcon} alt=""/>
               <img style={{display: `${filterBlock ? "block" : "none"}`}} src={ImagesData.xCloseIcon} alt=""/>
             </div>
             <div className="filterBtn">{t("map.btn1")}</div>
             <div className="filterBtn">{t("map.btn2")}</div>
           </div>
  
  
           <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A60c4ff9619a2a91e59d4d41f9c80ec732ebd04fae5134c8c2643f0cea2625d2c&amp;source=constructor"
              width="600" height="450" frameBorder="0"></iframe>
         </div>
  
         <div className="servicesContt">
           <div className="contt">
             <Link to={`/requests/response/:${111223}`} className="serviceBB G-flex G-align-center">
               <p className="serviceHeader">Autofavorīts</p>
               <img src={ImagesData.heartUnfilled} alt=""/>
               <p className="rating G-flex G-align-center">
                 <img src={ImagesData.greenStar} alt=""/>
                 4.9
               </p>
               <span>8km</span>
             </Link>
      
             <Link to={`/requests/response/:${111223}`} className="serviceBB G-flex G-align-center">
               <p className="serviceHeader">Autofavorīts</p>
               <img src={ImagesData.heartUnfilled} alt=""/>
               <p className="rating G-flex G-align-center">
                 <img src={ImagesData.greenStar} alt=""/>
                 4.9
               </p>
               <span>8km</span>
             </Link>
      
             <Link to={`/requests/response/:${111223}`} className="serviceBB G-flex G-align-center">
               <p className="serviceHeader">Autofavorīts</p>
               <img src={ImagesData.heartUnfilled} alt=""/>
               <p className="rating G-flex G-align-center">
                 <img src={ImagesData.greenStar} alt=""/>
                 4.9
               </p>
               <span>8km</span>
             </Link>
           </div>
         </div>


       </div>
     
     
     </div>
  );
}

export default SearchOnMap;