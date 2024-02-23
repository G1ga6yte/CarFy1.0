import React, {useState} from "react";
import {Images} from "./images/images";
import {useCartContext} from "../../../../CartContext";
import {useNavigate} from "react-router-dom";
import {ImgSvg} from "../../../vignette/img-svg/img-svg";

function ConfirmationGlobalBlock() {
  const {confirmationDialog, setConfirmationDialog} = useCartContext();
  const navigate = useNavigate();
  
  const [formattedValue, setFormattedValue] = useState("");
  
  const formatBankAccount = (e) => {
    // Удаляем все нецифровые символы из введенного значения
    const input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    const formattedInput = input.replace(/(\d{4})/g, "$1 ").trim(); // Add space every 4 digits
    
    // Обновляем значение в состоянии
    setFormattedValue(formattedInput);
  };
  
  const [cvcValue, setCvcValue] = useState("");
  
  const handleInputChange = (event) => {
    // Удаляем все символы, кроме цифр
    const cleanedValue = event.target.value.replace(/[^\d]/g, "");
    
    // Ограничиваем длину ввода 3 символами
    const limitedValue = cleanedValue.slice(0, 3);
    
    // Обновляем значение в состоянии
    setCvcValue(limitedValue);
  };
  
  const [expiryValue, setExpiryValue] = useState("");
  
  const handleInputChange2 = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    
    // Format expiration date MM/YY
    if (input.length > 2) {
      const month = Math.min(parseInt(input.slice(0, 2), 10), 12); // Ensure month is between 1 and 12
      const year = input.slice(2, 4);
      input = `${String(month).padStart(2, "0")}/${year}`;
    }
    
    setExpiryValue(input);
  };
  
  return (
     <div className="cont G-flex">
       <div className="idCloseBtn G-flex G-align-center">
         <span>#111223</span>
         <img onClick={() => {
           if (window.innerWidth <= 995) {
             navigate(-1);
           } else {
             setConfirmationDialog(false);
           }
         }} src={Images.xClose} alt=""/>
       </div>
       
       <div className="mainCont">
         <p className="header">Request info</p>
         <div className="headerBlock G-flex G-justify-between G-align-center">
           <p className="headerPrg">Customer</p>
           <p className="headerName">Kris Surname</p>
         </div>
         
         <div className="itemInfo G-flex G-justify-between">
           <p className="itemPrg">Car:</p>
           <p className="itemName">Citroen C5, 2005</p>
         </div>
         
         <div className="itemInfo G-flex G-justify-between">
           <p className="itemPrg">City:</p>
           <p className="itemName">Rīga</p>
         </div>
         
         <p className="description">I am writing to request your services for my car. I have been experiencing some
           issues with my vehicle and I believe it requires professional attention.</p>
         
         <div className="linksBlock G-flex G-align-center">
           <p className="link">Exhaust system repair</p>
           <p className="link">Engine diagnostic</p>
           <p className="link">Tow truck required</p>
         </div>
         
         <div className="headerBlock G-flex G-justify-between G-align-center">
           <p className="headerPrg">Service</p>
           <p className="headerName">Autofavorīts</p>
         </div>
         
         <div className="itemInfo G-flex G-justify-between">
           <p className="itemPrg">Location:</p>
           <p className="itemName">Brīvības iela 61, Centra rajons, Rīga, LV-1010</p>
         </div>
         
         <div className="itemInfo G-flex G-justify-between">
           <p className="itemPrg">Scheduled date:</p>
           <p className="itemName">23 March, 11:00</p>
         </div>
         
         <div className="paymentBlock">
           <p className="paymentHeader">Payment method</p>
           
           <div className="radioBlock">
             <div className="radio G-flex G-align-center">
               <input type="radio" id="onlinePay" name="paymentMethod" value="onlinePay" checked/>
               <label htmlFor="onlinePay">Online
                 <span>By bank card</span>
               </label>
             </div>
             
             <div className="radio G-flex G-align-center">
               <input type="radio" id="cashPay" name="paymentMethod" value="cashPay"/>
               <label htmlFor="cashPay">Cash
                 <span>On receipt</span>
               </label>
             </div>
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
                      placeholder="ММ/ГГ"
                      onChange={handleInputChange2}
                   
                   />
                 </div>
               </div>
             
             
             </div>
             
             <div className="paymentInfoBlock">
               <div className="prgBlock G-flex">
                 <img src={ImgSvg.miniShield} alt=""/>
                 <p className="prg">Payment is protected. Card data is transmitted only in encrypted form via the SSL
                   protocol, protected and processed according to the PCI DSS security standard.</p>
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
             <label htmlFor="saveCard">Save card</label>
           
           </div>
         
         
         </div>
       
       </div>
       
       <div className="promoCont">
         <div className="promoBlock">
           <p className="miniHeader">Apply promo code</p>
           <div className="inputBlock">
             <input type="text" placeholder="Promocode"/>
             <button className="ApplyBtn">Apply</button>
           </div>
         </div>
         <div className="totalPriceBlock">
           <div className="itemBlock G-justify-between G-flex G-align-center">
             <p className="itemName">Scheduled date</p>
             <p className="itemValue">23 March, 11:00</p>
           </div>
           
           <div className="itemBlock G-justify-between G-flex G-align-center">
             <p className="itemName">Cost of work</p>
             <p className="itemValue">100€</p>
           </div>
           
           <div className="totalPrice G-flex G-align-center G-justify-between">
             <p className="totalName">Total amount</p>
             <p className="totalValue">100€</p>
           </div>
         
         </div>
         
         <button className="enrollBtn">Enrollment by 23 March, 11:00</button>
         
         <p className="privacyTextPrg">By clicking the "Enroll" button, I agree to agree with <a href="/">Terms of order and delivery</a>, as well as to the processing of personal data in accordance with the updated <a
            href="/">Personal Data Processing Policy</a></p>
       </div>
     </div>
  );
}

export default ConfirmationGlobalBlock;