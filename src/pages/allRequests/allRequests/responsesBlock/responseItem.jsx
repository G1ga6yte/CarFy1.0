import React from "react";
import {Images} from "./images/images";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function ResponseItem() {
  const {t, i18n} = useTranslation()
  const respServices =  ["ABS repair", "ESR repair", "Cylinder head repair", "Clearance repair",
        "Tire mounting and balancing",  "Engine diagnostic", "Exhaust system repair", "ASR repair", "Tire mounting and balancing"
        ]
  
  const id = 112233
  return (
     <div className="responseItem G-flex">
       <div style={{backgroundImage: `url("${Images.serviceImg}")`}} className="imagesBlock">
         <button className="slideLeft"><img src={Images.chevronLeft} alt=""/></button>
         <button className="slideRight"><img src={Images.chevronRight} alt=""/></button>
       </div>
       
       <div className="textBlock">
         <div className="headerBlockResp G-flex G-justify-between">
           <div className="priceBlock">
             <p className="overPriceText">{t("req.totalAmount")}</p>
             <p className="price">100€</p>
           </div>
           <div className="btnBlock G-flex ">
             <button className="chatBtn"><img src={Images.messageIcon} alt=""/>{t("req.btn10")}</button>
             <Link to={`/requests/response/:${id}`} className="responsesBtn">{t("req.btn16")}</Link>
           </div>
         </div>
         <div className="prgMapBlock G-flex G-justify-between">
           <div className="prgBlock">
             <div className="prgHeaderBlock G-flex G-align-center G-justify-between">
               <p className="miniHeader G-flex G-align-center">Autofavorīts <img src={Images.heartIcon} alt=""/></p>
               <p className="ratingBlock G-flex G-align-center"><img src={Images.starIcon} alt=""/>4.9(88)</p>
             </div>
             <p className="respPrg">
               Keep your car running smoothly with our on-demand car repair service. Our app connects you to experienced
               technicians in your area who will diagnose and fix any issues with your vehicle
             </p>
             <div className="respServices G-flex">
               {respServices.map((el, index)=>{
                 return <span className="respService" key={index}>{el}</span>
               })}
               <span className="respService moreBtn">+25 more</span>
             </div>
           </div>
           <div className="mapBlock">
             <p className="addressPrg">Brīvības iela 61, Centra rajons, Rīga, LV-1010</p>
             <div style={{backgroundImage: `url("${Images.mapImg}")`}} className="mapImg">
               <img src={Images.markerIcon} alt=""/>
             </div>
           </div>
  
           <div className="btnBlock G-flex ">
             <button className="chatBtn"><img src={Images.messageIcon} alt=""/>Chat</button>
             <Link to={`/requests/response/:${id}`} className="responsesBtn">Enroll</Link>
           </div>
         </div>
       </div>
     </div>
  );
}

export default ResponseItem;