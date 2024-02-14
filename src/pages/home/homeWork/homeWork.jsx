import React from "react";
import "./homeWork.scss"
import {HomeImg} from "../images/homeImg";
import {useTranslation} from "react-i18next";


function HomeWork (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="HomeWork G-flex-column G-align-center">
        <p className="header">{t('home.header11')}</p>
       
       <div className="workingCont G-justify-center G-align-center">
          <div className="workingLine G-flex-column">
              <div className="workingItem G-flex-column">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7 23.5671C7 11.9692 16.402 2.56714 28 2.56714C39.598 2.56714 49 11.9692 49 23.5671C49 29.4616 46.3241 34.6277 42.682 39.3568C39.6386 43.3086 35.7428 47.1707 31.8515 51.0282L31.8488 51.0309C31.1137 51.7596 30.3789 52.4881 29.6499 53.2171C28.7387 54.1283 27.2613 54.1283 26.3501 53.2171C25.6206 52.4876 24.8836 51.7569 24.148 51.0278C20.2568 47.1702 16.3614 43.3087 13.318 39.3568C9.67594 34.6277 7 29.4616 7 23.5671ZM35 23.5671C35 27.4331 31.866 30.5671 28 30.5671C24.134 30.5671 21 27.4331 21 23.5671C21 19.7011 24.134 16.5671 28 16.5671C31.866 16.5671 35 19.7011 35 23.5671Z" fill="#676D75"/>
                </svg>
                <p className="name">{t('home.miniHeader111')}</p>
                <p className="prg">{t('home.prg111')}</p>
                
              </div>
  
            <div className="workingItem G-flex-column">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M39.668 4.90047C39.668 3.61181 38.6233 2.56714 37.3346 2.56714C36.046 2.56714 35.0013 3.61181 35.0013 4.90047V7.23381H21.0013V4.90047C21.0013 3.61181 19.9566 2.56714 18.668 2.56714C17.3793 2.56714 16.3346 3.61181 16.3346 4.90047V7.2376C15.2252 7.24523 14.2556 7.26814 13.4137 7.33693C12.1022 7.44409 10.8965 7.67407 9.76406 8.25108C8.00788 9.1459 6.58006 10.5737 5.68525 12.3299C5.10823 13.4623 4.87825 14.668 4.77109 15.9795C4.66792 17.2423 4.66794 18.7925 4.66797 20.6707V40.4635C4.66794 42.3418 4.66792 43.892 4.77109 45.1547C4.87825 46.4663 5.10823 47.6719 5.68525 48.8044C6.58006 50.5606 8.00788 51.9884 9.76406 52.8832C10.8965 53.4602 12.1022 53.6902 13.4137 53.7974C14.6765 53.9005 16.2266 53.9005 18.1049 53.9005H37.8977C39.776 53.9005 41.3261 53.9005 42.5889 53.7974C43.9005 53.6902 45.1061 53.4602 46.2385 52.8832C47.9947 51.9884 49.4225 50.5606 50.3174 48.8044C50.8944 47.6719 51.1244 46.4663 51.2315 45.1547C51.3347 43.892 51.3347 42.3418 51.3346 40.4636V20.6707C51.3347 18.7925 51.3347 17.2423 51.2315 15.9795C51.1244 14.668 50.8944 13.4623 50.3174 12.3299C49.4225 10.5737 47.9947 9.1459 46.2385 8.25108C45.1061 7.67407 43.9005 7.44409 42.5889 7.33693C41.747 7.26814 40.7774 7.24523 39.668 7.2376V4.90047ZM16.3346 14.2338V11.9046C15.2951 11.9119 14.4788 11.9321 13.7937 11.9881C12.7708 12.0717 12.2476 12.2232 11.8827 12.4091C11.0046 12.8565 10.2907 13.5704 9.84328 14.4485C9.65733 14.8135 9.50584 15.3366 9.42226 16.3596C9.33645 17.4098 9.33464 18.7685 9.33464 20.7671V21.2338H46.668V20.7671C46.668 18.7685 46.6662 17.4098 46.5803 16.3596C46.4968 15.3366 46.3453 14.8135 46.1593 14.4485C45.7119 13.5704 44.998 12.8565 44.1199 12.4091C43.755 12.2232 43.2318 12.0717 42.2089 11.9881C41.5238 11.9321 40.7075 11.9119 39.668 11.9046V14.2338C39.668 15.5225 38.6233 16.5671 37.3346 16.5671C36.046 16.5671 35.0013 15.5225 35.0013 14.2338V11.9005H21.0013V14.2338C21.0013 15.5225 19.9566 16.5671 18.668 16.5671C17.3793 16.5671 16.3346 15.5225 16.3346 14.2338ZM28.0013 28.2338C29.29 28.2338 30.3346 29.2785 30.3346 30.5671V35.2338H35.0013C36.29 35.2338 37.3346 36.2785 37.3346 37.5671C37.3346 38.8558 36.29 39.9005 35.0013 39.9005H30.3346V44.5671C30.3346 45.8558 29.29 46.9005 28.0013 46.9005C26.7126 46.9005 25.668 45.8558 25.668 44.5671V39.9005H21.0013C19.7126 39.9005 18.668 38.8558 18.668 37.5671C18.668 36.2785 19.7126 35.2338 21.0013 35.2338H25.668V30.5671C25.668 29.2785 26.7126 28.2338 28.0013 28.2338Z" fill="#676D75"/>
              </svg>
              <p className="name">{t('home.miniHeader112')}</p>
              <p className="prg">{t('home.prg112')}</p>
  
            </div>
            
          </div>
  
         <img src={HomeImg.workingImg} alt=""/>
  
         <div className="workingLine G-flex-column">
           <div className="workingItem G-flex-column">
             <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
               <path fillRule="evenodd" clipRule="evenodd" d="M41.6246 4.90064H14.378C13.1481 4.9006 12.0869 4.90056 11.2129 4.97197C10.2904 5.04734 9.37293 5.21374 8.49004 5.6636C7.17291 6.33471 6.10204 7.40557 5.43093 8.72271C4.98108 9.60559 4.81467 10.5231 4.7393 11.4456C4.6679 12.3196 4.66793 13.3806 4.66797 14.6106V41.8572C4.66793 43.0872 4.6679 44.1484 4.7393 45.0224C4.81467 45.9448 4.98108 46.8624 5.43093 47.7452C6.10204 49.0624 7.17291 50.1332 8.49004 50.8043C9.37293 51.2542 10.2904 51.4206 11.2129 51.496C12.0869 51.5674 13.148 51.5673 14.378 51.5673H41.6246C42.8546 51.5673 43.9157 51.5674 44.7897 51.496C45.7122 51.4206 46.6297 51.2542 47.5126 50.8043C48.8297 50.1332 49.9006 49.0624 50.5717 47.7452C51.0215 46.8624 51.1879 45.9448 51.2633 45.0224C51.3347 44.1484 51.3347 43.0873 51.3346 41.8573V14.6107C51.3347 13.3807 51.3347 12.3196 51.2633 11.4456C51.1879 10.5231 51.0215 9.60559 50.5717 8.72271C49.9006 7.40557 48.8297 6.33471 47.5126 5.6636C46.6297 5.21374 45.7122 5.04734 44.7897 4.97197C43.9157 4.90056 42.8546 4.9006 41.6246 4.90064ZM26.3514 17.2507C27.2626 16.3395 28.74 16.3395 29.6512 17.2507L38.9846 26.5841C39.8958 27.4953 39.8958 28.9727 38.9846 29.8839L29.6512 39.2172C28.74 40.1284 27.2626 40.1284 26.3514 39.2172C25.4402 38.306 25.4402 36.8286 26.3514 35.9174L31.7015 30.5673H18.668C17.3793 30.5673 16.3346 29.5226 16.3346 28.234C16.3346 26.9453 17.3793 25.9006 18.668 25.9006H31.7015L26.3514 20.5506C25.4402 19.6393 25.4402 18.1619 26.3514 17.2507Z" fill="#676D75"/>
             </svg>
             <p className="name">{t('home.miniHeader113')}</p>
             <p className="prg">{t('home.prg113')}</p>
    
           </div>
    
           <div className="workingItem G-flex-column">
             <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
               <path fillRule="evenodd" clipRule="evenodd" d="M11.668 9.5673C10.3793 9.5673 9.33464 10.612 9.33464 11.9006C9.33464 13.1893 10.3793 14.234 11.668 14.234L44.3346 14.234C48.2006 14.234 51.3346 17.368 51.3346 21.234V44.5673C51.3346 48.4333 48.2006 51.5673 44.3346 51.5673H11.668C7.80197 51.5673 4.66797 48.4333 4.66797 44.5673V11.9006C4.66797 8.03464 7.80198 4.90063 11.668 4.90063H39.668C40.9566 4.90063 42.0013 5.9453 42.0013 7.23397C42.0013 8.52263 40.9566 9.5673 39.668 9.5673H11.668ZM38.5013 29.4006C36.5683 29.4006 35.0013 30.9676 35.0013 32.9006C35.0013 34.8336 36.5683 36.4006 38.5013 36.4006C40.4343 36.4006 42.0013 34.8336 42.0013 32.9006C42.0013 30.9676 40.4343 29.4006 38.5013 29.4006Z" fill="#676D75"/>
             </svg>
             <p className="name">{t('home.miniHeader114')}</p>
             <p className="prg">{t('home.prg114')}</p>
    
           </div>
  
         </div>
       </div>
     </div>
  )
}

export default HomeWork