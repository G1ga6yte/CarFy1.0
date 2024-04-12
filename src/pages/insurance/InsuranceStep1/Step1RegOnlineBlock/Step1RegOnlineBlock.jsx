import React, {useState} from "react";
import "./Step1RegOnlineBlock.scss";
import {InsuranceSvg} from "../../insuranceSvg/insuranceSvg";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import SelectBlock from "./selectBlock/selectBlock";

function Step1RegOnlineBlock (){
  const navigate = useNavigate()
  const {t, i18n} = useTranslation()
  const [render, setRender] = useState(false)
  
  const [selectItems, setSelectItems] = useState([
     "Latvia",
     "Bulgaria",
     "Germany",
     "French",
     "Latvia",
     "Bulgaria",
     "Germany",
     "French"
  ])
  
  const [selectsDate, setSelectsDate] = useState([
    {
      id:1,
      name: "Country",
      placeholder: t("insurance.country"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:2,
      name: "Mark",
      placeholder: t("insurance.mark"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:3,
      name: "Model",
      placeholder: t("insurance.model"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:4,
      name: "Characteristics",
      placeholder: t("insurance.characteristics"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:5,
      name: "Engine",
      placeholder: t("insurance.engine"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:6,
      name: "Fuel",
      placeholder: t("insurance.fuel"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:7,
      name: "Power",
      placeholder: t("insurance.power"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:8,
      name: "First Registration",
      placeholder: t("insurance.registration"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:9,
      name: "Used For",
      placeholder: t("insurance.used"),
      state: false,
      selected: "",
      selectItems: selectItems
    },
    {
      id:10,
      name       : "Right Hand Drive",
      placeholder: t("insurance.rightHand"),
      state      : false,
      selected   : "",
      selectItems: selectItems
    }
  ])
  
  function handleChangeSelectDate (date){
    const newDate = selectsDate
    newDate.map((el)=>{
      if (el.id === date.id){
        el = date
      }
    })
    
    setSelectsDate(newDate)
    setRender(prevState => !prevState)
  }
  
  function handleSelectBlock (selectName){
    let date = selectsDate
  
    date.map((el)=>{
    
      if (el.name === selectName){
        el.state = !el.state
      } else {
        el.state = false
      }
    
    })
    setSelectsDate(date)
    setRender(prevState => !prevState)
  }
  
  
  
  return(
     <div className="Step1RegOnlineBlock">
        <p className="header">{t("insurance.header21")} <span>{t("insurance.header22")}</span></p>
       
       <div className="regBlock">
         
          <div className="pageInfo">
            <p className="VehicleInfo">{t("insurance.miniHeader5")}:</p>
            <span className="clearRefresh G-align-center"><img src={InsuranceSvg.clearIcon} alt=""/>{t("insVig.clear")}</span>
            <div className="pagesOrdinary G-flex">
              <span className="page  G-align-center"><span>1</span>{t("insurance.section1")}</span>
              <span className="page active G-align-center"><span>2</span>{t("insurance.section2")}</span>
              <span className="page active G-align-center"><span>3</span>{t("insurance.section3")}</span>
            </div>
          </div>
         
         <div className="pageInputs G-justify-between G-align-center">
            <div className="inputsBlock">
                <div className="line1">
                  <SelectBlock
                     index={0}
                    mainSelect={selectsDate}
                    handleChangeSelectDate={handleChangeSelectDate}
                    handleSelectBlock={handleSelectBlock}
                  />
                </div>
              <div className="line2 G-flex">
                <div className="InputCarNumber G-flex">
                  <img src={InsuranceSvg.logoLV} alt=""/>
                  <input placeholder={t("insurance.carNumber")} type="text"/>
                </div>
                <input placeholder={t("insurance.purpose")} className="inputPurpose" type="text"/>
              </div>
              
              <div className="vehCharacter">
                <p className="vehCharacterHeader">{t("insurance.miniHeader6")}</p>
                <div className="OptionBlocks G-flex">
                  <SelectBlock
                     index={1}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                  <SelectBlock
                     index={2}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                </div>
                
                <div className="longInputs">
                  <SelectBlock
                     index={3}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                  <SelectBlock
                     index={4}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                  <SelectBlock
                     index={5}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                  <SelectBlock
                     index={6}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                  <SelectBlock
                     index={7}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                  <SelectBlock
                     index={8}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                  <SelectBlock
                     index={9}
                     mainSelect={selectsDate}
                     handleChangeSelectDate={handleChangeSelectDate}
                     handleSelectBlock={handleSelectBlock}
                  />
                </div>
                {/*<input placeholder={t("insurance.placeholder1")} className="vehCharacterInput" type="text"/>*/}
                <button disabled={false} onClick={()=>{
                  navigate('/insurance/step2')
                }} className="continueBtnInside">{t("insurance.continue")}</button>
                <a className="linkPolicy" href="">{t("insurance.link1")}</a>
              </div>
              
            </div>
           
           <div className="needBlock G-flex-column">
              <p className="needHeader">{t("insurance.needH")}:</p>
             <p className="needPrg">{t("insurance.need1")}</p>
             <p className="needPrg">{t("insurance.need2")}</p>
             <p className="needPrg">{t("insurance.need3")}</p>

             <button disabled={false} onClick={()=>{
               navigate('/insurance/step2')
             }} className="continueBtn">{t("insurance.continue")}</button>
           </div>
         </div>
         
         
       </div>
     </div>
  )
}

export default Step1RegOnlineBlock