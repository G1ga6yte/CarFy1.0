import React from "react";
import {Images} from "./images/images";
import "./checkout.scss"
import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";


function Sent (){
  const {t, i18n} = useTranslation()
  const navigate = useNavigate()
  return(
     <div className="Checkout">
        <div onClick={()=>{
          navigate("/partner/cart")
        }} className="backBtn G-flex G-align-center">
          <img src={Images.chevronLeft} alt=""/>
          {t("checkout.back")}
        </div>
       
       <div className="MainCont">
          <div className="finishedBlock G-flex G-flex-column G-align-center G-justify-center">
            <p className="header">{t("checkout.finishPrg1")}</p>
            <p className="underText">{t("checkout.finishPrg2")}</p>
            <img src={Images.truckImg}  className="truckImg" alt=""/>
            <Link className="continueBtn" to="/partner/stock">{t("checkout.btn2")}</Link>
          </div>
       </div>
     </div>
  )
}

export default Sent