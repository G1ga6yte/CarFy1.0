import React, {useState} from "react";
import "./InsuranceStep2.scss";
import {InsuranceSvg} from "../insuranceSvg/insuranceSvg";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function InsuranceStep2() {
  const {t, i18n} = useTranslation()
  const navigate = useNavigate();
  const [checkbox1, setCheckbox1] = useState(false);
  const ExampleData = ["Latvia", "Bulgaria", "Germany", "French", "Latvia", "Bulgaria", "Germany", "French"];
  
  function CheckBox(val, foo) {
    return (
       <div onClick={() => foo(prev => !prev)}
            style={{backgroundColor: `${val ? "#266EFE" : "white"}`, borderColor: `${val ? "#266EFE" : "#D9D9D9"}`}}
            className="inputCheckBox">
         <img src={InsuranceSvg.check} alt=""/>
       </div>
    );
  }
  
  function Select(placeholder, massive, className) {
    const [selected, setSelected] = useState(placeholder);
    const [selectActive, setSelectActive] = useState(false);
    
    function Selecting(event) {
      setSelected(event.target.innerHTML);
      setSelectActive(false);
    }
    
    return (
       <div className={className}>
         <div style={{borderColor: `${selectActive ? "#266EFE" : "#D9D9D9"}`}}
              onClick={() => setSelectActive(prev => !prev)} className="selectBlock G-justify-between G-align-center">
           <span style={{color: `${selected !== placeholder ? "black" : "#AEAEAE"}`}}>{selected}</span>
           <svg style={{transform: `rotate(${selectActive ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path style={{stroke: `${selectActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </div>
         
         <div style={{display: `${selectActive ? "block" : "none"}`}} className="optionsBlock">
           {massive.map((el) => {
             return (
                <p onClick={Selecting} className="option">{el}</p>
             );
           })}
         
         </div>
       
       </div>
    );
  }
  
  
  return (
     <div className="InsuranceStep2 G-container">
       <p className="header">{t("insurance.header21")} <span>{t("insurance.header22")}</span></p>
       
       <div className="RegCont">
         
         <div className="pageInfo">
           <Link className="linkToSTep1 G-align-center" to="/insurance/step1"><img src={InsuranceSvg.arrowLeft}
                                                                             alt=""/>{t("insurance.back")}</Link>
           <p className="VehicleInfo">{t("insurance.miniHeader7")}:</p>
           <span className="clearRefresh G-align-center"><img src={InsuranceSvg.clearIcon} alt=""/>{t("insVig.clear")}</span>
           <div className="pagesOrdinary G-flex">
             <span className="page  G-align-center"><span>1</span>{t("insurance.section1")}</span>
             <span className="page G-align-center"><span>2</span>{t("insurance.section2")}</span>
             <span className="page active G-align-center"><span>3</span>{t("insurance.section3")}</span>
           </div>
         </div>
         
         <div className="pageInputsCont G-flex G-justify-between">
           <div className="MainInputs">
             <div className="checkBox1 G-align-center">
               {CheckBox(checkbox1, setCheckbox1)}
               <p>{t("insurance.underText1")}</p>
             </div>
             <div className="Inputs">
               {Select("C,CA,CB Sofia-city", ExampleData, "Select full")}
             </div>
             <p className="headerPrg">{t("insurance.miniHeader8")}</p>
             <div className="Inputs">
               {Select(`${t("insurance.district")}`, ExampleData, "Select half")}
               {Select(`${t("insurance.municipality")}`, ExampleData, "Select half")}
               {Select(`${t("insurance.populatedPlace")}`, ExampleData, "Select middle")}
             </div>
             
             <p className="headerPrg">{t("insurance.miniHeader9")}</p>
             <div className="Inputs">
               {Select(`${t("insurance.placeholder2")}`, ExampleData, "Select full")}
               {Select(`${t("insurance.placeholder3")}`, ExampleData, "Select full")}
             </div>
             
             <div className="ImportantTextBlock">
               <p className="ImportantPrg"><span>{t("insurance.important")}</span>{t("insurance.prg5")}</p>
             </div>
             
             <div className="AddressBlock">
               <p className="headerPrg">{t("insurance.miniHeader10")}</p>
               {Select(`${t("insurance.populatedPlace")}`, ExampleData, "Select full")}
               <input placeholder="Street" className="inputText middleInput" type="text"/>
               <input placeholder="No" className="inputText smallInput" type="text"/>
               <input placeholder="g.k./sq.m" className="inputText middleInput" type="text"/>
               <input placeholder="bl" className="inputText smallInput" type="text"/>
  
               <input placeholder="entrance" className="inputText smallInput" type="text"/>
               <input placeholder="fl." className="inputText smallInput" type="text"/>
               <input placeholder="app" className="inputText smallInput" type="text"/>
             </div>
             
             <div className="OwnersDocBlock">
               <p className="headerPrg">{t("insurance.miniHeader11")}</p>
               <div className="radioBlocks">
                 <div className="radioBlock">
                   <div className="radio">
                     <input type="radio" id="Individual" name="1stRadio" value="Individual" checked/>
                     <label htmlFor="Individual">{t("insurance.type1")}</label>
                   </div>
  
                   <div className="radio">
                     <input type="radio" id="Legal entity" name="1stRadio" value="Legal entity"/>
                     <label htmlFor="Legal entity">{t("insurance.type2")}</label>
                   </div>
                 </div>
                 
                 <div className="line"></div>
  
                 <div className="radioBlock">
                   <div className="radio">
                     <input type="radio" id="Bulgarian citizen" name="2stRadio" value="Bulgarian citizen" checked/>
                     <label htmlFor="Bulgarian citizen">{t("insurance.type3")}</label>
                   </div>
    
                   <div className="radio">
                     <input type="radio" id="A foreigner" name="2stRadio" value="A foreigner"/>
                     <label htmlFor="A foreigner">{t("insurance.type4")}</label>
                   </div>
                 </div>
               </div>
               <input placeholder={t("insurance.placeholder4")} className="inputText halfInput" type="text"/>
               {Select(`${t("insurance.placeholder5")}`, ExampleData, "Select halfSelect")}
               <input placeholder="EGN/LNCH" className="inputText fullInput" type="text"/>
  
               <input placeholder={t("insurance.name")} className="inputText halfInput" type="text"/>
               <input placeholder={t("insurance.surname")} className="inputText halfInput" type="text"/>
               
               <div className="CardCertificate">
                 <span className="GreenText">{t("insurance.greenCard")}</span>
                 <input type="checkbox" checked/>
               </div>
  
               <input placeholder={t("insurance.name")} className="inputText halfInput" type="text"/>
               <input placeholder={t("insurance.surname")} className="inputText halfInput" type="text"/>
             </div>
  
             <div className="tabletBlock">
               <button disabled={false} onClick={()=>{
                 navigate('/insurance/step3')
               }} className="continueBtnInside">{t("insurance.continue")}</button>
               <a className="linkPolicy" href="">{t("insurance.link1")} </a>
             </div>
           
           
           </div>
           
           <div className="needBlock G-flex-column">
             <p className="needHeader">{t("insurance.miniHeader12")}</p>
             <p className="needPrg link">{t("insurance.prg6")}</p>
             <p className="needPrg link">{t("insurance.prg7")}</p>
             <p className="needPrg link">{t("insurance.prg8")}</p>
             <p className="needPrg link">{t("insurance.prg9")}</p>
             
             <p className="needHeader">{t("insurance.miniHeader13")}:</p>
             <p className="needPrg">{t("insurance.prg10")}</p>
             <p className="needPrg">{t("insurance.prg11")}</p>
             <p className="needPrg">{t("insurance.prg12")}</p>
             
             <button disabled={false} onClick={() => {
               navigate("/insurance/step3");
             }} className="continueBtn">{t("insurance.continue")}
             </button>
           </div>
         </div>
       
       
       </div>
     </div>
  );
}

export default InsuranceStep2;