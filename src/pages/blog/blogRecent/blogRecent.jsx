import React from "react";
import "./blogRecent.scss"
import {Link} from "react-router-dom";
import {BlogImg} from "../images/blogImg";

function BlogRecent (){
  
  return(
     <div className="BlogRecent G-container G-flex G-justify-between">
       <div className="textBlock">
         <p className="header">Recent Articles</p>
         <p className="prg">Here’s what we've been up to recently.</p>
       </div>
  
       <div className="linkBlock">
         <Link to="/blog/article">See all</Link>
       </div>
       
       <div className="recentBlock">
         <img src={BlogImg.artImg1} alt=""/>
         <span className="span">FEATURED</span>
          <div className="futureText">
            <p className="fHeader">Future of Work</p>
            <p className="fPrg">Majority of peole will work in jobs that don’t exist today.</p>
          </div>
       </div>
  
       <div  className="recentBlock">
         <img src={BlogImg.artImg2} alt=""/>
         <span className="span">FEATURED</span>
         <div className="futureText">
           <p className="fHeader">Future of Data</p>
           <p className="fPrg">Majority of peole will work in jobs that don’t exist today.</p>
         </div>
       </div>
  
       <div  className="recentBlock">
         <img src={BlogImg.artImg3} alt=""/>
         <span className="span">FEATURED</span>
         <div className="futureText">
           <p className="fHeader">Future of Learning</p>
           <p className="fPrg">Majority of peole will work in jobs that don’t exist today.</p>
         </div>
       </div>
     </div>
  )
}

export default BlogRecent