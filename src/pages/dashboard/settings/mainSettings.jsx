import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Images} from "./images/images";
import WorkingHoursCont from "./workingHours/workingHoursCont";
import ImagesBlock from "./imagesBlock/imagesBlock";
import Services from "./services/services";
import CarBrands from "./carBrands/carBrands";

function MainSettings (){
  const {t, i18n} = useTranslation()
  
  const [opc, setOpc] = useState(true)
  const [helpIcon, setHelpIcon] = useState(false); // false
  const [rangeVal, setRangeVal] = useState(30)
  
  useEffect(() => {
    let timeoutId;
    let timeoutId2;
    
    const handleMouseEnter = () => {
      setHelpIcon(true);
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      setOpc(true)
    };
    
    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
        setHelpIcon(false);
      }, 3000);
      timeoutId2 = setTimeout(() => {
        setOpc(false)
      }, 1000);
    };
    
    const cleanup = () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2)
    };
    
    const block3 = document.getElementById('helpIcon');
    const block4 = document.getElementById('helpBlock')
    
    if (block3) {
      block3.addEventListener('mouseenter', handleMouseEnter)
      block3.addEventListener('mouseleave', handleMouseLeave);
    }
    if (block4) {
      block4.addEventListener('mouseenter', handleMouseEnter);
      block4.addEventListener('mouseleave', handleMouseLeave);
    }
    
    
    
    return () => {
      cleanup();
      if (block3) {
        block3.removeEventListener('mouseenter', handleMouseEnter)
        block3.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (block4) {
        block4.removeEventListener('mouseenter', handleMouseEnter);
        block4.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return(
     <div className="settingsCont">
       <p className="miniHeader">{t("partnerS.miniHeader1")}</p>
  
       <div className="inputsBlock G-flex G-align-center">
         <input className="infoInput" value="Autofavorīts" type="text" disabled={true}/>
         <input className="infoInput" value="Brīvības iela 61, Centra rajons, Rīga, LV-1010" type="text" disabled={true}/>
  
         <div className="helpCont">
           <img id="helpIcon" className="helpIcon" src={Images.helpBlue} alt=""/>
           <div style={{display: `${helpIcon ? "block" : "none"}`, opacity: `${opc ? "1" : "0"}`}} id="helpBlock" className="helpBlock">
             {t("partnerS.helpText1")}
             <span>{t("partnerS.helpText2")}</span>
           </div>
         </div>
       </div>
       <div className="mapBlock">
         <img src={Images.mapImg} alt=""/>
       </div>
  
       <p className="miniHeader">{t("partnerS.miniHeader2")}</p>
  
       <div  className="rangeBlock disabled">
         <div className="count">{rangeVal}km</div>
         <div style={{width: `${(96/200)*rangeVal}%`}} className="line"></div>
         <input className="inputRange" defaultValue={30} min={1} max={200} onChange={(event)=>setRangeVal(event.target.value)} type="range"/>
       </div>
       
       <WorkingHoursCont/>
       
       <p className="miniHeader">{t("partnerS.miniHeader4")}</p>
       <ImagesBlock/>
       
       <div className="selectsBlock G-flex">
         
         <div className="servicesBlock">
           <p className="miniHeader">{t("partnerS.miniHeader5")} <span>45</span></p>
           <Services/>
         </div>
         
         <div className="carBrandsBlock">
           <p className="miniHeader">{t("partnerS.miniHeader6")} <span>45</span></p>
          <CarBrands/>
         </div>
         
         
       </div>
       
       <button className="saveBtn">{t("partnerS.btn1")}</button>

     </div>
  )
}

export default MainSettings