import React, {useEffect, useState} from "react";
import "./viewWorkDialog.scss"
import {useDashboardContext} from "../dashboardContext";
import DialogStep1 from "./steps/dialogStep1";
import DialogStep2 from "./steps/dialogStep2";
import DialogStep3 from "./steps/dialogStep3";

function ViewWorkDialog () {
  const {viewWorkDialog, setViewWorkDialog, viewWorkDialogStep, setViewWorkDialogStep} = useDashboardContext()
  
  useEffect(()=>{
    let block = document.getElementById("dialogCont")
    block.scrollTo(0, 0)
    setViewWorkDialogStep(1)
  }, [viewWorkDialog])
  
  useEffect(() => {
    const handlePopstate = () => {
        setViewWorkDialog(false);
        setViewWorkDialogStep(1)
    };
    
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
  
  return(
     <div style={{display: `${viewWorkDialog ? "block" : "none"}`}} className="ViewWorkDialog">
        <div onClick={()=>{
          setViewWorkDialog(false)
        }} className="backgroundBlock"></div>
       
       
       <div id="dialogCont" className="dialogCont">
         {
           viewWorkDialogStep === 1 ? <DialogStep1/> :
              viewWorkDialogStep === 2 ? <DialogStep2/> :
                 viewWorkDialogStep === 3 ? <DialogStep3/> : <DialogStep1/>
         }
       </div>
     </div>
  )
}

export default ViewWorkDialog