import React from "react";
import {Images} from "./images/images";
import "./eachServiceBlock.scss";
import {CarModelsData} from "./carModels/carModelsData";
import {useNavigate} from "react-router-dom";
import {useCartContext} from "../../../../CartContext";

function EachServiceBlock() {
  const navigate = useNavigate()
  const {confirmationDialog, setConfirmationDialog} = useCartContext()
  
  const skillsData = ["ABS repair", "ABS repair", "ESR repair", "ESR repair", "Cylinder head repair",
                      "Cylinder head repair", "Clearance repair", "Clearance repair", "Tire mounting and balancing",
                      "Tire mounting and balancing", "Engine diagnostic", "Engine diagnostic", "Exhaust system repair",
                      "Exhaust system repair"];
  const imgData = [Images.serviceImg, Images.photos1, Images.photos2, Images.photos3, Images.photos3, Images.photos4, Images.photos5, Images.photos6, Images.photos6]
  const id = 111223
  
  
  
  return (
     <div className="EachServiceBlock G-container">
       
       <div className="serviceCont G-flex G-justify-between">
         
         <div className="mainCont">
           <div className="headerBlock G-flex ">
             <div style={{backgroundImage: `url("${Images.serviceImg}")`}} className="imgBlock"></div>
             <div className="textBlock">
               <div className="prgHeaderBlock G-flex G-align-center G-justify-between">
                 <p className="miniHeader G-flex G-align-center">Autofavorīts <img src={Images.heartIcon} alt=""/></p>
                 <p className="ratingBlock G-flex G-align-center"><img src={Images.starIcon} alt=""/>4.9(88)</p>
               </div>
               <p className="servicePrg">Keep your car running smoothly with our on-demand car repair service. Our app
                 connects you to experienced technicians in your area who will diagnose and fix any issues with your
                 vehicle</p>
             
             </div>
           </div>
           <div className="skillsBlock">
             {skillsData.map((el, index) => {
               return (
                  <span className="skillItem" key={index}>{el}</span>
               );
             })}
           </div>
           <div className="photosBlock">
             <p className="miniHeader">Photos</p>
             <div className="photos G-flex">
               {imgData.map((el, index)=>{
                 return(
                    <div key={index} style={{backgroundImage: `url("${el}")`}} className="imgItem"></div>
                 )
               })}
               <div className="showMoreBlock G-flex G-justify-center G-align-center">
                 <span>Show more</span>
               </div>
             </div>
           </div>
           <div className="specializationBlock">
            <p className="miniHeader">Specialization</p>
             <div className="modelsCont G-flex G-align-center">
               {CarModelsData.map((el, index)=>{
                 return(
                    <img src={el} className="modelImg" key={index} alt=""/>
                 )
               })}
             </div>
           </div>
           <div className="feedbackCont">
             <div className="headerCont G-flex G-align-center G-justify-between">
               <p className="header">Feedback from our customers</p>
               <div className="ratingBlock G-flex G-align-center">
                 Average rate 4.3
                 <img src={Images.starIcon} alt=""/>
               </div>
             </div>
             
             <div className="feedbackList G-flex G-flex-column">
               {new Array(6).fill(null).map((el, index)=>{
                 return(
                    <div key={index} className="feedbackBlock">
                      <div className="feedbackHeaderBlock G-flex G-align-center G-justify-between">
                        <p className="name G-flex G-align-center"><img src={CarModelsData[index]} alt=""/>Mark S.</p>
                        <p className="rating G-flex G-align-center">4 <img src={Images.starIcon} alt=""/></p>
                      </div>
                      <p className="feedbackPrg">I recently used the car repair service and I was thoroughly impressed with the experience. The app was easy to use and I was able to book an appointment with a technician quickly. Great service!</p>
                    </div>
                 )
               })}
               
             </div>
             
             
           </div>
           
         </div>
         
         <div className="priceCont">
          <div className="costBlock G-flex G-justify-between G-align-center">
            <p className="costPrg">Cost of work</p>
            <p className="costPrice">100€</p>
          </div>
           <div className="totalBlock G-flex G-align-center G-justify-between">
             <p className="totalPrg">Total amount</p>
             <p className="totalPrice">100€</p>
           </div>
           <div className="buttonsCont G-flex G-justify-between">
             <button className="chatBtn"><img src={Images.messageIcon} alt=""/>Chat</button>
             <button onClick={()=>{
               if (window.innerWidth <=995){
                 navigate(`/request/confirmation/:${id}`)
               } else {
                  setConfirmationDialog(true)
               }
               window.scrollTo(0, 0)
             }} className="responsesBtn">Enroll</button>
           </div>
           
           <div style={{backgroundImage: `url("${Images.mapImg}")`}} className="mapImg">
             <img src={Images.markerIcon} alt=""/>
           </div>
         </div>
       
       
       </div>
     
     </div>
  );
}

export default EachServiceBlock;