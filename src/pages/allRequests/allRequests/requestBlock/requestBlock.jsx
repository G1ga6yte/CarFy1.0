import React from "react";
import {ImgSvg} from "../../images/imgSvg";
import {Link} from "react-router-dom";


function RequestBlock (props){
  const reqStatus = props.reqstatus
  function generateRandomNumber() {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const id = 11223
  
  return(
     <div className="requestBlock">
       <div className="requestHeadBlock G-flex G-justify-between">
         <div className="headCont G-flex G-justify-between">
           <div className="numberTimeBlock G-flex G-align-center">
             <span className="requestID">#{id}</span>
             <span className="requestRegTime">06.04.2023 11:52 </span>
             <a style={{display: `${reqStatus !== "finished" ? "none" : "block"}`}} className="reportLink"
                href="/carfy/src/pages">Report</a>
           </div>
         
           <div className="buttonsBlock G-flex">
           
             <button
                style={{display: `${reqStatus === "sending" ? "flex" : reqStatus === "gotResp" ? "flex" : "none"}`}}
                className="cancelBtn button-g">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                 <path
                    d="M19.2071 6.70711C19.5976 6.31658 19.5976 5.68342 19.2071 5.29289C18.8166 4.90237 18.1834 4.90237 17.7929 5.29289L12.5 10.5858L7.20711 5.29289C6.81658 4.90237 6.18342 4.90237 5.79289 5.29289C5.40237 5.68342 5.40237 6.31658 5.79289 6.70711L11.0858 12L5.79289 17.2929C5.40237 17.6834 5.40237 18.3166 5.79289 18.7071C6.18342 19.0976 6.81658 19.0976 7.20711 18.7071L12.5 13.4142L17.7929 18.7071C18.1834 19.0976 18.8166 19.0976 19.2071 18.7071C19.5976 18.3166 19.5976 17.6834 19.2071 17.2929L13.9142 12L19.2071 6.70711Z"
                    fill="#AEAEAE"/>
               </svg>
               <span className="Cancel">Cancel</span>
             </button>
           
             <button
                style={{display: `${reqStatus === "sending" ? "flex" : reqStatus === "gotResp" ? "flex" : "none"}`}}
                className="editBtn button-g">Edit request
             </button>
           
             <button style={{display: `${reqStatus === "sending" ? "flex" : "none"}`}} className="loadBtn button-g">
               <img src={ImgSvg.loadIcon} className="loadImg" alt=""/>
             </button>
           
             <Link to={`/requests/responses/:${id}`} style={{display: `${reqStatus === "gotResp" ? "flex" : "none"}`}}
                     className="responsesBtn button-g">
               <span>44 responses</span>
             </Link>
           
             <button style={{display: `${reqStatus === "scheduled" ? "flex" : "none"}`}}
                     className="manageBtn button-g">
               <span>Manage</span>
             </button>
           
             <button style={{display: `${reqStatus === "finished" ? "flex" : "none"}`}}
                     className="leaveReviewBtn button-g">
               <span>Leave a review</span>
             </button>
           
             <button style={{display: `${reqStatus === "inWork" ? "flex" : "none"}`}} className="chatBtn button-g">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd"
                       d="M1.76317 16.5C1.76317 12.9331 4.59172 10 8.13159 10C11.6715 10 14.5 12.9331 14.5 16.5C14.5 20.0669 11.6715 23 8.13159 23C7.40394 23 6.70298 22.875 6.04947 22.6444C5.94146 22.6063 5.87446 22.5827 5.82533 22.5664C5.81641 22.5635 5.80911 22.5611 5.80327 22.5593L5.79784 22.5599C5.76354 22.5637 5.71679 22.57 5.63013 22.5818L2.63533 22.9908C2.31127 23.0351 1.98606 22.9181 1.76448 22.6775C1.5429 22.4369 1.45296 22.1032 1.52365 21.7839L2.13499 19.0222C2.15624 18.9262 2.1676 18.8744 2.17491 18.8363C2.17532 18.8342 2.17604 18.8303 2.17604 18.8303C2.17423 18.824 2.17193 18.8162 2.16905 18.8066C2.15258 18.7521 2.12837 18.6778 2.089 18.5573C1.87731 17.9093 1.76317 17.2171 1.76317 16.5Z"
                       fill="#266EFE"/>
                 <path
                    d="M5.64754 8.3726C6.42512 8.13071 7.25395 8 8.11788 8C12.8313 8 16.5001 11.8907 16.5001 16.5C16.5001 17.3136 16.3858 18.1049 16.1716 18.8563C16.7136 18.759 17.2393 18.6136 17.7438 18.4246C17.815 18.3979 17.886 18.3707 17.9579 18.3461C18.0159 18.3528 18.0737 18.3619 18.1315 18.3703L21.3444 18.8413C21.4961 18.8636 21.6682 18.8889 21.8182 18.8974C21.9843 18.9069 22.2426 18.9058 22.5162 18.7882C22.8579 18.6412 23.1328 18.3726 23.2876 18.0343C23.4115 17.7635 23.4185 17.5054 23.4129 17.3391C23.4078 17.1888 23.3865 17.0162 23.3677 16.864L22.9617 13.5661C22.9512 13.4804 22.9457 13.4354 22.9425 13.4024C22.9601 13.3301 22.9931 13.2602 23.0195 13.1909C23.3983 12.1979 23.6053 11.1219 23.6053 10C23.6053 5.02326 19.5461 1 14.5526 1C10.1169 1 6.4183 4.17483 5.64754 8.3726Z"
                    fill="#266EFE"/>
               </svg>
               <span>Chat</span>
             </button>
           
             <button style={{display: `${reqStatus === "cancelled" ? "flex" : "none"}`}}
                     className="reapplyBtn button-g">
               <span>Reapply</span>
             </button>
         
           </div>
         </div>
         <div style={{
           display: `${reqStatus !== "sending" ? reqStatus !== "gotResp" ? window.innerWidth <=992 && window.innerWidth >665 ? "flex" : "none" : "none" : "none"}`,
         }} className="headImgBlock G-flex">
           <div style={{backgroundImage: `url("${ImgSvg.serviceImg}")`}} className="imgBlock">
              <span className="G-flex G-align-center">
                <img src={ImgSvg.greenStar} alt=""/>
                4.9(88)
              </span>
           </div>
           <div style={{backgroundImage: `url("${ImgSvg.mapImg}")`}} className="mapBlock">
             <img src={ImgSvg.markerIcon} alt=""/>
           </div>
         </div>
       </div>
     
       <div className="requestStatusBlock">
         <div className="headerBlock G-flex">
           <img
              style={{backgroundColor: `${reqStatus === "cancelled" ? "rgba(255, 115, 115, 1)" : "rgba(38, 110, 254, 1)"}`}}
              src={reqStatus === "sending" ? ImgSvg.sendIcon : reqStatus === "gotResp" ? ImgSvg.messageCheck : reqStatus === "scheduled" ? ImgSvg.clockIcon : reqStatus === "inWork" ? ImgSvg.carIcon : reqStatus === "finished" ? ImgSvg.checked : reqStatus === "cancelled" ? ImgSvg.xCloseIcon : ImgSvg.sendIcon}
              alt=""/>
         
           <div className="headerTextBlock">
             <p className="header">{reqStatus === "sending" ? "Sending request" : reqStatus === "gotResp" ? "We got responses from the services" : reqStatus === "scheduled" ? "Scheduled 23 March, 11:00 " : reqStatus === "inWork" ? "In work" : reqStatus === "finished" ? "Finished" : reqStatus === "cancelled" ? "Cancelled" : "Sending request"}</p>
             <p style={{
               color         : `${reqStatus === "sending" ? "#AEAEAE" : reqStatus === "gotResp" ? "#00CC9A" : reqStatus === "scheduled" ? "#F39A31" : reqStatus === "inWork" ? "#F39A31" : reqStatus === "finished" ? "#00CC9A" : reqStatus === "cancelled" ? "#FF7373" : "#AEAEAE"}`,
               textDecoration: `${reqStatus === "finished" ? "underline" : "none"}`,
             }}
                className="underHeader">{reqStatus === "sending" ? "Waiting for a reply from the car service" : reqStatus === "gotResp" ? "Average price ~100€ " : reqStatus === "scheduled" ? "Appointment is scheduled " : reqStatus === "inWork" ? "Completion in 2 days" : reqStatus === "finished" ? "Leave a review" : reqStatus === "cancelled" ? "The request was canceled" : "Waiting for a reply from the car service"}</p>
           </div>
         </div>
         <div style={{display: `${reqStatus === "cancelled" ? "none" : "flex"}`}}
              className="progressBlock G-flex G-justify-between G-align-center">
           <div style={{backgroundColor: `${reqStatus === "finished" ? "#00CC9A" : "#266EFE"}`}}
                className="line"></div>
           <div
              style={{backgroundColor: `${reqStatus === "finished" ? "#00CC9A" : reqStatus !== "sending" ? reqStatus !== "gotResp" ? "#266EFE" : "#F1F4F8" : "#F1F4F8"}`}}
              className="line"></div>
           <div
              style={{backgroundColor: `${reqStatus === "finished" ? "#00CC9A" : reqStatus !== "inWork" ? "#F1F4F8" : "#266EFE"}`}}
              className="line"></div>
           <div style={{backgroundColor: `${reqStatus === "finished" ? "#00CC9A" : "#F1F4F8"}`}}
                className="line"></div>
         </div>
       
         <div style={{
           display: `${reqStatus !== "sending" ? reqStatus !== "gotResp" ? window.innerWidth <=665 ? "flex" : "none" : "none" : "none"}`,
         }} className="mobileImagesBlock headImgBlock  G-flex">
           <div style={{backgroundImage: `url("${ImgSvg.serviceImg}")`}} className="imgBlock">
              <span className="G-flex G-align-center">
                <img src={ImgSvg.greenStar} alt=""/>
                4.9(88)
              </span>
           </div>
           <div style={{backgroundImage: `url("${ImgSvg.mapImg}")`}} className="mapBlock">
             <img src={ImgSvg.markerIcon} alt=""/>
           </div>
         </div>
       
         <div style={{
           display: `${reqStatus !== "sending" ? reqStatus !== "gotResp" ? "none" : "flex" : "flex"}`,
         }} className="reqInfoBlock G-flex G-align-center">
         
           <div className="infoBlock">
             <p className="line">Car: <span>Citroen C5, 2005</span></p>
             <p className="line">City: <span>Rīga</span></p>
             <p className="line">Scheduled date: <span>23 March, 11:00</span></p>
           </div>
         
           <div className="smsBlock">
             <p className="smsPrg">I am writing to request your services for my car. I have been experiencing some
               issues with my vehicle and I believe it requires professional attention.</p>
             <div className="linksBlock G-flex G-align-center">
               <p className="link">Exhaust system repair</p>
               <p className="link">Engine diagnostic</p>
               <p className="link">Tow truck required</p>
             </div>
           </div>
       
         </div>
       
         <div style={{
           display: `${reqStatus !== "sending" ? reqStatus !== "gotResp" ? "flex" : "none" : "none"}`,
         }} className="serviceInfoBlock G-flex G-align-center G-justify-between">
           <div style={{backgroundImage: `url("${ImgSvg.serviceImg}")`}} className="imgBlock">
              <span className="G-flex G-align-center">
                <img src={ImgSvg.greenStar} alt=""/>
                4.9(88)
              </span>
           </div>
           <div className="infoBlock">
             <p className="serviceTextLine">Autofavorīts</p>
             <p className="serviceTextLine"><span>Location:</span>Brīvības iela 61, Centra rajons, Rīga, LV-1010</p>
             <p className="serviceTextLine"><span>Scheduled date:</span>23 March, 11:00</p>
           </div>
           <div style={{backgroundImage: `url("${ImgSvg.mapImg}")`}} className="mapBlock">
             <img src={ImgSvg.markerIcon} alt=""/>
           </div>
         </div>
       
       
         <div className="buttonsBlock underMobile G-flex">
         
           <button
              style={{display: `${reqStatus === "sending" ? "flex" : reqStatus === "gotResp" ? "flex" : "none"}`}}
              className="cancelBtn button-g">
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
               <path
                  d="M19.2071 6.70711C19.5976 6.31658 19.5976 5.68342 19.2071 5.29289C18.8166 4.90237 18.1834 4.90237 17.7929 5.29289L12.5 10.5858L7.20711 5.29289C6.81658 4.90237 6.18342 4.90237 5.79289 5.29289C5.40237 5.68342 5.40237 6.31658 5.79289 6.70711L11.0858 12L5.79289 17.2929C5.40237 17.6834 5.40237 18.3166 5.79289 18.7071C6.18342 19.0976 6.81658 19.0976 7.20711 18.7071L12.5 13.4142L17.7929 18.7071C18.1834 19.0976 18.8166 19.0976 19.2071 18.7071C19.5976 18.3166 19.5976 17.6834 19.2071 17.2929L13.9142 12L19.2071 6.70711Z"
                  fill="#AEAEAE"/>
             </svg>
             <span className="Cancel">Cancel</span>
           </button>
         
           <button
              style={{display: `${reqStatus === "sending" ? "flex" : reqStatus === "gotResp" ? "flex" : "none"}`}}
              className="editBtn button-g">Edit request
           </button>
         
           <button style={{display: `${reqStatus === "sending" ? "flex" : "none"}`}} className="loadBtn button-g">
             <img src={ImgSvg.loadIcon} className="loadImg" alt=""/>
           </button>
         
           <Link to={`/requests/responses/:${id}`} style={{display: `${reqStatus === "gotResp" ? "flex" : "none"}`}}
                   className="responsesBtn button-g">
             <span>44 responses</span>
           </Link>
         
           <button style={{display: `${reqStatus === "scheduled" ? "flex" : "none"}`}}
                   className="manageBtn button-g">
             <span>Manage</span>
           </button>
         
           <button style={{display: `${reqStatus === "finished" ? "flex" : "none"}`}}
                   className="leaveReviewBtn button-g">
             <span>Leave a review</span>
           </button>
         
           <button style={{display: `${reqStatus === "inWork" ? "flex" : "none"}`}} className="chatBtn button-g">
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
               <path fillRule="evenodd" clipRule="evenodd"
                     d="M1.76317 16.5C1.76317 12.9331 4.59172 10 8.13159 10C11.6715 10 14.5 12.9331 14.5 16.5C14.5 20.0669 11.6715 23 8.13159 23C7.40394 23 6.70298 22.875 6.04947 22.6444C5.94146 22.6063 5.87446 22.5827 5.82533 22.5664C5.81641 22.5635 5.80911 22.5611 5.80327 22.5593L5.79784 22.5599C5.76354 22.5637 5.71679 22.57 5.63013 22.5818L2.63533 22.9908C2.31127 23.0351 1.98606 22.9181 1.76448 22.6775C1.5429 22.4369 1.45296 22.1032 1.52365 21.7839L2.13499 19.0222C2.15624 18.9262 2.1676 18.8744 2.17491 18.8363C2.17532 18.8342 2.17604 18.8303 2.17604 18.8303C2.17423 18.824 2.17193 18.8162 2.16905 18.8066C2.15258 18.7521 2.12837 18.6778 2.089 18.5573C1.87731 17.9093 1.76317 17.2171 1.76317 16.5Z"
                     fill="#266EFE"/>
               <path
                  d="M5.64754 8.3726C6.42512 8.13071 7.25395 8 8.11788 8C12.8313 8 16.5001 11.8907 16.5001 16.5C16.5001 17.3136 16.3858 18.1049 16.1716 18.8563C16.7136 18.759 17.2393 18.6136 17.7438 18.4246C17.815 18.3979 17.886 18.3707 17.9579 18.3461C18.0159 18.3528 18.0737 18.3619 18.1315 18.3703L21.3444 18.8413C21.4961 18.8636 21.6682 18.8889 21.8182 18.8974C21.9843 18.9069 22.2426 18.9058 22.5162 18.7882C22.8579 18.6412 23.1328 18.3726 23.2876 18.0343C23.4115 17.7635 23.4185 17.5054 23.4129 17.3391C23.4078 17.1888 23.3865 17.0162 23.3677 16.864L22.9617 13.5661C22.9512 13.4804 22.9457 13.4354 22.9425 13.4024C22.9601 13.3301 22.9931 13.2602 23.0195 13.1909C23.3983 12.1979 23.6053 11.1219 23.6053 10C23.6053 5.02326 19.5461 1 14.5526 1C10.1169 1 6.4183 4.17483 5.64754 8.3726Z"
                  fill="#266EFE"/>
             </svg>
             <span>Chat</span>
           </button>
         
           <button style={{display: `${reqStatus === "cancelled" ? "flex" : "none"}`}}
                   className="reapplyBtn button-g">
             <span>Reapply</span>
           </button>
       
         </div>
     
     
       </div>
   
   
     </div>
  )
}

export default RequestBlock