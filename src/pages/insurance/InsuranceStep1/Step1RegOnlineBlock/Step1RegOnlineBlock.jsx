import React, {useState} from "react";
import "./Step1RegOnlineBlock.scss"
import {InsuranceSvg} from "../../insuranceSvg/insuranceSvg";
import {Link, useNavigate} from "react-router-dom";

function Step1RegOnlineBlock (){
  const navigate = useNavigate()
  
  
  function SelectCountry (){
    const [selected, setSelected] = useState('Your country')
    const [selectActive, setSelectActive] = useState(false)
    
    function Selecting (event){
      setSelected(event.target.innerHTML)
      setSelectActive(false)
    }
    
    return(
       <div className="Select">
         <div style={{borderColor: `${selectActive ? "#266EFE" : "#D9D9D9"}`}} onClick={()=>setSelectActive(prev => !prev)} className="selectBlock G-justify-between G-align-center">
           <span style={{color: `${selected !== 'Your country' ? "black" : "#AEAEAE"}`}}>{selected}</span>
           <svg style={{transform: `rotate(${selectActive ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path style={{stroke: `${selectActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </div>
         
         <div style={{display: `${selectActive ? "block" : "none"}`}} className="optionsBlock">
           <p onClick={Selecting} className="option">Latvia</p>
           <p onClick={Selecting} className="option">Bulgaria</p>
           <p onClick={Selecting} className="option">Germany</p>
           <p onClick={Selecting} className="option">French</p>
           <p onClick={Selecting} className="option">Latvia</p>
           <p onClick={Selecting} className="option">Bulgaria</p>
           <p onClick={Selecting} className="option">Germany</p>
           <p onClick={Selecting} className="option">French</p>

         </div>
       
       </div>
    )
  }
  
  function SelectMark (){
    const [selected, setSelected] = useState('Your Mark')
    const [selectActive, setSelectActive] = useState(false)
    
    function Selecting (event){
      setSelected(event.target.innerHTML)
      setSelectActive(false)
    }
    
    return(
       <div className="Select">
         <div style={{borderColor: `${selectActive ? '#266EFE' : "#D9D9D9"}`}} onClick={()=>setSelectActive(prev => !prev)} className="selectBlock G-justify-between G-align-center">
           <span style={{color: `${selected !== 'Your Mark' ? "black" : "#AEAEAE"}`}}>{selected}</span>
           <svg style={{transform: `rotate(${selectActive ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path style={{stroke: `${selectActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </div>
         
         <div style={{display: `${selectActive ? "block" : "none"}`}} className="optionsBlock">
           <p onClick={Selecting} className="option">Aston Martin</p>
           <p onClick={Selecting} className="option">BMW</p>
           <p onClick={Selecting} className="option">Mercedes</p>
           <p onClick={Selecting} className="option">Ford</p>
           <p onClick={Selecting} className="option">Volvo</p>
           <p onClick={Selecting} className="option">Lexus</p>
           <p onClick={Selecting} className="option">Toyota</p>
           <p onClick={Selecting} className="option">Nissan</p>
           <p onClick={Selecting} className="option">Audi</p>


         </div>
       
       </div>
    )
  }
  
  function SelectModel (){
    const [selected, setSelected] = useState('Model')
    const [selectActive, setSelectActive] = useState(false)
    
    function Selecting (event){
      setSelected(event.target.innerHTML)
      setSelectActive(false)
    }
    
    return(
       <div className="Select">
         <div style={{borderColor: `${selectActive ? '#266EFE' : "#D9D9D9"}`}} onClick={()=>setSelectActive(prev => !prev)} className="selectBlock G-justify-between G-align-center">
           <span style={{color: `${selected !== 'Model' ? "black" : "#AEAEAE"}`}}>{selected}</span>
           <svg style={{transform: `rotate(${selectActive ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path style={{stroke: `${selectActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </div>
         
         <div style={{display: `${selectActive ? "block" : "none"}`}} className="optionsBlock">
           <p onClick={Selecting} className="option">Aston Martin</p>
           <p onClick={Selecting} className="option">BMW</p>
           <p onClick={Selecting} className="option">Mercedes</p>
           <p onClick={Selecting} className="option">Ford</p>
           <p onClick={Selecting} className="option">Volvo</p>
           <p onClick={Selecting} className="option">Lexus</p>
           <p onClick={Selecting} className="option">Toyota</p>
           <p onClick={Selecting} className="option">Nissan</p>
           <p onClick={Selecting} className="option">Audi</p>
         
         
         </div>
       
       </div>
    )
  }
  
  return(
     <div className="Step1RegOnlineBlock">
        <p className="header">Registration of insurance <span>online</span></p>
       
       <div className="regBlock">
         
          <div className="pageInfo">
            <p className="VehicleInfo">Vehicle information:</p>
            <span className="clearRefresh G-align-center"><img src={InsuranceSvg.clearIcon} alt=""/>Clear</span>
            <div className="pagesOrdinary G-flex">
              <span className="page  G-align-center"><span>1</span>Questionnaire</span>
              <span className="page active G-align-center"><span>2</span>Registration</span>
              <span className="page active G-align-center"><span>3</span>Offers</span>
            </div>
          </div>
         
         <div className="pageInputs G-justify-between G-align-center">
            <div className="inputsBlock">
                <div className="line1">
                  <SelectCountry/>
                </div>
              <div className="line2 G-flex">
                <div className="InputCarNumber G-flex">
                  <img src={InsuranceSvg.logoLV} alt=""/>
                  <input placeholder="Enter your car number" type="text"/>
                </div>
                <input placeholder="Purpose of the vehicle" className="inputPurpose" type="text"/>
              </div>
              
              <div className="vehCharacter">
                <p className="vehCharacterHeader">Vehicle Characteristics</p>
                <div className="OptionBlocks G-flex">
                  <SelectMark/>
                  <SelectModel/>
                </div>
                <input placeholder="Vehicle Characteristics" className="vehCharacterInput" type="text"/>
                <button disabled={false} onClick={()=>{
                  navigate('/insurance/step2')
                }} className="continueBtnInside">Continue</button>
                <a className="linkPolicy" href="">What does the policy cover?</a>
              </div>
              
            </div>
           
           <div className="needBlock G-flex-column">
              <p className="needHeader">You will need:</p>
             <p className="needPrg">Documents for the car</p>
             <p className="needPrg">Owner's document</p>
             <p className="needPrg">Driver's license</p>

             <button disabled={false} onClick={()=>{
               navigate('/insurance/step2')
             }} className="continueBtn">Continue</button>
           </div>
         </div>
         
         
       </div>
     </div>
  )
}

export default Step1RegOnlineBlock