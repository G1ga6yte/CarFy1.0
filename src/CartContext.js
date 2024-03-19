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
  const [mapDialog, setMapDialog] = useState(false)
  const [partner, setPartner] = useState(true) // true - account off partner
  
  
  /////////////////Find Service //////////////////////////////
  const [findServiceStep, changeFindServiceStep] = useState(1)
  const [checkedServices, setCheckedServices] = useState([])
  function handleDeleteCheck (el){
    let x = checkedServices.filter((elem)=>{
      return el !== elem
    })
    setCheckedServices(x)
    if (x.length === 0){
    
    }
  }
  
  //////////////////Log In For Request //////////////////////////////
  const [activeRequestId, setActiveRequestId] = useState()
  const [logInStep, setLogInStep] = useState(1)
  const [activeLink, setActiveLink] = useState("AllRequests");
  //////////// sending, gotResp, scheduled, inWork, finished, cancelled /////////////
  const [reqStatus, setReqStatus] = useState("gotResp");
  
  ///////////////////request Confirmation ///////////////////////
  const [confirmationDialog, setConfirmationDialog] = useState(false)
  const [reviewBlock, setReviewBlock] = useState(false)
  
  
  
  
  
  return (<CartContext.Provider value={{
    Call, dialog, setDialog, handleDialog, typeLogIn,
    setTypeLogIn,authorization, setAuthorization,
    findServiceStep, changeFindServiceStep,
    checkedServices, setCheckedServices, handleDeleteCheck,
    logInStep, setLogInStep,
    activeLink, setActiveLink,reqStatus, setReqStatus,
    confirmationDialog, setConfirmationDialog,
    reviewBlock, setReviewBlock,
    activeRequestId, setActiveRequestId,
    mapDialog, setMapDialog, partner, setPartner
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};