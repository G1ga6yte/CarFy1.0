import React, {useState} from "react";
import {Images} from "../../promotion/images/images";
import {useTranslation} from "react-i18next";
import WorkingHoursDay from "./workingHoursDay";

function WorkingHoursCont (){
  const {t, i18n} = useTranslation();
  
  const [workingHoursBlock, setWorkingHoursBlock] = useState(true);
  
  return(
     <div className="WorkingHoursCont">
       <p className="miniHeader workingMiniHeader G-flex G-justify-between G-align-center">
         <span>{t("promo.miniHeader4")}</span>
         <img onClick={() => {
           setWorkingHoursBlock(true);
         }} style={{display: `${workingHoursBlock ? "none" : "block"}`}} src={Images.plusIcon} alt=""/>
         <img onClick={() => {
           setWorkingHoursBlock(false);
         }} style={{display: `${workingHoursBlock ? "block" : "none"}`}} src={Images.minusIcon} alt=""/>
       </p>
  
       <div style={{display: `${workingHoursBlock ? "block" : "none"}`}} className="workingHoursBlock">
    
         <WorkingHoursDay index={7} weekDay={t("promo.week1")}/>
         <WorkingHoursDay index={6} weekDay={t("promo.week2")}/>
         <WorkingHoursDay index={5} weekDay={t("promo.week3")}/>
         <WorkingHoursDay index={4} weekDay={t("promo.week4")}/>
         <WorkingHoursDay index={3} weekDay={t("promo.week5")}/>
         <WorkingHoursDay index={2} weekDay={t("promo.week6")}/>
         <WorkingHoursDay index={1} weekDay={t("promo.week7")}/>
  
  
       </div>
     </div>
  )
}

export default WorkingHoursCont