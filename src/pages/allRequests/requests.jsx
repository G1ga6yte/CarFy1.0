import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import "./requests.scss";
import {useCartContext} from "../../CartContext";
import ConfirmationDialog from "./allRequests/confirmationBlock/confirmationDialog";
import ReviewBlock from "./allRequests/reviewBlock/reviewBlock";
import {useTranslation} from "react-i18next";

function Requests() {
  const {t, i18n} = useTranslation()
  const location = useLocation();
  const [backBtnNavigation, setBackBtnNavigation] = useState("/profile");
  const [backBtnText, setBackBtnText] = useState("Dashboard");
  useEffect(() => {
    if (location.pathname.includes("requests/responses/")) {
      setBackBtnNavigation("/requests");
      setBackBtnText(t("req.btn3"));
    } else if (location.pathname.includes("requests/response/")) {
      setBackBtnNavigation(-1);
      setBackBtnText(t("req.btn2"));
    } else if (location.pathname.includes("/requests")) {
      setBackBtnNavigation("/profile");
      setBackBtnText(t("req.btn1"));
    }
  }, [location]);
  const navigate = useNavigate();
  const {activeLink, setActiveLink, reqStatus, setReqStatus} = useCartContext();
  
  
  return (
     <div className="AllRequests">
       <ConfirmationDialog/>
       {window.innerWidth <= 992 ? "" : <ReviewBlock/>}
  
       <div className="headerBlock">
         <div className="G-container">
           <div onClick={() => {
             navigate(backBtnNavigation);
           }} className="backToDashboardBlock G-flex G-align-center ">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
               <path fillRule="evenodd" clipRule="evenodd"
                     d="M26.1772 8.82214C26.8281 9.47301 26.8281 10.5283 26.1772 11.1792L17.3557 20.0007L26.1772 28.8221C26.8281 29.473 26.8281 30.5283 26.1772 31.1792C25.5263 31.83 24.4711 31.83 23.8202 31.1792L13.8202 21.1792C13.1693 20.5283 13.1693 19.473 13.8202 18.8221L23.8202 8.82214C24.4711 8.17127 25.5263 8.17127 26.1772 8.82214Z"
                     fill="#266EFE"/>
             </svg>
             <span>{backBtnText}</span>
           </div>
         </div>
         
         
         <div className="btnCont">
           <div className="tabsBlock G-container G-flex G-justify-between G-align-center">
             <button onClick={() => {
               setActiveLink("AllRequests");
               setReqStatus("sending");
             }} className={`link ${activeLink === "AllRequests" ? "activeLink" : ""}`}>{t("req.section1")}
             </button>
             <button onClick={() => {
               setActiveLink("Active");
               setReqStatus("gotResp");
             }} className={`link ${activeLink === "Active" ? "activeLink" : ""}`}>{t("req.section2")}
             </button>
             <button onClick={() => {
               setActiveLink("Scheduled");
               setReqStatus("scheduled");
             }} className={`link ${activeLink === "Scheduled" ? "activeLink" : ""}`}>{t("req.section3")}
             </button>
             <button onClick={() => {
               setActiveLink("InWork");
               setReqStatus("inWork");
             }} className={`link ${activeLink === "InWork" ? "activeLink" : ""}`}>{t("req.section4")}
             </button>
             <button onClick={() => {
               setActiveLink("Finished");
               setReqStatus("finished");
             }} className={`link ${activeLink === "Finished" ? "activeLink" : ""}`}>{t("req.section5")}
             </button>
             <button onClick={() => {
               setActiveLink("Cancelled");
               setReqStatus("cancelled");
             }} className={`link ${activeLink === "Cancelled" ? "activeLink" : ""}`}>{t("req.section6")}
             </button>
           
           </div>
         </div>
       </div>
       
       
       <Outlet/>
     
     
     </div>
  );
}

export default Requests;