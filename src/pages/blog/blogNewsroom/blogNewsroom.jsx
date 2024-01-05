import React, {useState} from "react";
import "./BlogNewsroom.scss"
import {BlogSvg} from "../svgs/blogSvg";
import {BlogImg} from "../images/blogImg";

function BlogNewsroom (){
  const [searchingBlock, setSearchingBlock] = useState(false)
  
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
       <p className="header">Our <span> Newsroom</span></p>
       <p className="underHeader">Your go-to source for informative and engaging content on the latest trends, news, and insights in your industry</p>
       
       <div className="InputButton G-justify-between G-align-center">
         
         <div className="inputBlock">
           <img src={BlogSvg.searchIcon} alt=""/>
           <input onKeyUp={onKeyUp} placeholder="Write something" type="text"/>
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
             <span>How to change tires</span>
             <span>Best service EU 2023</span>
             <span>How to change oil</span>
           </div>
         </div>
         
         <button className="searchBtn G-align-center">
           <img src={BlogSvg.searchIcon2} alt=""/>
           <img className="loading" style={{display: "none"}} src={BlogSvg.loading} alt=""/>
           <span>Search</span>
         </button>
        
       </div>
       
  
       <img className="newsPaper" src={BlogImg.newsPaper} alt=""/>
       <img className="announcement" src={BlogImg.announcement1} alt=""/>

     </div>
  )
}

export default BlogNewsroom