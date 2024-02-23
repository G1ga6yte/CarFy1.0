import React, {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import "./requests.scss";
import {useNavigate} from "react-router-dom";
import {ImgSvg} from "./images/imgSvg";
import {useCartContext} from "../../CartContext";
import { useLocation } from 'react-router-dom';
function Requests() {
  const location = useLocation();
  const [backBtnNavigation, setBackBtnNavigation] = useState("/profile")
  const [backBtnText, setBackBtnText] = useState("Dashboard")
  useEffect(()=>{
    if (location.pathname.includes("requests/responses/") ){
      setBackBtnNavigation("/requests")
      setBackBtnText("Requests")
    } else if(location.pathname.includes("requests/response/")){
      setBackBtnNavigation(-1)
      setBackBtnText("Responses")
    } else if (location.pathname.includes("/requests")){
      setBackBtnNavigation("/profile")
      setBackBtnText("Dashboard")
    }
  }, [location])
  const navigate = useNavigate();
  const {activeLink, setActiveLink,reqStatus, setReqStatus} = useCartContext()
  
  
  
  return (<div className="AllRequests">
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
            setReqStatus("sending")
          }} className={`link ${activeLink === "AllRequests" ? "activeLink" : ""}`}>All requests
          </button>
          <button onClick={() => {
            setActiveLink("Active");
            setReqStatus("gotResp")
          }} className={`link ${activeLink === "Active" ? "activeLink" : ""}`}>Active
          </button>
          <button onClick={() => {
            setActiveLink("Scheduled");
            setReqStatus("scheduled")
          }} className={`link ${activeLink === "Scheduled" ? "activeLink" : ""}`}>Scheduled
          </button>
          <button onClick={() => {
            setActiveLink("InWork");
            setReqStatus("inWork")
          }} className={`link ${activeLink === "InWork" ? "activeLink" : ""}`}>In work
          </button>
          <button onClick={() => {
            setActiveLink("Finished");
            setReqStatus("finished")
          }} className={`link ${activeLink === "Finished" ? "activeLink" : ""}`}>Finished
          </button>
          <button onClick={() => {
            setActiveLink("Cancelled");
            setReqStatus("cancelled")
          }} className={`link ${activeLink === "Cancelled" ? "activeLink" : ""}`}>Cancelled
          </button>
  
        </div>
      </div>
    </div>
    
    <Outlet/>
    
  
  </div>);
}

export default Requests;