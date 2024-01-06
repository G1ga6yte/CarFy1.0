import React from "react";
import "./businessBecomePartner.scss"

function BusinessBecomePartner (){
  return(
     <div className='businessBecomePartner'>
          <p className="header">It's easy to become <span>a partner</span></p>
       
       <div className="types G-flex-column">
         
         <div className="typeBlock G-align-center ">
           <div className="num">1</div>
           <p className="prg">Leave an application for connection, wait for a call from an employee</p>
         </div>
         <div className="typeBlock G-align-center">
           <div className="num">2</div>
           <p className="prg">Send the necessary documents and pass the minimum requirements check</p>
         </div>
         <div className="typeBlock G-align-center">
           <div className="num">3</div>
           <p className="prg">Get access to your personal account and start working with CarFy</p>
         </div>
         
         <button className="partnerBtn">Become a partner</button>
         
       </div>
     </div>
  )
}
export default BusinessBecomePartner