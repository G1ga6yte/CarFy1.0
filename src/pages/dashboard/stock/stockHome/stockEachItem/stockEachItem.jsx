import React, {useState, useEffect} from "react";
import {Images} from "../images/images";
import {useTranslation} from "react-i18next";
import AddToCartDialog from "./addToCartDialog/addToCartDialog";
import {Link} from "react-router-dom";
import {useDashboardContext} from "../../../dashboardContext";

function StockEachItem() {
  const {t, i18n} = useTranslation()
  const [buyBtn, setBuyBtn] = useState(true)
  const {setSelectedItemName, setCategoryPathPrg} = useDashboardContext()
  
  /////////////Dialog /////////////////////////
  const [buyDialog, setBuyDialog] = useState(false)
  const [count, setCount] = useState(0)
  const id = 122333
  function handleCloseDialog (){
    setBuyDialog(false)
  }
  
  function handleAddCount (){
    setCount(prevState => prevState + 1)
  }
  function handleReduceCount (){
    if (count !== 0){
      setCount(prevState => prevState - 1)
    }
  }
  
  
  
  
  return (
     <div className="StockEachItem G-flex G-align-center G-justify-between">
       <AddToCartDialog count={count} state={buyDialog} closeDialog={handleCloseDialog} addCount={handleAddCount} reduceCount={handleReduceCount}/>
       
       <Link to={`/partner/stock/product/${id}`} onClick={()=>{
         setCategoryPathPrg(true)
         setSelectedItemName("Oil filter HYUNDAI/KIA 26300-35505")
       }} className="imgBlock">
         <img src={Images.img1} className="itemImage" alt=""/>
       </Link>
       
       <Link to={`/partner/stock/product/${id}`} className="nameBlock">
         <p className="name">Oil filter HYUNDAI/KIA 26300-35505</p>
         <p className="underText">HYUNDAI / KIA / TOYOTA / NISSAN / SUZUKI</p>
       </Link>
       
       <Link to={`/partner/stock/product/${id}`} className="descriptionBlock">
         <div className="descLine"><span>Height [mm]:</span><span>134,5</span></div>
         <div className="descLine"><span>Filter type:</span><span>Filter Insert</span></div>
         <div className="descLine"><span>Diameter [mm]:</span><span>53,5</span></div>
         <span className="moreSpan">more</span>
       </Link>
       
       <div className="deliveryBlock">
         <div className="descLine"><span>Delivery:</span><span>1 day</span></div>
         <div className="descLine"><span>Availability:</span><span>
           <img src={Images.checkIcon} alt=""/>
           Yes
         </span></div>
         <div className="descLine"><span>Quantity:</span><span>233</span></div>
       </div>
       
       
       <div className="priceBlock">
         <p className="price">935€</p>
       </div>
       
       <div className="buttonsBlock">
        <div style={{display: `${count === 0 ? "none" : "flex"}`}} className="countBlock G-flex G-align-center">
          <button onClick={()=>{
            handleAddCount()
          }} className="plusBtn"><img src={Images.plusIcon} alt=""/></button>
          <div className="count">{count}</div>
          <button onClick={()=>{
            handleReduceCount()
          }} className="minusBtn"><img src={Images.minusIcon} alt=""/></button>
        </div>
         
         <button onClick={()=>{
           setBuyDialog(true)
           handleAddCount()
         }} style={{display: `${count === 0 ? "flex" : "none"}`}} className="buyBtn G-flex G-align-center">
           <img src={Images.shopCart} alt=""/>
           {t("stock.btn2")}
         </button>
       </div>
     
     </div>
  );
}

export default StockEachItem;