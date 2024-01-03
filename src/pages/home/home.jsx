import React from "react";
import HomeLinks from "./homeLinks/homeLinks";
import HomeAppointment from "./homeAppointment/homeAppointment";
import HomeOffering from "./homeOffering/homeOffering";
import HomeMaintenance from "./homeMaintenance/homeMaintenance";
import HomeBenefits from "./homeBenefits/homeBenefits";
import HomePopularServices from "./homePopularServices/homePopularServices";

function Home() {
  return (
     <div className="Home G-container">
       <HomeLinks/>
       <HomeAppointment/>
       <HomeOffering/>
       <HomeMaintenance/>
       <HomeBenefits/>
       <HomePopularServices/>
     </div>
  );
}

export default Home;