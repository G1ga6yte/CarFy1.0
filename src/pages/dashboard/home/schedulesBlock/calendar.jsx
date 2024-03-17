import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Calendar from "react-calendar";
import {useDashboardContext} from "../../dashboardContext";

function CalendarBlock (){
  const {t, i18n} = useTranslation()
  const {value, setValue, handleChangeDate} = useDashboardContext()
  
  return(
     <div className="CalendarBlock">
       <Calendar onChange={(event) => {
         handleChangeDate(event);
       }} locale={i18n.resolvedLanguage.toLowerCase()} value={value}/>
     </div>
  )
}
export default CalendarBlock