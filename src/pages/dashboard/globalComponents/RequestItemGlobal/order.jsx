import React from "react";
import {Images} from "../../home/images/images";
import {useTranslation} from "react-i18next";
import {useDashboardContext} from "../../dashboardContext";
import "./order.scss";

function Order(props) {
  const {t, i18n} = useTranslation();
  const {setViewWorkDialog, orderState, setOrderState} = useDashboardContext();
  const propsOrderState = props.state;
  
  const arr = [
    "Exhaust system repair",
    "Exhaust system repair",
    "Exhaust system repair",
    "Exhaust system repair",
    "Tow truck required",
    "Exhaust system repair",
    "Exhaust system repair",
    "Exhaust system repair",
    "Exhaust system repair",
  ];
  
  return (
     <div className="Order">
       <div className="headBlock G-flex G-justify-between G-align-center">
         <div className="leftSide G-flex G-align-center">
           <div className="customer G-flex G-align-center">
             <img src={Images.userIcon} alt=""/>
             <p className="customerName">Customer Name</p>
           </div>
           <p className="carName">Citroen,C5, 2005</p>
         </div>
         <div className="rightSide G-flex G-align-center">
           <button onClick={() => {
             setViewWorkDialog(true);
             setOrderState(propsOrderState);
           }} className="viewBtn">{t("homeP.btn2")}</button>
           <button className="hideBtn">{t("homeP.btn3")}</button>
         </div>
       </div>
       
       <p className="messageBlock">
         I am writing to request your services for my car. I have been experiencing some issues with my vehicle and I
         believe it requires professional attention. I have been experiencing some issues with my vehicle and I believe
         it requires professional attention.
         <span className="moreBtn">{t("homeP.more")}</span>
       </p>
       
       <p className="postTime">{t("homeP.posted1")} 23 {t("homeP.posted2")}</p>
       
       <div className="works G-flex G-align-center">
         {arr.map((el, index) => {
           if (arr.length > 5) {
             if (index < 5) {
               return (
                  <p style={{color: `${el === "Tow truck required" ? "#FF7373" : "#688DEF"}`}} className="workItem"
                     key={index}>{el}</p>
               );
             }
           } else {
             return (
                <p style={{color: `${el === "Tow truck required" ? "#FF7373" : "#688DEF"}`}} className="workItem"
                   key={index}>{el}</p>
             );
           }
         })}
         <p className="workItem">{arr.length > 5 ? `+${arr.length - 5}` : ""}</p>
       </div>
     
     </div>
  );
}

export default Order;