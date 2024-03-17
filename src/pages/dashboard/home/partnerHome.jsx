import React, {useState} from "react";
import {useDashboardContext} from "../dashboardContext";
import {useTranslation} from "react-i18next";
import {Images} from "./images/images";
import "./partnerHome.scss"
import RequestsBlock from "./requestsBlock/requestsBlock";
import TransactionsBlock from "./transactionsBlock/transactionsBlock";
import TotalBalanceBlock from "./totalBalanceBlock/totalBalanceBlock";
import OrdersBlock from "./ordersBlock/ordersBlock";
import SchedulesBlock from "./schedulesBlock/schedulesBlock";

function PartnerHome (){
  const {t, i18n} = useTranslation()
  const [topMessage, setTopMessage] = useState(true)
  
  return(
     <div className="PartnerHome">
     
       <div style={{display: `${topMessage ? "flex" : "none"}`}} className="topMessage G-flex G-align-center G-justify-between">
         <div className="textBlock G-flex G-align-center">
           <p className="important">{t("homeP.important")}</p>
           <p className="importantPrg">{t("homeP.prg11")} <span>{t("homeP.prg12")}</span></p>
         </div>
         <img onClick={()=>{setTopMessage(false)}} src={Images.closeIcon} alt=""/>
       </div>
       
       <p className="miniHeader G-flex G-align-center">{t("homeP.miniHeader1")}
         <img src={Images.arrowRightUp} alt=""/>
       </p>
       
       <div className="statisticsCont G-flex G-justify-between">
         
         <RequestsBlock/>
         <TransactionsBlock/>
         <TotalBalanceBlock/>
         
       </div>
  
       <p className="miniHeader G-flex G-align-center">{t("homeP.miniHeader8")}
         <img src={Images.arrowRightUp} alt=""/>
       </p>
       
       <OrdersBlock/>
  
       <p className="miniHeader G-flex G-align-center">{t("homeP.miniHeader10")}
         <img src={Images.clockIcon} alt=""/>
       </p>
       
       <SchedulesBlock/>
       
       
     </div>
  )
}

export default PartnerHome