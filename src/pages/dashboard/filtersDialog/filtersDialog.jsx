import React, {useEffect, useState} from "react";
import "./filtersDialogBlock.scss"
import {useTranslation} from "react-i18next";

function FiltersDialog ({state, mainFilters, setState, setMainFilters}){
  const {t, i18n} = useTranslation()
  const [filterType, setFilterType]= useState(1)
  const [render, setRender] = useState(false)
  const [problemSection, setProblemSection] = useState("")
  
  const [filters, setFilters] = useState([])
  
  function handleFilterBlock (){
    setState(false)
    setRender(prev=>!prev)
  }
  
  function addNewFilter (newFilter){
    let date = filters
    date.push(newFilter)
    setFilters(date)
    setRender(prev=>!prev)
  }
  
  function removeOldFilter (oldFilter){
    let date = filters.filter((el)=>{
      return el !== oldFilter
    })
    setFilters(date)
    setRender(prev=>!prev)
  }
  
  function clearAllFilters (){
    setFilters([])
    setRender(prev=>!prev)
  }
  
  
  const [filtersDate, setFiltersDate] = useState({
    manufacturer: [
      "Acura", "Alfa Romeo", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac",
      "Chevrolet", "Chrysler", "Dodge", "Ferrari", "Fiat", "Ford", "Genesis", "GMC",
      "Honda", "Hummer", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini",
      "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Mazda", "McLaren",
      "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Oldsmobile", "Pontiac",
      "Porsche", "Ram", "Rolls-Royce", "Saturn", "Scion", "Smart", "Subaru", "Suzuki",
      "Tesla", "Toyota", "Volkswagen", "Volvo"
    ],
    problem: [
      {
        name: "General maintenance",
        content: ["Exhaust system repair1", "Exhaust system repair2", "Exhaust system repair3"]
      },
      {
        name: "Brake services",
        content: ["Exhaust system repair4", "Exhaust system repair5", "Exhaust system repair6"]
      },
      {
        name: "Suspension and steering services",
        content: ["Exhaust system repair7", "Exhaust system repair8", "Exhaust system repair9"]
      },
      {
        name: "Engine services",
        content: ["Exhaust system repair10", "Exhaust system repair11", "Exhaust system repair12"]
      },
      {
        name: "Transmission services",
        content: ["Exhaust system repair13", "Exhaust system repair14", "Exhaust system repair15"]
      }
    ],
    priceRange: [
      "25 to 50 € ",
      "50 to 100 € ",
      "100 to 200 € ",
      "200 to 300 € ",
      "300 to 500 € ",
      "500 to 800 € ",
      "1000 and up € "
    ]
  })
  
  useEffect(()=>{
    let date = filtersDate
    
    date.manufacturer.map((el)=>{
      if (filters.includes(el.brand)){
        el.checked = true
      }
    })
    
    setFiltersDate(date)
    setRender(prev=>!prev)
    console.log(filtersDate);
  }, [])
  
  
  return(
     <div style={{display: `${state ? "block" : "none"}`}} className="FiltersDialogBlock">
        <div className="headBlock G-flex G-align-center">
          <div className="header">{t("homeP.filters")}</div>
          <div className="inputBlock">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clipRule="evenodd" d="M5.66671 0.833496C2.72119 0.833496 0.333374 3.22131 0.333374 6.16683C0.333374 9.11235 2.72119 11.5002 5.66671 11.5002C6.89918 11.5002 8.03401 11.0821 8.93714 10.3801L12.5286 13.9716C12.789 14.2319 13.2111 14.2319 13.4714 13.9716C13.7318 13.7112 13.7318 13.2891 13.4714 13.0288L9.87995 9.43726C10.582 8.53414 11 7.3993 11 6.16683C11 3.22131 8.61223 0.833496 5.66671 0.833496ZM1.66671 6.16683C1.66671 3.95769 3.45757 2.16683 5.66671 2.16683C7.87585 2.16683 9.66671 3.95769 9.66671 6.16683C9.66671 8.37597 7.87585 10.1668 5.66671 10.1668C3.45757 10.1668 1.66671 8.37597 1.66671 6.16683Z" fill="#AEAEAE"/>
            </svg>
            <input type="text" placeholder={`${t("homeP.search")}...`}/>
          </div>
          <div className="countBlock">
            {filters.length}
            {t("homeP.prg1")}
          </div>
        </div>
       
       <div className="mainBlock G-flex">
          <div className="sectionsBlock">
            <button onClick={()=>{setFilterType(1)}} className={`sectionBtn ${filterType === 1 ? "activeBtn" : ""}`}>{t("homeP.btn7")}</button>
            <button onClick={()=>{
              setFilterType(2)
              setProblemSection("")
            }} className={`sectionBtn ${filterType === 2 ? "activeBtn" : ""}`}>{t("homeP.btn8")}</button>
            <button onClick={()=>{setFilterType(3)}} className={`sectionBtn ${filterType === 3 ? "activeBtn" : ""}`}>{t("homeP.btn9")}</button>

          </div>
         
         <div className="contentBlock">
         
           <div style={{display: `${filterType === 1 ? "block" : "none"}`}} className="manufacturer">
             {filtersDate.manufacturer.map((el, index)=>{
               return(
                  <label htmlFor={el} className="filterItem G-flex G-align-center">
                    <div>
                      <input onChange={()=>{
                        if (filters.includes(el)){
                          removeOldFilter(el)
                        } else {
                          addNewFilter(el)
                        }
                      }} checked={filters.includes(el)} id={el} type="checkbox"/>
                    </div>
                    <p>{el}</p>
                  </label>
               )
             })}
           </div>
         
           <div style={{display: `${filterType === 2 ? "block" : "none"}`}} className="problem">
             {filtersDate.problem.map((el, index)=>{
               return(
                  <div className="itemMainBlock">
                    <div onClick={()=>{
                      if (el.name === problemSection){
                        setProblemSection("")
                      } else {
                        setProblemSection(el.name)
                      }
                    }} className="itemBlock G-flex G-align-center G-justify-between">
                      <p className="name">{el.name}</p>
                      <div>
                        <svg style={{display: `${el.name === problemSection ? "none" : "block"}`}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66667 1.33317C6.66667 0.964981 6.36819 0.666504 6 0.666504C5.63181 0.666504 5.33333 0.964981 5.33333 1.33317V5.33317H1.33333C0.965144 5.33317 0.666667 5.63165 0.666667 5.99984C0.666667 6.36803 0.965144 6.6665 1.33333 6.6665H5.33333V10.6665C5.33333 11.0347 5.63181 11.3332 6 11.3332C6.36819 11.3332 6.66667 11.0347 6.66667 10.6665V6.6665H10.6667C11.0349 6.6665 11.3333 6.36803 11.3333 5.99984C11.3333 5.63165 11.0349 5.33317 10.6667 5.33317H6.66667V1.33317Z" fill="#AEAEAE"/>
                        </svg>
                        <svg style={{display: `${el.name === problemSection ? "block" : "none"}`}} width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clipRule="evenodd" d="M0.666667 1.00016C0.666667 0.631973 0.965144 0.333496 1.33333 0.333496H10.6667C11.0349 0.333496 11.3333 0.631973 11.3333 1.00016C11.3333 1.36835 11.0349 1.66683 10.6667 1.66683H1.33333C0.965144 1.66683 0.666667 1.36835 0.666667 1.00016Z" fill="#AEAEAE"/>
                        </svg>
                      </div>

                    </div>
  
                    <div style={{display: `${el.name === problemSection ? "block" : "none"}`}} className="itemsBlock">
                      {el.content.map((ell)=>{
                        return(
                           <label htmlFor={ell} className="filterItem G-flex G-align-center">
                             <div>
                               <input onChange={()=>{
                                 if (filters.includes(ell)){
                                   removeOldFilter(ell)
                                 } else {
                                   addNewFilter(ell)
                                 }
                               }} type="checkbox" id={ell} checked={filters.includes(ell)}/>
                             </div>
                             <p>{ell}</p>
                           </label>
                        )
                      })}
                    </div>
  
                  </div>
               )
             })}
           </div>
         
           <div style={{display: `${filterType === 3 ? "block" : "none"}`}} className="price">
             {filtersDate.priceRange.map((el)=>{
               return(
                  <label htmlFor={el} className="filterItem G-flex G-align-center">
                    <div>
                      <input type="checkbox" onChange={()=>{
                        if (filters.includes(el)){
                          removeOldFilter(el)
                        } else {
                          addNewFilter(el)
                        }
                      }} id={el} checked={filters.includes(el)}/>
                    </div>
                    <p>{el}</p>
                  </label>
               )
             })}
           </div>
         
         </div>
         
         
         <div className="filtersBlock">
           {filters.map((el, index)=>{
             return(<div className="filteredItem G-flex G-align-center G-justify-between">
               <p>{el}</p>
               <svg onClick={()=>{
                 removeOldFilter(el)
                 
                 let date = filtersDate
                 
                 date.manufacturer.map((ell)=>{
                   if (ell.brand === el){
                     ell.checked = false
                   }
                 })
                 
                 setFiltersDate(date)
                 
                 setRender(prev=>!prev)
               }} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M9.4714 1.47157C9.73175 1.21122 9.73175 0.789108 9.4714 0.528758C9.21105 0.268409 8.78894 0.268409 8.52859 0.528758L5 4.05735L1.4714 0.528758C1.21105 0.268409 0.78894 0.268409 0.52859 0.528758C0.268241 0.789108 0.268241 1.21122 0.52859 1.47157L4.05719 5.00016L0.52859 8.52876C0.268241 8.78911 0.268241 9.21122 0.52859 9.47157C0.78894 9.73192 1.21105 9.73192 1.4714 9.47157L5 5.94297L8.52859 9.47157C8.78894 9.73192 9.21105 9.73192 9.4714 9.47157C9.73175 9.21122 9.73175 8.78911 9.4714 8.52876L5.9428 5.00016L9.4714 1.47157Z" fill="#AEAEAE"/>
               </svg>
             </div>)
           })}
         </div>
         
         
       </div>
       
       
       <div className="bottomBlock G-flex G-align-center">
         <div className="clearBtnBlock">
           <button onClick={()=>{
             setFilters([])
             setRender(prev=>!prev)
           }} className="clearBtn">{t("homeP.clear")}</button>
         </div>
  
         <button onClick={()=>{
           setFilters([])
           setState(false)
           setRender(prev=>!prev)
  
         }} className="cancelBtn">{t("homeP.cancel")}</button>
         <button onClick={()=>{
           setMainFilters(filters)
           setState(false)
           setRender(prev=>!prev)
  
         }} className="applyBtn">{t("homeP.apply")}</button>

       </div>
       
       
     </div>
  )
}

export default FiltersDialog