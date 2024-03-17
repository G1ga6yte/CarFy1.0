import React, {useEffect, useState} from "react";
import "./category.scss"
import {useTranslation} from "react-i18next";
import {CategoryData} from "./categoryData";
import {Images} from "../stockHome/images/images";
import {useDashboardContext} from "../../dashboardContext";

function Category ({state, handleClose}){
  const {t, i18n} = useTranslation()
  const {setCategoryPathPrg, setSelectedCategory} = useDashboardContext()
  const [activeCategorySection, setActiveCategorySection] = useState(CategoryData[1])
  
  
  
  if (state)return(
     <div className="Category">
        <div onClick={()=>handleClose()} className="backgroundBlock"></div>
     
        <div className="categoryBlock">
  
          <img onClick={()=>{handleClose()}} className="closeIcon" src={Images.closeIcon} alt=""/>
          <div className="scrollBlock">
          
            <div className="sectionsBlock">
              {CategoryData.map((el, index)=>{
                return(
                   <div onClick={()=>{
                     setActiveCategorySection(el)
                   }} style={{color: `${el.name === "Sales" ? "#FF7373" : ""}`}} key={index} className={`categorySection G-flex G-align-center ${activeCategorySection.name === el.name ? "activeSection" : ""}`}>
                     {el.name}
                     <span style={{display: `${el.name === "Lamps" ? "block" : "none"}`}} className="salesSpan">Sales!</span>
                     <span style={{display: `${el.name === "Household goods" ? "block" : "none"}`}} className="newSpan">NEW</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill={el.name === "Sales" ? "#FF7373" : ""}/>
                     </svg>
                   </div>
                )
              })}
            </div>
            
            
            
            <div className="mainBlock">
              <div className="mainLine">
                {activeCategorySection.content.map((el, index)=>{
                  if (index === 0 || index === 3 || index === 6 || index === 9 || index === 12 || index === 15){
                    return(
                       <div key={index} className="contentBlock">
                         <p className="header">{el.header}</p>
                         {el.content.map((ell, index)=>{
                           return(
                              <p onClick={()=>{
                                setCategoryPathPrg(true)
                                setSelectedCategory(activeCategorySection.name)
                                handleClose()
                              }} key={index} className="contentItem">{ell}</p>
                           )
                         })}
                       </div>
                    )
                  }
                })}
              </div>
              
              
              <div className="mainLine">
                {activeCategorySection.content.map((el, index)=>{
                  if (index === 1 || index === 4 || index === 7 || index === 10 || index === 13 || index === 16){
                    return(
                       <div key={index} className="contentBlock">
                         <p className="header">{el.header}</p>
                         {el.content.map((ell, index)=>{
                           return(
                              <p onClick={()=>{
                                setCategoryPathPrg(true)
                                setSelectedCategory(activeCategorySection.name)
                                handleClose()
                              }} key={index} className="contentItem">{ell}</p>
                           )
                         })}
                       </div>
                    )
                  }
                })}
              </div>
              
              
              <div className="mainLine">
                {activeCategorySection.content.map((el, index)=>{
                  if (index === 2 || index === 5 || index === 8 || index === 11 || index === 14 || index === 17){
                    return(
                       <div key={index} className="contentBlock">
                         <p className="header">{el.header}</p>
                         {el.content.map((ell, index)=>{
                           return(
                              <p onClick={()=>{
                                setCategoryPathPrg(true)
                                setSelectedCategory(activeCategorySection.name)
                                handleClose()
                              }} key={index} className="contentItem">{ell}</p>
                           )
                         })}
                       </div>
                    )
                  }
                })}
              </div>
            </div>
            
          </div>
        </div>
       
     </div>
  )
}

export default Category