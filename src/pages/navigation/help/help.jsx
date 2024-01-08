import React, {useState} from "react";
import "./help.scss"
import {HelpData} from "./helpData";
import chevron from "./helpIcons/chevron-up.svg"

function Help (){
  
  const [active, setActive] = useState({
    name: "",
    text: ""
  })
  
  function Item (el, index){
  const [state, setState] = useState(false)
  
    return(
       <div key={index} className="itemBlock">
         <div onClick={()=>{
           setState(prev => !prev)
         }} className="itemHeader G-justify-between G-align-center">
           <p>{el.name}</p>
           <img style={{transform: `rotate(${state ? "0" : "180"}deg)`}} src={chevron} alt=""/>
         </div>
         <div style={{display: `${state ? "block" : "none"}`}} className="itemLinks">
           {el.source.map((ell, index)=>{
             return(
                <p onClick={()=>{
                  setActive({
                    name: ell.name,
                    text: ell.text
                  })
                }} key={index} className="link">{ell.name}</p>
             )
           })}
         </div>
       </div>

    )
  }
  
  function Main (){
    if (active.name !== ""){
      return(
         <div className="mainBlock">
            <p className="MHeader">{active.name}</p>
            <p className="text">{active.text}</p>
           <p className="WriteUs">Did not find an answer to your question? <span>Log in and write <span>to us</span></span></p>
         </div>
      )
    } else {
      return (
         <div className="mainBlock G-flex">
           {HelpData.map((el, index)=>{
             if (index < 6){
               return(
                  <div key={index} className="mainItem G-flex">
                    <img src={el.icon} alt=""/>
                    <div className="links">
                        <p className="name">{el.name}</p>
                      {el.source.map((ell, index)=>{
                        return(
                           <p key={index} onClick={()=>{
                             setActive({
                               name: ell.name,
                               text: ell.text
                             })
                           }} className="link">{ell.name}</p>
                        )
                      })}
                    </div>
                  </div>
               )
             }
           })}
         </div>
      )
    }
  }
  
  const [searchingBlock, setSearchingBlock] = useState(false)
  const [searchingData, setSearchingData] = useState([])
  function SearchingCont (){
    return(
       searchingData.map((el, index)=>{
          return(
             <p onClick={()=>{
               document.querySelector(".searchInput2").value = ""
               setSearchingBlock(false)
               setActive({
                 name: el.name,
                 text: el.text
               })
             }} key={index} className="listItem">{el.name}</p>
          )
       })
    )
  }
  
  function OnKeyUp (event){
    let inputVal = event.target.value
    if (inputVal !== ""){
      if (inputVal !== " "){
        setSearchingBlock(true)
        let srcData = []
        for (let i = 0; i < HelpData.length; i++) {
          for (let j = 0; j < HelpData[i].source.length; j++) {
            if (HelpData[i].source[j].name.toLowerCase().startsWith(inputVal)){
              srcData.push(HelpData[i].source[j])
            }
          }
        }
        setSearchingData(srcData)
      }
    } else {
      setSearchingBlock(false)
    }
  }
  
  
  
  return(
     <div className="HelpCont G-container G-justify-between">
       <p className="header">Help</p>
       
        <div className="sideBar G-flex-column">
  
          <input onKeyUp={OnKeyUp} placeholder="Search topic" className="searchInput2" type="text"/>
          <div style={{display: `${searchingBlock ? "block" : "none"}`}} className="searchedBlock">
            {SearchingCont()}
          </div>
          {
            HelpData.map((el, index)=>{
              return Item(el, index)
            })
          }
        
        </div>
       
       <div className="main">
         {Main()}
       </div>
     </div>
  )
}
export default Help
