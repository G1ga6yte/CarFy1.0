import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

function LanguageSettings (){
  const {t, i18n} = useTranslation();
  
  const [selected1, setSelected1] = useState('English')
  const [selectActive, setSelectActive] = useState(false)
  
  const [selected2, setSelected2] = useState('GMT')
  const [selectActive2, setSelectActive2] = useState(false)
  
  const locales = {
    en: {title: "English"},
    bg: {title: "Bulgarian"},
  };
  
  useEffect(()=>{
    Object.keys(locales).map((locale) =>{
      if (i18n.resolvedLanguage === locale){
        setSelected1(locales[locale].title)
      }
    })
  }, [])
  
  return(
     <div className="settingsCont">
     
       <div className="G-flex">
         <div className="language">
           <p className="miniHeader">{t("partnerS.header2")}</p>
           <div className="Select">
             <div style={{borderColor: `${selectActive ? "#266EFE" : "#D9D9D9"}`}} onClick={()=>setSelectActive(prev => !prev)} className="selectBlock G-justify-between G-align-center">
               <span style={{color: `${selected1 !== 'Your country' ? "black" : "#AEAEAE"}`}}>{selected1}</span>
               <svg style={{transform: `rotate(${selectActive ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path style={{stroke: `${selectActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
      
             <div style={{display: `${selectActive ? "block" : "none"}`}} className="optionsBlock">
               {Object.keys(locales).map((locale) => {
                 return (
                    <p  type="submit"
                        onClick={() => {
                          i18n.changeLanguage(locale);
                          setSelectActive(false);
                          setSelected1(locales[locale].title)
                        }} className={`option ${i18n.resolvedLanguage === locale ? "active" : ""}`} key={locale}>{locales[locale].title}</p>
                 );
               })}
             </div>
    
           </div>
         </div>
  
         <div className="timeZone">
           <p className="miniHeader">{t("partnerS.miniHeader7")}</p>
           <div className="Select">
             <div style={{borderColor: `${selectActive2 ? "#266EFE" : "#D9D9D9"}`}} onClick={()=>setSelectActive2(prev => !prev)} className="selectBlock G-justify-between G-align-center">
               <span style={{color: `${selected2 !== 'Your country' ? "black" : "#AEAEAE"}`}}>{selected2}</span>
               <svg style={{transform: `rotate(${selectActive2 ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path style={{stroke: `${selectActive2 ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
    
             <div style={{display: `${selectActive2 ? "block" : "none"}`}} className="optionsBlock">
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -12")
               }} className="option">GMT -12</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -11")
               }} className="option">GMT -11</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -10")
               }} className="option">GMT -10</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -9")
               }} className="option">GMT -9</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -8")
               }} className="option">GMT -8</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -7")
               }} className="option">GMT -7</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -6")
               }} className="option">GMT -6</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -5")
               }} className="option">GMT -5</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -4")
               }} className="option">GMT -4</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -3")
               }} className="option">GMT -3</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -2")
               }} className="option">GMT -2</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT -1")
               }} className="option">GMT -1</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT 0")
               }} className="option">GMT 0</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +1")
               }} className="option">GMT +1</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +2")
               }} className="option">GMT +2</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +3")
               }} className="option">GMT +3</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +4")
               }} className="option">GMT +4</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +5")
               }} className="option">GMT +5</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +6")
               }} className="option">GMT +6</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +7")
               }} className="option">GMT +7</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +8")
               }} className="option">GMT +8</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +9")
               }} className="option">GMT +9</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +10")
               }} className="option">GMT +10</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +11")
               }} className="option">GMT +11</div>
               <div onClick={()=>{
                 setSelectActive2(false)
                 setSelected2("GMT +12")
               }} className="option">GMT +12</div>
    
    
    
    
             </div>
  
           </div>
         </div>
       </div>
  
       <button className="saveBtn">{t("partnerS.btn1")}</button>


     </div>
  )
}

export default LanguageSettings