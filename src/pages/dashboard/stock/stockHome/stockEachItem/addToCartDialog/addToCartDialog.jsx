import React from "react";
import "./addToCartDialog.scss"
import {useTranslation} from "react-i18next";
import {Images} from "../../images/images";
import RecommendedItem from "./recommendedItem";

function AddToCartDialog ({count, state, closeDialog, addCount, reduceCount}){
  const {t, i18n} = useTranslation()
  
  return(
     <div style={{display: `${state ? "flex" : "none"}`}} className="AddToCartDialog">
       
       <div onClick={closeDialog} className="backgroundBlock"></div>
       
       <div className="dialogBlock">
          <div className="dialogHeader G-flex G-align-center G-justify-between">
            <p className="header">{t("stock.header1")}</p>
            <img onClick={closeDialog} src={Images.closeIcon} alt=""/>
          </div>
  
         <div className="itemBlock G-flex G-align-center">
           <img className="itemImage" src={Images.img1} alt=""/>
           <div className="textBlock">
             <p className="name">Tire R18 235/65 Hankook Dynapro HP2 RA33 106H</p>
             
             <div className="seller G-flex G-align-center">
               <p className="grayText">{t("stock.seller")}:</p>
               <p className="blueText">Autoparts</p>
             </div>
           
             <div className="priceBlock G-flex G-align-center">
               <span className="price">935€</span>
               <span className="salePercent">-55%</span>
               <span className="oldPrice">1700€</span>
             </div>
             
             <p className="underText G-flex G-align-center">
               <span className="greenText">{t("stock.underText1")} {count} {t("stock.underText2")}</span>
               <span className="grayText"> {t("stock.underText3")} {count * 935}€</span>
             </p>
             
             <div className="buttonsBlock G-flex G-align-center">
               <div className="countingBlock G-flex G-align-center G-justify-center">
                 <button onClick={()=>{addCount()}} className="countBtn"><img src={Images.plusIcon} alt=""/></button>
                 <div className="count">{count}</div>
                 <button onClick={()=>{reduceCount()}} className="countBtn"><img src={Images.minusIcon} alt=""/></button>
               </div>
               
               <button className="goToCartBtn">{t("stock.btn3")}</button>
               <button className="continueBtn">{t("stock.btn4")}</button>

             </div>
           
           
           
           </div>
         </div>
         
         <div className="recommendingBlock">
           <p className="miniHeader">{t("stock.header2")}</p>
           
           <div className="recommendedItems">
             <div className="scrollBlock">
               <RecommendedItem/>
               <RecommendedItem/>
               <RecommendedItem/>
             </div>
           </div>
         </div>
         
       </div>
     </div>
  )
}

export default AddToCartDialog