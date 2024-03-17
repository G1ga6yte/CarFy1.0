import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import "./productPage.scss"
import {useDashboardContext} from "../../dashboardContext";
import {Images} from "./images/images";
import {useTranslation} from "react-i18next";

function ProductPage (){
  const { id } = useParams();
  const {t, i18n} = useTranslation()
  const {setSelectedItemName, selectedCategory, setCategoryPathPrg} = useDashboardContext()
  
  useEffect(() => {
    const handlePopstate = () => {
      setSelectedItemName("")
      if (selectedCategory === ""){
        setCategoryPathPrg(false)
      }
    };
    
    window.onpopstate = () => {
      handlePopstate()
    }
    
  }, []);
  
  const images = [Images.img2, Images.checkIcon, Images.starIcon, Images.img1]
  const [activeImg, setActiveImg] = useState(images[0])
  
  const [deliveryType, setDeliveryType] = useState("Standard") // express
  const onDeliveryChange = e => {
    setDeliveryType(e.target.value)
  }
  
  
  const [description, setDescription] = useState(true) // false = characteristics
  
  
  return(
     <div key={id} className="ProductPage">
        <p className="productName">Tire R18 235/65 Hankook Dynapro HP2 RA33 106H</p>
        <div className="artCode G-flex G-align-center">
          <p className="artCodePrg">Art: 460728</p>
          <p className="artCodePrg">Code: 470728</p>
        </div>
       
       <div className="imagesDescBlock G-flex">
         
         <div className="imgBlock G-flex G-align-center G-justify-between">
           <div className="activeImg" style={{backgroundImage: `url("${activeImg}")`}}></div>
  
           {images.map((el, index)=>{
             return(
                <div className={`miniImg ${activeImg === el ? "activeImage" : ""}`} onClick={()=>{
                  setActiveImg(el)
                }} key={index} style={{backgroundImage: `url("${el}")`}}></div>
             )
           })}
           
         </div>
         
         <div className="descBlock">
            <div className="evaluations">
              <img src={Images.starIcon} alt=""/>
              {t("stockItem.evaluations")}
            </div>
           
           <p className="firmName">Hankook</p>
           
           <div className="sellerDelivery">
             <span className="grayText">{t("stockItem.seller")}</span>
             <span className="sellerName">Autoparts</span>
           </div>
  
           <div className="sellerDelivery">
             <span className="grayText">{t("stockItem.delivery")}</span>
             <span className="deliveryTime">1 day, free</span>
           </div>
           
           <p className="miniHeader">{t("stockItem.miniHeader1")}:</p>
           
           <div className="featuresBlock">
             <span>{t("stockItem.features1")}:</span>
             Dynapro HP2 RA33 106H
           </div>
           <div className="featuresBlock">
             <span>{t("stockItem.features2")}:</span>
             17
           </div>
           <div className="featuresBlock">
             <span>{t("stockItem.features3")}:</span>
             235
           </div>
           <div className="featuresBlock">
             <span>{t("stockItem.features4")}:</span>
             55
           </div>
           <div className="featuresBlock">
             <span>{t("stockItem.features5")}:</span>
             Yes
           </div>
           <div className="featuresBlock seasonBlock">
             <span>{t("stockItem.features6")}:</span>
             Summer
           </div>
           <div className="featuresBlock">
             <span>{t("stockItem.features7")}:</span>
             <img src={Images.checkIcon} alt=""/>
             Yes
           </div>
           
           <p className="linkAllFeatures">{t("stockItem.link1")}</p>
           
         </div>
         
       </div>
       
       <div className="deliveryType">
  
         <label className="labelBlock" htmlFor="Standard">
           <div className="inputPrg G-flex G-align-center">
             <input
                type="radio"
                value="Standard"
                name="deliveryType"
                id="Standard"
                onChange={onDeliveryChange}
                checked={deliveryType === "Standard"}
             />
             {t("stockItem.prg1")}
           </div>
           <div className="saleOldPrice G-flex G-align-center">
             <span className="salePercent">-55%</span>
             <span className="oldPrice">1700€</span>
           </div>
           <p className="price">935€</p>
           
           <div className="paymentMethodBlock G-flex G-align-center">
             <img src={Images.cardIcon} alt=""/>
             {t("stockItem.onlinePayment")}
           </div>
           <div className="paymentMethodBlock G-flex G-align-center">
             <img src={Images.cashIcon} alt=""/>
             {t("stockItem.cashPayment")}
           </div>
  
           <button style={{display: `${deliveryType === "Standard" ? "block" : "none"}`}} className="buyBtn">{t("stockItem.btn1")}</button>
         </label>
  
         <label className="labelBlock" htmlFor="Express">
           <div className="inputPrg G-flex G-align-center">
             <input
                type="radio"
                value="Express"
                name="deliveryType"
                id="Express"
                onChange={onDeliveryChange}
                checked={deliveryType === "Express"}
             />
             {t("stockItem.prg2")}
           </div>
           <div className="saleOldPrice G-flex G-align-center">
             <span className="salePercent">-55%</span>
             <span className="oldPrice">1700€</span>
           </div>
           <p className="price">935€</p>
    
           <p className="deliveryPrg">{t("stockItem.prg3")}</p>
           <p className="hours">2-3{t("stockItem.hours")}</p>
    
           <div className="paymentMethodBlock G-flex G-align-center">
             <img src={Images.cardIcon} alt=""/>
             {t("stockItem.onlinePayment")}
           </div>
           <div className="paymentMethodBlock G-flex G-align-center">
             <img src={Images.cashIcon} alt=""/>
             {t("stockItem.cashPayment")}
           </div>
  
           <button style={{display: `${deliveryType === "Express" ? "block" : "none"}`}} className="buyBtn">{t("stockItem.btn1")}</button>

         </label>
         
       </div>
       
       <div className="aboutCharacteristic">
          <div className="links G-flex G-align-center">
            <p onClick={()=>{setDescription(true)}} className={`linkPrg ${description ? "activeLink" : ""}`}>{t("stockItem.btn2")}</p>
            <p onClick={()=>{setDescription(false)}} className={`linkPrg ${description ? "" : "activeLink"}`}>{t("stockItem.btn3")}</p>
          </div>
         
         <div style={{display: `${description ? "block" : "none"}`}} className="descBlock">
           <div className="headerBlockD G-flex G-align-center G-justify-between">
              <p className="header">{t("stockItem.header1")}</p>
             <button className="matchBtn G-flex G-align-center">
               {t("stockItem.btn4")}
               <img src={Images.chevronRight} alt=""/>
             </button>
           </div>
   
           <p className="prg100">Tire Tire R18 235/65 Hankook Dynapro HP2 RA33 106H are designed for drivers who choose fast driving and are able to drive a hundred thousand kilometers. The rubber is characterized by high softness, small pits and bumps are practically not felt, while the noise is minimal.</p>
   
           <p className="miniHeader">{t("stockItem.miniHeader4")}</p>
   
           <p className="prg100">In the central part of the tread there are curved and transverse channels, thanks to which improved traction with the road surface is ensured while minimizing resistance to rolling. To resist mechanical deformations and significant loads, the manufacturers have added a combined brace, which includes a two-layer metal cord and a spiral thread made of nylon.</p>
           <p className="prg100">Massive blocks located in the shoulder zone of the tread will provide high grip during cornering, when maneuvering. Other indicators of the rubber:</p>
           <p className="prgMax">change of road surface occurs without course correction;</p>
           <p className="prgMax">high density of tread lamellings for improved braking;</p>
           <p className="prgMax">directional stability is ensured by three continuous ribs;</p>
           <p className="prgMax">directional asymmetrical tread pattern;</p>
           <p className="prgMax">shock-absorbing properties are ensured by a more elastic sidewall and a new lightweight cage cord material.</p>
           <p className="prgMax">Channels efficiently channel liquid mud and water, reducing the likelihood of aquaplaning and squeezing water out of the contact patch.</p>
           
         </div>
  
  
         <div style={{display: `${description ? "none" : "block"}`}} className="descBlock">
           <div className="headerBlockD G-flex G-align-center G-justify-between">
             <p className="header">{t("stockItem.header2")}</p>
             <button className="matchBtn G-flex G-align-center">
               {t("stockItem.btn4")}
               <img src={Images.chevronRight} alt=""/>
             </button>
           </div>
    
           <p className="miniHeader">{t("stockItem.miniHeader2")}</p>
           
           <div className="settingsBlock G-flex G-align-center G-justify-between">
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Diameter, inch</span>
               <div></div>
               <span className="itemVal">17</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Model</span>
               <div></div>
               <span className="itemVal">Comfort 2</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Brand</span>
               <div></div>
               <span className="itemVal">Cordiant</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Model Name</span>
               <div></div>
               <span className="itemVal">Comfort 2</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Quantity in kit</span>
               <div></div>
               <span className="itemVal">1</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Product code</span>
               <div></div>
               <span className="itemVal">470728</span>
             </div>
           </div>
           
           <p className="miniHeader">{t("stockItem.miniHeader3")}</p>
           
           <div className="settingsBlock G-flex G-align-center G-justify-between">
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Purpose</span>
               <div></div>
               <span className="itemVal">for a passenger car</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Seasonality</span>
               <div></div>
               <span className="itemVal">summer</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Tread type</span>
               <div></div>
               <span className="itemVal">road</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Frame construction</span>
               <div></div>
               <span className="itemVal">radial</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Profile width, in millimeters</span>
               <div></div>
               <span className="itemVal">185</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Profile height, in percent</span>
               <div></div>
               <span className="itemVal">65</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Diameter, in inches</span>
               <div></div>
               <span className="itemVal">15</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Speed index</span>
               <div></div>
               <span className="itemVal">H (up to 210 km/h)</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Tread pattern type</span>
               <div></div>
               <span className="itemVal">directional asymmetric</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Load index</span>
               <div></div>
               <span className="itemVal">92</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Maximum load on the tire, in kilograms</span>
               <div></div>
               <span className="itemVal">630</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Spikes</span>
               <div></div>
               <span className="itemVal">No</span>
             </div>
  
             <div className="itemLine G-flex G-align-center">
               <span className="itemHeader">Sealing method</span>
               <div></div>
               <span className="itemVal">tubeless</span>
             </div>
           </div>
           
         </div>
         
         
       </div>
       
       
     </div>
  )
}

export default ProductPage