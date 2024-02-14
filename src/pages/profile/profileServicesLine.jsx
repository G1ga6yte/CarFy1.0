import React, {useState} from "react";
import {ImgSvg} from "./imgSvg/ImgSvg";




function  ProfileServicesLine (){
  
  const Arr = new Array(20).fill('')
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
  
  return(
     <div className="ProfileServicesLine">
       
       <div className="servicesBlock G-flex-column">
         <div className="services G-flex G-justify-between">
           <p className="serviceHeader">Services</p>
           <div className="ServiceBlock">
             <div className="textBlock">
               <img src={ImgSvg.shieldService} alt=""/>
               <p className="serviceName">Car insurance</p>
               <p className="desc">Insurance online in a couple of clicks</p>
             </div>
             <button className="serviceBtn">Get started</button>
           </div>
  
           <div className="ServiceBlock">
             <div className="textBlock">
               <img src={ImgSvg.passportService} alt=""/>
               <p className="serviceName">Vignette</p>
               <p className="desc">Buy Toll & Vignettes online</p>
             </div>
             <button className="serviceBtn">Buy vignette</button>
           </div>
  
           <div className="ServiceBlock">
             <div className="textBlock">
               <img src={ImgSvg.speedometerService} alt=""/>
               <p className="serviceName">Auto parts</p>
               <p className="desc">Buy spare parts from trusted suppliers</p>
             </div>
             <button className="serviceBtn">Buy auto parts</button>
           </div>
  
           <div className="ServiceBlock">
             <div className="textBlock">
               <img src={ImgSvg.searchService} alt=""/>
               <p className="serviceName">Reports</p>
               <p className="desc">Check your car history in our app</p>
             </div>
             <button className="serviceBtn">Check</button>
           </div>
  
         </div>
         
         <div className="searchOnMap G-justify-between">
            <div className="mapBlock G-justify-between G-align-center">
              <div className="textBlock G-flex-column  G-justify-between">
                <div className="text">
                  <p className="searchPrg">Search on map</p>
                  <p className="descPrg">Search for car services on the map</p>
                </div>
                
                <button className="viewBtn">View on the map</button>
                
              </div>
              <div className="mapImgBlock">
                <img src={ImgSvg.mapMarker} className="markerImg" alt=""/>
                <img src={ImgSvg.mapMarker} className="markerImg" alt=""/>
                <img src={ImgSvg.mapMarker} className="markerImg" alt=""/>
                <img src={ImgSvg.mapImg} className="mapImg" alt=""/>
              </div>
            </div>
           
           <div className="becomePartnerBlock">
             <img src={ImgSvg.starsService} alt=""/>
             <p className="name">Become a partner</p>
             <p className="desc">We can help grow up</p>
             <a className="learnMoreLink" href="">Learn more</a>
           </div>
         </div>
         
         <div className="autoFavoritesCont G-justify-between">
           {Arr.map((value, index)=>{
             if ( Arr.length > 11){
               if (index < 7){
                 return(
                    <div key={index} className="favoriteBlock G-flex-column">
                      <div className="imgBlock">
                        <img src={ImgSvg.img1} className="favoriteImg" alt=""/>
                        <div className="raiting G-align-center G-justify-between">
                          <img src={ImgSvg.greenStar} alt=""/>
                          4.9(88)
                        </div>
                      </div>
                      
                      <div className="nameLike G-align-center G-justify-between">
                        <p className="name">Autofavorīts</p>
                        <img src={ImgSvg.likeIcon} alt=""/>
                      </div>
  
                      <button className="placeOrderBtn">Place an order</button>
                    </div>
                 )
               } else if (index === 7){
                 return (
                    <div key={index} className="favoriteBlock G-flex-column flex-end">
                      <p className="showMorePrg">Show more</p>
                      <div className="images G-justify-between">
                        <img src={ImgSvg.img1} className="showMoreImg" alt=""/>
                        <img src={ImgSvg.img1} className="showMoreImg" alt=""/>
                        <img src={ImgSvg.img1} className="showMoreImg" alt=""/>
                        <img src={ImgSvg.img1} className="showMoreImg" alt=""/>
                      </div>
                    </div>
                 )
               }
             } else {
               return(
                  <div key={index} className="favoriteBlock G-flex-column">
                    <div className="imgBlock">
                      <img src={ImgSvg.img1} className="favoriteImg" alt=""/>
                      <div className="raiting G-align-center G-justify-between">
                        <img src={ImgSvg.greenStar} alt=""/>
                        4.9(88)
                      </div>
                    </div>
  
                    <div className="nameLike G-align-center G-justify-between">
                      <p className="name">Autofavorīts</p>
                      <img src={ImgSvg.likeIcon} alt=""/>
                    </div>
  
                    <button className="placeOrderBtn">Place an order</button>
                  </div>
               )
             }
           })}
         
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
  )
}

export default ProfileServicesLine