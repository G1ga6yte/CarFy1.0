import React, {useEffect, useState} from "react";
import {Images} from "./images/images";
import {useTranslation} from "react-i18next";


function CartItemBlock ({checked, checkboxIndex, handleInputChange}){
  const {t, i18n} = useTranslation()
  
  let price = 1000
  let oldPrice = 1700
  let leftInStock = 3
  const [count, setCount] = useState(1)
  
  
  return(
     <div className="CartItemBlock">
       <input type="checkbox" className="checkBox" checked={checked} onChange={(e)=>{
         handleInputChange(`checkbox${checkboxIndex}`, e.target.checked)
       }} />
  
       <div className="contentBlock G-flex G-align-center">
         <div className="itemImg" style={{backgroundImage: `url("${Images.itemImg}")`}}></div>
    
         <div className="textBlock">
           <p className="mark">HYUNDAI/KIA</p>
           <p className="itemName">Oil filter HYUNDAI/KIA 26300-35505, 7.5kg</p>
           <p className="seller G-flex G-align-center"><span>{t("cart.seller")}:</span>Autoparts</p>
           
           <div className="settingsBlock G-flex G-justify-between G-align-center">
             <div className="deliveryBlock">
               <p className="grayLine G-align-center G-flex"><img src={Images.markerPin} alt=""/>{t("cart.pickUpPoints")}: July 30</p>
               <p className="grayLine G-align-center G-flex"><img src={Images.truckIcon} alt=""/>{t("cart.delivery")}: August 1</p>
             </div>
             
             
             <div className="countBlock G-flex G-align-center">
               <button onClick={()=>{
                 if (count< leftInStock){
                   setCount(prevState => prevState +1)
                 }
               }} className="addBtn">
                 <img  src={Images.plusIcon} alt=""/>
               </button>
               <p className="count">{count}</p>
               <button onClick={()=>{
                 if (count > 1){
                   setCount(prevState => prevState -1)
                 }
               }} className="minusBtn">
                 <img  src={Images.minusIcon} alt=""/>
               </button>
               
               <div className="underText G-flex G-align-center"><img src={Images.infoCircle} alt=""/>{t("cart.onlyLeft1")} <span>{leftInStock}</span> {t("cart.onlyLeft2")}</div>
             </div>
             
             <div className="priceBlock G-flex G-align-center">
               <p className="price">{price*count}€</p>
               <p className="sale">-55%</p>
               <p className="oldPrice">{oldPrice*count}€</p>
             </div>
  
             <img className="deleteItemBtn" src={Images.trashIcon} alt=""/>
             
             
             
           </div>
           
           
         </div>
  
       </div>
     </div>
  )
}

export default CartItemBlock