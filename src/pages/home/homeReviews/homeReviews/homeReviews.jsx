import React from "react";
import "./homeReviews.scss";
import ReviewBlock from "./reviewBlock";
import {useTranslation} from "react-i18next";

function HomeReviews() {
  const {t, i18n} = useTranslation();
  
  
  return (
     <div className="HomeReviews G-container G-flex-column G-align-center">
       <p className="header">{t("home.header7")} <span>{t("home.header71")}</span> {t("home.header72")}</p>
       <p className="underHeader">{t("home.prg7")}</p>
       
       <div className="reviewsCont G-align-center G-flex-column ">
         <div className="horizontalLine G-flex G-justify-center G-align-center">
           
           <ReviewBlock name={"Jack"} type={"Spark Plug replacement, cost "} price={"100€"} comment={"Everything was done quickly"}/>
           <ReviewBlock name={"Nick"} type={"Toyota Ractis, repair cost "} price={"80€"} comment={"They do good work"}/>
           <ReviewBlock name={"Anton"} type={"Fuel Cap tightening, cost "} price={"85€"} comment={"Highly recommended!"}/>
           <ReviewBlock name={"Nicklas"} type={"Oxygen Sensor replacement, cost "} price={"65€"} comment={"Fair prices and very reputable work."}/>
           <ReviewBlock name={"Aleksandar"} type={"Brake work, costed "} price={"300€"} comment={"Always saving my day!"}/>
         
         
         </div>
         
         <div className="horizontalLine G-flex G-justify-between">
           
           <ReviewBlock name={"Anders"} type={"Oil changes, cost "} price={"50€"} comment={"I highly recommend this service"}/>
           <ReviewBlock name={"Elias"} type={"Tire repairs and changes, costed "} price={"60€"} comment={"Great service"}/>
           <ReviewBlock name={"Magnus"} type={"The Ignition System, costed "} price={"420€"} comment={"Friendly and helpful"}/>
           <ReviewBlock name={"Linus"} type={"The Electrical System, cost"} price={"110€"} comment={"Trustworthy service."}/>
           <ReviewBlock name={"Felix"} type={"Aftermarket Alarm removal, cost"} price={"75€"} comment={"Trustworthy, fast, polite, and responsive!"}/>
         
         </div>
       
       </div>
     
     </div>
  );
}

export default HomeReviews;