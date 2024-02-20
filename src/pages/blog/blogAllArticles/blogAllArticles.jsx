import React from "react";
import {Link} from "react-router-dom";
import {BlogImg} from "../images/blogImg";
import {BlogSvg} from "../svgs/blogSvg";
import "./blogAllArticles.scss"
import {useTranslation} from "react-i18next";

function BlogAllArticles (){
  const {t, i18n} = useTranslation()
  return(
     <div className="BlogAllArticles G-justify-center G-container">
       <div className="textBlock">
         <p className="header">{t('blog.header6')}</p>
         <p className="prg">{t('blog.prg6')}</p>
       </div>
  
  
  
       <Link to="/blog/article" className="Article">
         <span className="span">{t('blog.featured')}</span>
         <p className="prg">{t('blog.pay3')}</p>
         <img src={BlogImg.parking} alt=""/>
       </Link>
  
       <Link to="/blog/article" className="Article">
         <span className="span">{t('blog.featured')}</span>
         <p className="prg">{t('blog.order3')}</p>
         <img src={BlogSvg.vectorBlog} alt=""/>
         <img src={BlogImg.tool1} alt=""/>
         <img src={BlogImg.tool2} alt=""/>
       </Link>
  
       <div className="recentBlock">
         <img src={BlogImg.artImg1} alt=""/>
         <span className="span">{t('blog.featured')}</span>
         <div className="futureText">
           <p className="fHeader">{t('blog.miniHeader41')}</p>
           <p className="fPrg">{t('blog.miniPrg41')}</p>
         </div>
       </div>
  
       <div  className="recentBlock">
         <img src={BlogImg.artImg2} alt=""/>
         <span className="span">{t('blog.featured')}</span>
         <div className="futureText">
           <p className="fHeader">{t('blog.miniHeader42')}</p>
           <p className="fPrg">{t('blog.miniPrg42')}</p>
         </div>
       </div>
  
       <div  className="recentBlock">
         <img src={BlogImg.artImg3} alt=""/>
         <span className="span">{t('blog.featured')}</span>
         <div className="futureText">
           <p className="fHeader">{t('blog.miniHeader43')}</p>
           <p className="fPrg">{t('blog.miniPrg43')}</p>
         </div>
       </div>
     </div>
  )
}

export default BlogAllArticles