import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Images} from "./images/images";
import "./checkout.scss";
import {ImgSvg} from "../../vignette/img-svg/img-svg";

function Checkout() {
  const {t, i18n} = useTranslation();
  const navigate = useNavigate();
  
  const [deliveryType, setDeliveryType] = useState("courier"); // issue
  const [paymentMethod, setPaymentMethod] = useState("Cash"); // Online
  const handleChangeDelivery = (e) => {
    setDeliveryType(e.target.value);
  };
  const handleChangePayment = (e) => {
    setPaymentMethod(e.target.value);
  };
  
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
  
  const [activeBtn, setActiveBtn] = useState(2);
  let currentDate1 = new Date();
  currentDate1.setDate(currentDate1.getDate() + 2);
  let currentDate2 = new Date();
  currentDate2.setDate(currentDate2.getDate() + 3);
  let currentDate3 = new Date();
  currentDate3.setDate(currentDate3.getDate() + 4);
  let currentDate4 = new Date();
  currentDate4.setDate(currentDate4.getDate() + 5);
  let currentDate5 = new Date();
  currentDate5.setDate(currentDate5.getDate() + 6);
  let currentDate6 = new Date();
  currentDate6.setDate(currentDate6.getDate() + 7);
  
  
  const [selectBlock, setSelectBlock] = useState(false);
  const [activeSelected, setActiveSelected] = useState(`${t("checkout.from")} 10:00 ${t("checkout.to")} 14:00 `);
  
  
  ////////////////////Payment ////////////////////////////////
  const [formattedValue, setFormattedValue] = useState("");
  
  const formatBankAccount = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    const formattedInput = input.replace(/(\d{4})/g, "$1 ").trim();
    
    setFormattedValue(formattedInput);
  };
  
  const [cvcValue, setCvcValue] = useState("");
  
  const handleInputChange = (event) => {
    const cleanedValue = event.target.value.replace(/[^\d]/g, "");
    const limitedValue = cleanedValue.slice(0, 3);
    setCvcValue(limitedValue);
  };
  
  const [expiryValue, setExpiryValue] = useState("");
  
  const handleInputChange2 = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    
    if (input.length > 2) {
      const month = Math.min(parseInt(input.slice(0, 2), 10), 12); // Ensure month is between 1 and 12
      const year = input.slice(2, 4);
      input = `${String(month).padStart(2, "0")}/${year}`;
    }
    
    setExpiryValue(input);
  };
  return (
     <div className="Checkout">
       <button onClick={() => {
         navigate(-1);
       }} className="backBtn G-flex G-align-center">
         <img src={Images.chevronLeft} alt=""/>
         {t("checkout.back")}
       </button>
       
       <div className="MainCont">
         <div className="headerBlock">{t("cart.prg1")}</div>
         
         <div className="deliveryBlock G-flex G-align-center">
           <p className="miniHeader">{t("checkout.miniHeader1")}</p>
           
           <label htmlFor="courier"
                  className={`labelDelivery G-flex ${deliveryType === "courier" ? "activeDelivery" : ""}`}>
             <input id="courier" type="radio" value="courier" checked={deliveryType === "courier"}
                    onChange={handleChangeDelivery}/>
             <div className="textBlock">
               <p className="name">{t("checkout.prg1")}</p>
               <p className="desc">{t("checkout.from")}August 1, <span>{t("checkout.free")}</span></p>
             </div>
           </label>
           
           <label htmlFor="issue"
                  className={`labelDelivery G-flex ${deliveryType === "issue" ? "activeDelivery" : ""}`}>
             <input id="issue" type="radio" value="issue" checked={deliveryType === "issue"}
                    onChange={handleChangeDelivery}/>
             <div className="textBlock">
               <p className="name">{t("checkout.prg2")}</p>
               <p className="desc">{t("checkout.from")}August 1, {t("checkout.free")}</p>
             </div>
           </label>
           
           {deliveryType === "courier" &&
              <input type="text" className="searchInput" placeholder={t("checkout.placeholder1")}/>}
           
           {deliveryType === "courier" &&
              <div className="checkBoxBlock">
                <label htmlFor="postamato">
                  <input type="checkbox" id="postamato" className="checkboxInput"/>
                  {t("checkout.checkBox1")}
                </label>
                <label htmlFor="pickupPoints">
                  <input type="checkbox" id="pickupPoints" className="checkboxInput"/>
                  {t("checkout.checkBox2")}
                </label>
              </div>
           }
           
           
           {deliveryType === "courier" &&
              <div className="mapBlock">
                <img src={Images.mapImg} alt=""/>
              </div>
           }
           
           {deliveryType === "issue" &&
              <div className="deliveryAddressBlock G-flex G-justify-between G-align-center">
                <p className="miniHeader">{t("checkout.miniHeader2")}</p>
                <input placeholder={`${t("checkout.placeholder2")}*`} type="text" className="input longInput"/>
                <input placeholder={`${t("checkout.placeholder3")}`} type="text" className="input quarterInput"/>
                <input placeholder={`${t("checkout.placeholder4")}`} type="text" className="input quarterInput"/>
                <input placeholder={`${t("checkout.placeholder5")}`} type="text" className="input quarterInput"/>
                <input placeholder={`${t("checkout.placeholder6")}`} type="text" className="input quarterInput"/>
                <textarea placeholder={`${t("checkout.placeholder7")}`} className="input textarea"
                          name="commentToCourier" cols="30" rows="10"></textarea>
                <label htmlFor="checkboxSave" className="saveCard">
                  <input id="checkboxSave" type="checkbox" className="checkboxSave" defaultChecked={true}/>
                  {t("checkout.saveAddress")}
                </label>
              </div>
           }
         
         </div>
         
         <div className="recipientBlock G-flex G-align-center G-justify-between">
           <p className="miniHeader">{t("checkout.miniHeader3")}</p>
           
           <input type="tel" defaultValue="+3591231212" placeholder={t("checkout.placeholder8")}/>
           <input type="email" placeholder={`${t("checkout.placeholder9")}*`}/>
           <input type="text" placeholder={`${t("checkout.placeholder10")}*`}/>
           <input type="tel" placeholder={`${t("checkout.placeholder11")}`}/>
           <input type="text" placeholder={`${t("checkout.placeholder12")}*`}/>
         
         </div>
         
         <div className="courierDelivery">
           <div className="headerBlockD G-flex G-align-center G-justify-between">
             <p className="miniHeader">{t("checkout.miniHeader4")}</p>
             <p className="price">0€</p>
           </div>
           
           <div className="imagesBlock G-flex">
             <div className="imgBlock" style={{backgroundImage: `url("${Images.img1}")`}}></div>
             <div className="imgBlock" style={{backgroundImage: `url("${Images.img1}")`}}></div>
           </div>
           
           <div className="dateButtons G-flex G-align-center">
             <button onClick={() => {
               setActiveBtn(1);
             }}
                     className={`dateButton ${activeBtn === 1 ? "activeBtn" : ""}`}>{WeekDays[currentDate1.getDay()]}, {Months[currentDate1.getMonth()]} {currentDate1.getDate()}</button>
             <button onClick={() => {
               setActiveBtn(2);
             }}
                     className={`dateButton ${activeBtn === 2 ? "activeBtn" : ""}`}>{WeekDays[currentDate2.getDay()]}, {Months[currentDate2.getMonth()]} {currentDate2.getDate()}</button>
             <button onClick={() => {
               setActiveBtn(3);
             }}
                     className={`dateButton ${activeBtn === 3 ? "activeBtn" : ""}`}>{WeekDays[currentDate3.getDay()]}, {Months[currentDate3.getMonth()]} {currentDate3.getDate()}</button>
             <button onClick={() => {
               setActiveBtn(4);
             }}
                     className={`dateButton ${activeBtn === 4 ? "activeBtn" : ""}`}>{WeekDays[currentDate4.getDay()]}, {Months[currentDate4.getMonth()]} {currentDate4.getDate()}</button>
             <button onClick={() => {
               setActiveBtn(5);
             }}
                     className={`dateButton ${activeBtn === 5 ? "activeBtn" : ""}`}>{WeekDays[currentDate5.getDay()]}, {Months[currentDate5.getMonth()]} {currentDate5.getDate()}</button>
             <button onClick={() => {
               setActiveBtn(6);
             }}
                     className={`dateButton ${activeBtn === 6 ? "activeBtn" : ""}`}>{WeekDays[currentDate6.getDay()]}, {Months[currentDate6.getMonth()]} {currentDate6.getDate()}</button>
           
           </div>
           
           <div onClick={() => {
             setSelectBlock(prev => !prev);
           }} className="selectBlock">
             
             <div style={{borderColor: `${selectBlock ? "#266EFE" : "#AEAEAE"}`}} className="mainBlock">
               <span
                  style={{color: `${activeSelected === `${t("checkout.from")} 10:00 ${t("checkout.to")} 14:00 ` ? "#AEAEAE" : "black"}`}}>{activeSelected}</span>
               <svg className={`${selectBlock ? "activeSvg" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round"/>
               </svg>
             </div>
             
             <div style={{display: `${selectBlock ? "block" : "none"}`}} className="timesBlock">
               <div onClick={() => {
                 setActiveSelected(`${t("checkout.from")} 10:00 ${t("checkout.to")} 14:00`);
               }} className="listItem">{`${t("checkout.from")} 10:00 ${t("checkout.to")} 14:00`}</div>
               <div onClick={() => {
                 setActiveSelected(`${t("checkout.from")} 14:00 ${t("checkout.to")} 18:00`);
               }} className="listItem">{`${t("checkout.from")} 14:00 ${t("checkout.to")} 18:00`}</div>
             </div>
           
           </div>
         
         </div>
         
         <div className="paymentMethod">
           <p className="miniHeader">{t("checkout.miniHeader5")}</p>
           
           <label className="paymentLabel" htmlFor="Online">
             <input checked={paymentMethod === "Online"} onChange={handleChangePayment} value="Online" type="radio"
                    id="Online"/>
             {t("checkout.online")}
             <span>{t("checkout.underText1")}</span>
           </label>
           
           <label className="paymentLabel" htmlFor="Cash">
             <input checked={paymentMethod === "Cash"} onChange={handleChangePayment} value="Cash" type="radio"
                    id="Cash"/>
             {t("checkout.cash")}
             <span>{t("checkout.underText2")}</span>
           </label>
           
           
           <div style={{display: `${paymentMethod === "Online" ? "block" : "none"}`}} className="cardPaymentBlock">
             <div className="PaymentMethodCont G-flex-column">
               <div className="PaymentBlock G-flex-column">
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
           </div>
           
           
           <div className="underPrg">
             {t("cart.prg21")}
             <span>{t("cart.prg22")}</span>
           </div>
         
         </div>
         
         <div className="orderBlock">
           <div className="inputBlock">
             <input type="text" placeholder={t("checkout.placeholder13")}/>
             <button className="applyBtn">{t("checkout.apply")}</button>
           </div>
           
           <p className="miniHeaderS">{t("checkout.order")}:</p>
           
           <div className="orderLine G-flex G-align-center G-justify-between">
             <p className="itemPrg">3 {t("checkout.items")} 15.4 kg</p>
             <p className="itemPrg">2000€</p>
           </div>
  
           <div className="orderLine G-flex G-align-center G-justify-between">
             <p className="itemPrg">{t("checkout.delivery")}</p>
             <p className="itemPrg">0€</p>
           </div>
  
           <div className="orderLine G-flex G-align-center G-justify-between">
             <p className="itemPrg redPrg">{t("checkout.redPrg")}</p>
             <p className="itemPrg redPrg">-950€</p>
           </div>
  
           <p className="miniHeaderS">{t("checkout.total")}:</p>
           <p className="paymentTypePrg">{t("checkout.paymentType1")}</p>

           <button onClick={()=>{
             navigate("/partner/checkout/sent")
           }} className="placeOrderBtn">{t("checkout.btn1")}</button>

           <p className="termsPrg">{t("checkout.termsPrg1")}<span>{t("checkout.termsPrg2")}</span>{t("checkout.termsPrg3")}<span>{t("checkout.termsPrg4")}</span></p>

         </div>
       
       
       </div>
     </div>
  );
}

export default Checkout;