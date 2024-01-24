import React, {useState} from "react";
import "./InsuranceStep2.scss";
import {InsuranceSvg} from "../insuranceSvg/insuranceSvg";
import {Link, useNavigate} from "react-router-dom";

function InsuranceStep2() {
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
       <p className="header">Registration of insurance <span>online</span></p>
       
       <div className="RegCont">
         
         <div className="pageInfo">
           <Link className="linkToSTep1 G-align-center" to="/insurance/step1"><img src={InsuranceSvg.arrowLeft}
                                                                             alt=""/>Back</Link>
           <p className="VehicleInfo">Owner information:</p>
           <span className="clearRefresh G-align-center"><img src={InsuranceSvg.clearIcon} alt=""/>Clear</span>
           <div className="pagesOrdinary G-flex">
             <span className="page  G-align-center"><span>1</span>Questionnaire</span>
             <span className="page G-align-center"><span>2</span>Registration</span>
             <span className="page active G-align-center"><span>3</span>Offers</span>
           </div>
         </div>
         
         <div className="pageInputsCont G-flex G-justify-between">
           <div className="MainInputs">
             <div className="checkBox1 G-align-center">
               {CheckBox(checkbox1, setCheckbox1)}
               <p>The vehicle does not have a Bulgarian registration number</p>
             </div>
             <div className="Inputs">
               {Select("C,CA,CB Sofia-city", ExampleData, "Select full")}
             </div>
             <p className="headerPrg">Address registration of vehicle be coupon</p>
             <div className="Inputs">
               {Select("District", ExampleData, "Select half")}
               {Select("Municipality", ExampleData, "Select half")}
               {Select("Populated place", ExampleData, "Select middle")}
             </div>
             
             <p className="headerPrg">Vehicle insurance data</p>
             <div className="Inputs">
               {Select("Does the car have valid Casco insurance?", ExampleData, "Select full")}
               {Select("What company had the vehicle's previous liability insurance?", ExampleData, "Select full")}
             </div>
             
             <div className="ImportantTextBlock">
               <p className="ImportantPrg"><span>Important!</span> Enter the data of the owner and the address entered in the
                 registration card of the motor vehicle, even in cases where the motor vehicle is driven with a power of
                 attorney.</p>
             </div>
             
             <div className="AddressBlock">
               <p className="headerPrg">Address</p>
               {Select("Populated place", ExampleData, "Select full")}
               <input placeholder="Street" className="inputText middleInput" type="text"/>
               <input placeholder="No" className="inputText smallInput" type="text"/>
               <input placeholder="g.k./sq.m" className="inputText middleInput" type="text"/>
               <input placeholder="bl" className="inputText smallInput" type="text"/>
  
               <input placeholder="entrance" className="inputText smallInput" type="text"/>
               <input placeholder="fl." className="inputText smallInput" type="text"/>
               <input placeholder="app" className="inputText smallInput" type="text"/>
             </div>
             
             <div className="OwnersDocBlock">
               <p className="headerPrg">Owner's document</p>
               <div className="radioBlocks">
                 <div className="radioBlock">
                   <div className="radio">
                     <input type="radio" id="Individual" name="1stRadio" value="Individual" checked/>
                     <label htmlFor="Individual">Individual</label>
                   </div>
  
                   <div className="radio">
                     <input type="radio" id="Legal entity" name="1stRadio" value="Legal entity"/>
                     <label htmlFor="Legal entity">Legal entity</label>
                   </div>
                 </div>
                 
                 <div className="line"></div>
  
                 <div className="radioBlock">
                   <div className="radio">
                     <input type="radio" id="Bulgarian citizen" name="2stRadio" value="Bulgarian citizen" checked/>
                     <label htmlFor="Bulgarian citizen">Bulgarian citizen</label>
                   </div>
    
                   <div className="radio">
                     <input type="radio" id="A foreigner" name="2stRadio" value="A foreigner"/>
                     <label htmlFor="A foreigner">A foreigner</label>
                   </div>
                 </div>
               </div>
               <input placeholder="Owner’s age" className="inputText halfInput" type="text"/>
               {Select("Driving experience ", ExampleData, "Select halfSelect")}
               <input placeholder="EGN/LNCH" className="inputText fullInput" type="text"/>
  
               <input placeholder="Name" className="inputText halfInput" type="text"/>
               <input placeholder="Surname" className="inputText halfInput" type="text"/>
               
               <div className="CardCertificate">
                 <span className="GreenText">Green card certificate</span>
                 <input type="checkbox" checked/>
               </div>
  
               <input placeholder="Name" className="inputText halfInput" type="text"/>
               <input placeholder="Surname" className="inputText halfInput" type="text"/>
             </div>
  
             <div className="tabletBlock">
               <button disabled={false} onClick={()=>{
                 navigate('/insurance/step3')
               }} className="continueBtnInside">Continue</button>
               <a className="linkPolicy" href="">What does the policy cover?</a>
             </div>
           
           
           </div>
           
           <div className="needBlock G-flex-column">
             <p className="needHeader">The sections left to fill out are</p>
             <p className="needPrg link">Vehicle data</p>
             <p className="needPrg link">Motor vehicle insurance data</p>
             <p className="needPrg link">Owner's document</p>
             <p className="needPrg link">Address</p>
             
             <p className="needHeader">You will need:</p>
             <p className="needPrg">Documents for the car</p>
             <p className="needPrg">Owner's document</p>
             <p className="needPrg">Driver's license</p>
             
             <button disabled={false} onClick={() => {
               navigate("/insurance/step3");
             }} className="continueBtn">Continue
             </button>
           </div>
         </div>
       
       
       </div>
     </div>
  );
}

export default InsuranceStep2;