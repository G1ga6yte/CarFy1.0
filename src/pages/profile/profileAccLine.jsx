import React, {useState} from "react";
import {ImgSvg} from "./imgSvg/ImgSvg";
import {Link} from "react-router-dom";

function ProfileAccLine() {
  const [accountStatus, setAccountStatus] = useState("premium+"); // premium+ , premium , basic
  const [rangeVal, setRangeVal] = useState(30)
  const referralLink = "https://carfy.com/ref32749823hg239872"
  
  const [copied, setCopied] = useState(false)
  const copyToClipboard = () => {
    setCopied(true)
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = referralLink;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    setTimeout(()=>{
      setCopied(false)
    }, 3000)
  };
  
  return (
     <div className="ProfileAccLine">
       <div className="accountInfoBlock">
         <div className="AccountBlock G-align-center">
           <img className="userImg" src={ImgSvg.userImg} alt=""/>
           <div className="userText">
             <p className="userName">Hi, Kris!</p>
             <p className="userMail">kris@gmail.com</p>
           </div>
           <Link to="/profile/settings" className="settingsLogo" >
             <img src={ImgSvg.settingsIcon} alt=""/>
           </Link>
         </div>
         <div className="accountLevel">
           <p className="prg20">Account level</p>
           <div style={{display: `${accountStatus === "premium" ? "flex" : "none"}`}}
                className="statusBlock G-align-center">
             <img className="statusIcon" src={ImgSvg.statusCrown} alt=""/>
             <p className="prgBold">Premium</p>
           </div>
           <div style={{display: `${accountStatus === "premium+" ? "flex" : "none"}`}}
                className="statusBlock G-align-center">
             <img className="statusIcon" src={ImgSvg.statusRocket} alt=""/>
             <p className="prgBold">Premium+</p>
           </div>
           <div style={{display: `${accountStatus === "basic" ? "flex" : "none"}`}}
                className="statusBlock G-align-center G-justify-between">
             <p className="prgBold">Basic</p>
             <p className="prgUpgrade G-align-center">Upgrade
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path
                    d="M12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071C4.68342 13.0976 5.31658 13.0976 5.70711 12.7071L11 7.41421L11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19L13 7.41421L18.2929 12.7071C18.6834 13.0976 19.3166 13.0976 19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7071 4.29289Z"/>
               </svg>
             </p>
           </div>
         </div>
         <div className="CarCont">
           <p className="prg20">Car</p>
           <div className="CarBlock">
             <div className="carInfoLine G-align-center">
               <img src={ImgSvg.carLogo} alt=""/>
               <p className="carName">Citroen C5</p>
               <p className="carFavorite">Autofavorīts</p>
             </div>
             <div className="carDataLine G-align-center G-justify-between">
               <p className="desc">Scheduled</p>
               <p className="desc">23 March, 11:00</p>
             </div>
             <div className="progressBlock G-align-center G-justify-between">
               <div className="progressLine active"></div>
               <div className="progressLine"></div>
               <div className="progressLine"></div>
               <div className="progressLine"></div>
             </div>
           </div>
         </div>
         <div className="requestBlock">
          <p className="prg20">Car repair in a couple of clicks</p>
           <button className="requestBtn">+ New request</button>
         </div>
       </div>
       <div className="locationBlock">
        <p className="prg16">Location</p>
         <input placeholder="Start typing your city" type="text" className="inputCity"/>
         <div className="distancePrg G-align-center G-justify-between">
            <p className="prg16">Max distance to the service</p>
            <span className="distance">{rangeVal}km</span>
         </div>
         <div className="rangeBlock">
           <div style={{width: `${(96/100)*rangeVal}%`}} className="line"></div>
           <input className="inputRange" defaultValue={30} min={1} max={100} onChange={(event)=>setRangeVal(event.target.value)} type="range"/>
         </div>
       </div>
       <div className="referralBlock">
          <p className="referralHeader">Invite your friends and get 5€ for each</p>
          <p className="earnedMoney">Total referrals fee:<span>0€</span></p>
         <div className="linkBlock G-align-center G-justify-between">
           <p className="link">{referralLink}</p>
           <button onClick={copyToClipboard} className="copyBtn">Copy</button>
           <span style={{display: `${copied ? "block" : "none"}`}} className="copied">Copied !</span>
         
         </div>
       
       </div>
       <div className="statisticsBlock">
         <p className="miniHeader">Statistics</p>
         <p className="desc1">Total requests</p>
         <p className="num">20</p>
         <p className="desc1">Canceled requests</p>
         <p className="num">2</p>
         <p className="desc1">Invited friends</p>
         <p className="num">1</p>

       </div>
     </div>
  );
}

export default ProfileAccLine;