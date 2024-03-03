import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./profileSettings.scss"
import {ImgSvg} from "../imgSvg/ImgSvg";
import Language from "./settings/language";
import Profile from "./settings/profile";
import Subscription from "./settings/subscription";
import {useCartContext} from "../../../CartContext";
import {useTranslation} from "react-i18next";

function ProfileSettings (){
  const navigate=useNavigate()
  const {t, i18n} = useTranslation()
  const {setAuthorization} = useCartContext()
  const [activeSettings, setActiveSettings] = useState("")
  const [tabletSettings, setTabletSettings] = useState(false)
  useEffect(()=>{
    if (window.innerWidth <=992){
      setActiveSettings("tablet")
      setTabletSettings(true)
    } else {
      setActiveSettings("profile")
    }
  }, [])
  
  
  
  return(
     <div className="ProfileSettings">
       
       <div className="backBtnCont">
         <div onClick={()=>{
           if (window.innerWidth <= 992){
             
             if (activeSettings !== "tablet"){
               setActiveSettings("tablet")
             } else {
               navigate(-1)
             }
           } else {
             navigate(-1)
           }
         }} className="backBtnBlock G-flex G-align-center G-container">
           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
             <path fillRule="evenodd" clipRule="evenodd" d="M26.1772 8.82019C26.8281 9.47106 26.8281 10.5263 26.1772 11.1772L17.3557 19.9987L26.1772 28.8202C26.8281 29.4711 26.8281 30.5263 26.1772 31.1772C25.5263 31.8281 24.4711 31.8281 23.8202 31.1772L13.8202 21.1772C13.1693 20.5263 13.1693 19.4711 13.8202 18.8202L23.8202 8.82019C24.4711 8.16931 25.5263 8.16931 26.1772 8.82019Z" fill="#266EFE"/>
           </svg>
           {window.innerWidth<=992 ? activeSettings === "tablet" ? `${t("settings.dashboard")}` : `${t("settings.settings")}` : `${t("settings.dashboard")}`}
         </div>
       </div>
       
       
       <div className="settingsCont G-container G-flex G-justify-between">
         <div style={{display: `${window.innerWidth <= 992 ? activeSettings === "tablet" ? "block" : "none" : "block"}`}} className="accountLine">
           <div className="buttonsBlock">
             
             <div className="userBlock G-flex G-align-center">
               <img src={ImgSvg.userImg} className="userImg" alt=""/>
               <div className="userNameBlock">
                 <p className="name">{t("settings.hi")}, Kris!</p>
                 <p className="mail">kris@gmail.com</p>
               </div>
             </div>
             
             <div className="buttons">
               
                <button onClick={()=>setActiveSettings("profile")} className={`settingsBtn G-flex G-align-center G-justify-between ${activeSettings === "profile" ? "activeBtn" : ""}`}>
                  <span>{t("settings.section1")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#AEAEAE"/>
                  </svg>
                </button>
               
               <button onClick={()=>setActiveSettings("language")} className={`settingsBtn G-flex G-align-center G-justify-between ${activeSettings === "language" ? "activeBtn" : ""}`}>
                 <span>{t("settings.section2")}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#AEAEAE"/>
                 </svg>
               </button>
               
               <button onClick={()=>setActiveSettings("subscription")} className={`settingsBtn G-flex G-align-center G-justify-between ${activeSettings === "subscription" ? "activeBtn" : ""}`}>
                 <span>{t("settings.section3")}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#AEAEAE"/>
                 </svg>
               </button>
               
               <button onClick={()=>{
                 setAuthorization(false)
                 navigate("/home")
                 window.scrollTo(0, 0)
               }} className="settingsBtn G-flex G-align-center G-justify-between">
                 <span>{t("settings.section4")}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M8.07123 2.55766L9.17177 2.67994C9.42373 2.70789 9.61105 2.72867 9.78005 2.76227C11.5265 3.10951 12.8331 4.56936 12.9854 6.34345C13.0001 6.51512 13.0001 6.70358 13 6.95708L13 7.00035C13 7.55263 12.5523 8.00035 12 8.00035C11.4477 8.00035 11 7.55263 11 7.00035C11 6.68477 10.9991 6.58921 10.9927 6.51446C10.9165 5.62742 10.2632 4.89749 9.39002 4.72387C9.31644 4.70924 9.22157 4.69779 8.90792 4.66294L7.88651 4.54945C7.10494 4.46261 6.57081 4.40385 6.15481 4.38735C5.74652 4.37115 5.53541 4.40091 5.39044 4.4473C4.84862 4.62068 4.40628 5.0166 4.17412 5.53596C4.11201 5.67491 4.05912 5.88145 4.03013 6.28903C4.00059 6.70431 4 7.24166 4 8.02804V15.9727C4 16.759 4.00059 17.2964 4.03013 17.7117C4.05912 18.1192 4.112 18.3258 4.17412 18.4647C4.40628 18.9841 4.84862 19.38 5.39044 19.5534C5.5354 19.5998 5.74652 19.6295 6.15482 19.6133C6.57082 19.5968 7.10495 19.5381 7.88651 19.4512L8.90792 19.3378C9.22147 19.3029 9.31646 19.2914 9.39002 19.2768C10.2632 19.1032 10.9165 18.3733 10.9927 17.4862C10.9991 17.4115 11 17.3159 11 17.0003C11 16.4481 11.4477 16.0003 12 16.0003C12.5523 16.0003 13 16.4481 13 17.0003L13 17.0436C13.0001 17.2971 13.0001 17.4856 12.9854 17.6572C12.8331 19.4313 11.5265 20.8912 9.78005 21.2384C9.61105 21.272 9.4236 21.2928 9.17168 21.3208L8.07121 21.443C7.3347 21.5249 6.72965 21.5921 6.2341 21.6118C5.72276 21.6321 5.24547 21.6069 4.78088 21.4582C3.69725 21.1115 2.81256 20.3196 2.34824 19.2809C2.14918 18.8356 2.07147 18.364 2.03517 17.8536C1.99998 17.3589 1.99999 16.7501 2 16.009V7.99169C1.99999 7.25062 1.99998 6.64182 2.03517 6.14714C2.07147 5.63668 2.14918 5.16509 2.34824 4.71977C2.81256 3.68105 3.69725 2.88922 4.78089 2.54245C5.24547 2.39378 5.72275 2.36863 6.23409 2.38892C6.72964 2.40858 7.3347 2.47582 8.07123 2.55766Z" fill="#AEAEAE"/>
                   <path d="M15.2929 6.29326C15.6834 5.90274 16.3166 5.90274 16.7071 6.29326L21.7071 11.2933C22.0976 11.6838 22.0976 12.3169 21.7071 12.7075L16.7071 17.7075C16.3166 18.098 15.6834 18.098 15.2929 17.7075C14.9024 17.3169 14.9024 16.6838 15.2929 16.2933L18.5858 13.0004H9C8.44772 13.0004 8 12.5527 8 12.0004C8 11.4481 8.44772 11.0004 9 11.0004H18.5858L15.2929 7.70747C14.9024 7.31695 14.9024 6.68378 15.2929 6.29326Z" fill="#AEAEAE"/>
                 </svg>
               </button>
               
             </div>
           </div>
           
           <div className="profileCompleteBlock">
             <div className="header G-flex G-align-center">
               <div className="circle"></div>
               {t("settings.complete1")} 20% {t("settings.complete2")}
             </div>
             
             <div className="progressBlock">
               <div className="progressLine"></div>
             </div>
             
             <p className="underHeader">{t("settings.underText")}</p>
           
           </div>
           
         </div>
         
         <div className="settingsBlock">
         
           <div style={{display : `${tabletSettings ? activeSettings === "language" ? "block" : "none" : activeSettings === "language" ? "block" : "none"}`}}>
             <Language/>
           </div>
           
           <div style={{display : `${activeSettings === "profile" ? "block" : "none"}`}}>
             <Profile/>
           </div>
           
           <div style={{display : `${activeSettings === "subscription" ? "block" : "none"}`}}>
             <Subscription/>
           </div>
         
         
         </div>
         
       </div>
       
     
     </div>
  )
}

export default ProfileSettings