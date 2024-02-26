import React, {useEffect, useState} from "react";
import {useCartContext} from "../../../../CartContext";
import "./reviewBlock.scss"
import {Images} from "./images/images";

function ReviewBlock (){
  const {reviewBlock, setReviewBlock, activeRequestId} = useCartContext()
  const [starsChecked, setStarsChecked] = useState(false)
  const [starsCount, setStarsCount] = useState(null)
  const [stars, setStars] = useState([Images.starStroke, Images.starStroke, Images.starStroke, Images.starStroke, Images.starStroke])
  
  
  function handleCheckStars (i){
    setStars([Images.starStroke, Images.starStroke, Images.starStroke, Images.starStroke, Images.starStroke])
    let starsDate = stars
    let x = []
    starsDate.forEach((el, index)=>{
      if (index <= i){
        x.push(Images.starFilled)
      } else {
        x.push(Images.starStroke)
      }
    })
    setStars(x)
    setStarsChecked(true)
    setStarsCount(i)
  }
  
  function handleMouseOverStar (i){
    let starsDate = stars
    let x = []
    
    starsDate.forEach((el, index)=>{
      if (index <= i){
        x.push(Images.starFilled)
      } else {
        x.push(Images.starStroke)
      }
    })
    setStars(x)
  }
  
  function handleMouseLeaveStar (){
    if (starsChecked){
      let starsDate = stars
      let x = []
      
      starsDate.forEach((el, index)=>{
        if (index <= starsCount){
          x.push(Images.starFilled)
        } else {
          x.push(Images.starStroke)
        }
      })
      setStars(x)
      
    } else {
      setStars([Images.starStroke, Images.starStroke, Images.starStroke, Images.starStroke, Images.starStroke])
    }
  }
  
  useEffect(() => {
    const handlePopstate = () => {
      setReviewBlock(false);
    };
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
  
  return(
     <div style={{display: `${window.innerWidth <= 992 ? "block" : reviewBlock ? "block" : "none"}`}} className="ReviewBlock">
       <div onClick={()=>{
         setReviewBlock(false)
         setStarsCount(null)
         setStarsChecked(false)
       }} className="backgroundDiv">
       </div>
       
       <div className="reviewCont G-flex G-align-center G-flex-column">
         <div className="leaveReviewBlock G-flex G-justify-between G-align-center">
            <p className="header">Leave a review</p>
           <div className="idCloseBtn G-flex G-align-center">
             <span>#{activeRequestId}</span>
             <img onClick={()=>{
               setReviewBlock(false)
               setStarsCount(null)
               setStarsChecked(false)
             }} src={Images.xCloseIcon} alt=""/>
           </div>
         </div>
         <div className="starsBlock">
  
           {stars.map((el, index)=>{
             return(
                <img onMouseOver={()=>{
                  handleMouseOverStar(index)
                }} onMouseLeave={()=>{
                  handleMouseLeaveStar()
                }} onClick={()=>{
                  handleCheckStars(index)
                }} className="starIcon" src={el} key={index} alt=""/>
             )
           })}
           
         </div>
         <textarea className="textAreaReview" placeholder="Leave a review" name="reviewArea" id="reviewArea" cols="30" rows="10"></textarea>
        <button className="saveBtn">Save</button>
       
       </div>
     </div>
  )
}

export default ReviewBlock