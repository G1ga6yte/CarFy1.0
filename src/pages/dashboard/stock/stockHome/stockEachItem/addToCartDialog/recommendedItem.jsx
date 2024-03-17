import React, {useState} from "react";
import {Images} from "../../images/images";
import {useTranslation} from "react-i18next";

function RecommendedItem() {
  const {t, i18n} = useTranslation()
  const [count, setCount] = useState(0)
  
  return (
     <div className="RecommendedItem G-flex G-align-center">
       <div className="ImageBlock" style={{backgroundImage: `url("${Images.img1}")`}}></div>
       
       <div className="textBlock">
         <div className="markHeart G-flex G-align-center G-justify-between">
           <span>HYUNDAI/KIA</span>
           <img src={Images.heartIcon} alt=""/>
         </div>
         
         <div className="priceBlock G-flex G-align-center">
           <span className="price">1000€</span>
           <img src={Images.starIcon} className="starIcon" alt=""/>
           <span className="grayText">No evaluations yet</span>
         </div>
         
         <p className="itemName">Oil filter HYUNDAI/KIA 26300-35505</p>
         
         <div className="statusBuyBtn G-flex G-align-center G-justify-between">
           <p className="status G-flex G-align-center"><img src={Images.checkIcon} alt=""/>{t("stock.inStock")}</p>
           <div className="countingBlock G-flex G-align-center G-justify-center">
             <button onClick={()=>{setCount(prevState => prevState +1)}} className="countBtn"><img src={Images.plusIcon} alt=""/></button>
             <div className="count">{count}</div>
             <button onClick={()=>{if (count !== 0)setCount(prevState => prevState - 1)}} className="countBtn"><img src={Images.minusIcon} alt=""/></button>
           </div>
         </div>
         
       </div>
     
     </div>
  );
}

export default RecommendedItem;