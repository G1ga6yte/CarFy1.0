import React from "react";
import "./profile.scss"
import ProfileAccLine from "./profileAccLine";
import ProfileServicesLine from "./profileServicesLine";
import SearchOnMap from "./searchOnMap/searchOnMap";
import {useTranslation} from "react-i18next";


function Profile() {
  const {t, i18n} = useTranslation()
  
  return (
     <div className="ProfileCont G-container">
       <div style={{display: `${window.innerWidth <= 992 ? "none" : "block"}`}}>
         <SearchOnMap/>
       </div>
       
        <p className="header">{t("profile.dashboard")}</p>
       
       <div className="MainCont G-justify-between">
       
         <ProfileAccLine/>
         <ProfileServicesLine/>
       
       
       </div>
     </div>
  );
}

export default Profile;