import React, {useState} from "react";
import "./partnerHelp.scss"
import {useTranslation} from "react-i18next";
import {HelpData} from "../../navigation/help/helpData";

function PartnerHelp (){
  const {t, i18n} = useTranslation()
  const [isInputFocused, setInputFocus] = useState(false)
  
  const [activeSection, setActiveSection] = useState("")
  const [activeItem, setActiveItem] = useState("")
  
  
  function handleOpenSection (name){
    if (name === activeSection){
      setActiveSection("")
    } else {
      setActiveSection(name)
    }
  }
  
  return(
     <div className="PartnerHelp">
        <div className="mainCont G-flex">
        
          <div className="headBlock">
            <div className="inputBlock">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path fill={isInputFocused ? "#266EFE" : "#AEAEAE"} fillRule="evenodd" clipRule="evenodd" d="M10 2.5C5.58172 2.5 2 6.08172 2 10.5C2 14.9183 5.58172 18.5 10 18.5C11.8487 18.5 13.551 17.8729 14.9056 16.8199L20.2929 22.2071C20.6834 22.5976 21.3166 22.5976 21.7071 22.2071C22.0976 21.8166 22.0976 21.1834 21.7071 20.7929L16.3199 15.4056C17.3729 14.051 18 12.3487 18 10.5C18 6.08172 14.4183 2.5 10 2.5ZM4 10.5C4 7.18629 6.68629 4.5 10 4.5C13.3137 4.5 16 7.18629 16 10.5C16 13.8137 13.3137 16.5 10 16.5C6.68629 16.5 4 13.8137 4 10.5Z" />
              </svg>
              <input type="text" onFocus={()=>setInputFocus(true)} onBlur={()=>setInputFocus(false)} placeholder={t("help.search")}/>
            </div>
          </div>
          
          <div className="G-flex">
            <div className="sectionsBlock">
              {HelpData.map((el, index)=>{
                return(
                   <div key={index} className="helpSection">
                     <div onClick={()=>{handleOpenSection(el.name)}} className="helpHeadBlock">
                       {el.name}
             
                       <svg style={{rotate: `${activeSection === el.name ? "180deg" : ""}`}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#AEAEAE"/>
                       </svg>
                     </div>
                     <div style={{display: `${activeSection === el.name ? "block" : "none"}`}} className="helpMainBlock">
                       {el.source.map((ell, index)=>{
                         return(
                            <p onClick={()=>{setActiveItem(ell)}} className={`sectionItem ${activeItem.name === ell.name ? "activeItem" : ""}`}>{ell.name}</p>
                         )
                       })}
                     </div>
                   </div>
                )
              })}
            </div>
  
            <div className="viewBlock">
              <div className="defaultBlock G-flex" style={{display: `${activeItem === "" ? "flex" : "none"}`}}>
                <div className="defaultBlockLine">
                  {HelpData.map((el, index)=>{
                    if (index <3){
                      return(
                         <div className="helpBlock G-flex">
                           <img src={el.icon} alt=""/>
                           <div className="textBlock">
                             <p className="blockHeader">{el.name}</p>
                             {el.source.map((ell, index)=>{
                               return(
                                  <p onClick={()=>{setActiveItem(ell)}} className="blockItem">{ell.name}</p>
                               )
                             })}
                           </div>
                         </div>
                      )
                    }
                  })}
                </div>
                
                <div className="defaultBlockLine">
                  {HelpData.map((el, index)=>{
                    if (index >2 && index < 6){
                      return(
                         <div className="helpBlock G-flex">
                           <img src={el.icon} alt=""/>
                           <div className="textBlock">
                             <p className="blockHeader">{el.name}</p>
                             {el.source.map((ell, index)=>{
                               return(
                                  <p onClick={()=>{setActiveItem(ell)}} className="blockItem">{ell.name}</p>
                               )
                             })}
                           </div>
                         </div>
                      )
                    }
                  })}
                </div>
              </div>
    
              <div className="activeBlock" style={{display: `${activeItem !== "" ? "block" : "none"}`}}>
                <p className="header">{activeItem.name}</p>
                <p className="text">{activeItem.text}</p>
                <p className="underText"><span className="bold">Did not find an answer to your question?</span> Log in and write <span className="blueUnderline">to us</span></p>
              </div>
            </div>

          </div>
          
          
          
          
        </div>
     </div>
  )
}

export default PartnerHelp