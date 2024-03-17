import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Images} from "./images/images.js";
import {useNavigate} from "react-router-dom";

function OrderedItem (){
  const {t, i18n} = useTranslation()
  const id = 456316
  const navigate = useNavigate()
  
  const deliveryStage = 3
  
  const [itemsBlock, setItemsBlock] = useState(false)
  
  return(
     <div className="OrderedItem">
        <div className="headerBlockO G-flex G-align-center G-justify-between">
          <div className="orderId G-flex G-align-center">
            <span className="orderIdPrg">{t("cart.orderID")}:</span>
            <span className="grayText">{id}</span>
          </div>
          <button className="cancelBtn">{t("cart.btn3")}</button>
        </div>
       
       <div className="stageCont G-flex G-align-center G-justify-between">
          <div className={`stageBlock ${deliveryStage > 1 ? "passedBlock" : "processBlock"}`}>
            <div className="statusBlock">
              <img className="checkIcon" src={Images.whiteChecked} alt=""/>
              <span className="num">1</span>
            </div>
            <p className="statusName">{t("cart.stage1")}</p>
            <p className="date">{deliveryStage === 1 ? "1 day estimate" : deliveryStage > 1 ? "18/09/2023" : "-"}</p>
          </div>
         
         <div style={{backgroundColor: `${deliveryStage === 2 ? "#F39A31" : deliveryStage > 2 ? "#00CC9A" : ""}`}} className="midLine"></div>
         
         <div className={`stageBlock ${deliveryStage > 2 ? "passedBlock" : deliveryStage === 2  ? "processBlock" : "passiveBlock"}`}>
           <div className="statusBlock">
             <img className="checkIcon" src={Images.whiteChecked} alt=""/>
             <span className="num">2</span>
           </div>
           <p className="statusName">{t("cart.stage2")}</p>
           <p className="date">{deliveryStage === 2 ? "1 day estimate" : deliveryStage > 2 ? "18/09/2023" : "-"}</p>
         </div>
  
         <div style={{backgroundColor: `${deliveryStage === 3 ? "#F39A31" : deliveryStage > 3 ? "#00CC9A" : ""}`}} className="midLine"></div>
  
         <div className={`stageBlock ${deliveryStage > 3 ? "passedBlock" : deliveryStage === 3  ? "processBlock" : "passiveBlock"}`}>
           <div className="statusBlock">
             <img className="checkIcon" src={Images.whiteChecked} alt=""/>
             <span className="num">3</span>
           </div>
           <p className="statusName">{t("cart.stage3")}</p>
           <p className="date">{deliveryStage === 3 ? "1 day estimate" : deliveryStage > 3 ? "18/09/2023" : "-"}</p>
         </div>
  
         <div style={{backgroundColor: `${deliveryStage === 4 ? "#F39A31" : deliveryStage > 4 ? "#00CC9A" : ""}`}} className="midLine"></div>
  
         <div className={`stageBlock ${deliveryStage > 4 ? "passedBlock" : deliveryStage === 4  ? "processBlock" : "passiveBlock"}`}>
           <div className="statusBlock">
             <img className="checkIcon" src={Images.whiteChecked} alt=""/>
             <span className="num">4</span>
           </div>
           <p className="statusName">{t("cart.stage4")}</p>
           <p className="date">{deliveryStage === 4 ? "1 day estimate" : deliveryStage > 4 ? "18/09/2023" : "-"}</p>
         </div>
  
         <div style={{backgroundColor: `${deliveryStage === 5 ? "#F39A31" : deliveryStage > 5 ? "#00CC9A" : ""}`}} className="midLine"></div>
  
         <div className={`stageBlock ${deliveryStage > 5 ? "passedBlock" : deliveryStage === 5  ? "processBlock" : "passiveBlock"}`}>
           <div className="statusBlock">
             <img className="checkIcon" src={Images.whiteChecked} alt=""/>
             <span className="num">5</span>
           </div>
           <p className="statusName">{t("cart.stage5")}</p>
           <p className="date">{deliveryStage === 5 ? "1 day estimate" : deliveryStage > 5 ? "18/09/2023" : "-"}</p>
         </div>
         
       </div>
       
       <div className="orderInfoBlock G-flex">
       
         <div className="infoBlock">
           <p className="header">{t("cart.header1")}</p>
           <p className="miniHeader">{t("cart.infoName1")}</p>
           <p className="infoPrg">14:40 17/09/2023 </p>
           <p className="miniHeader">{t("cart.infoName2")}</p>
           <p className="infoPrg">7 {t("cart.days")}</p>
           <p className="miniHeader">{t("cart.infoName3")}</p>
           <p className="infoPrg">Fragile insurance</p>
         </div>
         
         <div className="infoBlock">
           <p className="header">{t("cart.header2")}</p>
           <p className="miniHeader">{t("cart.infoName4")}</p>
           <p className="infoPrg">Latvian National Theatre, 2, Kronvalda bulvāris</p>
           <p className="miniHeader">{t("cart.infoName5")}</p>
           <p className="infoPrg">Latvian National Theatre, 2, Kronvalda bulvāris</p>
         </div>
        
       </div>
       
       <div className="itemsCont">
         <div onClick={()=>{
           setItemsBlock(prevState => !prevState)
         }} className="headerBtn G-flex G-align-center">
            <p className="header">{t("cart.miniHeader3")}</p>
           <svg style={{rotate: `${itemsBlock ? "0deg" : "180deg"}`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z" fill="#D9D9D9"/>
           </svg>
         </div>
         
         <div style={{display: `${itemsBlock ? "flex" : "none"}`}} className="itemsBlock">
  
           {Array.from({length:  4}, (_, index)=>(
              <div className="itemBlock G-flex G-align-center">
                <div className="itemImg" style={{backgroundImage: `url("${Images.itemImg}")`}}></div>
                <div className="textBlock">
                  <p className="itemName">Oil filter HYUNDAI/KIA 26300-35505, 7.5kg</p>
                  <p className="count">{t("cart.quantity")} <span>1</span></p>
                  <button onClick={()=>{
                    navigate(`/partner/stock/product/${id}`)
                  }} className="buyBtn">{t("cart.buyAgain")}</button>
                </div>
              </div>
           ))}
           
           
         </div>
         
         
       </div>
     </div>
  )
}


export default OrderedItem