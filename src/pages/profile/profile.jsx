import React from "react";
import "./profile.scss"
import ProfileAccLine from "./profileAccLine";
import ProfileServicesLine from "./profileServicesLine";


function Profile() {
  return (
     <div className="ProfileCont G-container">
        <p className="header">Dashboard</p>
       
       <div className="MainCont G-justify-between">
       
         <ProfileAccLine/>
         <ProfileServicesLine/>
       
       
       </div>
     </div>
  );
}

export default Profile;