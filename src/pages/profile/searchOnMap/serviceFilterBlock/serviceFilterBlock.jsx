import React, {useState} from "react";
import {ImagesData} from "../images/imagesData";

function ServiceFilterBlock (){
  const [filtersType, setFiltersType] = useState(false)
  
  return(
     <div className="ServiceFilterBlock">
      <p className="filtersPrg">Filters</p>
       
       <div className="filtersCont">
        
        <div className="filterC">
          <p className="filterHeader">Price range</p>
          <div className="filtersB G-flex">
            <span>Premium</span>
            <span>Econom</span>
          </div>
        </div>
  
         <div className="filterC">
           <div className="filterHeader G-flex G-align-center G-justify-between">
             <p className="filterHeader">Car brand</p>
             <p onClick={()=>{setFiltersType(true)}} className="seeAllBtn">see all</p>
           </div>
           <div className="filtersB G-flex">
             <span>BMW</span>
             <span>Honda</span>
             <span>Hyndai</span>
             <span>Kia</span>
             <span>Chevrolet</span>
             <span>Audi</span>
             <span>Mercedes</span>
           </div>
         </div>
  
         <div className="filterC">
           <div className="filterHeader G-flex G-align-center G-justify-between">
             <p className="filterHeader">Tire fitting</p>
             <p onClick={()=>{setFiltersType(true)}} className="seeAllBtn">see all</p>
           </div>
           <div className="filtersB G-flex">
             <span>Wheel balancing</span>
             <span>Tire retreading</span>
             <span>Tire vulcanization</span>
             <span>Truck tire fitting</span>
           </div>
         </div>
  
         <div className="filterC">
           <div className="filterHeader G-flex G-align-center G-justify-between">
             <p className="filterHeader">Type of work</p>
             <p onClick={()=>{setFiltersType(true)}} className="seeAllBtn">see all</p>
           </div>
           <div className="filtersB G-flex">
             <span>Anti-corrosion treatment</span>
             <span>Airbrushing</span>
             <span>Side glass replacement</span>
           </div>
         </div>
  
         <div className="filterC">
           <div className="filterHeader G-flex G-align-center G-justify-between">
             <p className="filterHeader">Type</p>
             <p onClick={()=>{setFiltersType(true)}} className="seeAllBtn">see all</p>
           </div>
           <div className="filtersB G-flex">
             <span>PUC center</span>
             <span>Self-service gas station</span>
             <span>Car shop</span>
             <span>Autodrome</span>
           </div>
         </div>
        
       </div>
       
       <div style={{display: `${filtersType ? "block" : "none"}`}} className="filtersType">
         <div className="inputBackBtnBlock">
           <div className="inputBlock">
             <img src={ImagesData.searchIcon} alt=""/>
             <input className="inputPurpose" type="text" placeholder="Purpose of the vehicle"/>
           </div>
           
           <div onClick={()=>{setFiltersType(false)}} className="backButton G-flex G-align-center">
             <img src={ImagesData.chevronLeftBlue} alt=""/>
             <span className="filtersSpan">Filters</span>
             <span className="filterTypeSpan">Car brand</span>
           </div>
         </div>
         
         <div className="filterTypeCont">
  
           <label className="G-flex G-justify-between G-align-center" htmlFor="amGeneral">AM General<input id="amGeneral" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="amc">AMC<input id="amc" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="acura">Acura<input id="acura" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="adler">Adler<input id="adler" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="admiral">Admiral<input id="admiral" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="alfaRomeo">Alfa Romeo<input id="alfaRomeo" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="alpina">Alpina<input id="alpina" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="apal">Apal<input id="apal" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="ariel">Ariel<input id="ariel" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="aro">Aro<input id="aro" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="asia">Asia<input id="asia" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="astonMartin">Aston Martin<input id="astonMartin" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="audi">Audi<input id="audi" className="inputCheckBox" type="checkbox"/></label>
           <label className="G-flex G-justify-between G-align-center" htmlFor="aurus">Aurus<input id="aurus" className="inputCheckBox" type="checkbox"/></label>


         </div>

       </div>
       
       <div className="buttonBlock">
         <button className="applyBtn">Apply</button>
       </div>
     </div>
  )
}

export default ServiceFilterBlock