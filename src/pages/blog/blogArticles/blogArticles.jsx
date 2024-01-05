import React from "react";
import {Link} from "react-router-dom";
import "./blogArticles.scss"
import {BlogImg} from "../images/blogImg";
import {BlogSvg} from "../svgs/blogSvg";

function BlogArticles (){
  return(
     <div className="BlogArticles G-container G-flex G-justify-between">
       
       <div className="textBlock">
         <p className="header">Popular Articles</p>
         <p className="prg">We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</p>
       </div>
       
       <div className="linkBlock">
          <Link to="/blog/article">See all</Link>
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
       
     </div>
  )
}
export default BlogArticles