import React, {useEffect, useState} from "react";
import "./findServiceStep1.scss";
import {Link, useNavigate} from "react-router-dom";
import {ImgSvg} from "./images/imgSvg";
// import {ServicesData} from "./servicesData";
import {useCartContext} from "../../../CartContext";
import {useTranslation} from "react-i18next";
import service1 from "./images/mechanic-2804536.svg";
import service2 from "./images/service2.png";
import service3 from "./images/tire-2804521.svg";
import service4 from "./images/multimeter-2804534.svg";
import service5 from "./images/car-fan-2804557.svg";
import service6 from "./images/service6.png";
import service7 from "./images/service7.png";
import service8 from "./images/service8.png";
import service9 from "./images/service9.png";
import service10 from "./images/service10.png";
import service11 from "./images/service11.png";
import service12 from "./images/service12.png";


function FindServiceStep1() {
  const {t, i18n} = useTranslation()
  const navigate = useNavigate();
  const {changeFindServiceStep, checkedServices, setCheckedServices, handleDeleteCheck} = useCartContext()
  
  const ServicesData = [
    {
      name: t("services.header1"),
      logo: service1,
      services: [
        t("services.service1"),
        t("services.service2"),
        t("services.service3"),
        t("services.service4"),
        t("services.service5"),
        t("services.service6"),
        t("services.service7"),
        t("services.service8")
      ]
    },
    {
      name: t("services.header2"),
      logo: service2,
      services: [
        t("services.service9"),
        t("services.service10"),

      ]
    },
    {
      name: t("services.header3"),
      logo: service3,
      services: [
        t("services.service11"),
        t("services.service12")

      ]
    },
    {
      name: t("services.header4"),
      logo: service4,
      services: [
        t("services.service13"),
        t("services.service14"),
        t("services.service15"),
        t("services.service16"),
        t("services.service17"),
        t("services.service18")
      ]
    },
    {
      name: t("services.header5"),
      logo: service5,
      services: [
        t("services.service19"),
        t("services.service20"),

      ]
    },
    {
      name: t("services.header6"),
      logo: service6,
      services: [
        t("services.service21"),
        t("services.service22"),
      ]
    },
    {
      name: t("services.header7"),
      logo: service7,
      services: [
        t("services.service23"),
        t("services.service24"),
      ]
    },
    {
      name: t("services.header8"),
      logo: service8,
      services: [
        t("services.service25"),
        t("services.service26"),
      ]
    },
    {
      name: t("services.header9"),
      logo: service9,
      services: [
        t("services.service27"),
        t("services.service28"),
      ]
    },
    {
      name: t("services.header10"),
      logo: service10,
      services: [
        t("services.service29"),
        t("services.service30"),
        t("services.service31")
      ]
    },
    {
      name: t("services.header11"),
      logo: service11,
      services: [
        t("services.service32"),
        t("services.service33"),
      ]
    },
    {
      name: t("services.header12"),
      logo: service12,
      services: [
        t("services.service34"),
        t("services.service35"),
      ]
    }
  ]
  
  
  
  const [searchVal, setSearchVal] = useState("");
  const [clearBtn, setClearBtn] = useState(false);
  const [activeService, setActiveService] = useState(ServicesData[0])
  const [render, setRender] = useState(false)
  
  const [searchOn, setSearchOn] = useState(false)
  const [searchedItems, setSearchedItems] = useState([])
  
  const [tablet, setTablet] = useState(false)
  const [pageTablet, setPageTablet] = useState(1)
  
  const [continueBtn, setContinueBtn] = useState(true)
  useEffect(()=>{
    if (window.innerWidth <=992){
      setTablet(true)
    }
  }, [])
  
  const handleChange = (event) => {
    const value = event.target.value;
    
    if (value !== "") {
      setClearBtn(true);
      setSearchOn(true)
      setActiveService({
        name: "null"
      })
      setPageTablet(2)
      let x = []
      ServicesData.map((el)=>{
        el.services.map((ell)=>{
          if (ell.toLowerCase().startsWith(value.toLowerCase())){
            x.push(ell)
          }
        })
        
      })
      setSearchedItems(x)
      setRender(prev=> !prev)
    } else {
      setClearBtn(false);
      setSearchOn(false)
      setPageTablet(1)
      setActiveService(ServicesData[0])
      setRender(prev=> !prev)
    }
    
    setSearchVal(value);
  };
  
  function handleClear() {
    setSearchVal("");
    setClearBtn(false);
    setSearchOn(false)
    setActiveService(ServicesData[0])
    setRender(prev=> !prev)
    setPageTablet(1)
  
  }
  
  function handleAddChecked (el) {
    
    if (checkedServices.includes(el)){
      return
    } else {
      let x = checkedServices
      x.push(el)
      setCheckedServices(x)
      setContinueBtn(false)
      setRender(prev=> !prev)
    }
    
  }
  
 
  
  return (
     <div className="Step1 G-container">
       <div onClick={() => {
         navigate(-1);
         window.scrollTo(0, 0);
       }} className="backButton G-flex G-align-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
           <path fillRule="evenodd" clipRule="evenodd"
                 d="M26.1772 8.82214C26.8281 9.47301 26.8281 10.5283 26.1772 11.1792L17.3557 20.0007L26.1772 28.8221C26.8281 29.473 26.8281 30.5283 26.1772 31.1792C25.5263 31.83 24.4711 31.83 23.8202 31.1792L13.8202 21.1792C13.1693 20.5283 13.1693 19.473 13.8202 18.8221L23.8202 8.82214C24.4711 8.17127 25.5263 8.17127 26.1772 8.82214Z"
                 fill="#266EFE"/>
         </svg>
         
         <span>{t("finds.back")}</span>
       </div>
       
       <p className="header">{t("finds.header11")}<span>{t("finds.header12")}</span></p>
       
       <div className="inputBlock G-flex">
         <img src={ImgSvg.search} className="searchIcon" alt=""/>
         <input value={searchVal} onChange={handleChange} className="searchInput" type="text"
                placeholder={t("finds.placeholder1")}/>
         <img onClick={handleClear} style={{display: `${clearBtn ? "block" : "none"}`}} src={ImgSvg.close}
              className="closeIcon" alt=""/>
       </div>
       <div className="fastSearch G-flex G-align-center">
         <p onClick={() => {
           setSearchVal("Engine repair");
           setClearBtn(true);
         }} className="fastSearchLink">{t("finds.fastSearch1")}</p>
         <p onClick={() => {
           setSearchVal("Engine diagnostic");
           setClearBtn(true);
         }} className="fastSearchLink">{t("finds.fastSearch2")}</p>
         <p onClick={() => {
           setSearchVal("Engine tune-up");
           setClearBtn(true);
         }} className="fastSearchLink">{t("finds.fastSearch3")}</p>
       </div>
       
       
       <div className="mainBlock G-flex">
         <div style={{display: `${tablet ? pageTablet === 1 ? "flex" : "none" : "flex"}`}} className="services G-flex-column">
           <div style={{display: `${searchOn ? "flex" : "none"}`}} className="serviceBlock G-flex G-align-center G-justify-between">
             <img src={ImgSvg.search} className="searchIcon" alt=""/>
             <p className="searchName">Search</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#266EFE"/>
             </svg>
           </div>
           {ServicesData.map((el, index)=>{
             return(
                <div onClick={()=>{
                  setActiveService(el)
                  setPageTablet(2)
                }} className={`serviceBlock G-flex G-align-center G-justify-between ${el.name === activeService.name ? "activeService" : ""}`} key={index}>
                  <img src={el.logo} className="serviceLogo" alt=""/>
                  <p className="serviceName">{el.name}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#0D172F"/>
                  </svg>
                </div>
             )
           })}
         </div>
         
         <div style={{display: `${tablet ? pageTablet === 2 ? "flex" : "none" : "flex"}`}} className="serviceMain G-flex-column G-justify-between">
           <div onClick={()=>{
              handleClear()
           }} className="tabletHeader">
             {searchOn ? <div className="backLink">
                  <img src={ImgSvg.chevronArrow} className="arrowImg" alt=""/>
                  <img src={ImgSvg.search} className="searchImg" alt=""/>
                  <span>Search</span>
             </div>
             :
             <div className="backLink">
               <img src={ImgSvg.chevronArrow} className="arrowImg" alt=""/>
               <img src={activeService.logo} className="serviceImg" alt=""/>
               <span>{activeService.name}</span>
             </div>}
           </div>
           
           <div className="headBlock G-flex-column">
              
              {searchOn ? searchedItems.length === 0 ? <p className="notification">Nothing found!</p> : searchedItems.map((el, index)=>{
                  if (checkedServices.includes(el)){
                    return(
                       <div onClick={()=>handleAddChecked(el)} className="serviceItem G-flex G-align-center" key={index}>
                         <img src={ImgSvg.check} className="checkImg" alt=""/>
                         <p className="serviceName">{el}</p>
                       </div>
                    )
                  } else {
                    return(
                       <div onClick={()=>handleAddChecked(el)} className="serviceItem G-flex G-align-center" key={index}>
                         <img src={ImgSvg.plus} className="addImg" alt=""/>
                         <p className="serviceName">{el}</p>
                       </div>
                    )
                  }
                
              })
                 :
                 activeService.services.map((el, index)=>{
                if (checkedServices.includes(el)){
                  return(
                     <div onClick={()=>handleAddChecked(el)} className="serviceItem G-flex G-align-center" key={index}>
                       <img src={ImgSvg.check} className="checkImg" alt=""/>
                       <p className="serviceName">{el}</p>
                     </div>
                  )
                } else {
                  return(
                     <div onClick={()=>handleAddChecked(el)} className="serviceItem G-flex G-align-center" key={index}>
                       <img src={ImgSvg.plus} className="addImg" alt=""/>
                       <p className="serviceName">{el}</p>
                     </div>
                  )
                }
  
              })}
            </div>
           
           <div className="bottomCont G-flex-column G-justify-between">
             <div className="checkedItems G-flex">
               {checkedServices.map((el, index)=>{
                 return(
                    <div className="checkedItem G-flex G-align-center" key={index}>
                      <p className="itemName">{el}</p>
                      <img onClick={()=>{handleDeleteCheck(el)}} src={ImgSvg.closeBlack} alt=""/>
                    </div>
                 )
               })}
             </div>
             <div className="bottomBlock">
               <button onClick={()=>handleClear()} className="backBtn">
                 <img src={ImgSvg.backArrow} alt=""/>
                 <span>{t("finds.back")}</span>
               </button>
               <Link to="/findService/newRequest"  className="continueBtn">{t("finds.continue")}</Link>
             </div>
           </div>
         </div>
       </div>
       
     </div>
  );
}

export default FindServiceStep1;