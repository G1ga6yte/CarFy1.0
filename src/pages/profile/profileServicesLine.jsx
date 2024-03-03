import React, {useState} from "react";
import {ImgSvg} from "./imgSvg/ImgSvg";
import {useCartContext} from "../../CartContext";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";




function  ProfileServicesLine (){
  const {t, i18n} = useTranslation()
  const {mapDialog, setMapDialog} = useCartContext()
  const Arr = new Array(20).fill('')
  const referralLink = "https://carfy.com/ref32749823hg239872"
  const navigate = useNavigate()
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
           <p className="serviceHeader">{t('profile.services')}</p>
           
           <div className="ServiceBlock">
             <div className="textBlock">
               <img src={ImgSvg.shieldService} alt=""/>
               <p className="serviceName">{t('profile.miniHeader1')}</p>
               <p className="desc">{t('profile.miniPrg1')}</p>
             </div>
             <button className="serviceBtn">{t('profile.btn1')}</button>
           </div>
  
           <div className="ServiceBlock">
             <div className="textBlock">
               <img src={ImgSvg.passportService} alt=""/>
               <p className="serviceName">{t('profile.miniHeader2')}</p>
               <p className="desc">{t('profile.miniPrg2')}</p>
             </div>
             <button className="serviceBtn">{t('profile.btn2')}</button>
           </div>
  
           <div className="ServiceBlock">
             <div className="textBlock">
               <img src={ImgSvg.speedometerService} alt=""/>
               <p className="serviceName">{t('profile.miniHeader3')}</p>
               <p className="desc">{t('profile.miniPrg3')}</p>
             </div>
             <button className="serviceBtn">{t('profile.btn3')}</button>
           </div>
  
           <div className="ServiceBlock">
             <div className="textBlock">
               <img src={ImgSvg.searchService} alt=""/>
               <p className="serviceName">{t('profile.miniHeader4')}</p>
               <p className="desc">{t('profile.miniPrg4')}</p>
             </div>
             <button className="serviceBtn">{t('profile.btn4')}</button>
           </div>
  
         </div>
         
         <div className="searchOnMap G-justify-between">
            <div className="mapBlock G-justify-between G-align-center">
              <div className="textBlock G-flex-column  G-justify-between">
                <div className="text">
                  <p className="searchPrg">{t('profile.miniHeader5')}</p>
                  <p className="descPrg">{t('profile.miniPrg5')}</p>
                </div>
                
                <button onClick={()=>{
                  if (window.innerWidth <= 992){
                    navigate("/profile/map")
                  }else{
                    setMapDialog(true)
                  }
                }} className="viewBtn">{t('profile.btn5')}</button>
                
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
             <p className="name">{t('profile.miniHeader6')}</p>
             <p className="desc">{t('profile.miniPrg6')}</p>
             <a className="learnMoreLink" href="">{t('profile.learnMore')}</a>
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
  
                      <button className="placeOrderBtn">{t('profile.placeAnOrder')}</button>
                    </div>
                 )
               } else if (index === 7){
                 return (
                    <div key={index} className="favoriteBlock G-flex-column flex-end">
                      <p className="showMorePrg">{t('profile.showMore')}</p>
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