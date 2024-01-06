import React from "react";
import {Link} from "react-router-dom";
import {BlogImg} from "../images/blogImg";
import {BlogSvg} from "../svgs/blogSvg";
import "./blogAllArticles.scss"

function BlogAllArticles (){
  return(
     <div className="BlogAllArticles G-justify-center G-container">
       <div className="textBlock">
         <p className="header">All Articles</p>
         <p className="prg">We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</p>
       </div>
  
  
  
       <Link to="/blog/article" className="Article">
         <span className="span">FEATURED</span>
         <p className="prg">How to pay for parking?</p>
         <img src={BlogImg.parking} alt=""/>
       </Link>
  
       <Link to="/blog/article" className="Article">
         <span className="span">FEATURED</span>
         <p className="prg">How to order a wrecker?</p>
         <img src={BlogSvg.vectorBlog} alt=""/>
         <img src={BlogImg.tool1} alt=""/>
         <img src={BlogImg.tool2} alt=""/>
       </Link>
  
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

export default BlogAllArticles