import React from "react";
import {Link} from "react-router-dom";
import "./homeBlog.scss"
import {HomeImg} from "../images/homeImg";
import {HomeSvg} from "../svgs/homeSvg";

function HomeBlog (){
  return(
     <div className="homeBlog G-container">
        <div className="headerLink G-justify-between G-align-center">
          <p className="header">Blog</p>
          <Link to="/blog">See all</Link>
        </div>
       
       <div className="BlogsCont G-align-center G-justify-between">
         
         <Link class="blogBlock" to="/blog">
            <p className="name">How to pay for parking?</p>
           <img src={HomeImg.parkingIcon} alt=""/>
         </Link>
         
         <Link class="blogBlock" to="/blog">
           <p className="name">How to order a wrecker?</p>
           <img src={HomeImg.tools1} alt=""/>
           <img src={HomeImg.tools2} alt=""/>
           <img src={HomeSvg.vectorBlog} alt=""/>
         </Link>
         
         <Link class="blogBlock" to="/blog">
           <p className="name">How to choose the right service </p>
           <img src={HomeImg.carRepair} alt=""/>
         </Link>
         
         <Link class="blogBlock" to="/blog">
           <p className="name">How to choose the right service </p>
           <img src={HomeImg.mechanic} alt=""/>
         </Link>
         
       </div>
       
     </div>
  )
}

export default HomeBlog