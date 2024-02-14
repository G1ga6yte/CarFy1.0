import React from "react";
import {Link} from "react-router-dom";
import "./blogArticles.scss"
import {BlogImg} from "../images/blogImg";
import {BlogSvg} from "../svgs/blogSvg";
import {useTranslation} from "react-i18next";

function BlogArticles (){
  const {t, i18n} = useTranslation()
  return(
     <div className="BlogArticles G-container G-flex G-justify-between">
       
       <div className="textBlock">
         <p className="header">{t('blog.header3')}</p>
         <p className="prg">{t('blog.prg3')}</p>
       </div>
       
       <div className="linkBlock">
          <Link to="/blog/article">{t('blog.seeAll')}</Link>
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
       
     </div>
  )
}
export default BlogArticles