import React, {useState} from "react";
import FindServiceStep1 from "./findServiceStep1/findServiceStep1";
import FindServiceStep2 from "./findServiceStep2/findServiceStep2";
import FindServiceStep3 from "./findServiceStep3/findServiceStep3";
import {useCartContext} from "../../CartContext";


function FindService (){
const {findServiceStep} = useCartContext()
  
  function Steps (){
    switch(findServiceStep){
      case 1: return <FindServiceStep1/>
      case 2: return <FindServiceStep2/>
      case 3: return <FindServiceStep3/>
    }
  }
  
  return(
     <div className="FindService">
       <Steps/>
     </div>
  )
}

export default FindService