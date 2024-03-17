import React, {useEffect, useState} from "react";
import "react-calendar/dist/Calendar.css";
import {ImgSvg} from "./images/imgSvg";
import "./findServiceStep2.jsx.scss";
import {InsuranceSvg} from "../../insurance/insuranceSvg/insuranceSvg";
import {Link, useNavigate} from "react-router-dom";
import {useCartContext} from "../../../CartContext";
import Calendar from "react-calendar";
import {useTranslation} from "react-i18next";

function FindServiceStep2() {
  const {t, i18n} = useTranslation()
  const navigate = useNavigate()
  const {checkedServices, setCheckedServices, handleDeleteCheck, authorization} = useCartContext();
  
  const [selectedMark, setSelectedMark] = useState(t("finds.mark"));
  const [selectMarkActive, setSelectMarkActive] = useState(false);
  
  const [selectedModel, setSelectedModel] = useState(t("finds.model"));
  const [selectModelActive, setSelectModelActive] = useState(false);
  
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  
  const [departureSwitch, setDepartureSwitch] = useState(true);
  const [evacuateSwitch, setEvacuateSwitch] = useState(false);
  
  function SelectingMark(event) {
    setSelectedMark(event.target.innerHTML);
    setSelectMarkActive(false);
  }
  
  function SelectingModel(event) {
    setSelectedModel(event.target.innerHTML);
    setSelectModelActive(false);
  }
  
  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    
    reader.onloadend = () => {
      setImage1(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
    
  };
  const handleImageUpload2 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    
    reader.onloadend = () => {
      if (image1 === null) {
        setImage1(reader.result);
      } else {
        setImage2(reader.result);
      }
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleImageUpload3 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    
    reader.onloadend = () => {
      if (image2 === null) {
        if (image1 === null) {
          setImage1(reader.result);
        } else {
          setImage2(reader.result);
        }
      } else {
        setImage3(reader.result);
      }
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleImageUpload4 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    
    reader.onloadend = () => {
      if (image3 === null) {
        if (image2 === null) {
          if (image1 === null) {
            setImage1(reader.result);
          } else {
            setImage2(reader.result);
          }
        } else {
          setImage3(reader.result);
        }
      } else {
        setImage4(reader.result);
      }
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  ///////////////// Calendar ////////////////////
  const [choseType, setChoseType] = useState(3);
  const [value, setValue] = useState(new Date());
  const WeekDays = [
     t("finds.week1"),
     t("finds.week2"),
     t("finds.week3"),
     t("finds.week4"),
     t("finds.week5"),
     t("finds.week6"),
     t("finds.week7"),
     t("finds.week1"),
     t("finds.week2"),
     t("finds.week3"),

  ];
  const Months = [
    t("finds.month1"),
    t("finds.month2"),
    t("finds.month3"),
    t("finds.month4"),
    t("finds.month5"),
    t("finds.month6"),
    t("finds.month7"),
    t("finds.month8"),
    t("finds.month9"),
    t("finds.month10"),
    t("finds.month11"),
    t("finds.month12"),
    t("finds.month1"),
  ];
  const Times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [activeTime, setActiveTime] = useState(9);
  
  const [nearTime, setNearTime] = useState(new Date());
  const [nearNextTime, setNearNextTime] = useState(new Date());
  const [render, setRender] = useState(false);
  
  
  useEffect(() => {
    
    if (new Date().getHours() >= 18 || new Date().getHours() <9) {
      value.setDate(new Date().getDate() + 1);
      setActiveTime(9);
      setRender(prev => !prev);
    } else {
      setActiveTime(new Date().getHours() + 1);
      setRender(prev => !prev);
    }
    
    
    nearTime.setDate(value.getDate());
    nearNextTime.setDate(value.getDate() + 1);
    
  }, []);
  
  function handleChangeDate(event) {
    setValue(event);
  }
  
  function handleCheckNearTime() {
    setValue(nearTime);
    setActiveTime(9);
  }
  
  function handleCheckNextDayTime() {
    setValue(nearNextTime);
    setActiveTime(9);
  }
  
  return (<div className="Step2 G-container">
    <div className="headerBlock">
      <Link to="/findService" className="backBtnBlock G-flex G-align-center">
        <img src={ImgSvg.arrowLeft} alt=""/>
        <span>{t("finds.back")}</span>
      </Link>
      <div className="requestBlock G-flex G-justify-between G-align-center">
        <p className="header">{t("finds.newReq")}:</p>
        <div className="clearBlock">
          <img src={ImgSvg.clear} alt=""/>
          <span>{t("finds.clear")}</span>
        </div>
      </div>
    </div>
    
    <div className="MainCont G-flex">
      
      <div className="fillingBlock">
        <div className="InputCarNumber G-flex">
          <img src={InsuranceSvg.logoLV} alt=""/>
          <input placeholder={t("finds.placeholder2")} type="text"/>
        </div>
        
        <p className="miniHeader">{t("finds.miniHeader1")}</p>
        
        <div className="carCharacteristic G-flex G-align-center">
          
          <div className="Select">
            <div style={{borderColor: `${selectMarkActive ? "#266EFE" : "#D9D9D9"}`}}
                 onClick={() => setSelectMarkActive(prev => !prev)}
                 className="selectBlock G-justify-between G-align-center">
              <span style={{color: `${selectedMark !== "Your Mark" ? "black" : "#AEAEAE"}`}}>{selectedMark}</span>
              <svg style={{transform: `rotate(${selectMarkActive ? "180" : "0"}deg)`}}
                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path style={{stroke: `${selectMarkActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9"
                      stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div style={{display: `${selectMarkActive ? "block" : "none"}`}} className="optionsBlock">
              <p onClick={SelectingMark} className="option">Aston Martin</p>
              <p onClick={SelectingMark} className="option">BMW</p>
              <p onClick={SelectingMark} className="option">Mercedes</p>
              <p onClick={SelectingMark} className="option">Ford</p>
              <p onClick={SelectingMark} className="option">Volvo</p>
              <p onClick={SelectingMark} className="option">Lexus</p>
              <p onClick={SelectingMark} className="option">Toyota</p>
              <p onClick={SelectingMark} className="option">Nissan</p>
              <p onClick={SelectingMark} className="option">Audi</p>
            
            
            </div>
          
          </div>
          
          <div className="Select">
            <div style={{borderColor: `${selectModelActive ? "#266EFE" : "#D9D9D9"}`}}
                 onClick={() => setSelectModelActive(prev => !prev)}
                 className="selectBlock G-justify-between G-align-center">
              <span style={{color: `${selectedModel !== "Model" ? "black" : "#AEAEAE"}`}}>{selectedModel}</span>
              <svg style={{transform: `rotate(${selectModelActive ? "180" : "0"}deg)`}}
                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path style={{stroke: `${selectModelActive ? "#266EFE" : "#AEAEAE"}`}} d="M6 9L12 15L18 9"
                      stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div style={{display: `${selectModelActive ? "block" : "none"}`}} className="optionsBlock">
              <p onClick={SelectingModel} className="option">Aston Martin</p>
              <p onClick={SelectingModel} className="option">BMW</p>
              <p onClick={SelectingModel} className="option">Mercedes</p>
              <p onClick={SelectingModel} className="option">Ford</p>
              <p onClick={SelectingModel} className="option">Volvo</p>
              <p onClick={SelectingModel} className="option">Lexus</p>
              <p onClick={SelectingModel} className="option">Toyota</p>
              <p onClick={SelectingModel} className="option">Nissan</p>
              <p onClick={SelectingModel} className="option">Audi</p>
            
            
            </div>
          
          </div>
          
          <textarea placeholder={t("finds.placeholder3")} className="textArea" name="issueDescription"
                    id="issueDescription" cols="30" rows="10"></textarea>
        
        </div>
        
        <div className="checkedItems G-flex G-align-center">
          {checkedServices.map((el, index) => {
            return (<div className="checkedItem G-flex G-align-center" key={index}>
              <p className="itemName">{el}</p>
              <img onClick={() => {
                handleDeleteCheck(el);
              }} src={ImgSvg.closeBlack} alt=""/>
            </div>);
          })}
        </div>
        
        <p className="miniHeader">{t("finds.miniHeader2")}</p>
        
        <div className="picturesBlock G-flex G-align-center">
          <div className="imgBlock">
            <label htmlFor="img1"> <img src={ImgSvg.camera02} className="imgLoad" alt=""/></label>
            <div onClick={() => {
              setImage1(null);
            }} style={{display: `${image1 ? "flex" : "none"}`}} className="deleteBtn">
              <img src={ImgSvg.xClose} alt=""/>
            </div>
            <input
               id="img1"
               type="file"
               accept="image/*"
               onChange={handleImageUpload1}
            />
            {image1 && (<div style={{backgroundImage: `url("${image1}")`}} className="selectedImage"></div>)}
          </div>
          <div className="imgBlock">
            <label htmlFor="img2"> <img src={ImgSvg.camera02} className="imgLoad" alt=""/></label>
            <div onClick={() => {
              setImage2(null);
            }} style={{display: `${image2 ? "flex" : "none"}`}} className="deleteBtn">
              <img src={ImgSvg.xClose} alt=""/>
            </div>
            <input
               id="img2"
               type="file"
               accept="image/*"
               onChange={handleImageUpload2}
            />
            {image2 && (<div style={{backgroundImage: `url("${image2}")`}} className="selectedImage"></div>)}
          </div>
          <div className="imgBlock">
            <label htmlFor="img3"> <img src={ImgSvg.camera02} className="imgLoad" alt=""/></label>
            <div onClick={() => {
              setImage3(null);
            }} style={{display: `${image3 ? "flex" : "none"}`}} className="deleteBtn">
              <img src={ImgSvg.xClose} alt=""/>
            </div>
            <input
               id="img3"
               type="file"
               accept="image/*"
               onChange={handleImageUpload3}
            />
            {image3 && (<div style={{backgroundImage: `url("${image3}")`}} className="selectedImage"></div>)}
          </div>
          <div className="imgBlock">
            <label htmlFor="img4"> <img src={ImgSvg.camera02} className="imgLoad" alt=""/></label>
            <div onClick={() => {
              setImage4(null);
            }} style={{display: `${image4 ? "flex" : "none"}`}} className="deleteBtn">
              <img src={ImgSvg.xClose} alt=""/>
            </div>
            <input
               id="img4"
               type="file"
               accept="image/*"
               onChange={handleImageUpload4}
            />
            {image4 && (<div style={{backgroundImage: `url("${image4}")`}} className="selectedImage"></div>)}
          </div>
        </div>
        
        <p className="miniHeader pickupQuestion">{t("finds.miniHeader3")}</p>
        
        <div className="switchersCont">
          <div className="switcherBlock G-flex G-align-center G-justify-between">
            <p className="miniPrg">{t("finds.prg1")}</p>
            <div onClick={() => {
              setDepartureSwitch(prev => !prev);
            }} className={`switcher G-flex ${departureSwitch ? "activeSwitch" : ""}`}>
              <div className="circle"></div>
            </div>
          </div>
          
          <div className="switcherBlock G-flex G-align-center G-justify-between">
            <p className="miniPrg">{t("finds.prg2")}</p>
            <div onClick={() => {
              setEvacuateSwitch(prev => !prev);
            }} className={`switcher G-flex ${evacuateSwitch ? "activeSwitch" : ""}`}>
              <div className="circle"></div>
            </div>
          </div>
        
        </div>
        
        <div className="locationBlock">
          <p className="miniHeader">{t("finds.miniHeader4")}</p>
          <input className="inputMap" placeholder="Dzirnavu iela 33, Centra rajons, Rīga, LV-1010" type="text"/>
          <div className="mapBlock">
            <img src={ImgSvg.mapImg} alt=""/>
          </div>
        </div>
        
        <div className="dateBlock">
          <p className="miniHeader">{t("finds.miniHeader5")}</p>
          <div className="tableBlock G-flex G-justify-between G-align-center">
            
            <div onClick={() => {
              setChoseType(1);
              handleCheckNearTime();
            }} className={`meetingTime G-flex G-align-center ${choseType === 1 ? "activeTime" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                   d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4V2Z"
                   fill="#0D172F"/>
                <path
                   d="M13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V20Z"
                   fill="#0D172F"/>
                <path
                   d="M1 12C1 11.4477 1.44772 11 2 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H2C1.44772 13 1 12.5523 1 12Z"
                   fill="#0D172F"/>
                <path
                   d="M5.60701 4.1928C5.21649 3.80227 4.58332 3.80227 4.1928 4.1928C3.80227 4.58332 3.80227 5.21649 4.1928 5.60701L5.60701 7.02122C5.99753 7.41175 6.6307 7.41175 7.02122 7.02122C7.41175 6.6307 7.41175 5.99753 7.02122 5.60701L5.60701 4.1928Z"
                   fill="#0D172F"/>
                <path
                   d="M19.8072 4.1928C20.1978 4.58332 20.1978 5.21649 19.8072 5.60701L18.393 7.02122C18.0025 7.41175 17.3693 7.41175 16.9788 7.02122C16.5883 6.6307 16.5883 5.99753 16.9788 5.60701L18.393 4.1928C18.7835 3.80227 19.4167 3.80227 19.8072 4.1928Z"
                   fill="#0D172F"/>
                <path
                   d="M7.02122 18.397C7.41175 18.0065 7.41175 17.3734 7.02122 16.9828C6.6307 16.5923 5.99753 16.5923 5.60701 16.9828L4.1928 18.397C3.80227 18.7876 3.80227 19.4207 4.1928 19.8113C4.58332 20.2018 5.21649 20.2018 5.60701 19.8113L7.02122 18.397Z"
                   fill="#0D172F"/>
                <path
                   d="M16.9788 16.9828C17.3693 16.5923 18.0025 16.5923 18.393 16.9828L19.8072 18.397C20.1978 18.7876 20.1978 19.4207 19.8072 19.8113C19.4167 20.2018 18.7835 20.2018 18.393 19.8113L16.9788 18.397C16.5883 18.0065 16.5883 17.3734 16.9788 16.9828Z"
                   fill="#0D172F"/>
                <path
                   d="M20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H20Z"
                   fill="#0D172F"/>
                <path
                   d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
                   fill="#0D172F"/>
              </svg>
              <p className="timePrg">{new Date().getDate() === value.getDate() ? t("finds.laterToday") : t("finds.tomorrow")} {new Date().getDate() === value.getDate() ? WeekDays[new Date().getDay()] : WeekDays[new Date().getDay() + 1]} {new Date().getDate() === value.getDate() ? activeTime === 9 ? "09:00" : `${activeTime}:00` : "09:00"}</p>
            </div>
            
            <div onClick={() => {
              setChoseType(2);
              handleCheckNextDayTime();
            }} className={`meetingTime G-flex G-align-center ${choseType === 2 ? "activeTime" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                   d="M11.7071 2.29289C11.3166 1.90237 10.6834 1.90237 10.2929 2.29289C9.90237 2.68342 9.90237 3.31658 10.2929 3.70711L12.5858 6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H12.5858L10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071L15.7071 7.70711C16.0976 7.31658 16.0976 6.68342 15.7071 6.29289L11.7071 2.29289Z"
                   fill="#0D172F"/>
                <path
                   d="M3 17C3 16.4477 3.44772 16 4 16H17.5858L15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929C15.6834 11.9024 16.3166 11.9024 16.7071 12.2929L20.7071 16.2929C21.0976 16.6834 21.0976 17.3166 20.7071 17.7071L16.7071 21.7071C16.3166 22.0976 15.6834 22.0976 15.2929 21.7071C14.9024 21.3166 14.9024 20.6834 15.2929 20.2929L17.5858 18H4C3.44772 18 3 17.5523 3 17Z"
                   fill="#0D172F"/>
              </svg>
              <p className="timePrg">{new Date().getDate() === value.getDate() ? t("finds.tomorrow") : t("finds.afterTomorrow")} {new Date().getDate() === value.getDate() ? WeekDays[new Date().getDay() + 1] : WeekDays[new Date().getDay() + 2]} {"09:00"}</p>
            </div>
            
            <div onClick={() => {
              setChoseType(3);
            }} className={`meetingTime G-flex G-align-center ${choseType === 3 ? "activeTime" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                   d="M20 15C20 14.4477 19.5523 14 19 14C18.4477 14 18 14.4477 18 15V17H16C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19H18V21C18 21.5523 18.4477 22 19 22C19.5523 22 20 21.5523 20 21V19H22C22.5523 19 23 18.5523 23 18C23 17.4477 22.5523 17 22 17H20V15Z"
                   fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16 1C16.5523 1 17 1.44772 17 2V3.00163C17.4755 3.00489 17.891 3.01472 18.2518 3.04419C18.8139 3.09012 19.3306 3.18868 19.816 3.43597C20.5686 3.81947 21.1805 4.43139 21.564 5.18404C21.8113 5.66937 21.9099 6.18608 21.9558 6.74817C22 7.28936 22 7.95372 22 8.75868V13.2455C22 13.386 21.886 13.5 21.7455 13.5C21.6546 13.5 21.5713 13.4511 21.522 13.3747C20.9879 12.5476 20.0579 12 19 12C17.3431 12 16 13.3431 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21C16 21.1376 16.0093 21.273 16.0272 21.4057C16.1317 22.1784 16.1839 22.5648 16.1358 22.6863C16.0784 22.8313 16.0519 22.8617 15.916 22.9381C15.8021 23.0021 15.5286 23.0024 14.9815 23.003C12.5739 23.0055 10.1663 23 7.75868 23C6.95372 23 6.28937 23 5.74818 22.9558C5.18608 22.9099 4.66938 22.8113 4.18404 22.564C3.43139 22.1805 2.81947 21.5686 2.43598 20.816C2.18868 20.3306 2.09012 19.8139 2.0442 19.2518C1.99998 18.7106 1.99999 18.0463 2 17.2413V8.7587C1.99999 7.95375 1.99998 7.28936 2.0442 6.74817C2.09012 6.18608 2.18868 5.66937 2.43598 5.18404C2.81947 4.43139 3.43139 3.81947 4.18404 3.43597C4.66938 3.18868 5.18608 3.09012 5.74818 3.04419C6.10898 3.01472 6.52454 3.00489 7 3.00163V2C7 1.44772 7.44772 1 8 1C8.55229 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1ZM7 5.00176V6C7 6.55228 7.44772 7 8 7C8.55229 7 9 6.55228 9 6V5H15V6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6V5.00176C17.4455 5.00489 17.7954 5.01357 18.089 5.03755C18.5274 5.07337 18.7516 5.1383 18.908 5.21799C19.2843 5.40973 19.5903 5.7157 19.782 6.09202C19.8617 6.24842 19.9266 6.47262 19.9624 6.91104C19.9992 7.36113 20 7.94342 20 8.8V9H4V8.8C4 7.94342 4.00078 7.36113 4.03755 6.91104C4.07337 6.47262 4.1383 6.24842 4.21799 6.09202C4.40974 5.7157 4.7157 5.40973 5.09202 5.21799C5.24842 5.1383 5.47262 5.07337 5.91104 5.03755C6.20463 5.01357 6.55447 5.00489 7 5.00176Z"
                      fill="black"/>
              </svg>
              <p className="timePrg">{t("finds.pickDate")}</p>
            </div>
          </div>
          
          
          <div onClick={() => {
            setChoseType(3);
          }} className="calendarCont">
            <div>
              <Calendar onChange={(event) => {
                handleChangeDate(event);
              }} locale={i18n.resolvedLanguage.toLowerCase()} value={value}/>
            
            </div>
            <div className="calendarSideBlock">
              <div className="timeBlock">
                <p className="timePrg">{t("finds.time")}</p>
                
                {Times.map((el, index) => {
                  return (<div onClick={() => {
                    setActiveTime(el);
                  }} className={`timeItem ${activeTime === el ? "active" : ""}`} key={index}>
                    {el === 9 ? "09:00" : `${el}:00`}
                  </div>);
                })}
              </div>
              <div className="meetingTimeBlock">
                <p className="meetingPrg">{t("finds.meetingTime")}</p>
                <p className="data">{value.getDate()} {Months[value.getMonth()]}, {activeTime === 9 ? "09:00" : `${activeTime}:00`}</p>
              
              </div>
            </div>
          
          </div>
        </div>
        
        <div className="tabletButton">
          <button onClick={()=>{
            if (authorization){
              navigate("/requests")
            } else {
              navigate("/findService/logIn")
            }
          }} className="continueBtn">{t("finds.continue")}</button>
          
          <p className="prgTerms">{t("finds.prg31")}<a href="">{t("finds.prg32")}</a></p>
        </div>
      
      </div>
      
      <div className="advantagesBlock">
        
        <p className="miniHeader">{t("finds.miniHeader6")}</p>
        
        <div className="advantageBlock G-flex G-align-center">
          <img src={ImgSvg.checkGreen} alt=""/>
          <p className="prg">{t("finds.prg4")}</p>
        </div>
        
        <div className="advantageBlock G-flex G-align-center">
          <img src={ImgSvg.checkGreen} alt=""/>
          <p className="prg">{t("finds.prg5")}</p>
        </div>
        
        <div className="advantageBlock G-flex G-align-center">
          <img src={ImgSvg.checkGreen} alt=""/>
          <p className="prg">{t("finds.prg6")}</p>
        </div>
        
        <div className="advantageBlock G-flex G-align-center">
          <img src={ImgSvg.checkGreen} alt=""/>
          <p className="prg">{t("finds.prg7")}</p>
        </div>
        
        <div className="advantageBlock G-flex G-align-center">
          <img src={ImgSvg.checkGreen} alt=""/>
          <p className="prg">{t("finds.prg8")}</p>
        </div>
        
        <button onClick={()=>{
          if (authorization){
            navigate("/requests")
          } else {
            navigate("/findService/logIn")
          }
        }} className="continueBtn">{t("finds.continue")}</button>
        
        <p className="prgTerms">{t("finds.prg31")}<a href="">{t("finds.prg32")}</a></p>
      
      </div>
    
    
    </div>
  
  </div>);
}

export default FindServiceStep2;