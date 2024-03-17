import React, {useState} from "react";
import {ImgSvg} from "../../imgSvg/ImgSvg";
import {useTranslation} from "react-i18next";

function Subscription (){
  const {t, i18n} = useTranslation()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('visaCard');
  
  function handleChangePaymentMethod(event) {
    setSelectedPaymentMethod(event.target.value);
  }
  
  
  return(
     <div className="settings">
        <div className="headerBlock  G-flex G-align-center G-justify-between">
          <p className="miniHeader">{t("settings.header4")}</p>
          <span className="saved">{t("settings.saved")}</span>
        </div>
       
       <div className="planCont G-flex G-justify-between">
         <div className="planBlock">
           <span className="miniSpan">{t("settings.plan")}</span>
           <div className="miniPrg G-flex G-align-center">
             <img src={ImgSvg.statusRocket} alt=""/>
             Premium+
           </div>
           
           <p className="advantage G-flex G-align-center"><img src={ImgSvg.greenCheck} alt=""/>{t("settings.advantage")}</p>
           <p className="advantage G-flex G-align-center"><img src={ImgSvg.greenCheck} alt=""/>{t("settings.advantage")}</p>
           <p className="advantage G-flex G-align-center"><img src={ImgSvg.greenCheck} alt=""/>{t("settings.advantage")}</p>
           <p className="advantage G-flex G-align-center"><img src={ImgSvg.greenCheck} alt=""/>{t("settings.advantage")}</p>
           <p className="advantage G-flex G-align-center"><img src={ImgSvg.greenCheck} alt=""/>{t("settings.advantage")}</p>

         </div>
 
        <div className="paymentBlock G-flex G-align-center">
            <div className="paymentCont">
              <span className="miniSpan">{t("settings.payment")}</span>
              <div className="priceMonth G-flex">
                29€
                <span className="priceMonthSpan">{t("settings.perMonth")}</span>
              </div>
              <p className="paidUp">{t("settings.paidUpTo")} 21.09.2023</p>
              
            </div>
          
          <div className="changeCont G-flex G-align-center">
            <p className="changePrg">{t("settings.changePlan")}</p>
            <p className="cancelPrg">{t("settings.cancelSub")}</p>
          </div>
        </div>
 
       </div>
       
       <p className="headerBlock subHeader G-flex G-justify-between G-align-center">
         <p className="miniHeader">{t("settings.header5")}</p>
         <span className="miniHeaderSpan">{t("settings.newPayment")}</span>
       </p>
       
       
       <div className="paymentMethod">
  
         <div  className={`card G-flex G-align-center G-justify-between ${selectedPaymentMethod === 'visaCard' ? "activePayment" : ""}`}>
           <label htmlFor="visaCard" className="leftSide G-flex G-align-center">
             <input checked={selectedPaymentMethod === 'visaCard'} onChange={handleChangePaymentMethod} name="paymentMethod" value="visaCard" type="radio" id="visaCard"/>
             <img src={ImgSvg.visa} alt=""/>
             <div className="textBlock">
               <p className="cardName">Card Name</p>
               <p className="cardPrg">Debit cart *0909</p>
             </div>
           </label>
  
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
             <path d="M16.0007 17.3346C16.737 17.3346 17.334 16.7377 17.334 16.0013C17.334 15.2649 16.737 14.668 16.0007 14.668C15.2643 14.668 14.6673 15.2649 14.6673 16.0013C14.6673 16.7377 15.2643 17.3346 16.0007 17.3346Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M25.334 17.3346C26.0704 17.3346 26.6673 16.7377 26.6673 16.0013C26.6673 15.2649 26.0704 14.668 25.334 14.668C24.5976 14.668 24.0006 15.2649 24.0006 16.0013C24.0006 16.7377 24.5976 17.3346 25.334 17.3346Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M6.66732 17.3346C7.4037 17.3346 8.00065 16.7377 8.00065 16.0013C8.00065 15.2649 7.4037 14.668 6.66732 14.668C5.93094 14.668 5.33398 15.2649 5.33398 16.0013C5.33398 16.7377 5.93094 17.3346 6.66732 17.3346Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </div>
  
         <div className={`card G-flex G-align-center G-justify-between ${selectedPaymentMethod === 'masterCard' ? "activePayment" : ""}`}>
           <label htmlFor="masterCard" className="leftSide G-flex G-align-center">
             <input checked={selectedPaymentMethod === 'masterCard'} onChange={handleChangePaymentMethod} name="paymentMethod" value="masterCard" type="radio" id="masterCard"/>
             <img src={ImgSvg.master} alt=""/>
             <div className="textBlock">
               <p className="cardName">Card Name</p>
               <p className="cardPrg">Debit cart *0909</p>
             </div>
           </label>
    
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
             <path d="M16.0007 17.3346C16.737 17.3346 17.334 16.7377 17.334 16.0013C17.334 15.2649 16.737 14.668 16.0007 14.668C15.2643 14.668 14.6673 15.2649 14.6673 16.0013C14.6673 16.7377 15.2643 17.3346 16.0007 17.3346Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M25.334 17.3346C26.0704 17.3346 26.6673 16.7377 26.6673 16.0013C26.6673 15.2649 26.0704 14.668 25.334 14.668C24.5976 14.668 24.0006 15.2649 24.0006 16.0013C24.0006 16.7377 24.5976 17.3346 25.334 17.3346Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M6.66732 17.3346C7.4037 17.3346 8.00065 16.7377 8.00065 16.0013C8.00065 15.2649 7.4037 14.668 6.66732 14.668C5.93094 14.668 5.33398 15.2649 5.33398 16.0013C5.33398 16.7377 5.93094 17.3346 6.66732 17.3346Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </div>
         
         
       </div>
  
  
       <button className="saveBtn">{t("settings.saveBtn")}</button>
       
     </div>
  )
}

export default Subscription