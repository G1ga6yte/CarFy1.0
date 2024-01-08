import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
const CartContext = createContext();

export const CartProvider = ({children}) => {
  
  function Call(el, el2){
    const locat = useLocation()
    return el === locat.pathname
  }
  const [dialog, setDialog] = useState(false)
  
  useEffect(()=>{
    if (window.innerWidth <=992){
      setDialog(true)
    }
  }, [window.innerWidth])
  
  const handleDialog = () => {
    setDialog(!dialog)
  }
  
  const [typeLogIn, setTypeLogIn] = useState("SignUp");
  
  
  
  return (<CartContext.Provider value={{
    Call, dialog, setDialog, handleDialog, typeLogIn, setTypeLogIn
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};