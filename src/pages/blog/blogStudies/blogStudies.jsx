import React from "react";
import {Link} from "react-router-dom";
import "./blogStudies.scss";
import Slider from "react-slick"
import {BlogImg} from "../images/blogImg";
import {useTranslation} from "react-i18next";

function BlogStudies (){
  const {t, i18n} = useTranslation()
  
  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows        : false,
    autoplay      : true,
    autoplaySpeed : 4000,
    dots: true,
    easing: "linear",
    cssEase: "linear"
  };
  
  return(
     <div className="BlogStudies G-container G-flex G-justify-between">
       <div className="textBlock">
         <p className="header">{t('blog.header5')}</p>
         <p className="prg">{t('blog.prg5')}</p>
       </div>
  
       <div className="linkBlock">
         <Link to="/blog/article">{t('blog.seeAll')}</Link>
       </div>
       
       <div className="sliderCont">
         <Slider {...settings}>
           <div className="featureBlock G-justify-between G-align-center">
             <div className="gradientBlock">
               <img src={BlogImg.carRepair} className="carRepairImg" alt=""/>
             </div>
             <div className="textBlock">
               <span className="span">{t('blog.featured')}</span>
               <p className="header"> {t('blog.miniHeader5')}<span>{t('blog.miniHeader51')} </span></p>
               <p className="prg">{t('blog.miniPrg')}</p>
             </div>
           </div>
  
           <div className="featureBlock G-justify-between G-align-center">
             <div className="gradientBlock">
               <img src={BlogImg.carRepair} className="carRepairImg" alt=""/>
             </div>
             <div className="textBlock">
               <span className="span">{t('blog.featured')}</span>
               <p className="header">{t('blog.miniHeader5')} <span>{t('blog.miniHeader51')} </span></p>
               <p className="prg">{t('blog.miniPrg')}</p>
             </div>
           </div>
  
           <div className="featureBlock G-justify-between G-align-center">
             <div className="gradientBlock">
               <img src={BlogImg.carRepair} className="carRepairImg" alt=""/>
             </div>
             <div className="textBlock">
               <span className="span">{t('blog.featured')}</span>
               <p className="header">{t('blog.miniHeader5')}<span>{t('blog.miniHeader51')}</span></p>
               <p className="prg">{t('blog.miniPrg')}</p>
             </div>
           </div>
         </Slider>
       </div>
     </div>
  )
}

export default BlogStudies