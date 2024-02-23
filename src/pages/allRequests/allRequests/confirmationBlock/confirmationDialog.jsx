import React, {useEffect} from "react";
import {useCartContext} from "../../../../CartContext";
import "./confirmationDialog.scss"
import "./confirmationGlobal.scss"
import ConfirmationGlobalBlock from "./confirmationGlobalBlock";

function ConfirmationDialog (){
  const {confirmationDialog, setConfirmationDialog} = useCartContext()
  useEffect(() => {
    const handlePopstate = () => {
      setConfirmationDialog(false);
    };
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
  
  return(
     <div  style={{display: `${confirmationDialog ? "block" : "none"}`}} className="ConfirmationDialog">
       <div onClick={()=>{
         setConfirmationDialog(false)
       }} className="backgroundDiv">
       </div>
       
       <div className="confirmationCont dialogBlock">
         <ConfirmationGlobalBlock/>
       </div>
       
     </div>
  )
}

export default ConfirmationDialog