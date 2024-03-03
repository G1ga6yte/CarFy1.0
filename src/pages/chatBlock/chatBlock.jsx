import React, {useEffect, useRef, useState} from "react";
import {Images} from "./images/images";
import "./chatBlock.scss"

function ChatBlock (){
  const arr = Array.apply(null, Array(15))
  const [activeChat, setActiveChat] = useState(0)
  const [tabletChat, setTabletChat] = useState(false)
  
  const containerRef = useRef(null);
 
  const scrollToBottom = () => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
    window.scrollTo(0, 250)
  }, [scrollToBottom]);
  useEffect(()=>{
    if (window.innerWidth <= 992){
      setTabletChat(false)
      setActiveChat(999)
    }
  }, [])
  
  return(
     <div className="ChatBlock G-container G-flex">
       <div className="headerBlock1">
         <p style={{display: `${window.innerWidth <=992 ? tabletChat ? "none" : "block" : "block"}`}} className="header">Message</p>
         <div onClick={()=>{
           setTabletChat(false)
           setActiveChat(999)
           scrollToBottom()
         }} style={{display: `${window.innerWidth <=992 ? tabletChat ? "flex" : "none" : "none"}`}} className="backBtn G-flex G-align-center">
           <img src={Images.chevronLeft} alt=""/>
           Back
         </div>
       </div>
       
       <div style={{display: `${window.innerWidth <=992 ? tabletChat ? "none" : "flex" : "flex"}`}} className="usersCont G-flex G-flex-column G-justify-between">
         
         <div className="searchInputBlock">
           <img src={Images.searchIcon} className="searchIcon" alt=""/>
           <input type="text" className="searchInput" placeholder="Search"/>
         </div>
         
         <div className="allUsersBlock">
           {arr.map((el, index)=>{
             return(
                <div onClick={()=>{
                  setActiveChat(index)
                  setTabletChat(true)
                }} className={`userBlock G-flex ${activeChat === index ? "activeBlock" : ""}`}>
                  <div style={{backgroundImage: `url("${Images.serviceImg}")`}} className="serviceImg"></div>
                  <div className="textBlock">
                    <div className="headText G-flex G-justify-between G-align-center">
                      <p className="serviceName">Autofavorīts</p>
                      <p className="messageCount">2</p>
                      <p className="date">05 August</p>
                    </div>
                    <p className="lastMessage">Hi, Kris. Hope you’re doing work on my car that i need!</p>
                  </div>
                </div>
             )
           })}
         </div>
         
       </div>
       
       <div style={{display: `${window.innerWidth <=992 ? tabletChat ? "block" : "none" : "block"}`}} className="chatCont">
          <div className="headerBlock G-flex G-justify-between">
            <div className="serviceInfo G-flex G-align-center">
              <img src={Images.serviceImg} className="serviceImg" alt=""/>
              <div className="textBlock">
                <p className="serviceName">Autofavorīts</p>
                <p className="statusTyping">Typing...</p>
              </div>
            </div>
            <button disabled={true} className="enrollBtn">Enroll</button>
          </div>
         
         <div ref={containerRef} id="messageBlock" className="messagesBlock">
           
           <div className="dateBlock">Today, 05 August</div>
           
           <div className="userMessage messageStyle">
             <p className="messageBlock">Hello!</p>
           </div>
           
           <div className="partnerMessage messageStyle">
             <div style={{backgroundImage: `url("${Images.serviceImg}")`}} className="serviceImg"/>
             <p className="messageBlock">Hi! Welcome to our service!</p>
           </div>
  
           <div className="userMessage messageStyle">
             <p className="messageBlock">I need to find service, can you help me with  that question?</p>
           </div>
  
           <div className="partnerMessage messageStyle">
             <div  style={{backgroundImage: `url("${Images.serviceImg}")`}} className="serviceImg" />
             <p className="messageBlock">Great, what type of service do you need? An oil change, tire rotation, or something else?</p>
           </div>
  
           <div className="userMessage messageStyle">
             <p className="messageBlock">I need an oil change and a tire rotation.</p>
           </div>
  
           <div className="partnerMessage messageStyle">
             <div  style={{backgroundImage: `url("${Images.serviceImg}")`}} className="serviceImg" />
             <p className="messageBlock">Alright, let me check our availability. How does next Wednesday at 10:00 sound?</p>
           </div>
  
           <div className="userMessage messageStyle">
             <p className="messageBlock">That works for me</p>
           </div>
  
           <div className="partnerMessage messageStyle messageReq">
             <div  style={{backgroundImage: `url("${Images.serviceImg}")`}} className="serviceImg" />
             <div className="request">
               <div className="requestHeaderBlock G-flex">
                 <div style={{backgroundImage: `url("${Images.serviceImg}")`}} className="serviceImgReq"></div>
                 <div className="textBlockReq">
                   <p className="serviceName">Autofavorīts</p>
                   <p className="serviceAddress">Brīvības iela 61, Centra rajons, Rīga, LV-1010</p>
                 </div>
               </div>
               
               <div className="requestMainBlock">
                 <p className="typeOfWork">Exhaust system repair</p>
                 <div className="infoLine G-flex G-align-center G-justify-between">
                   <span className="reqSpan">Total amount</span>
                   <span className="reqSpan reqVal">100€</span>
                 </div>
                 <div className="infoLine G-flex G-align-center G-justify-between">
                   <span className="reqSpan">Date</span>
                   <span className="reqSpan reqVal">6 August</span>
                 </div>
                 
                 <div className="buttonsBlock G-flex G-justify-between">
                   <button className="cancelBtn">Cancel</button>
                   <button className="bookBtn">Book</button>
                 </div>
               </div>
               
             </div>
           </div>
  
           
         </div>
         
         
         <div className="inputCont">
           <div className="inputBlock">
             <label className="setFile" htmlFor="addFile">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M10.1667 3C8.69391 3 7.5 4.19391 7.5 5.66667V16.5C7.5 18.9853 9.51472 21 12 21C14.4853 21 16.5 18.9853 16.5 16.5V5.25581C16.5 4.70353 16.9477 4.25581 17.5 4.25581C18.0523 4.25581 18.5 4.70353 18.5 5.25581V16.5C18.5 20.0899 15.5899 23 12 23C8.41015 23 5.5 20.0899 5.5 16.5V5.66667C5.5 3.08934 7.58934 1 10.1667 1C12.744 1 14.8333 3.08934 14.8333 5.66667V16.4457C14.8333 18.0105 13.5648 19.2791 12 19.2791C10.4352 19.2791 9.16667 18.0105 9.16667 16.4457V6.65116C9.16667 6.09888 9.61438 5.65116 10.1667 5.65116C10.719 5.65116 11.1667 6.09888 11.1667 6.65116V16.4457C11.1667 16.906 11.5398 17.2791 12 17.2791C12.4602 17.2791 12.8333 16.906 12.8333 16.4457V5.66667C12.8333 4.19391 11.6394 3 10.1667 3Z" fill="#266EFE"/>
               </svg>
             </label>
  
             <input type="text" className="chatInput" placeholder="Type a message"/>
  
             <button className="sendBtn">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M21.5946 1.4575C21.1988 1.32529 20.8303 1.4209 20.6472 1.47411C20.4475 1.5321 20.2096 1.625 19.9709 1.7182L3.0138 8.3356C2.74697 8.43969 2.48852 8.54051 2.28905 8.63914C2.11669 8.72436 1.75035 8.91405 1.54586 9.30766C1.32036 9.74172 1.32067 10.2585 1.54668 10.6923C1.75163 11.0856 2.11819 11.2749 2.29065 11.3599C2.49023 11.4583 2.74875 11.5588 3.0157 11.6626L7.73572 13.4981C8.08784 13.6351 8.2639 13.7035 8.43905 13.7077C8.59387 13.7115 8.74744 13.6792 8.88765 13.6134C9.04628 13.539 9.17985 13.4054 9.447 13.1383L14.2924 8.29289C14.6829 7.90237 15.3161 7.90237 15.7066 8.29289C16.0971 8.68342 16.0971 9.31658 15.7066 9.70711L10.8612 14.5525C10.5941 14.8197 10.4605 14.9532 10.3861 15.1119C10.3203 15.2521 10.2881 15.4056 10.2918 15.5605C10.296 15.7356 10.3644 15.9117 10.5014 16.2638L12.3369 20.9837C12.4407 21.2507 12.5412 21.5093 12.6396 21.7089C12.7246 21.8813 12.9139 22.2479 13.3072 22.4528C13.741 22.6788 14.2578 22.6791 14.6919 22.4536C15.0855 22.2492 15.2751 21.8828 15.3604 21.7105C15.459 21.511 15.5598 21.2526 15.6639 20.9858L22.2813 4.02861C22.3745 3.7899 22.4674 3.55198 22.5254 3.35235C22.5786 3.16916 22.6742 2.8007 22.542 2.40493C22.3926 1.95779 22.0417 1.60688 21.5946 1.4575Z" fill="#266EFE"/>
               </svg>
             </button>
             
           </div>
         </div>
       </div>
     </div>
  )
}

export default ChatBlock