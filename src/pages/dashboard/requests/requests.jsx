import React from "react";
import OrdersBlock from "../home/ordersBlock/ordersBlock";
import {useTranslation} from "react-i18next";
import "./requests.scss"
function RequestsPartner (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="Requests">
       <p className="miniHeader G-flex G-align-center">{t("homeP.miniHeader8")} <span className="countSpan">+43</span></p>
       <OrdersBlock/>
     </div>
  )
}

export default RequestsPartner