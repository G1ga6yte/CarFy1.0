import React from "react";
import {Link} from "react-router-dom";
import "./eachNote.scss"


function EachNotifications() {
  return (
     <div className="EachNotification G-flex-column">
       <p className="header">You have an appointment</p>
       <p className="prg">Your appointment to Autofavorīts will be start in 30 minutes. Don't be late!</p>
       <div className="link-time G-justify-between">
         <Link to="/notes">To appointments </Link>
         <span className="time">13.01.2024</span>
       </div>
     </div>
  );
}

export default EachNotifications;