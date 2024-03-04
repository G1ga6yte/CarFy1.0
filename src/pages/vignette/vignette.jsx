import React, {useState, useEffect} from "react";
import "./Vignette.scss"
import {ImgSvg} from "./img-svg/img-svg";
// import {PhoneInput} from "react-international-phone";
import "react-international-phone/style.css"
// import {PhoneNumber} from "react-phone-number-input";
// import {isValidPhoneNumber} from "react-phone-number-input";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ArrowDown from "./img-svg/nav-arrow-down.svg"
import {useTranslation} from "react-i18next";


function Vignette () {
  const {t, i18n} = useTranslation()
  const [activeType, setActiveType] = useState("truck")
  const [activeDate, setActiveDate] = useState("Daily")
  const europeanCountries = ['at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr', 'de', 'gr', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se'];
  
  const [carNumber, setCarNumber] = useState("")
  const [vignetteVal, setVignetteVal] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [emailVal, setEmailVal] = useState("")
  const [paymentBlock, setPaymentBlock] = useState(false)
  
  useEffect(()=>{
    if (carNumber.split('').length >=3 && vignetteVal.split('').length >=3 && phoneNumber.split('').length >=3 && emailVal.split('').length >=3 !== ""){
      setPaymentBlock(true)
    } else {
      setPaymentBlock(false)
    }
  }, [carNumber, vignetteVal, phoneNumber, emailVal])
  
  
  let MonthData = [
     `${t("insVig.month1")}`,
     `${t("insVig.month2")}`,
     `${t("insVig.month3")}`,
     `${t("insVig.month4")}`,
     `${t("insVig.month5")}`,
     `${t("insVig.month6")}`,
     `${t("insVig.month7")}`,
     `${t("insVig.month8")}`,
     `${t("insVig.month9")}`,
     `${t("insVig.month10")}`,
     `${t("insVig.month11")}`,
     `${t("insVig.month12")}`,
     `${t("insVig.month1")}`,
     `${t("insVig.month2")}`,
     `${t("insVig.month3")}`,
  ]
  function Daily (){
    const today = new Date()
    today.setDate(today.getDate()+1)
    const month = MonthData[today.getMonth()]
    const day = today.getDate()
    return(<span className="TimeSpan">{t("insVig.timeSpan1")} {month} {day} {t("insVig.timeSpan2")}</span>)
  }
  function Week (){
    const today = new Date()
    today.setDate(today.getDate()+7)
    const month = MonthData[today.getMonth()]
    const day = today.getDate()
    return(<span className="TimeSpan">{t("insVig.timeSpan1")} {month} {day} {t("insVig.timeSpan2")}</span>)
  }
  function Month (){
    const today = new Date()
    today.setMonth(today.getMonth()+1)
    const month = MonthData[today.getMonth()]
    const day = today.getDate()
    return(<span className="TimeSpan">{t("insVig.timeSpan1")} {month} {day} {t("insVig.timeSpan2")}</span>)
  }
  function Month3 (){
    const today = new Date()
    today.setMonth(today.getMonth()+3)
    const month = MonthData[today.getMonth()]
    const day = today.getDate()
    return(<span className="TimeSpan">{t("insVig.timeSpan1")} {month} {day} {t("insVig.timeSpan2")}</span>)
  }
  function Year (){
    const today = new Date()
    today.setFullYear(today.getFullYear()+1)
    const month = MonthData[today.getMonth()]
    const day = today.getDate()
    const year = today.getFullYear()
    return(<span className="TimeSpan">{t("insVig.timeSpan1")} {month} {day} {t("insVig.timeSpan2")}, {year}</span>)
  }
  
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  const [formattedValue, setFormattedValue] = useState('');
  
  const formatBankAccount = (e) => {
    // Удаляем все нецифровые символы из введенного значения
    const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    const formattedInput = input.replace(/(\d{4})/g, '$1 ').trim(); // Add space every 4 digits
  
    // Обновляем значение в состоянии
    setFormattedValue(formattedInput);
  };
  
  const [cvcValue, setCvcValue] = useState('');
  
  const handleInputChange = (event) => {
    // Удаляем все символы, кроме цифр
    const cleanedValue = event.target.value.replace(/[^\d]/g, '');
    
    // Ограничиваем длину ввода 3 символами
    const limitedValue = cleanedValue.slice(0, 3);
    
    // Обновляем значение в состоянии
    setCvcValue(limitedValue);
  };
  
  const [expiryValue, setExpiryValue] = useState('');
  
  const handleInputChange2 = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
  
    // Format expiration date MM/YY
    if (input.length > 2) {
      const month = Math.min(parseInt(input.slice(0, 2), 10), 12); // Ensure month is between 1 and 12
      const year = input.slice(2, 4);
      input = `${String(month).padStart(2, '0')}/${year}`;
    }
  
    setExpiryValue(input);
  };
  return(
     <div className="Vignette G-container">
       <div className="VignetteBlock G-flex G-justify-between G-align-center">
         <div className="TextBlock">
           <p className="header">{t("insVig.header21")}</p>
           <p className="prg">{t("insVig.prg2")}</p>
      
           <div className="btnBlock G-flex G-justify-between">
             <button className="btnPay">{t("insVig.payBtn")}</button>
             <button className="btnLearn">{t("insVig.learnMore")}</button>
           </div>
         </div>
    
         <img className="shieldImg" src={ImgSvg.roadLogo} alt=""/>
       </div>
       
       <p className="header">{t("insVig.header31")}</p>
       
       <div className="RegCont">
         <div className="pageInfo">
           <p className="VehicleInfo">{t("insVig.miniHeader1")}:</p>
           <span className="clearRefresh G-align-center"><img src={ImgSvg.refresh} alt=""/>{t("insVig.clear")}</span>
         </div>
         
         <div className="MainCont G-flex G-justify-between">
           <div className="LeftCont">
             <p className="miniHeader">{t("insVig.miniHeader2")}</p>
             
             <div className="vehicleDataBlock G-flex G-justify-between">
               <div className="carNumberInput G-justify-between">
                 <img className="Img" src={ImgSvg.LVEU} alt=""/>
                 <input onChange={(event)=>setCarNumber(event.target.value)} placeholder={t("insVig.placeholder1")} className="input1" type="text"/>
               </div>
               <input onChange={(event)=>setVignetteVal(event.target.value)} placeholder={t("insVig.placeholder2")} className="input2" type="text"/>
               
             </div>
             <p className="miniHeader">{t("insVig.miniHeader3")}</p>
             
             <div className="vehicleTypeBlock G-flex">
               <div onClick={()=> setActiveType("car")} className={`vehicleType ${activeType === "car" ? "active" : ""}`}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <g clipPath="url(#clip0_2666_8400)">
                     <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3.11 11.68C3.04 11.89 3 12.11 3 12.34V19.5C3 20.33 3.67 21 4.5 21C5.33 21 6 20.33 6 19.5V19H18V19.5C18 20.32 18.67 21 19.5 21C20.32 21 21 20.33 21 19.5V12.34C21 12.12 20.96 11.89 20.89 11.68L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.27 7.18C6.41 6.78 6.79 6.5 7.22 6.5H16.78C17.21 6.5 17.59 6.78 17.73 7.18L19 11H5Z"/>
                   </g>
                   <defs>
                     <clipPath id="clip0_2666_8400">
                       <rect width="24" height="24" fill="white"/>
                     </clipPath>
                   </defs>
                 </svg>
                 
                 <span className="span">{t("insVig.type1")}</span>
               </div>
  
               <div onClick={()=>setActiveType("truck")} className={`vehicleType ${activeType === "truck" ? "active" : ""}`}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path fillRule="evenodd" clipRule="evenodd" d="M10.8385 3H5.16146C4.63433 2.99998 4.17954 2.99997 3.80497 3.03057C3.40963 3.06287 3.01641 3.13419 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1.13419 5.01641 1.06287 5.40963 1.03057 5.80497C0.999969 6.17954 0.999984 6.63428 1 7.16142V15C1 16.3406 1.87937 17.4759 3.09276 17.8604C3.48636 19.656 5.08622 21 7 21C8.86384 21 10.4299 19.7252 10.874 18H13.9804L14 18.0002H14.5355C14.7782 19.6962 16.2368 21 18 21C19.7841 21 21.2565 19.665 21.4727 17.9395C21.5673 17.9185 21.6656 17.8893 21.7654 17.848C22.2554 17.645 22.6448 17.2556 22.8478 16.7656C22.9447 16.5315 22.9752 16.3058 22.9882 16.1154C23 15.9413 23 15.7367 23 15.5267L23 12.6629L23.0001 12.6119C23.0006 12.422 23.0012 12.1828 22.9447 11.9475C22.8957 11.7434 22.8149 11.5484 22.7053 11.3694C22.5788 11.1631 22.4093 10.9944 22.2746 10.8605L22.2385 10.8245L18.1757 6.76171L18.1397 6.72556C18.0058 6.59091 17.8371 6.42137 17.6308 6.29491C17.4518 6.18525 17.2568 6.10445 17.0527 6.05545C16.8173 5.99895 16.5782 5.99959 16.3883 6.0001L16.3373 6.00019H14.9824C14.9788 5.93289 14.9746 5.8678 14.9694 5.80497C14.9371 5.40963 14.8658 5.01641 14.673 4.63803C14.3854 4.07354 13.9265 3.6146 13.362 3.32698C12.9836 3.13419 12.5904 3.06287 12.195 3.03057C11.8205 2.99997 11.3657 2.99998 10.8385 3ZM20.9997 15.6957C21 15.6394 21 15.5749 21 15.5002V12.6629C21 12.5319 20.9998 12.4666 20.9976 12.4191L20.9974 12.4155L20.995 12.4128C20.963 12.3777 20.9169 12.3313 20.8243 12.2387L16.7615 8.17593C16.6689 8.0833 16.6225 8.03723 16.5874 8.00519L16.5847 8.00277L16.5811 8.0026C16.5336 8.00043 16.4683 8.00019 16.3373 8.00019H15V15.6962C15.6125 14.6798 16.7268 14 18 14C19.273 14 20.3872 14.6796 20.9997 15.6957ZM7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15ZM16.5 17.5C16.5 16.6716 17.1716 16 18 16C18.8284 16 19.5 16.6716 19.5 17.5C19.5 18.3284 18.8284 19 18 19C17.1716 19 16.5 18.3284 16.5 17.5Z" />
                 </svg>
    
                 <span className="span">{t("insVig.type2")}</span>
               </div>
  
               <div onClick={()=>setActiveType("bus")} className={`vehicleType ${activeType === "bus" ? "active" : ""}`}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M7.75911 1H16.2417C17.0467 0.999988 17.711 0.999979 18.2522 1.0442C18.8143 1.09012 19.331 1.18868 19.8164 1.43598C20.569 1.81947 21.1809 2.43139 21.5644 3.18404C21.6375 3.32736 21.6975 3.47342 21.7471 3.62257C21.8264 3.86132 21.8661 3.9807 21.8305 4.12209C21.8028 4.23216 21.7101 4.36062 21.6144 4.42163C21.4914 4.5 21.3388 4.5 21.0336 4.5H2.96721C2.662 4.5 2.5094 4.5 2.38645 4.42163C2.29074 4.36062 2.19805 4.23216 2.17034 4.12209C2.13474 3.9807 2.1744 3.86132 2.25374 3.62257C2.3033 3.47342 2.36335 3.32736 2.43638 3.18404C2.81987 2.43139 3.4318 1.81947 4.18444 1.43598C4.66978 1.18868 5.18648 1.09012 5.74858 1.0442C6.28977 0.999979 6.95415 0.999988 7.75911 1Z" />
                   <path d="M2.79993 6.5C2.52008 6.5 2.38016 6.5 2.27321 6.55448C2.17917 6.60239 2.10265 6.67889 2.05471 6.77292C2.00021 6.87985 2.00017 7.01972 2.00009 7.29947C1.99984 8.26631 2.00017 9.23316 2.00033 10.2C2.00038 10.4801 2.0004 10.6201 2.0549 10.727C2.10285 10.8211 2.17932 10.8976 2.27341 10.9455C2.38035 11 2.52037 11 2.8004 11H21.2004C21.4804 11 21.6205 11 21.7274 10.9455C21.8215 10.8976 21.898 10.8211 21.9459 10.727C22.0004 10.6201 22.0004 10.4801 22.0005 10.2C22.0006 9.23316 22.001 8.26632 22.0007 7.29948C22.0006 7.01973 22.0006 6.87985 21.9461 6.77292C21.8982 6.67889 21.8216 6.60239 21.7276 6.55448C21.6206 6.5 21.4807 6.5 21.2009 6.5H2.79993Z" />
                   <path fillRule="evenodd" clipRule="evenodd" d="M22.0004 13.8C22.0004 13.52 22.0004 13.38 21.9459 13.273C21.898 13.1789 21.8215 13.1024 21.7274 13.0545C21.6204 13 21.4804 13 21.2004 13H2.8004C2.52038 13 2.38037 13 2.27341 13.0545C2.17933 13.1024 2.10284 13.1789 2.0549 13.273C2.0004 13.38 2.0004 13.52 2.0004 13.8V14.2413C2.00039 15.0463 2.00038 15.7106 2.0446 16.2518C2.09052 16.8139 2.18909 17.3306 2.43638 17.816C2.78811 18.5063 3.33201 19.0782 4.0004 19.4641L4.0004 21.2231C4.00035 21.3423 4.0003 21.4845 4.01054 21.6098C4.0224 21.755 4.05284 21.963 4.16389 22.181C4.3077 22.4632 4.53717 22.6927 4.81942 22.8365C5.03736 22.9476 5.24535 22.978 5.39057 22.9899C5.51586 23.0001 5.65808 23.0001 5.77717 23H7.72354C7.84264 23.0001 7.98494 23.0001 8.11023 22.9899C8.25545 22.978 8.46344 22.9476 8.68139 22.8365C8.96363 22.6927 9.1931 22.4632 9.33691 22.181C9.44796 21.963 9.4784 21.755 9.49027 21.6098C9.50051 21.4845 9.50045 21.3423 9.50041 21.2231L9.5004 20H14.5004L14.5004 21.2231C14.5003 21.3422 14.5003 21.4845 14.5105 21.6098C14.5224 21.755 14.5528 21.963 14.6639 22.181C14.8077 22.4632 15.0372 22.6927 15.3194 22.8365C15.5374 22.9476 15.7454 22.978 15.8906 22.9899C16.0159 23.0001 16.1581 23.0001 16.2772 23H18.2235C18.3426 23.0001 18.4849 23.0001 18.6102 22.9899C18.7554 22.978 18.9634 22.9476 19.1814 22.8365C19.4636 22.6927 19.6931 22.4632 19.8369 22.181C19.948 21.963 19.9784 21.755 19.9903 21.6098C20.0005 21.4845 20.0005 21.3423 20.0004 21.2232L20.0004 19.4641C20.6688 19.0782 21.2127 18.5063 21.5644 17.816C21.8117 17.3306 21.9103 16.8139 21.9562 16.2518C22.0004 15.7106 22.0004 15.0463 22.0004 14.2413V13.8ZM5.5004 15.5C5.5004 14.9477 5.94812 14.5 6.5004 14.5H8.0004C8.55269 14.5 9.0004 14.9477 9.0004 15.5C9.0004 16.0523 8.55269 16.5 8.0004 16.5H6.5004C5.94812 16.5 5.5004 16.0523 5.5004 15.5ZM16.0004 14.5C15.4481 14.5 15.0004 14.9477 15.0004 15.5C15.0004 16.0523 15.4481 16.5 16.0004 16.5H17.5004C18.0527 16.5 18.5004 16.0523 18.5004 15.5C18.5004 14.9477 18.0527 14.5 17.5004 14.5H16.0004Z"/>
                 </svg>
    
                 <span className="span">{t("insVig.type3")}</span>
               </div>
               
             </div>
             
             <p className="miniHeader">{t("insVig.miniHeader4")}</p>
             
             <div className="vignetteTypeBlock G-flex">
               <label onClick={()=>setActiveDate("Daily")} className="VignetteEachBlock" htmlFor="Daily">
                  <div className="NameLine">
                    <input defaultChecked id="Daily" name="vignetteType" value="Daily" type="radio"/>
                    <span className="">{t("insVig.period1")}</span>
                  </div>
                 {Daily()}
               </label>
  
               <label onClick={()=>setActiveDate("Week")} className="VignetteEachBlock" htmlFor="Week">
                 <div className="NameLine">
                   <input id="Week" name="vignetteType" value="Week" type="radio"/>
                   <span className="">{t("insVig.period2")}</span>
                 </div>
                 {Week()}
               </label>
  
               <label onClick={()=>setActiveDate("Month")} className="VignetteEachBlock" htmlFor="Month">
                 <div className="NameLine">
                   <input id="Month" name="vignetteType" value="Month" type="radio"/>
                   <span className="">{t("insVig.period3")}</span>
                 </div>
                 {Month()}
               </label>
  
               <label onClick={()=>setActiveDate("3 Month")} className="VignetteEachBlock" htmlFor="Month3">
                 <div className="NameLine">
                   <input id="Month3" name="vignetteType" value="Month3" type="radio"/>
                   <span className="">{t("insVig.period4")}</span>
                 </div>
                 {Month3()}
               </label>
  
               <label onClick={()=>setActiveDate("Annual")} className="VignetteEachBlock" htmlFor="Annual">
                 <div className="NameLine">
                   <input id="Annual" name="vignetteType" value="Annual" type="radio"/>
                   <span className="">{t("insVig.period5")}</span>
                 </div>
                 {Year()}
               </label>
             </div>
             
             <p className="miniHeader">{t("insVig.miniHeader5")}</p>
             
             <div className="contactDataBlock G-flex">
               <div onFocus={handleFocus} onBlur={handleBlur} className={`inputNumber G-flex G-align-center ${isFocused ? "active" : ""}`}>
  
                 <PhoneInput
                    onChange={(event)=>setPhoneNumber(event)}
                    onBlur={handleBlur}
                    country={"bg"}
                    placeholder={"Phone number"}
                    onlyCountries={europeanCountries}
                    isValid={(value, country) => {
                      if (value.match(/12345/)) {
                        return 'Invalid value: '+value+', '+country.name;
                      } else if (value.match(/1234/)) {
                        return false;
                      } else {
                        return true;
                      }
                    }}
                 />
                 
               </div>
  
               <input onChange={(event)=>setEmailVal(event.target.value)} className="InputMail" placeholder="@email" type="email"/>
             
             </div>
  


           </div>
           
           <div className="TotalCont G-flex-column">
              <div className="reminder">
                <p className="prg">{t("insVig.prg31")} <span>{t("insVig.prg32")}</span></p>
              </div>
             <div className="InputBlock">
               <input placeholder={t("insVig.promo")} className="Input" type="text"/>
               <span>{t("insVig.apply")}</span>
             </div>
             <div className="orderTextBlock G-flex-column">
                <p className="headPrg">{t("insVig.order")}:</p>
               <div className="descriptionLine G-justify-between G-align-center">
                 <span>{t("insVig.vehType1")}</span>
                 <span className="endText">{activeType === "car" ? `${t("insVig.type1")}` : activeType === "truck" ? `${t("insVig.type2")}` : activeType === "bus" ? `${t("insVig.type3")}` : "."}</span>
               </div>
               <div className="descriptionLine G-justify-between G-align-center">
                 <span>{t("insVig.vehType3")}</span>
                 <span className="endText">{activeDate === "Daily" ? `${t("insVig.period1")}` :
                    activeDate === "Week" ? `${t("insVig.period2")}` :
                 activeDate === "Month" ? `${t("insVig.period3")}` :
                 activeDate === "3 Month" ? `${t("insVig.period4")}` :
                 activeDate === "Annual" ? `${t("insVig.period5")}` : ""}</span>
               </div>
               
               <div className="totalPrice G-justify-between G-align-center">
                 <span>{t("insVig.total")}:</span>
                 <span>6€</span>
               </div>
             </div>
             <div className="reminder tabletR">
               <p className="prg">{t("insVig.prg31")} <span>{t("insVig.prg32")}</span></p>
             </div>
             
             <button className="CheckoutBtn">{t("insVig.checkoutBtn")}</button>
             
             
             
             
           </div>
           
           
         </div>
  
         <div className="PaymentMethodCont G-flex-column">
           <div style={{display: `${paymentBlock ? "none" : "flex"}`}} className="loadingCont G-flex G-justify-center">
             <img className="loadingIcon" src={ImgSvg.loadingIcon} alt=""/>
           </div>
    
           <div style={{display: `${paymentBlock ? "flex" : "none"}`}} className="PaymentBlock G-flex-column">
             <p className="miniHeader">{t("insVig.miniHeader6")}</p>
             <div className="onlineInputBlock G-align-center">
               <input type="radio" defaultChecked/>
               <span className="onlineText">Online</span>
             </div>
      
             <div className="CardBlock G-align-center">
               <div className="Card G-justify-between">
                 <div className="inputBlock100">
                   <input
                      type="text"
                      className="inputForCard16Num"
                      value={formattedValue}
                      maxLength={19} // Максимальная длина ввода 19 символов (16 цифр и 3 пробела)
                      placeholder="0000 0000 0000 0000"
                      onChange={formatBankAccount}
                      inputMode="numeric" // Указываем, что ожидается ввод чисел
                   />
                 </div>
                 <div className="DateCVCBlock G-justify-between">
                   <div className="inputBlock48">
                     <input
                        type="password"
                        value={cvcValue}
                        maxLength={3}
                        pattern="\d{3}"
                        placeholder="000"
                        onChange={handleInputChange}
                        inputMode="numeric"
                     />
                   </div>
            
                   <div className="inputBlock48">
                     <input
                        type="text"
                        value={expiryValue}
                        maxLength={5}
                        placeholder="MM/YY"
                        onChange={handleInputChange2}
                        
                     />
                   </div>
                 </div>
        
        
               </div>
        
               <div className="paymentInfoBlock">
                 <div className="prgBlock G-flex">
                   <img src={ImgSvg.miniShield} alt=""/>
                   <p className="prg">{t("insVig.paymentPrg")}</p>
                 </div>
                 <div className="paymentTypes G-flex">
                   <img src={ImgSvg.visa} alt=""/>
                   <img src={ImgSvg.master} alt=""/>
                   <img src={ImgSvg.applePay} alt=""/>
                 </div>
               </div>
      
             </div>
      
             <div className="saveCardBlock G-align-center">
               <input id="saveCard" type="checkbox" defaultChecked/>
               <label htmlFor="saveCard">{t("insVig.saveCard")}</label>
      
             </div>
    
           </div>
  
         </div>
  
         <div className="TotalCont totalContTablet G-flex-column">
           <div className="reminder">
             <p className="prg">{t("insVig.prg31")} <span>{t("insVig.prg32")}</span></p>
           </div>
           <div className="InputBlock">
             <input placeholder={t("insVig.promo")} className="Input" type="text"/>
             <span>{t("insVig.apply")}</span>
           </div>
           <div className="orderTextBlock G-flex-column">
             <p className="headPrg">{t("insVig.order")}:</p>
             <div className="descriptionLine G-justify-between G-align-center">
               <span>{t("insVig.vehType1")}</span>
               <span className="endText">{activeType === "car" ? `${t("insVig.type1")}` : activeType === "truck" ? `${t("insVig.type2")}` : activeType === "bus" ? `${t("insVig.type3")}` : "."}</span>
             </div>
             <div className="descriptionLine G-justify-between G-align-center">
               <span>{t("insVig.vehType3")}</span>
               <span className="endText">{activeDate === "Daily" ? `${t("insVig.period1")}` :
                  activeDate === "Week" ? `${t("insVig.period2")}` :
                     activeDate === "Month" ? `${t("insVig.period3")}` :
                        activeDate === "3 Month" ? `${t("insVig.period4")}` :
                           activeDate === "Annual" ? `${t("insVig.period5")}` : ""}</span>
             </div>
      
             <div className="totalPrice G-justify-between G-align-center">
               <span>{t("insVig.total")}:</span>
               <span>6€</span>
             </div>
           </div>
           <div className="reminder tabletR">
             <p className="prg">{t("insVig.prg31")} <span>{t("insVig.prg32")}</span></p>
           </div>
    
           <button className="CheckoutBtn">{t("insVig.checkoutBtn")}</button>
  
  
  
  
         </div>





       </div>
       
       
       
     </div>
  )
}

export default Vignette