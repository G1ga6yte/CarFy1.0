import React from "react";
import {Link} from "react-router-dom";
import "./homeBlog.scss"
import {HomeImg} from "../images/homeImg";
import {HomeSvg} from "../svgs/homeSvg";
import {useTranslation} from "react-i18next";

function HomeBlog (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="homeBlog G-container">
        <div className="headerLink G-justify-between G-align-center">
          <p className="header">{t('home.header101')}</p>
          <Link to="/blog">{t('home.seeAll')}</Link>
        </div>
       
       <div className="BlogsCont G-align-center G-justify-between">
         
         <Link className="blogBlock" to="/blog">
            <p className="name">{t('home.miniHeader101')}</p>
           <img src={HomeImg.parkingIcon} alt=""/>
         </Link>
         
         <Link className="blogBlock" to="/blog">
           <p className="name">{t('home.miniHeader102')}</p>
           <img src={HomeImg.tools1} alt=""/>
           <img src={HomeImg.tools2} alt=""/>
           <img src={HomeSvg.vectorBlog} alt=""/>
         </Link>
         
         <Link className="blogBlock" to="/blog">
           <p className="name">{t('home.miniHeader103')}</p>
           <img src={HomeImg.carRepair} alt=""/>
         </Link>
         
         <Link className="blogBlock" to="/blog">
           <p className="name">{t('home.miniHeader104')}</p>
           <img src={HomeImg.mechanic} alt=""/>
         </Link>
         
       </div>
       
     </div>
  )
}

export default HomeBlog