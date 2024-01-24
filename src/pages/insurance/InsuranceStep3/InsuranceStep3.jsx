import React from "react";
import "./InsuranceStep3.scss"
import {Link} from "react-router-dom";
import {InsuranceSvg} from "../insuranceSvg/insuranceSvg";
import {ImgSvg} from "./img-svg/img-svg";

function InsuranceStep3 (){
  let Arr = [...Array(7)]
  
  
  return(
     <div className="InsuranceStep3 G-container">
       <p className="header">Registration of insurance <span>online</span></p>

       
       <div className="RegCont">
         
         <div className="pageInfo">
           <Link className="linkToSTep1 G-align-center" to="/insurance/step2"><img src={InsuranceSvg.arrowLeft}
                                                                             alt=""/>Back</Link>
           <p className="VehicleInfo">Offers:</p>
           <span className="clearRefresh G-align-center"><img src={InsuranceSvg.clearIcon} alt=""/>Clear</span>
           <div className="pagesOrdinary G-flex">
             <span className="page  G-align-center"><span>1</span>Questionnaire</span>
             <span className="page G-align-center"><span>2</span>Registration</span>
             <span className="page G-align-center"><span>3</span>Offers</span>
           </div>
         </div>
         
         <div className="TableBlock">
           
           <div className="headersBlocks">
             <div className="headerBlock">
               <p className="type">Company</p>
             </div>
             <div className="headerBlock">
               <p className="type">One-time payment</p>
               <p className="desc2">Most advantageous</p>
             </div>
             <div className="headerBlock">
               <p className="type">In 2 Installments </p>
               <p className="desc1">1st + 2nd  = total</p>
             </div>
             <div className="headerBlock">
               <p className="type">In 3 Installments </p>
               <p className="desc1">1st + 2nd + 3rd = total</p>
             </div>
             <div className="headerBlock">
               <p className="type">In 4 Installments </p>
               <p className="desc1">1st + 2nd + 3rd + 4th = total</p>
             </div>
           </div>
  
           {Arr.map((index)=>{
             return(
                <div className="companyBlock">
                  <div className="eachBlock">
                    <img src={ImgSvg.company1} alt=""/>
                    <span className="CompanyName">Bull Ins</span>
                    <span className="Details">Details <img src={ImgSvg.arrowDown} alt=""/></span>
                  </div>
                  
                  <div className="eachBlock">
                    <p className="typeTablet">One-time payment</p>
                    <span className="desc2">283.00</span>
                    <span className="link">Choose <img src={ImgSvg.arrowRight} alt=""/></span>
                  </div>
  
                  <div className="eachBlock">
                    <p className="typeTablet">In 2 Installments</p>
                    <span className="des1">151.50 135.50</span>
                    <span className="desc2">287.00</span>
                    <span className="link">Choose <img src={ImgSvg.arrowRight} alt=""/></span>
                  </div>
  
                  <div className="eachBlock">
                    <p className="typeTablet">In 3 Installments</p>
                    <span className="des1">96.60 96.60 96.60</span>
                    <span className="desc2">290.00</span>
                    <span className="link">Choose <img src={ImgSvg.arrowRight} alt=""/></span>
                  </div>
  
                  <div className="eachBlock">
                    <p className="typeTablet">In 4 Installments</p>
                    <span className="des1">73.70 73.70 73.70 73.70</span>
                    <span className="desc2">295.00</span>
                    <span className="link">Choose <img src={ImgSvg.arrowRight} alt=""/></span>
                  </div>


                  
                </div>
             )
           })}
           
           
         </div>
         
         
         
       </div>
     </div>
  )
}

export default InsuranceStep3