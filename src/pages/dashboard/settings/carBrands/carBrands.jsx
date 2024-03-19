import React, {useState} from "react";
import {useTranslation} from "react-i18next";

function CarBrands (){
  const {t, i18n} = useTranslation()
  
  const [render, setRender] = useState(false)
  const [carBrands, setCarBrands] = useState([
    { brand: "Acura", checked: false },
    { brand: "Alfa Romeo", checked: false },
    { brand: "Audi", checked: false },
    { brand: "BMW", checked: false },
    { brand: "Bentley", checked: false },
    { brand: "Bugatti", checked: false },
    { brand: "Buick", checked: false },
    { brand: "Cadillac", checked: false },
    { brand: "Chevrolet", checked: false },
    { brand: "Chrysler", checked: false },
    { brand: "Dodge", checked: false },
    { brand: "Ferrari", checked: false },
    { brand: "Fiat", checked: false },
    { brand: "Ford", checked: false },
    { brand: "Genesis", checked: false },
    { brand: "GMC", checked: false },
    { brand: "Honda", checked: false },
    { brand: "Hummer", checked: false },
    { brand: "Hyundai", checked: false },
    { brand: "Infiniti", checked: false },
    { brand: "Jaguar", checked: false },
    { brand: "Jeep", checked: false },
    { brand: "Kia", checked: false },
    { brand: "Lamborghini", checked: false },
    { brand: "Land Rover", checked: false },
    { brand: "Lexus", checked: false },
    { brand: "Lincoln", checked: false },
    { brand: "Lotus", checked: false },
    { brand: "Maserati", checked: false },
    { brand: "Mazda", checked: false },
    { brand: "McLaren", checked: false },
    { brand: "Mercedes-Benz", checked: false },
    { brand: "Mini", checked: false },
    { brand: "Mitsubishi", checked: false },
    { brand: "Nissan", checked: false },
    { brand: "Oldsmobile", checked: false },
    { brand: "Pontiac", checked: false },
    { brand: "Porsche", checked: false },
    { brand: "Ram", checked: false },
    { brand: "Rolls-Royce", checked: false },
    { brand: "Saturn", checked: false },
    { brand: "Scion", checked: false },
    { brand: "Smart", checked: false },
    { brand: "Subaru", checked: false },
    { brand: "Suzuki", checked: false },
    { brand: "Tesla", checked: false },
    { brand: "Toyota", checked: false },
    { brand: "Volkswagen", checked: false },
    { brand: "Volvo", checked: false }
  ])
  
  function handleCheckItem (name){
    let x = carBrands
    x.map((el)=>{
      if (el.brand === name){
        el.checked = !el.checked
      }
    })
    
    setCarBrands(x)
    setRender(prev=>!prev)
  }
  
  return(
     <div className="CarBrands">
        <div className="inputBlock">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 2.5C5.58172 2.5 2 6.08172 2 10.5C2 14.9183 5.58172 18.5 10 18.5C11.8487 18.5 13.551 17.8729 14.9056 16.8199L20.2929 22.2071C20.6834 22.5976 21.3166 22.5976 21.7071 22.2071C22.0976 21.8166 22.0976 21.1834 21.7071 20.7929L16.3199 15.4056C17.3729 14.051 18 12.3487 18 10.5C18 6.08172 14.4183 2.5 10 2.5ZM4 10.5C4 7.18629 6.68629 4.5 10 4.5C13.3137 4.5 16 7.18629 16 10.5C16 13.8137 13.3137 16.5 10 16.5C6.68629 16.5 4 13.8137 4 10.5Z" fill="#266EFE"/>
          </svg>
          <input type="text" placeholder={t("partnerS.brand")}/>
        </div>
       
       <div className="mainBlock">
         {carBrands.map((el, index)=>{
           return(
              <label htmlFor={el.brand} key={index} className="carItem G-flex G-align-center">
                <input id={el.brand} type="checkbox" checked={el.checked} onClick={()=>handleCheckItem(el.brand)}/>
                <p className="itemName">{el.brand}</p>
              </label>
           )
         })}
       </div>
     </div>
  )
}

export default CarBrands