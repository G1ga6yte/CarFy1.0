import React, {useState} from "react";


function SelectBlock ({index, mainSelect, handleChangeSelectDate, handleSelectBlock}){
  const [render, setRender] = useState(false)
  console.log(mainSelect);
  
  function handleSetValue (e){
    let date = mainSelect[index]
    date.selected = e.target.innerHTML
    date.state = false
    
    handleChangeSelectDate(date)
    
  }
  
  
    return(
       <div className="Select">
         <div style={{borderColor: `${mainSelect[index].state ? "#266EFE" : "#D9D9D9"}`}} onClick={()=>{
           handleSelectBlock(mainSelect[index].name)
           setRender(prevState => !prevState)
         
         }} className="selectBlock G-justify-between G-align-center">
           <span style={{color: `${mainSelect[index].selected !== "" ? "black" : "#AEAEAE"}`}}>{mainSelect[index].selected !== "" ? mainSelect[index].selected : mainSelect[index].placeholder}</span>
           <svg style={{transform: `rotate(${mainSelect[index].state ? "180" : "0"}deg)`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path style={{stroke: `${mainSelect[index].state ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </div>
       
         <div style={{display: `${mainSelect[index].state ? "block" : "none"}`}} className="optionsBlock">
           
           {mainSelect[index].selectItems.map((el, index)=>{
             return(
                <p key={index} onClick={handleSetValue} className="option">{el}</p>
             )
           })}
           
         </div>
       </div>
    )
  
  
  
}

export default SelectBlock