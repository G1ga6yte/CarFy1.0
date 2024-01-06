import React from "react";
import BusinessHead from "./businessHead/businessHead";
import BusinessGrowUp from "./businessGrowUp/businessGrowUp";
import BusinessWithUs from "./businessWithUs/businessWithUs";
import BusinessPartners from "./businessPartners/businessPartners";
import BusinessSoftware from "./businessSoftware/businessSoftware";
import BusinessCities from "./businessCities/businessCities";
import BusinessBecomePartner from "./businessBecomePartner/businessBecomePartner";


function ForBusiness (){
  return(
     <div className="ForBusiness">
       <BusinessHead/>
       <BusinessGrowUp/>
       <BusinessWithUs/>
       <BusinessPartners/>
       <BusinessSoftware/>
       <BusinessCities/>
       <BusinessBecomePartner/>
     </div>
  )
}
export default ForBusiness