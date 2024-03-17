import React from "react";
import "./totalBalanceBlock.scss"
import "../partnerHome.scss"
import {Images} from "../images/images";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useDashboardContext} from "../../dashboardContext";

function TotalBalanceBlock (){
  const {t, i18n} = useTranslation()
  const {setActivePage} = useDashboardContext()
  return(
     <Link onClick={()=>{setActivePage("Balance")}} to="/partner/balance" className="TotalBalanceBlock statisticBlock">
       <div className="headerBlock G-flex G-align-center G-justify-between">
         <div className="nameBlock G-flex G-align-center">
           <img src={Images.balanceIcon} alt=""/>
           {t("homeP.miniHeader4")}
         </div>
         <span className="timeBlock">{t("homeP.prg2")}</span>
       </div>
       
       <div className="contentBlock G-flex">
         <div style={{width: `100%`}} className="textContent">
           <p className="grayHeader">{t("homeP.miniHeader7")}</p>
           <span className="totalAmount">0€</span>
           <p className="withdrawBtn G-flex G-align-center">{t("homeP.btn1")}
             <img src={Images.arrowRight} alt=""/>
           </p>
         </div>
       </div>
       
       
     </Link>
  )
}
export default TotalBalanceBlock