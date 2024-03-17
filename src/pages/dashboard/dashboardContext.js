import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const DashboardContext = createContext();

export const DashboardProvider = ({children}) => {
  const {t, i18n} = useTranslation()
  
  /////////////////Main /////////////////////////
  const location = useLocation()
  const [activePage, setActivePage] = useState("Home")
  
  
  
  
  
  
  
  useEffect(()=>{
    if (location.pathname.includes("requests&history")){
      setActivePage("Requests History")
    }
    if (location.pathname.includes("balance")){
      setActivePage("Balance")
    }
    if (location.pathname.includes("emergency")){
      setActivePage("Emergency")
    }
    if (location.pathname.includes("requests")){
      setActivePage("Request")
    }
    if (location.pathname.includes("stock")){
      setActivePage("Stock")
    }
    if (location.pathname.includes("cart")){
      setActivePage("Cart")
    }
    if (location.pathname.includes("checkout")){
      setActivePage("Checkout")
    }
    
    
    
  }, [])
  
  
  ///////////////////Calendar ////////////////////
  const [value, setValue] = useState(new Date());
  function handleChangeDate(event) {
    setValue(event);
  }
  
  
  ///////////////////View Work Dialog ////////////////////
  const [viewWorkDialog, setViewWorkDialog] = useState(false)
  const [viewWorkDialogStep, setViewWorkDialogStep] = useState(1)
  
  
  //////////////////History Request Details ///////////////////////
  const [historyDetailsDialog, setHistoryDetailsDialog] = useState(false)
  
  
  
  /////////////////Order Block ////////////////////////////
  const [orderState, setOrderState] = useState("home")
  // home, history, emergency
  
  
  /////////////////Category //////////////////////////////
  const [categoryPathPrg, setCategoryPathPrg] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedItemName, setSelectedItemName] = useState("")
  
  
  
  
  
  /////////////////Cart /////////////////////////////////////
  
  
  return (<DashboardContext.Provider value={{
    activePage, setActivePage, value, setValue, handleChangeDate,
    viewWorkDialog, setViewWorkDialog, viewWorkDialogStep, setViewWorkDialogStep,
    historyDetailsDialog, setHistoryDetailsDialog, orderState, setOrderState,
    categoryPathPrg, setCategoryPathPrg, selectedCategory, setSelectedCategory,
    selectedItemName, setSelectedItemName
  }}>
    {children}
  </DashboardContext.Provider>);
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};