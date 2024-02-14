import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
const CartContext = createContext();

export const CartProvider = ({children}) => {
  ///////////////Navigation Settings ////////////////
  function Call(el, el2){
    const locat = useLocation()
    return el === locat.pathname
  }
  
  //////////////Mobile Dialog ///////////////////
  const [dialog, setDialog] = useState(false)
  useEffect(()=>{
    if (window.innerWidth <=992){
      setDialog(true)
    }
  }, [window.innerWidth])
  const handleDialog = () => {
    setDialog(!dialog)
  }
  
  ///////////////Authorization Settings ///////////////////////
  const [authorization, setAuthorization] = useState(true)
  const [typeLogIn, setTypeLogIn] = useState("SignUp");
  
  
  /////////////////Find Service //////////////////////////////
  const [findServiceStep, changeFindServiceStep] = useState(1)
  const [checkedServices, setCheckedServices] = useState([])
  
  
  
  return (<CartContext.Provider value={{
    Call, dialog, setDialog, handleDialog, typeLogIn,
    setTypeLogIn,authorization, setAuthorization,
    findServiceStep, changeFindServiceStep,
    checkedServices, setCheckedServices
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};