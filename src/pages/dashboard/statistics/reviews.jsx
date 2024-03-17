import React from "react";
import {useNavigate} from "react-router-dom";
import "./statistics.scss"
import {useTranslation} from "react-i18next";
import {Images} from "./images/images";

function Reviews (){
  const {t, i18n} = useTranslation();
  const navigate = useNavigate()
  return(
     <div className="Reviews">
        <button onClick={()=>{
          navigate(-1)
        }} className="backBtn G-flex G-align-center">
          <img src={Images.chevronLeft} alt=""/>
          {t("static.back")}
        </button>
       
       <div className="mainCont">
          <div className="ratingHead G-flex">
            <div className="leftBlock G-flex G-align-center">
              <p className="rateHeader">{t("static.miniHeader6")}</p>
              <div className="rate">4.8</div>
              <p className="underText">{t("static.underText3")} 220 {t("static.underText4")}</p>
            </div>
            
            <div className="rightBlock">
              <div className="rateLine G-flex G-align-center">
                <span>5</span>
                <img src={Images.greenStar} alt=""/>
                <div className="progressLine">
                  <div style={{width: `70%`}} className="passedLine"></div>
                </div>
                <p className="count">17</p>
              </div>
  
              <div className="rateLine G-flex G-align-center">
                <span>4</span>
                <img src={Images.greenStar} alt=""/>
                <div className="progressLine">
                  <div style={{width: `30%`}} className="passedLine"></div>
                </div>
                <p className="count">92</p>
              </div>
  
              <div className="rateLine G-flex G-align-center">
                <span>3</span>
                <img src={Images.greenStar} alt=""/>
                <div className="progressLine">
                  <div style={{width: `20%`}} className="passedLine"></div>
                </div>
                <p className="count">43</p>
              </div>
  
              <div className="rateLine G-flex G-align-center">
                <span>2</span>
                <img src={Images.greenStar} alt=""/>
                <div className="progressLine">
                  <div  style={{width: `30%`}} className="passedLine"></div>
                </div>
                <p className="count">69</p>
              </div>
  
              <div className="rateLine G-flex G-align-center">
                <span>1</span>
                <img src={Images.greenStar} alt=""/>
                <div className="progressLine">
                  <div style={{width: `40%`}} className="passedLine"></div>
                </div>
                <p className="count">8</p>
              </div>
            </div>
          </div>
         
         <div className="ratingsBlock">
           {Array.from({length: 5}, (_, index)=>(
              <div className="rateBlock G-flex">
                <div className="imgBlock"></div>
                <div className="nameBlock">
                  <p className="name">Customer Name</p>
                  <div className="starsBlock G-flex G-align-center">
                    {Array.from({length: 5}, (_, index)=>(
                       <img src={Images.greenStar} alt=""/>
                    ))}
                  </div>
                </div>
                <p className="reviewPrg">
                  I am writing to request your services for my car. I have been experiencing some issues with my vehicle and I believe it requires professional attention. I am writing to request your services for my car. I have been experiencing some issues with my vehicle and I believe it requires professional attention. I am writing to request your services for my car. I have been experiencing some issues with my vehicle and I believe it requires professional attention.
                </p>
              </div>
           ))}
         </div>
         
       </div>
     </div>
  )
}

export default Reviews