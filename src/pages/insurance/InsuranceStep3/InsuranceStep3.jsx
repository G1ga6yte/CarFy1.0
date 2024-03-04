import React from "react";
import "./InsuranceStep3.scss"
import {Link} from "react-router-dom";
import {InsuranceSvg} from "../insuranceSvg/insuranceSvg";
import {ImgSvg} from "./img-svg/img-svg";
import {useTranslation} from "react-i18next";

function InsuranceStep3 (){
  const {t, i18n} = useTranslation()
  let Arr = [...Array(7)]
  
  
  return(
     <div className="InsuranceStep3 G-container">
       <p className="header">{t("insurance.header21")} <span>{t("insurance.header22")}</span></p>

       
       <div className="RegCont">
         
         <div className="pageInfo">
           <Link className="linkToSTep1 G-align-center" to="/insurance/step2"><img src={InsuranceSvg.arrowLeft}
                                                                             alt=""/>{t("insurance.back")}</Link>
           <p className="VehicleInfo">{t("insurance.section3")}:</p>
           <span className="clearRefresh G-align-center"><img src={InsuranceSvg.clearIcon} alt=""/>{t("insVig.clear")}</span>
           <div className="pagesOrdinary G-flex">
             <span className="page  G-align-center"><span>1</span>{t("insurance.section1")}</span>
             <span className="page G-align-center"><span>2</span>{t("insurance.section2")}</span>
             <span className="page G-align-center"><span>3</span>{t("insurance.section3")}</span>
           </div>
         </div>
         
         <div className="TableBlock">
           
           <div className="headersBlocks">
             <div className="headerBlock">
               <p className="type">{t("insurance.miniHeader14")}</p>
             </div>
             <div className="headerBlock">
               <p className="type">{t("insurance.miniHeader15")}</p>
               <p className="desc2">{t("insurance.underText2")}</p>
             </div>
             <div className="headerBlock">
               <p className="type">{t("insurance.miniHeader16")} </p>
               <p className="desc1">{t("insurance.underText3")}</p>
             </div>
             <div className="headerBlock">
               <p className="type">{t("insurance.miniHeader17")} </p>
               <p className="desc1">{t("insurance.underText4")}</p>
             </div>
             <div className="headerBlock">
               <p className="type">{t("insurance.miniHeader18")}</p>
               <p className="desc1">{t("insurance.underText5")}</p>
             </div>
           </div>
  
           {Arr.map((index)=>{
             return(
                <div className="companyBlock">
                  <div className="eachBlock">
                    <img src={ImgSvg.company1} alt=""/>
                    <span className="CompanyName">Bull Ins</span>
                    <span className="Details">{t("insurance.details")} <img src={ImgSvg.arrowDown} alt=""/></span>
                  </div>
                  
                  <div className="eachBlock">
                    <p className="typeTablet">One-time payment</p>
                    <span className="desc2">283.00</span>
                    <span className="link">{t("insurance.choose")} <img src={ImgSvg.arrowRight} alt=""/></span>
                  </div>
  
                  <div className="eachBlock">
                    <p className="typeTablet">In 2 Installments</p>
                    <span className="des1">151.50 135.50</span>
                    <span className="desc2">287.00</span>
                    <span className="link">{t("insurance.choose")} <img src={ImgSvg.arrowRight} alt=""/></span>
                  </div>
  
                  <div className="eachBlock">
                    <p className="typeTablet">In 3 Installments</p>
                    <span className="des1">96.60 96.60 96.60</span>
                    <span className="desc2">290.00</span>
                    <span className="link">{t("insurance.choose")} <img src={ImgSvg.arrowRight} alt=""/></span>
                  </div>
  
                  <div className="eachBlock">
                    <p className="typeTablet">In 4 Installments</p>
                    <span className="des1">73.70 73.70 73.70 73.70</span>
                    <span className="desc2">295.00</span>
                    <span className="link">{t("insurance.choose")} <img src={ImgSvg.arrowRight} alt=""/></span>
                  </div>


                  
                </div>
             )
           })}
           
           
         </div>
         
         
         
       </div>
     </div>
  )
}

export default InsuranceStep3