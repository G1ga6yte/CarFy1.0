import React from "react";
import "./homeClients.scss"
import {ClientsLogoImg} from "./clientsLogo/clientsLogoImg";

function HomeClients (){
  return(
     <div className="HomeClients">
        <p className="header">Our <span>clients</span></p>
       
       <div className="clientsCont G-justify-center G-align-center">
         <a href=""><img src={ClientsLogoImg.client1} alt=""/></a>
         <a href=""><img src={ClientsLogoImg.client2} alt=""/></a>
         <a href=""><img src={ClientsLogoImg.client3} alt=""/></a>
         <a href=""><img src={ClientsLogoImg.client4} alt=""/></a>
         <a href=""><img src={ClientsLogoImg.client5} alt=""/></a>
         <a href=""><img src={ClientsLogoImg.client6} alt=""/></a>
  
         
         
         
         
         
         
       </div>
     </div>
  )
}

export default HomeClients