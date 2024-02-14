import React from "react";
import {BlogImg} from "../images/blogImg";
import "./blogFeatured.scss"
import {useTranslation} from "react-i18next";

function BlogFeatured (){
  const {t, i18n} = useTranslation()
  return(
     <div className="BlogFeatured G-container">
       <div className="featureBlock G-justify-between G-align-center">
          <div className="gradientBlock">
            <img src={BlogImg.carRepair} className="carRepairImg" alt=""/>
          </div>
          <div className="textBlock">
            <span className="span">{t('blog.featured')}</span>
            <p className="header">{t('blog.header2')} <span>{t('blog.header21')} </span></p>
            <p className="prg">{t('blog.prg2')}</p>
          </div>
       </div>
     </div>
  )
}

export default BlogFeatured