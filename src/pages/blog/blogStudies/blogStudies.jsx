import React from "react";
import {Link} from "react-router-dom";
import "./blogStudies.scss";
import Slider from "react-slick"
import {BlogImg} from "../images/blogImg";

function BlogStudies (){
  let settings = {
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows        : false,
    autoplay      : true,
    autoplaySpeed : 0,
    easing: "linear",
    cssEase: "linear"
  };
  
  return(
     <div className="BlogStudies G-container G-flex G-justify-between">
       <div className="textBlock">
         <p className="header">Case Studies</p>
         <p className="prg">Here’s what we've been up to recently.</p>
       </div>
  
       <div className="linkBlock">
         <Link to="/blog/article">See all</Link>
       </div>
       
       <div className="sliderCont">
         {/*<Slider {...settings}>*/}
         {/*  <div className="featureBlock G-justify-between G-align-center">*/}
         {/*    <div className="gradientBlock">*/}
         {/*      <img src={BlogImg.carRepair} className="carRepairImg" alt=""/>*/}
         {/*    </div>*/}
         {/*    <div className="textBlock">*/}
         {/*      <span className="span">FEATURED</span>*/}
         {/*      <p className="header">Cheap Airline Tickets Great Ways <span>To Save </span></p>*/}
         {/*      <p className="prg">In this digital generation where information can be easily obtained within seconds, business cards ...</p>*/}
         {/*    </div>*/}
         {/*  </div>*/}
         
         {/*  <div className="featureBlock G-justify-between G-align-center">*/}
         {/*    <div className="gradientBlock">*/}
         {/*      <img src={BlogImg.carRepair} className="carRepairImg" alt=""/>*/}
         {/*    </div>*/}
         {/*    <div className="textBlock">*/}
         {/*      <span className="span">FEATURED</span>*/}
         {/*      <p className="header">Cheap Airline Tickets Great Ways <span>To Save </span></p>*/}
         {/*      <p className="prg">In this digital generation where information can be easily obtained within seconds, business cards ...</p>*/}
         {/*    </div>*/}
         {/*  </div>*/}
         
         {/*  <div className="featureBlock G-justify-between G-align-center">*/}
         {/*    <div className="gradientBlock">*/}
         {/*      <img src={BlogImg.carRepair} className="carRepairImg" alt=""/>*/}
         {/*    </div>*/}
         {/*    <div className="textBlock">*/}
         {/*      <span className="span">FEATURED</span>*/}
         {/*      <p className="header">Cheap Airline Tickets Great Ways <span>To Save </span></p>*/}
         {/*      <p className="prg">In this digital generation where information can be easily obtained within seconds, business cards ...</p>*/}
         {/*    </div>*/}
         {/*  </div>*/}
         {/*</Slider>*/}
       </div>
     </div>
  )
}

export default BlogStudies