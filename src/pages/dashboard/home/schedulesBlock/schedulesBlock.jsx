import React from "react";
import "./schedulesBlock.scss"
import {useTranslation} from "react-i18next";
import CalendarBlock from "./calendar";
import Schedules from "./schedules";

function SchedulesBlock (){
  const {t, i18n} = useTranslation()
  return(
     <div className="SchedulesBlock G-flex">
      <CalendarBlock/>
       <Schedules/>
     </div>
  )
}

export default SchedulesBlock