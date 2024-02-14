import React, {useState} from "react";
import "./BlogNewsroom.scss"
import {BlogSvg} from "../svgs/blogSvg";
import {BlogImg} from "../images/blogImg";
import {useTranslation} from "react-i18next";

function BlogNewsroom (){
  const [searchingBlock, setSearchingBlock] = useState(false)
  const {t, i18n} = useTranslation()
  
  function onKeyUp (event){
    if (event.target.value !== ""){
      if (event.target.value !== " "){
        setSearchingBlock(true)
      }
    } else {
      setSearchingBlock(false)
    }
  }
  
  
  return(
     <div className="BlogNewsRoom G-flex-column G-align-center">
       <p className="header">{t('blog.header1')} <span>{t('blog.header12')} </span></p>
       <p className="underHeader">{t('blog.prg1')}</p>
       
       <div className="InputButton G-justify-between G-align-center">
         
         <div className="inputBlock">
           <img src={BlogSvg.searchIcon} alt=""/>
           <input onKeyUp={onKeyUp} placeholder={t('blog.placeHolder1')} type="text"/>
           <div  className="searchingBlock" style={{display: `${searchingBlock ? "block" : "none"}`}}>
             <span title={``} className="link">All-season tire OFF ROAD OS-501 205/70R15 96QAll-season tire OFF ROAD OS-501 205/70R15 96Q</span>
             <span title={``} className="link">All-season tire OFF ROAD OS-501 205/70R15 96Q</span>
             <span title={``} className="link">All-season tire OFF ROAD OS-501 205/70R15 96Q</span>
             <span title={``} className="link">All-season tire OFF ROAD OS-501 205/70R15 96Q</span>
             <span title={``} className="link">All-season tire OFF ROAD OS-501 205/70R15 96Q</span>
             <span title={``} className="link">All-season tire OFF ROAD OS-501 205/70R15 96Q</span>
             <span title={``} className="link">All-season tire OFF ROAD OS-501 205/70R15 96Q</span>
             <span title={``} className="link">All-season tire OFF ROAD OS-501 205/70R15 96Q</span>
           </div>
  
           <div className="fastLinks G-align-center ">
             <span>{t('blog.fastLink1')}</span>
             <span>{t('blog.fastLink2')}</span>
             <span>{t('blog.fastLink3')}</span>
           </div>
         </div>
         
         <button className="searchBtn G-align-center">
           <img src={BlogSvg.searchIcon2} alt=""/>
           <img className="loading" style={{display: "none"}} src={BlogSvg.loading} alt=""/>
           <span>{t('blog.search')}</span>
         </button>
        
       </div>
       
  
       <img className="newsPaper" src={BlogImg.newsPaper} alt=""/>
       <img className="announcement" src={BlogImg.announcement1} alt=""/>

     </div>
  )
}

export default BlogNewsroom