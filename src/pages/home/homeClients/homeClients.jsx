import React from "react";
import "./homeClients.scss"
import {ClientsLogoImg} from "./clientsLogo/clientsLogoImg";
import {useTranslation} from "react-i18next";

function HomeClients (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="HomeClients">
        <p className="header">{t('home.header9')} <span>{t('home.header91')}</span></p>
       
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