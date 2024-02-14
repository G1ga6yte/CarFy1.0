import React, {useState} from "react";
import "./navigation.scss";
import {Link} from "react-router-dom";
import {SvgData} from "../../source/svgs/svgsData";
import {useCartContext} from "../../CartContext";
import {ImgData} from "../../source/images/imgData";
import EachNotifications from "./eachNote/eachNotifications";
import {useTranslation} from "react-i18next";

const locales = {
  en: {title: "English"},
  bg: {title: "Bulgarian"},
};

function Navigation() {
  const {t, i18n} = useTranslation();
  const {Call, handleDialog, authorization} = useCartContext();
  const [notBar, setNotBar] = useState(true);
  const [products, setProducts] = useState(false); //false
  const [notes, setNotes] = useState(false); // false
  const [menuBar, setMenuBar] = useState(false);
  const [lngMenu, setLngMenu] = useState(false);
  
  function handleNotBar() {
    setNotBar(false);
  }
  
  function handleNotesBlock() {
    setNotes(prevState => !prevState);
  }
  
  
  return (
     <div className="Navigation">
       <div style={{height: `${notBar ? "auto" : "0"}`}} className="notification">
         <p className="text">🧨 {t('navigator.sms')}</p>
         
         <svg onClick={handleNotBar} className="closeButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none">
           <path
              d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"
              fill="white"/>
         </svg>
       </div>
       
       <div className="NavCont G-container G-justify-between G-align-center">
         
         <div className="menuBarLogo G-align-center">
           <img style={{display: `${menuBar ? "none" : "block"}`}} onClick={() => setMenuBar(true)} className="menuLogo"
                src={SvgData.menuBar} alt=""/>
           <img style={{display: `${menuBar ? "block" : "none"}`}} onClick={() => setMenuBar(false)}
                className="menuLogo" src={SvgData.closeIconBlue} alt=""/>
           <Link className="LinkLogo" to="/"><img src={SvgData.Logo} alt=""/></Link>
         </div>
         
         <div className="pageLinks G-justify-between G-align-center">
           <Link className={`LinkToPage ${Call("/") ? "activeLink" : " "} ${Call("/home") ? "activeLink" : " "}`}
                 to="/home">{t('navigator.link1')}</Link>
           <div onClick={() => setProducts(prev => !prev)} className="ProductsLink G-align-center">
             <span>{t('navigator.link2')}</span>
             <img style={{transform: `${products ? "rotate(180deg)" : "rotate(0deg)"}`}} src={SvgData.arrowDown}
                  alt=""/>
           </div>
           <Link className={`LinkToPage ${Call("/shops") ? "activeLink" : " "}`} to="/shops">{t('navigator.link3')}</Link>
           <Link className={`LinkToPage ${Call("/blog") ? "activeLink" : " "}`} to="/blog">{t('navigator.link4')}</Link>
           <Link className={`LinkToPage ${Call("/forBusiness") ? "activeLink" : " "}`} to="/forBusiness">{t('navigator.link5')}</Link>
         </div>
         
         <div style={{display: ` ${menuBar ? "none" : "flex"}`}} className="loginCartBlock G-align-center">
           
           <div className="lngBlock">
             <div onClick={() => {
               setLngMenu(prev => !prev);
             }} className="mainLng G-align-center">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g id="globe-02">
                   <path id="Solid" fillRule="evenodd" clipRule="evenodd"
                         d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM14.2743 3.28983C15.2378 4.73806 15.9616 6.32881 16.4208 8H20.0645C18.9192 5.69544 16.8152 3.95142 14.2743 3.28983ZM12 3.5508C13.0397 4.89027 13.828 6.39792 14.3356 8H9.66439C10.172 6.39792 10.9603 4.89027 12 3.5508ZM14.9998 12C14.9848 11.3263 14.9223 10.6581 14.8141 10H9.18588C9.07773 10.6581 9.01525 11.3263 9.00023 12C9.01525 12.6737 9.07773 13.3419 9.18588 14H14.8141C14.9223 13.3419 14.9848 12.6737 14.9998 12ZM14.3356 16H9.66439C10.172 17.6021 10.9603 19.1097 12 20.4492C13.0397 19.1097 13.828 17.6021 14.3356 16ZM7.1624 14C7.06859 13.3472 7.01408 12.6863 7.00022 12.0208C6.99993 12.0069 6.99993 11.9931 7.00022 11.9792C7.01408 11.3137 7.06859 10.6528 7.1624 10H3.22302C3.07706 10.6432 3 11.3126 3 12C3 12.6874 3.07706 13.3568 3.22302 14H7.1624ZM3.93552 16H7.57918C8.03841 17.6712 8.76219 19.2619 9.72571 20.7102C7.18481 20.0486 5.08079 18.3046 3.93552 16ZM16.4208 16H20.0645C18.9192 18.3046 16.8152 20.0486 14.2743 20.7102C15.2378 19.2619 15.9616 17.6712 16.4208 16ZM20.777 14H16.8376C16.9314 13.3472 16.9859 12.6863 16.9998 12.0208C17.0001 12.0069 17.0001 11.9931 16.9998 11.9792C16.9859 11.3137 16.9314 10.6528 16.8376 10H20.777C20.9229 10.6432 21 11.3126 21 12C21 12.6874 20.9229 13.3568 20.777 14ZM9.72571 3.28983C8.76219 4.73806 8.0384 6.32881 7.57918 8H3.93552C5.08079 5.69544 7.18481 3.95142 9.72571 3.28983Z"
                         fill="#266EFE"/>
                 </g>
               </svg>
               {Object.keys(locales).map((el) => {
                 if (i18n.resolvedLanguage === el) {
                   return <span>{el.toUpperCase()}</span>;
                 }
               })}
             </div>
             
             
             <div style={{display: `${lngMenu ? "block" : "none"}`}} className="lngMenu">
               {Object.keys(locales).map((locale) => {
                 return (
                    <button style={{color: `${i18n.resolvedLanguage === locale ? "#266EFE" : ""}`}} type="submit"
                            onClick={() => {
                              i18n.changeLanguage(locale);
                              setLngMenu(false);
                            }} key={locale}>{locales[locale].title}</button>
                 );
               })}
             </div>
           </div>
           
           <Link style={{display: `${authorization ? "none" : "flex"}`}} className="LinkToLogeIn G-align-center"
                 to="/logIn"><img src={SvgData.userLogo} alt=""/>{t('navigator.logIn')}</Link>
           <Link style={{display: `${authorization ? "none" : "block"}`}} className="LinkToService G-button"
                 to="/findService">{t('navigator.findService')}</Link>
           <Link style={{display: `${authorization ? "block" : "none"}`}} className="LinkToMessages" to="/messages"><img
              src={SvgData.message} alt=""/>
             <div className="newMessage"></div>
           </Link>
           <div style={{display: `${authorization ? "block" : "none"}`}} onClick={handleNotesBlock}
                className="LinkToNotifications"><img
              src={SvgData.notification} alt=""/>
             <div className="newMessage"></div>
           </div>
           <Link
              style={{display: `${Call("/shops") || Call("/cart") ? `${authorization ? "block" : "none"}` : "none"}`}}
              className="LinkToCart" to="/cart"><img src={SvgData.shopCart} alt=""/>
             <div style={{display: "none"}} className="newMessage"></div>
           </Link>
           <Link style={{display: `${authorization ? "block" : "none"}`}} className="LinkToProfile" to="/profile"><img
              src={SvgData.personPic}
              alt=""/></Link>
           {/*<Link className="LinkToService G-button" to="/findService">Find service</Link>*/}
         
         </div>
       
       </div>
       
       <div style={{display: `${menuBar ? "flex" : "none"}`}} className="menuBar G-flex-column">
         <div className="loginTextBlock G-flex-column">
           <p className="header">{t('navigator.loginHeader')}</p>
           <p className="desc">{t('navigator.loginDesc')}</p>
           <Link className="LinkToLogeIn G-button" to="logIn">{t('navigator.loginUnder')}</Link>
         </div>
         
         <div className="pageLinks G-flex-column">
           <Link onClick={() => setMenuBar(false)}
                 className={`LinkToPage ${Call("/") ? "activeLink" : " "} ${Call("/home") ? "activeLink" : " "}`}
                 to="/home">{t('navigator.link1')}</Link>
           <div onClick={() => setProducts(prev => !prev)} className="ProductsLink G-justify-between G-align-center">
             <span>{t('navigator.link2')}</span>
             <img style={{transform: `${products ? "rotate(180deg)" : "rotate(0deg)"}`}} src={SvgData.arrowDown}
                  alt=""/>
           </div>
           <div style={{display: `${products ? "flex" : "none"}`}} className="productsLinks G-flex-column">
             <Link className={`${Call("/findService") ? "activeLink" : " "}`} onClick={() => setMenuBar(false)}
                   to="/findService">{t('navigator.product1Header')}</Link>
             <Link className={`${Call("/insurance/step1") ? "activeLink" : " "}`} onClick={() => setMenuBar(false)}
                   to="/insurance/step1">{t('navigator.product2Header')}</Link>
             <Link className={`${Call("/vignette") ? "activeLink" : " "}`} onClick={() => setMenuBar(false)}
                   to="/vignette">{t('navigator.product3Header')}</Link>
           </div>
           <Link onClick={() => setMenuBar(false)} className={`LinkToPage ${Call("/shops") ? "activeLink" : " "}`}
                 to="/shops">{t('navigator.link3')}</Link>
           <Link onClick={() => setMenuBar(false)} className={`LinkToPage ${Call("/blog") ? "activeLink" : " "}`}
                 to="/blog">{t('navigator.link4')}</Link>
           <Link onClick={() => setMenuBar(false)} className={`LinkToPage ${Call("/forBusiness") ? "activeLink" : " "}`}
                 to="/forBusiness">{t('navigator.link5')}</Link>
         </div>
       
       </div>
       
       <div style={{display: `${notes ? "flex" : "none"}`}} className="notificationsBlock G-flex-column">
         <div className="buttons-block G-justify-between G-align-center">
           <div className="notesBlock G-align-center">
             <img src={SvgData.notification} alt=""/>
             <span className="spanNotification">{t('navigator.notes')}</span>
             <span className="num">3</span>
           </div>
           <img className="closeButton" onClick={() => setNotes(false)} src={SvgData.closeIcon} alt=""/>
         </div>
         <EachNotifications/>
         <EachNotifications/>
       
       
       </div>
       
       <div onClick={() => {
         setProducts(false);
         setNotes(false);
       }} style={{display: `${products ? "flex" : "none"}`}} className="ProductsBlock G-container">
         
         <Link className="ProductLink" to="/findService">
           <span className="hProduct">{t('navigator.product1Header')}</span>
           <p className="prgProduct">
             {t('navigator.product1Prg')}
           </p>
         </Link>
         
         <Link className="ProductLink" to="/insurance/step1">
           <span className="hProduct">{t('navigator.product2Header')}</span>
           <p className="prgProduct">
             {t('navigator.product2Prg')}
           </p>
         </Link>
         
         <Link className="ProductLink" to="/vignette">
           <span className="hProduct">{t('navigator.product3Header')}</span>
           <p className="prgProduct">
             {t('navigator.product3Prg')}
           </p>
         </Link>
         
         <Link className="salesBlock" to="/Sales30">
           <p>{t('navigator.sales1')}</p>
           <span>{t('navigator.sales2')}</span>
           <img className="salesImg1" src={ImgData.productCarDamper} alt=""/>
           <img className="salesImg2" src={ImgData.productNutBolt} alt=""/>
           <img className="salesImg3" src={ImgData.productPetrolCan} alt=""/>
         </Link>
       </div>
     
     </div>
  );
}

export default Navigation;