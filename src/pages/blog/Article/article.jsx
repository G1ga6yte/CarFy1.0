import React from "react";
import ParkingImg from "./parking-sign 1.png";
import "./Article.scss";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Article (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="ArticleCont G-container G-flex-column G-align-center">
       
       <div className="TopImgBlock">
         <span className="span">{t('article.featured')}</span>
         <p className="prg">{t('article.header1')}</p>
         <img src={ParkingImg} alt=""/>
       </div>
       
       <p className="header">{t('article.header2')}</p>

      <div className="TextBlock">
        <p className="textPrg">{t('article.prg1')}</p>
        <p className="headerPrg">{t('article.header3')}</p>
        <p className="textPrg">{t('article.prg2')}</p>
        <p className="headerPrg">{t('article.header4')}</p>
        <p className="textPrg">{t('article.prg3')}</p>
        <p className="headerPrg">{t('article.header5')}</p>
        <p className="textPrg">{t('article.prg4')}</p>
        <p className="headerPrg">{t('article.header6')}</p>
        <p className="textPrg">{t('article.prg5')}</p>
        <p className="headerPrg">{t('article.header7')}</p>
        <p className="textPrg">{t('article.prg6')}</p>
      </div>
       
       
       <div className="similarPosts">
         <p className="miniHeader">{t('article.similarPosts')}</p>
         
         <div className="posts G-justify-between G-align-center">
         
           <Link to="/" className="post">
             <p className="prg">{t('article.header1')}</p>
             <img src={ParkingImg} alt=""/>
           </Link>
           <Link to="/" className="post">
             <p className="prg">{t('article.header1')}</p>
             <img src={ParkingImg} alt=""/>
           </Link>
           <Link to="/" className="post">
             <p className="prg">{t('article.header1')}</p>
             <img src={ParkingImg} alt=""/>
           </Link>
           <Link to="/" className="post">
             <p className="prg">{t('article.header1')}</p>
             <img src={ParkingImg} alt=""/>
           </Link>
           
         </div>
       </div>
      
      
      
     </div>
  )
}

export default Article