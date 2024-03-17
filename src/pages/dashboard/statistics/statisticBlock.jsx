import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Images} from "./images/images";
import {Chart} from "react-google-charts";

function StatisticBlock ({img, header, miniHeader, staticColor, sum, percent}){
  const {t, i18n} = useTranslation()
  const [sortBlock, setSortBlock] = useState(false)
  const [activeSort, setActiveSort] = useState(t("static.sort2"))
  
  
  const data = [
    ["Pac Man", "Percentage"],
    ["General maintenance", 13],
    ["Brake services", 12],
    ["Suspension and steering services", 12],
    ["Engine services", 13],
    ["Transmission services", 25],
    ["Other", 25]
  ];
  
  const options = {
    legend: "none",
    pieStartAngle: 0,
    tooltip: { trigger: "none" },
    slices: {
      0: { color: "#266EFE" },
      1: { color: "#56CCF2" },
      2: {color: "#F2C94C"},
      3: { color: "#00CC9A" },
      4: { color: "#F39A31" },
      5: {color: "#FF7373"}
    },
  };
  
  return(
     <div className="StatisticBlock">
        <div className="topBlock G-flex G-align-center G-justify-between">
          <img src={img} className="blockImg" alt=""/>
          <p className="miniHeader">{header}</p>
          <p className="date">18 Apr, 2023 - 20 Apr, 2023</p>
          <div onClick={()=>{
            setSortBlock(prevState => !prevState)
          }} className="sortBlock G-flex G-align-center">
            {activeSort}
            <img style={{rotate: `${sortBlock ? "180deg" : "0deg"}`}} src={Images.chevronDown} alt=""/>
            
            <div style={{display: `${sortBlock ? "block" : "none"}`}} className="sorts">
              <p onClick={()=>{setActiveSort(t("static.sort1"))}} className="sortPrg">{t("static.sort1")}</p>
              <p onClick={()=>{setActiveSort(t("static.sort2"))}} className="sortPrg">{t("static.sort2")}</p>
              <p onClick={()=>{setActiveSort(t("static.sort3"))}} className="sortPrg">{t("static.sort3")}</p>
              <p onClick={()=>{setActiveSort(t("static.sort4"))}} className="sortPrg">{t("static.sort4")}</p>
            </div>
          </div>
        </div>
       
       <div className="mainCont G-flex G-justify-between">
         <div className="leftBlock">
           <p className="namePrg">{miniHeader}</p>
           <p className="sum">{sum}</p>
           <div style={{
             display: `${percent === 999 ? "none" : "flex"}`,
             backgroundColor: `${percent >= 0 ? "rgba(0, 204, 154, 0.20)" : "rgba(255, 115, 115, 0.20)"}`,
             color: `${percent >= 0 ? "#00CC9A" : "#FF7373"}`
           }} className="percentBlock G-flex G-align-center">
             {Math.abs(percent)}%
             <img src={percent >= 0 ? Images.arrowUp : Images.arrowDown} alt=""/>
           </div>
           
           <div style={{display: `${percent === 999 ? "block" : "none"}`}} className="revenueBlock">
             <button className="detailsBtn G-flex G-align-center">
               {t("static.details")}
               <img src={Images.arrowRightGray} alt=""/>
             </button>
             
             <div className="revenueLine">{t("static.revenue1")}</div>
             <div className="revenueLine">{t("static.revenue2")}</div>
             <div className="revenueLine">{t("static.revenue3")}</div>
             <div className="revenueLine">{t("static.revenue4")}</div>
             <div className="revenueLine">{t("static.revenue5")}</div>
             <div className="revenueLine">{t("static.revenue6")}</div>

           </div>
           
         </div>
         <div className="rightBlock">
           <div style={{display: `${percent === 999 ? "none" : "flex"}`}} className="statistic">
             <div className="horizonLine"><span>80</span></div>
             <div className="horizonLine"><span>70</span></div>
             <div className="horizonLine"><span>60</span></div>
             <div className="horizonLine"><span>50</span></div>
             <div className="horizonLine"><span>40</span></div>
             <div className="horizonLine"><span>30</span></div>
             <div className="horizonLine"><span>20</span></div>
             <div className="horizonLine"><span>10</span></div>
             <div className="horizonLine"><span>0</span></div>

             
             <div className="stateLinesBlock G-flex G-justify-between">
               <div style={{backgroundColor: `${staticColor}`, height: `80%`}} className="stateLine"><span>{t("static.week1")}</span></div>
               <div style={{backgroundColor: `${staticColor}`, height: `60%`}} className="stateLine"><span>{t("static.week2")}</span></div>
               <div style={{backgroundColor: `${staticColor}`, height: `70%`}} className="stateLine"><span>{t("static.week3")}</span></div>
               <div style={{backgroundColor: `${staticColor}`, height: `50%`}} className="stateLine"><span>{t("static.week4")}</span></div>
               <div style={{backgroundColor: `${staticColor}`, height: `80%`}} className="stateLine"><span>{t("static.week5")}</span></div>
               <div style={{backgroundColor: `${staticColor}`, height: `10%`}} className="stateLine"><span>{t("static.week6")}</span></div>
               <div style={{backgroundColor: `${staticColor}`, height: `10%`}} className="stateLine"><span>{t("static.week7")}</span></div>
             </div>
           </div>
           
           <div style={{display: `${percent === 999 ? "block" : "none"}`}} className="pieChartBlock">
             <div className="whiteCircle"></div>
             <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"300px"}
             />
           </div>
         </div>
       </div>
       
       
       
     </div>
  )
}

export default StatisticBlock