import React, {createContext, useContext, useState} from "react";
import {useLocation} from "react-router-dom";
const CartContext = createContext();

export const CartProvider = ({children}) => {
  
  function Call(el, el2){
    const locat = useLocation()
    return el === locat.pathname
  }
  const [dialog, setDialog] = useState(false)
  const handleDialog = () => {
    setDialog(!dialog)
  }
  
  
  return (<CartContext.Provider value={{
    Call, dialog, setDialog, handleDialog
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};