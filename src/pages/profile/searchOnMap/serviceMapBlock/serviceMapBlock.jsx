import React from "react";
import {CarModelsData} from "../../../allRequests/allRequests/eachServiceBlock/carModels/carModelsData";
import {ImagesData} from "../images/imagesData";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function ServiceMapBlock() {
  const {t, i18n} = useTranslation()
  const skills = ["ABS repair", "ESR repair", "Cylinder head repair", "Clearance repair",
                  "Tire mounting and balancing", "Engine diagnostic", "Exhaust system repair",
                  "ASR repair", "Tire mounting and balancing"]
  
  return (
     <div className="ServiceMapBlock G-flex G-justify-between">
       <div className="serviceImgBlock">
         <div style={{backgroundImage: `url("${ImagesData.serviceImg}")`}} className="imgBlock">
           <img className="imgBtn" src={ImagesData.chevronLeft} alt=""/>
           <img className="imgBtn" src={ImagesData.chevronRight} alt=""/>
           <p className="rating G-flex G-align-center">
             <img src={ImagesData.greenStar} alt=""/>
             4.9(88)
           </p>
         </div>
         
         <button className="chatBtn G-flex G-align-center G-justify-center">
           <img src={ImagesData.messageIcon} alt=""/>
           {t("map.chat")}
         </button>
         
         <Link to={`/requests/response/:${111223}`} className="orderBtn">{t("map.placeOrder")}</Link>
       
       </div>
       
       <div className="serviceTextBlock">
         
         <div className="headerLine G-flex G-justify-between">
           <div className="headerB G-flex G-align-center">
             <p className="headerPrg">Autofavorīts</p>
             <img src={ImagesData.blueHeart} alt=""/>
           </div>
           <p className="timePrg">{t("map.open")} 21:00</p>
         </div>
         
         <p className="servicePrg">Keep your car running smoothly with our on-demand car repair service. Our app
           connects you to experienced technicians in your area who will diagnose and fix any issues with your
           vehicle</p>
         
         <p className="addressPrg G-flex G-align-center">
           <img src={ImagesData.mapIcon} alt=""/>
           Brīvības iela 61, Centra rajons, Rīga, LV-1010
         </p>
         
         <div className="skillsBlock G-flex G-align-center">
           {skills.map((el, index)=>{
             return(
                <p className="skill" key={index}>{el}</p>
             )
           })}
           <p className="skill showMore">+25 {t("map.more")}</p>
         </div>
       
       </div>
       
       <div className="serviceBrandBlock">
         <p className="Brands">{t("map.brands")}</p>
         <div className="brandsBlock">
           {CarModelsData.map((el, index) => {
             if (index < 10) {
               return (
                  <img src={el} className="brandImg" key={index} alt=""/>
               );
             }
           })}
         </div>
       </div>
     
     </div>
  );
}

export default ServiceMapBlock;