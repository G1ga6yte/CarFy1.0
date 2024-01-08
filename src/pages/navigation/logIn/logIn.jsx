import React, {useState} from "react";
import "./logIn.scss";
import {useNavigate} from "react-router-dom";
import {LoginImg} from "./ImgSvg/loginImg";
import SignUpClient from "./SignUpClient";
import SignInClient from "./SignInClient";
import {useCartContext} from "../../../CartContext";
import SignInPartner from "./SignInPartner";

function LogIn() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  

  const {typeLogIn, setTypeLogIn} = useCartContext()
  function Main (){
    if (typeLogIn === "SignUp"){
      return <SignUpClient/>
    } else if (typeLogIn === "SignIn"){
      return <SignInClient/>
    } else if (typeLogIn === "SignInPartner"){
      return <SignInPartner/>
    }
  }
  
  return (
     <div className="LogInCont G-container">
       
       <img className="backButton" src={LoginImg.chevronLeft} onClick={goBack} alt=""/>
  
       {Main()}
       
     
     </div>
  );
}

export default LogIn;
