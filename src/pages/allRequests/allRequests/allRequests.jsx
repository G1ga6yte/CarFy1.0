import React from "react";
import {useCartContext} from "../../../CartContext";
import "./allRequests.scss";
import RequestBlock from "./requestBlock/requestBlock";

function AllRequests() {
  const {activeLink, setActiveLink, reqStatus, setReqStatus} = useCartContext();
  
  
  return (
     <div className="listBlock G-container G-flex G-flex-column">
       
       <RequestBlock reqstatus={reqStatus}/>
       <RequestBlock reqstatus={reqStatus}/>
     
     
     </div>
  );
}

export default AllRequests;