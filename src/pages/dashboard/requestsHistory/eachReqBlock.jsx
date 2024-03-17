import React, {useState} from "react";
import {Images} from "./images/images";
import {useTranslation} from "react-i18next";
import {useDashboardContext} from "../dashboardContext";

function EachReqBlock (){
  const {t, i18n} = useTranslation()
  const {setViewWorkDialog, setOrderState} = useDashboardContext()
  const arr = [
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair",
     "Exhaust system repair"
  ]
  
  
  ////////////////// Sent Approved Completed Canceled
  const [itemStatus, setItemStatus] = useState("Sent")
  
  
  
  return(
     <div className="EachReqBlock G-flex G-align-center">
        <div className="customerBlock G-flex G-align-center">
          <img src={Images.userIcon} alt=""/>
          <div className="textBlock">
            <p className="name">Customer Name</p>
            <p className="carName">Citroen,C5, 2005</p>
          </div>
        </div>
       
       <p className="date">12.02.21</p>
       
       <p className="issue">
         {arr[0]}  +{arr.length > 1 ? arr.length-1 : ""}
       </p>
       
       <p className="price">90€</p>
       
       <div className={`status`}>
         <p className={`${itemStatus}`}>{itemStatus}</p>
       </div>
       
       <div className="buttonsBlock G-flex">
         <button onClick={()=>{
           setViewWorkDialog(true)
           setOrderState("history")
         }} className="btn detailsBtn"><span>{t("reqH.btn1")}</span></button>
         <button className="btn messageBtn"><img src={Images.messageIcon} alt=""/></button>
       </div>
       
       
     </div>
  )
}

export default EachReqBlock