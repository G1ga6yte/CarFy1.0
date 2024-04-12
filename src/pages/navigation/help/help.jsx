import React, {useState} from "react";
import "./help.scss"
import chevron from "./helpIcons/chevron-up.svg"
import cart from "./helpIcons/shopping-cart-01.svg"
import pencil from "./helpIcons/pencil-02.svg"
import card from "./helpIcons/credit-card-02.svg"
import truck from "./helpIcons/truck-02.svg"
import packageMinus from "./helpIcons/package-minus.svg"
import star from "./helpIcons/star-06.svg"
import {useTranslation} from "react-i18next";


function Help (){
  const {t, i18n} = useTranslation()
  // underText
  const HelpData = [
    {
      name: t("help.Header1"),
      status: false,
      icon: cart,
      source: [
        {
          name: t("help.miniHeader1"),
          text: t("help.text1"),
          dotted: [
            t("help.dotted1"),
            t("help.dotted2"),
            t("help.dotted3"),
            t("help.dotted4"),
            t("help.dotted5"),
            t("help.dotted6"),
            t("help.dotted7"),
            t("help.dotted8")
          ]
        },
        {
          name: t("help.miniHeader2"),
          text: t("help.text2")
        },
        {
          name: t("help.miniHeader3"),
          text: t("help.text3"),
          underText: t("help.text4"),
          numeric: [
            t("help.numeric1"),
            t("help.numeric2"),
            t("help.numeric3")
          ]
        },
        {
          name: t("help.miniHeader4"),
          text: t("help.text5")
        },
        {
          name: t("help.miniHeader5"),
          text: t("help.text6"),
        },
        {
          name: t("help.miniHeader6"),
          text: t("help.text7")
        },
        {
          name: t("help.miniHeader7"),
          text: t("help.text8")
        },
        {
          name: t("help.miniHeader8"),
          text: t("help.text9")
        },
        {
          name: t("help.miniHeader9"),
          text: t("help.text10")
        },
        {
          name: t("help.miniHeader10"),
          text: t("help.text11")
        },
        {
          name: t("help.miniHeader11"),
          text: t("help.text12"),
          dotted: [
            t("help.dotted9"),
            t("help.dotted10"),
            t("help.dotted11"),
            t("help.dotted12"),
            t("help.dotted13"),
            t("help.dotted14"),
            t("help.dotted15"),
            t("help.dotted16"),
            t("help.dotted17")
          ]
        },
        {
          name: t("help.miniHeader12"),
          text: t("help.text13")
        }
      ]
    },
    {
      name: t("help.Header2"),
      status: false,
      icon: pencil,
      source: [
        {
          name: t("help.miniHeader13"),
          text: t("help.text14")
        },
        {
          name: t("help.miniHeader14"),
          text: t("help.text15")
        },
        {
          name: t("help.miniHeader15"),
          text: t("help.text16")
        },
        {
          name: t("help.miniHeader16"),
          text: t("help.text17"),
          text2:t("help.text18")
        }
      ]
    },
    {
      name: t("help.Header4"),
      status: false,
      icon: card,
      source: [
        {
          name: t("help.miniHeader20"),
          text: t("help.text23"),
          underText: t("help.text24"),
          dotted: [
            t("help.dotted18"),
            t("help.dotted19"),
            t("help.dotted20")
          ]
        },
        {
          name: t("help.miniHeader21"),
          text: t("help.text25"),
          text2: t("help.text26"),
          underText: t("help.text27"),
          numeric: [
            t("help.numeric4"),
            t("help.numeric5"),
            t("help.numeric6"),
            t("help.numeric7"),
            t("help.numeric8"),

          ]
        },
        {
          name: t("help.miniHeader22"),
          text: t("help.text28"),
          underText: t("help.text29"),
          dotted: [
            t("help.dotted21"),
            t("help.dotted22"),
            t("help.dotted23"),
            t("help.dotted24"),
            t("help.dotted25")
          ]
        },
        {
          name: t("help.miniHeader23"),
          text: t("help.text30")
        },
        {
          name: t("help.miniHeader24"),
          text: t("help.text31"),
          text2: t("help.text32"),
          underText: t("help.text33")
        },
        {
          name: t("help.miniHeader25"),
          text: t("help.text34")
        }
        ,
        {
          name: t("help.miniHeader26"),
          text: t("help.text35")
        }
      ]
    },
    {
      name: t("help.Header5"),
      status: false,
      icon: truck,
      source: [
        {
          name: t("help.miniHeader27"),
          text: t("help.text36")
        },
        {
          name: t("help.miniHeader28"),
          text: t("help.text37")
        },
        {
          name: t("help.miniHeader29"),
          text: t("help.text38")
        },
        {
          name: t("help.miniHeader30"),
          text: t("help.text39")
        },
        {
          name: t("help.miniHeader31"),
          text: t("help.text40")
        },
        {
          name: t("help.miniHeader32"),
          text: t("help.text41")
        }
      ]
    },
    {
      name: t("help.Header6"),
      status: false,
      icon: packageMinus,
      source: [
        {
          name: t("help.miniHeader33"),
          text: t("help.text42")
        },
        {
          name: t("help.miniHeader34"),
          text: t("help.text43")
        },
        {
          name: t("help.miniHeader35"),
          text: t("help.text44")
        },
        {
          name: t("help.miniHeader36"),
          text: t("help.text45")
        },
        {
          name: t("help.miniHeader37"),
          text: t("help.text46")
        },
        {
          name: t("help.miniHeader38"),
          text: t("help.text47")
        }
      ]
    },
    {
      name: t("help.Header7"),
      status: false,
      icon: star,
      source: [
        {
          name: t("help.miniHeader39"),
          text: t("help.text48"),
          underText: t("help.text49"),
          dotted: [
            t("help.dotted26"),
            t("help.dotted27"),
            t("help.dotted28"),

          ]
        },
        {
          name: t("help.miniHeader40"),
          text: t("help.text50")
        },
        {
          name: t("help.miniHeader41"),
          text: t("help.text51"),
          underText: t("help.text52"),
          dotted: [
            t("help.dotted29"),
            t("help.dotted30")
          ]
        },
        {
          name: t("help.miniHeader42"),
          text: t("help.text53")
        },
        {
          name: t("help.miniHeader43"),
          text: t("help.text54"),
          text2: t("help.text55")
        },
        {
          name: t("help.miniHeader44"),
          text: t("help.text56"),
          underText: t("help.text57"),
          numeric: [
            t("help.numeric9"),
            t("help.numeric10"),
            t("help.numeric11"),
            t("help.numeric12")
          ]
        }
      ]
    },
    {
      icon: null,
      name: t("help.Header3"),
      status: false,
      source: [
        {
          name: t("help.miniHeader17"),
          text: t("help.text19"),
          text2: t("help.text20")
        },
        {
          name: t("help.miniHeader18"),
          text: t("help.text21")
        },
        {
          name: t("help.miniHeader19"),
          text: t("help.text22")
        }
      ]
    }
  ]
  
  
  const [active, setActive] = useState({})
  
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
                  setActive(ell)
                }} key={index} className="link">{ell.name}</p>
             )
           })}
         </div>
       </div>

    )
  }
  
  function Main (){
    if (active.name){
      return(
         <div className="mainBlock">
            <p className="MHeader">{active.name}</p>
            <p className="text">{active.text}</p>
           {active.text2 && <p className="text">{active.text2}</p>}
           {active.dotted && <div className="dottedBlock">
             {active.dotted.map((el, index)=>{
               return(
                  <p key={index} className="dottedPrg">{el}</p>
               )
             })}
             {active.underText && <p className="text underText">{active.underText}</p>}
           </div>}
  
           {active.numeric && <ol className="numericBlock">
             {active.numeric.map((el, index)=>{
               return(
                  <li className="numericLi" key={index}>{el}</li>
               )
             })}
           </ol>}
           
           <p className="WriteUs">Did not find an answer to your question? <span>Log in and write <span>to us</span></span></p>
         </div>
      )
    } else {
      return (
         <div className="mainBlock G-flex">
           
           
           <div className="mainLine">
             {HelpData.map((el, index)=>{
               if (index < 3){
                 return(
                    <div key={index} className="mainItem G-flex">
                      <img src={el.icon} alt=""/>
                      <div className="links">
                        <p className="name">{el.name}</p>
                        {el.source.map((ell, index)=>{
                          return(
                             <p key={index} onClick={()=>{
                               setActive(ell)
                             }} className="link">{ell.name}</p>
                          )
                        })}
                      </div>
                    </div>
                 )
               }
             })}
           </div>
  
           <div className="mainLine">
             {HelpData.map((el, index)=>{
               if (index > 2 && index < 6){
                 return(
                    <div key={index} className="mainItem G-flex">
                      <img src={el.icon} alt=""/>
                      <div className="links">
                        <p className="name">{el.name}</p>
                        {el.source.map((ell, index)=>{
                          return(
                             <p key={index} onClick={()=>{
                               setActive(ell)
                             }} className="link">{ell.name}</p>
                          )
                        })}
                      </div>
                    </div>
                 )
               }
             })}
           </div>
           
           
           
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
               setActive(el)
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
       <p className="header">{t("help.help")}</p>
       
        <div className="sideBar G-flex-column">
  
          <input onKeyUp={OnKeyUp} placeholder={t("help.searchTopic")} className="searchInput2" type="text"/>
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
