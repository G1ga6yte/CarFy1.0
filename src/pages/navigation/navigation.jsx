import React, {useState} from "react";
import "./navigation.scss";
import {Link} from "react-router-dom";
import {SvgData} from "../../source/svgs/svgsData";
import {useCartContext} from "../../CartContext";
import {ImgData} from "../../source/images/imgData";
import EachNotifications from "./eachNote/eachNotifications";

function Navigation() {
  const {Call, handleDialog} = useCartContext();
  
  const [notBar, setNotBar] = useState(true);
  const [products, setProducts] = useState(false); //false
  const [notes, setNotes] = useState(false); // false
  const [menuBar, setMenuBar] = useState(false);
  
  function handleNotBar() {
    setNotBar(false);
  }
  
  function handleNotesBlock() {
    setNotes(prevState => !prevState);
  }
  
  
  return (
     <div className="Navigation">
       <div style={{height: `${notBar ? "auto" : "0"}`}} className="notification">
         <p className="text">🧨 35% off on your first order!</p>
         
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
           <Link class="LinkLogo" to="/"><img src={SvgData.Logo} alt=""/></Link>
         </div>
         
         <div className="pageLinks G-justify-between G-align-center">
           <Link class={`LinkToPage ${Call("/") ? "activeLink" : " "} ${Call("/home") ? "activeLink" : " "}`}
                 to="/home">Home</Link>
           <div onClick={() => setProducts(prev => !prev)} className="ProductsLink G-align-center">
             <span>Products</span>
             <img style={{transform: `${products ? "rotate(180deg)" : "rotate(0deg)"}`}} src={SvgData.arrowDown}
                  alt=""/>
           </div>
           <Link class={`LinkToPage ${Call("/shops") ? "activeLink" : " "}`} to="/shops">Shops</Link>
           <Link class={`LinkToPage ${Call("/Blog") ? "activeLink" : " "}`} to="/blog">Blog</Link>
           <Link class={`LinkToPage ${Call("/For business") ? "activeLink" : " "}`} to="/forBusiness">For
             business</Link>
         </div>
         
         <div style={{display: `${menuBar ? "none" : "flex"}`}} className="loginCartBlock G-align-center">
           <Link class="LinkToLogeIn G-align-center" to="/logIn"><img src={SvgData.userLogo} alt=""/>Log in</Link>
           <Link class="LinkToService G-button" to="/findService">Find service</Link>
           <Link style={{display: "none"}} class="LinkToMessages" to="/messages"><img src={SvgData.message} alt=""/>
             <div className="newMessage"></div>
           </Link>
           <div style={{display: "none"}} onClick={handleNotesBlock} className="LinkToNotifications"><img
              src={SvgData.notification} alt=""/>
             <div className="newMessage"></div>
           </div>
           <Link class="LinkToCart" to="/cart"><img src={SvgData.shopCart} alt=""/>
             <div style={{display: "none"}} className="newMessage"></div>
           </Link>
           <Link style={{display: "none"}} class="LinkToProfile" to="/profile"><img src={SvgData.personPic}
                                                                                    alt=""/></Link>
           <Link class="LinkToService G-button" to="/findService">Find service</Link>

         </div>
       
       </div>
       
       <div style={{display: `${menuBar ? "flex" : "none"}`}} className="menuBar G-flex-column">
         <div className="loginTextBlock G-flex-column">
           <p className="header">Login to your profile</p>
           <p className="desc">You will receive bonuses for purchases</p>
           <Link class="LinkToLogeIn G-button" to="logIn">Login | Registration</Link>
         </div>
         
         <div className="pageLinks G-flex-column">
           <Link onClick={()=> setMenuBar(false)} class={`LinkToPage ${Call("/") ? "activeLink" : " "} ${Call("/home") ? "activeLink" : " "}`}
                 to="/home">Home</Link>
           <div onClick={()=>setProducts(prev => !prev)} className="ProductsLink G-justify-between G-align-center">
             <span>Products</span>
             <img style={{transform: `${products ? "rotate(180deg)" : "rotate(0deg)"}`}} src={SvgData.arrowDown}
                  alt=""/>
           </div>
           <div style={{display: `${products ? "flex" : "none"}`}} className="productsLinks G-flex-column">
             <Link class={`${Call("/carService") ? "activeLink" : " "}`} onClick={()=> setMenuBar(false)} to="/carService">Car service</Link>
             <Link class={`${Call("/insurance") ? "activeLink" : " "}`} onClick={()=> setMenuBar(false)} to="/insurance">Insurance</Link>
             <Link class={`${Call("/vignette") ? "activeLink" : " "}`} onClick={()=> setMenuBar(false)} to="/vignette">Vignette</Link>
           </div>
           <Link onClick={()=> setMenuBar(false)} class={`LinkToPage ${Call("/shops") ? "activeLink" : " "}`} to="/shops">Shops</Link>
           <Link onClick={()=> setMenuBar(false)} class={`LinkToPage ${Call("/blog") ? "activeLink" : " "}`} to="/blog">Blog</Link>
           <Link onClick={()=> setMenuBar(false)} class={`LinkToPage ${Call("/forBusiness") ? "activeLink" : " "}`} to="/forBusiness">For
             business</Link>
         </div>
       
       </div>
       
       <div style={{display: `${notes ? "flex" : "none"}`}} className="notificationsBlock G-flex-column">
         <div className="buttons-block G-justify-between G-align-center">
           <div className="notesBlock G-align-center">
             <img src={SvgData.notification} alt=""/>
             <span className="spanNotification">Notification</span>
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
         
         <Link class="ProductLink" to="/carService">
           <span className="hProduct">Car service</span>
           <p className="prgProduct">
             Find a car service, with good reviews. Choose a reliable service provider to ensure your vehicle's safety
             and longevity.
           </p>
         </Link>
         
         <Link class="ProductLink" to="/carService">
           <span className="hProduct">Insurance</span>
           <p className="prgProduct">
             Car insurance provides financial protection in case of a car accident.
           </p>
         </Link>
         
         <Link class="ProductLink" to="/carService">
           <span className="hProduct">Vignette</span>
           <p className="prgProduct">
             You can pay tolls online with a credit or debit card for a quicker and more convenient commute.
           </p>
         </Link>
         
         <Link class="salesBlock" to="/Sales30">
           <p>Sales up to 30%</p>
           <span>for car parts</span>
           <img className="salesImg1" src={ImgData.productCarDamper} alt=""/>
           <img className="salesImg2" src={ImgData.productNutBolt} alt=""/>
           <img className="salesImg3" src={ImgData.productPetrolCan} alt=""/>
         </Link>
       </div>
     
     </div>
  );
}

export default Navigation;