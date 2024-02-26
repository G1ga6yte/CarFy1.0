import React from "react";
import "./profile.scss"
import ProfileAccLine from "./profileAccLine";
import ProfileServicesLine from "./profileServicesLine";
import SearchOnMap from "./searchOnMap/searchOnMap";


function Profile() {
  return (
     <div className="ProfileCont G-container">
       <div style={{display: `${window.innerWidth <= 992 ? "none" : "block"}`}}>
         <SearchOnMap/>
       </div>
       
        <p className="header">Dashboard</p>
       
       <div className="MainCont G-justify-between">
       
         <ProfileAccLine/>
         <ProfileServicesLine/>
       
       
       </div>
     </div>
  );
}

export default Profile;