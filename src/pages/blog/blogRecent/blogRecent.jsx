import React from "react";
import "./blogRecent.scss"
import {Link} from "react-router-dom";
import {BlogImg} from "../images/blogImg";
import {useTranslation} from "react-i18next";

function BlogRecent (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="BlogRecent G-container G-flex G-justify-between">
       <div className="textBlock">
         <p className="header">{t('blog.header4')}</p>
         <p className="prg">{t('blog.prg4')}</p>
       </div>
  
       <div className="linkBlock">
         <Link to="/blog/article">{t('blog.seeAll')}</Link>
       </div>
       
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

export default BlogRecent