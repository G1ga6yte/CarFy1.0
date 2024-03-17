import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Images} from "./images/images";
import "./cartBlock.scss"
import CartItemBlock from "./cartItemBlock";
import OrderedItem from "./orderedItem";


function CartBlock (){
  const {t, i18n} = useTranslation()
  const [cartItemsCount, setCartItemsCount] = useState(3)
  const [cartItemCheckbox, setCartItemsCheckbox] = useState({});
  const [allCheckbox, setAllCheckbox] = useState(false)
  
  const [ordered, setOrdered] = useState(2)
  
  useEffect(()=>{
    let x = {}
    let y = []
    for (let i = 0; i < cartItemsCount; i++) {
      y.push(`checkbox${i+1}`)
    }
    for (let i = 0; i < cartItemsCount; i++) {
      x[`${y[i]}`]= false
    }
    let z = []
    for (let i = 0; i < cartItemsCount; i++) {
      z.push(0)
    }
    
    
    setCartItemsCheckbox(x)
  }, [])
  
  function handleCheckAll() {
    if (!allCheckbox){
      const clearedFilters = Object.keys(cartItemCheckbox).reduce((acc, filterName) => {
        acc[filterName] = true;
        return acc;
      }, {});
      setCartItemsCheckbox(clearedFilters);
      setAllCheckbox(true)
    } else {
      const clearedFilters = Object.keys(cartItemCheckbox).reduce((acc, filterName) => {
        acc[filterName] = false;
        return acc;
      }, {});
      setCartItemsCheckbox(clearedFilters);
      setAllCheckbox(false)
    }
  }
  
  const updateFilter = (filterName, value) => {
    setAllCheckbox(false)
    setCartItemsCheckbox((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };
  
  
  return(
     <div className="CartBlock">
       <Link to="/partner/stock" className="backBtn">
         <img src={Images.chevronLeft} alt=""/>
         {t("cart.back")}
       </Link>
       
       
       <div className="mainCont">
         
         <div style={{display: `${cartItemsCount >= 1 ? "block" : "none"}`}} className="cartBlock">
           <div className="headerBlock G-flex G-align-center G-justify-between">
             <label className="labelInput G-flex G-align-center" htmlFor="CartItem1">
               <input  type="checkbox" id="CartItem1" checked={allCheckbox} onChange={handleCheckAll}/>
               {t("cart.miniHeader2")}
             </label>
             
             <p className="headerPrg">{t("cart.prg1")}</p>
           </div>
  
           {Array.from({length: cartItemsCount}, (_, index)=>(
              <CartItemBlock
                 checked={cartItemCheckbox[`checkbox${index+1}`]}
                 checkboxIndex={index+1}
                 handleInputChange={updateFilter}
              />
           ))}
           
           
           
           <div className="underPrg">
             {t("cart.prg21")}
             <span>{t("cart.prg22")}</span>
           </div>
           
           <div className="totalPriceBlock">
             <div className="itemsCountBlock G-flex G-align-center G-justify-between">
               <p className="itemPrg">3 {t("cart.items")} 15.4 kg</p>
               <p className="itemPrg">2000€</p>
             </div>
             <div className="savingBlock G-flex G-align-center G-justify-between">
               <p className="itemPrg">{t("cart.redPrg")}</p>
               <p className="itemPrg">-950€</p>
             </div>
             <div className="totalBlock G-flex G-align-center G-justify-between">
               <p className="itemPrg">{t("cart.total")}</p>
               <p className="itemPrg">2000€</p>
             </div>
           </div>
  
           <Link to="/partner/checkout" className="checkoutBtn">{t("cart.btn2")}</Link>
           
          
         </div>
         
         <div style={{display: `${cartItemsCount < 1 ? "flex" : "none"}`}} className="emptyCartBlock">
          <p className="miniHeader">{t("cart.miniHeader1")}</p>
           <img src={Images.emptyImg} alt=""/>
           <Link to="/partner/stock" className="emptyBtn">
             {t("cart.btn1")}
           </Link>
         </div>
         
       </div>
       
       <div style={{display: `${ordered > 0 ? "block" : "none"}`}} className="OrderedBlock">
         <p className="header">{t("cart.ordered")}</p>
  
         {Array.from({length:  ordered}, (_, index)=>(
            <OrderedItem/>
         ))}
         
       </div>
       
     </div>
  )
}

export default CartBlock