import React from "react";
import "./errorBlock.scss"
import errorImg from "./404 1.png"
import {Link} from "react-router-dom";
function ErrorBlock (){
  return(
     <div className="ErrorBlock G-flex G-flex-column G-align-center">
       <img src={errorImg} alt=""/>
       <p className="header">We have lost this page</p>
       <Link className="homeLink" to="/home">Main page</Link>
     </div>
  )
}

export default ErrorBlock