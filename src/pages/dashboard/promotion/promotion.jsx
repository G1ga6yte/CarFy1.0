import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import "./promotion.scss";
import {Images} from "./images/images";
import AddDialog from "./addDialog/addDialog.jsx";

function Promotion() {
  const {t, i18n} = useTranslation();
  
  const [addDialog, setAddDialog] = useState(false)
  function handleAddDialog(val){
    setAddDialog(val)
  }
  
  function PromotionItem() {
    const [paused, setPaused] = useState(false);
    return (
       <div className="PromotionItem G-flex G-align-center G-justify-between">
         <div className="imgBlock"><img src={Images.engineImg} alt=""/></div>
         <div className="typeBlock">
           <p className="name">Oil change</p>
           <p className="underText">Regular oil change</p>
         </div>
         <div className="views">808</div>
         <div className="orders">32</div>
         <div className="date">01.11.2023</div>
         <div className="actionDate">12-00 16-00</div>
         <div className="discount">20% {t("promo.off")}</div>
         <div onClick={()=>{setPaused(prev=>!prev)}} className="status">
           <img style={{display: `${paused ? "none" : "block"}`}} src={Images.playIcon} alt=""/>
           <img style={{display: `${paused ? "block" : "none"}`}} src={Images.pauseIcon} alt=""/>
         </div>
         <div className="manageBtn">
           <button>{t("promo.btn2")}</button>
         </div>
       </div>
    );
  }
  
  return (
     <div className="Promotion">
       <p className="header">{t("promo.header1")} <span>4</span></p>
       
       <div className="mainCont">
         <div className="headBlock G-flex G-align-center G-justify-between">
           <img src={Images.saleIcon} className="saleIcon" alt=""/>
           <p className="miniHeader">{t("promo.header1")}</p>
           <button onClick={()=>{setAddDialog(true)}} className="addBtn G-flex G-align-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path fillRule="evenodd" clipRule="evenodd"
                     d="M8.00008 0.666504C3.94999 0.666504 0.666748 3.94975 0.666748 7.99984C0.666748 12.0499 3.94999 15.3332 8.00008 15.3332C12.0502 15.3332 15.3334 12.0499 15.3334 7.99984C15.3334 3.94975 12.0502 0.666504 8.00008 0.666504ZM8.00008 4.6665C8.36827 4.6665 8.66675 4.96498 8.66675 5.33317V7.33317H10.6667C11.0349 7.33317 11.3334 7.63165 11.3334 7.99984C11.3334 8.36803 11.0349 8.6665 10.6667 8.6665H8.66675V10.6665C8.66675 11.0347 8.36827 11.3332 8.00008 11.3332C7.63189 11.3332 7.33341 11.0347 7.33341 10.6665V8.6665H5.33341C4.96522 8.6665 4.66675 8.36803 4.66675 7.99984C4.66675 7.63165 4.96522 7.33317 5.33341 7.33317H7.33341V5.33317C7.33341 4.96498 7.63189 4.6665 8.00008 4.6665Z"
                     fill="#266EFE"/>
             </svg>
             {t("promo.btn1")}
           </button>
         </div>
         <div className="typesBlock G-flex G-align-center">
           <p className="typePrg"></p>
           <p className="typePrg">{t("promo.type1")}</p>
           <p className="typePrg">{t("promo.type2")}</p>
           <p className="typePrg">{t("promo.type3")}</p>
           <p className="typePrg">{t("promo.type4")}</p>
           <p className="typePrg">{t("promo.type5")}</p>
           <p className="typePrg">{t("promo.type6")}</p>
           <p className="typePrg">{t("promo.type7")}</p>
           <p className="typePrg"></p>
         </div>
         
         <div className="promotionsBlock">
           <PromotionItem/>
           <PromotionItem/>
           <PromotionItem/>
           <PromotionItem/>
           <PromotionItem/>
         
         </div>
       </div>
     
       <AddDialog state={addDialog} stateChange={handleAddDialog}/>
     
     </div>
  );
}

export default Promotion;