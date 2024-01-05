import React from "react";
import "./footer.scss"
import {Link} from "react-router-dom";
import {ImgData} from "../../source/images/imgData";
import {SvgData} from "../../source/svgs/svgsData";
import {HomeSvg} from "../home/svgs/homeSvg";

function Footer (){
  return(
     <div className="Footer G-container G-justify-between">
     
       <div className="LinksCont G-justify-between">
         <div className="globalLinks G-flex-column">
           <Link className="LinkToHome" to="/home"><img className="logo" src={SvgData.Logo} alt=""/></Link>
           <p className="logoUnderText">CarFy product of Fy Technology OU</p>
  
           <div className="MobileAppLinks G-flex G-justify-between G-align-center">
             <a className="G-align-center G-justify-center" href="">
               <img className="logo" src={HomeSvg.googleLogo} alt=""/>
               <img src={HomeSvg.googleText} alt=""/>
             </a>
             <a className="G-align-center G-justify-center" href="">
               <img className="logo" src={HomeSvg.appleLogo} alt=""/>
               <img src={HomeSvg.appleText} alt=""/>
             </a>
           </div>
           <div className="MobileLinksBlock G-flex">
             <div className="LinksToPage G-flex-column">
               <Link className="headerLink" to="/home">Home</Link>
               <Link className="pageLink" to="/blog">Blog</Link>
               <Link className="pageLink" to="/products">Products</Link>
               <Link className="pageLink" to="/shops">Shops</Link>
               <Link className="pageLink" to="/service">Service</Link>
               <Link className="pageLink" to="/forBusiness">For business</Link>
             </div>
  
             <div className="LinksToPage G-flex-column">
               <Link className="headerLink" to="/home">Help</Link>
               <Link className="pageLink" to="/">Customer Support</Link>
               <Link className="pageLink" to="/">App Details</Link>
               <Link className="pageLink" to="/">Terms & Conditions</Link>
               <Link className="pageLink" to="/">Privacy Policy</Link>
             </div>
           </div>
           
           <div className="webSites G-align-center">
             <a href=""><img src={SvgData.xLogo} alt=""/></a>
             <a href=""><img src={SvgData.instagram} alt=""/></a>
             <a href=""><img src={SvgData.facebook} alt=""/></a>
             <a href=""><img src={SvgData.youtube} alt=""/></a>
           </div>
  
           <img className="cardTypes" src={ImgData.cardTypes} alt=""/>
         </div>
         
         <div className="LinksToPage G-flex-column">
            <Link className="headerLink" to="/home">Home</Link>
           <Link className="pageLink" to="/blog">Blog</Link>
           <Link className="pageLink" to="/products">Products</Link>
           <Link className="pageLink" to="/shops">Shops</Link>
           <Link className="pageLink" to="/service">Service</Link>
           <Link className="pageLink" to="/forBusiness">For business</Link>
         </div>
  
         <div className="LinksToPage G-flex-column">
           <Link className="headerLink" to="/home">Help</Link>
           <Link className="pageLink" to="/">Customer Support</Link>
           <Link className="pageLink" to="/">App Details</Link>
           <Link className="pageLink" to="/">Terms & Conditions</Link>
           <Link className="pageLink" to="/">Privacy Policy</Link>
         </div>
         
       </div>
     
       <div className="AppsCont G-flex-column">
          <p className="header">Download App</p>
         <a className="G-align-center G-justify-center" href="">
           <img className="logo" src={HomeSvg.googleLogo} alt=""/>
           <img src={HomeSvg.googleText} alt=""/>
         </a>
         <a className="G-align-center G-justify-center" href="">
           <img className="logo" src={HomeSvg.appleLogo} alt=""/>
           <img src={HomeSvg.appleText} alt=""/>
         </a>
       </div>
     
     
       <p className="rightsText">© Copyright 2023, All Rights Reserved by Fy Technology OU</p>
     </div>
  )
}

export default Footer