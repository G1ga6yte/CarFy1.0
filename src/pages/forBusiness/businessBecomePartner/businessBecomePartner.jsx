import React from "react";
import "./businessBecomePartner.scss"
import {useTranslation} from "react-i18next";

function BusinessBecomePartner (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className='businessBecomePartner'>
          <p className="header">{t('business.header71')} <span>{t('business.header72')}</span></p>
       
       <div className="types G-flex-column">
         
         <div className="typeBlock G-align-center ">
           <div className="num">1</div>
           <p className="prg">{t('business.prg71')}</p>
         </div>
         <div className="typeBlock G-align-center">
           <div className="num">2</div>
           <p className="prg">{t('business.prg72')}</p>
         </div>
         <div className="typeBlock G-align-center">
           <div className="num">3</div>
           <p className="prg">{t('business.prg73')}</p>
         </div>
         
         <button className="partnerBtn">{t('business.btn71')}</button>
         
       </div>
     </div>
  )
}
export default BusinessBecomePartner