import React from "react";
import HomeLinks from "./homeLinks/homeLinks";
import HomeAppointment from "./homeAppointment/homeAppointment";
import HomeOffering from "./homeOffering/homeOffering";
import HomeMaintenance from "./homeMaintenance/homeMaintenance";
import HomeBenefits from "./homeBenefits/homeBenefits";
import HomePopularServices from "./homePopularServices/homePopularServices";
import HomeReviews from "./homeReviews/homeReviews/homeReviews";
import HomePlan from "./homePlan/homePlan";
import HomeClients from "./homeClients/homeClients";
import HomeBlog from "./homeBlog/homeBlog";
import HomeWork from "./homeWork/homeWork";
import HomeGetApp from "./homeGetApp/homeGetApp";

function Home() {
  return (
     <div className="Home G-container">
       <HomeLinks/>
       <HomeAppointment/>
       <HomeOffering/>
       <HomeMaintenance/>
       <HomeBenefits/>
       <HomePopularServices/>
       <HomeReviews/>
       <HomePlan/>
       <HomeClients/>
       <HomeBlog/>
       <HomeWork/>
       <HomeGetApp/>
     </div>
  );
}

export default Home;