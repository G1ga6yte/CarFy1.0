import React from "react";
import {Link} from "react-router-dom";
import "./eachNote.scss"
import {useTranslation} from "react-i18next";


function EachNotifications() {
  const {t, i18n} = useTranslation();
  
  return (
     <div className="EachNotification G-flex-column">
       <p className="header">{t('navigator.appointmentHeader')}</p>
       <p className="prg">{t('navigator.appointmentPrg')}</p>
       <div className="link-time G-justify-between">
         <Link to="/notes">{t('navigator.appointmentLink')}</Link>
         <span className="time">13.01.2024</span>
       </div>
     </div>
  );
}

export default EachNotifications;