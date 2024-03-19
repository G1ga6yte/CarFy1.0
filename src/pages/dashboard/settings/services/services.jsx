import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Images} from "../images/images";

function Services() {
  const {t, i18n} = useTranslation();
  
  const [activeServiceBlock, setActiveServiceBlock] = useState("");
  const [render, setRender] = useState(false)
  
  const [servicesData, setServicesData] = useState([
    {
      name : t("partnerS.service1.name"),
      checked: false,
      items: [
        {
          itemName: "item1-1",
          value   : t("partnerS.service1.item1"),
          checked : false,
        },
        {
          itemName: "item1-2",
          value   : t("partnerS.service1.item2"),
          checked : false,
        },
        {
          itemName: "item1-3",
          value   : t("partnerS.service1.item3"),
          checked : false,
        },
        {
          itemName: "item1-4",
          value   : t("partnerS.service1.item4"),
          checked : false,
        },
      ]
    },
    {
      name : t("partnerS.service2.name"),
      checked: false,
      items: [],
    },
    {
      name : t("partnerS.service3.name"),
      checked: false,
      items: [],
    },
    {
      name : t("partnerS.service4.name"),
      checked: false,
      items: [],
    },
    {
      name : t("partnerS.service5.name"),
      checked: false,
      items: [],
    },
    {
      name : t("partnerS.service6.name"),
      checked: false,
      items: [],
    },
    {
      name : t("partnerS.service7.name"),
      checked: false,
      items: [],
    },
    {
      name : t("partnerS.service8.name"),
      checked: false,
      items: [],
    },
    {
      name : t("partnerS.service9.name"),
      checked: false,
      items: [],
    },
    {
      name : t("partnerS.service10.name"),
      checked: false,
      items: [],
    },
  ]);
  
  function handleSelectAllBlock (name){
    let x = servicesData
    x.map((el)=>{
      if (el.name === name){
        if (el.checked){
          el.checked = false
          el.items.map((ell)=>{
            return ell.checked = false
          })
        } else {
          el.checked = true
          el.items.map((ell)=>{
            return ell.checked = true
          })
        }
        
      }
    })
    
    setServicesData(x)
    setRender(prev=>!prev)
  }
  
  function handleCheckItem(blockName, itemName){
    let x = servicesData
    
    x.map((el)=>{
      if (el.name === blockName){
        el.checked = false
        el.items.map((el)=>{
          if (el.itemName === itemName){
            el.checked = !el.checked
          }
        })
        
      }
    })
    
    setServicesData(x)
    setRender(prev=>!prev)
    
  }
  
  function handleOpenBlock (name){
    if (name === activeServiceBlock){
      setActiveServiceBlock("")
    } else {
      setActiveServiceBlock(name)
    }
  }
  
  return (
     <div className="Services">
       {servicesData.map((el, index) => {
         return (
            <div key={index} className="service">
              <div className="headBlock G-flex G-align-center">
                <input type="checkbox" checked={el.checked} onClick={()=>{handleSelectAllBlock(el.name)}}/>
                <p onClick={()=>{handleOpenBlock(el.name)}} className="name">{el.name}</p>
                <img onClick={()=>{handleOpenBlock(el.name)}} style={{rotate: `${el.name === activeServiceBlock ? "180deg" : "0deg"}`}} src={Images.chevronDown} alt=""/>
              </div>
              <div style={{display: `${activeServiceBlock === el.name ? "block" : "none"}`}} className="mainBlock">
                {el.items.map((ell, index)=>{
                  return(
                     <label htmlFor={`${ell.itemName}${index}`} key={index} className="mainItem G-flex G-align-center">
                       <input id={`${ell.itemName}${index}`} type="checkbox" checked={ell.checked} onClick={()=>{handleCheckItem(el.name, ell.itemName)}}/>
                       <p className="itemName">{ell.value}</p>
                     </label>
                  )
                })}
              </div>
            </div>
         );
       })}
     </div>
  );
}

export default Services;