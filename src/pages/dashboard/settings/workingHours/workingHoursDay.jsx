import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Images} from "../../promotion/images/images";

function WorkingHoursDay ({weekDay, index}){
  
  const {t, i18n} = useTranslation();
  
  const [activeBlock, setActiveBlock] = useState(false)
  const [activeDay, setActiveDay] = useState(true)
  const [render, setRender] = useState(false)
  
  useEffect(()=>{
    if (weekDay === t("promo.week6") || weekDay === t("promo.week7")){
      setActiveDay(false)
    }
  }, [])
  
  //////////////// SelectLine //////////////////
  const [timesCount, setTimesCount] = useState(1)
  const [timesData, setTimesData] = useState([
    {
      name: "MainTime",
      time1: "9:00",
      time2: "10:00"
    }
  ])
  
  function handleAddTimeCount(){
    if (timesCount < 3){
      setTimesCount(prev=> prev+1)
      
      let x = timesData
      x.push({
        name: `Time${timesCount}`,
        time1: "9:00",
        time2: "10:00"
      })
      setTimesData(x)
    }
  }
  
  function handleDeleteTime(item){
    if (timesCount >1){
      setTimesCount(prev=> prev-1)
      
      let x = timesData
      let y = []
      x.forEach((el)=>{
        if (el.name !== item){
          y.push(el)
        }
      })
      setTimesData(y)
      
    }
  }
  
  function handleChangeData (newData){
    setTimesData(newData)
    setRender(prev=>!prev)
  }
  
  function SelectsLine ({index, data, deleteTime, addNewTime, changeData}){
    
    const [selectBlock1, setSelectBlock1] = useState(false)
    const [selected1, setSelected1] = useState(data[index].time1)
    
    function handleChangeTime1(event){
      let x = data
      x[index].time1 = event.target.value
      changeData(x)
      setSelected1(event.target.value)
      setSelectBlock1(false)
    }
    
    const [selectBlock2, setSelectBlock2] = useState(false)
    const [selected2, setSelected2] = useState(data[index].time2)
    
    function handleChangeTime2(event){
      let x = data
      x[index].time2 = event.target.value
      changeData(x)
      setSelected1(event.target.value)
      setSelectBlock2(false)
    }
    
    return(
       <div className="selectsLine G-flex G-align-center">
         
         <div className="selectBlock">
           <div onClick={()=>{setSelectBlock1(prev=>!prev)}} style={{borderColor: `${selectBlock1 ? "#266EFE" : ""}`}} className="selectedBlock">
             <span className="selectedTime">{selected1}</span>
             <svg style={{rotate: `${selectBlock1 ? "180deg" : "0deg"}`}} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
               <path fill={`${selectBlock1 ? "#266EFE" : "#AEAEAE"}`} fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z" />
             </svg>
           </div>
           
           <div style={{display: `${selectBlock1 ? "block" : "none"}`}} className="optionsBlock">
             <input onClick={handleChangeTime1} type="button" value="9:00"/>
             <input onClick={handleChangeTime1} type="button" value="9:30"/>
             <input onClick={handleChangeTime1} type="button" value="10:00"/>
             <input onClick={handleChangeTime1} type="button" value="10:30"/>
             <input onClick={handleChangeTime1} type="button" value="11:00"/>
             <input onClick={handleChangeTime1} type="button" value="11:30"/>
             <input onClick={handleChangeTime1} type="button" value="12:00"/>
             <input onClick={handleChangeTime1} type="button" value="12:30"/>
             <input onClick={handleChangeTime1} type="button" value="13:00"/>
             <input onClick={handleChangeTime1} type="button" value="13:30"/>
             <input onClick={handleChangeTime1} type="button" value="14:00"/>
             <input onClick={handleChangeTime1} type="button" value="14:30"/>
             <input onClick={handleChangeTime1} type="button" value="15:00"/>
             <input onClick={handleChangeTime1} type="button" value="15:30"/>
             <input onClick={handleChangeTime1} type="button" value="16:00"/>
             <input onClick={handleChangeTime1} type="button" value="16:30"/>
             <input onClick={handleChangeTime1} type="button" value="17:00"/>
             <input onClick={handleChangeTime1} type="button" value="17:30"/>
             <input onClick={handleChangeTime1} type="button" value="18:00"/>
             <input onClick={handleChangeTime1} type="button" value="18:30"/>
             <input onClick={handleChangeTime1} type="button" value="19:00"/>
             <input onClick={handleChangeTime1} type="button" value="19:30"/>
             <input onClick={handleChangeTime1} type="button" value="20:00"/>
           </div>
         </div>
         
         <span className="middleWord">{t("promo.to")}</span>
         
         <div className="selectBlock">
           <div onClick={()=>{setSelectBlock2(prev=>!prev)}} style={{borderColor: `${selectBlock2 ? "#266EFE" : ""}`}} className="selectedBlock">
             <span className="selectedTime">{selected2}</span>
             <svg style={{rotate: `${selectBlock2 ? "180deg" : "0deg"}`}} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
               <path fill={`${selectBlock2 ? "#266EFE" : "#AEAEAE"}`} fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289Z" />
             </svg>
           </div>
           
           <div style={{display: `${selectBlock2 ? "block" : "none"}`}} className="optionsBlock">
             <input onClick={handleChangeTime2} type="button" value="9:00"/>
             <input onClick={handleChangeTime2} type="button" value="9:30"/>
             <input onClick={handleChangeTime2} type="button" value="10:00"/>
             <input onClick={handleChangeTime2} type="button" value="10:30"/>
             <input onClick={handleChangeTime2} type="button" value="11:00"/>
             <input onClick={handleChangeTime2} type="button" value="11:30"/>
             <input onClick={handleChangeTime2} type="button" value="12:00"/>
             <input onClick={handleChangeTime2} type="button" value="12:30"/>
             <input onClick={handleChangeTime2} type="button" value="13:00"/>
             <input onClick={handleChangeTime2} type="button" value="13:30"/>
             <input onClick={handleChangeTime2} type="button" value="14:00"/>
             <input onClick={handleChangeTime2} type="button" value="14:30"/>
             <input onClick={handleChangeTime2} type="button" value="15:00"/>
             <input onClick={handleChangeTime2} type="button" value="15:30"/>
             <input onClick={handleChangeTime2} type="button" value="16:00"/>
             <input onClick={handleChangeTime2} type="button" value="16:30"/>
             <input onClick={handleChangeTime2} type="button" value="17:00"/>
             <input onClick={handleChangeTime2} type="button" value="17:30"/>
             <input onClick={handleChangeTime2} type="button" value="18:00"/>
             <input onClick={handleChangeTime2} type="button" value="18:30"/>
             <input onClick={handleChangeTime2} type="button" value="19:00"/>
             <input onClick={handleChangeTime2} type="button" value="19:30"/>
             <input onClick={handleChangeTime2} type="button" value="20:00"/>
           </div>
         </div>
         
         <div className="actionBlock">
           {index === 0 ? <img onClick={addNewTime} src={Images.addIcon} alt=""/> : <img onClick={()=>deleteTime(data[index].name)} src={Images.deleteIcon} alt=""/>}
         </div>
       
       </div>
    )
  }
  
  
  function handleOpenTimeTable(){
    setActiveBlock(prev=>!prev)
    setActiveDay(true)
  }
  
  
  return(
     <div style={{zIndex: `${index}`}} className="workingHoursDay">
       <div  className="headBlock G-align-center G-flex G-justify-between">
         <div onClick={()=>{setActiveDay(prev=>!prev)}} className={`switchBlock ${activeDay ? "activeSwitch" : ""}`}><div className="switcher"></div></div>
         <p onClick={handleOpenTimeTable} className="day">{weekDay}</p>
         <p style={{opacity: `${activeDay ? "1" : "0"}`}} onClick={handleOpenTimeTable} className="times">{timesData.map((el, index)=>{
           return(
              <span key={index}>{el.time1} - {el.time2}</span>
           )
         })}</p>
         
         <svg onClick={handleOpenTimeTable} style={{rotate: `${activeBlock ? "0deg" : "180deg"}`}} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
           <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 8.79289C11.6834 8.40237 12.3166 8.40237 12.7071 8.79289L18.7071 14.7929C19.0976 15.1834 19.0976 15.8166 18.7071 16.2071C18.3166 16.5976 17.6834 16.5976 17.2929 16.2071L12 10.9142L6.70711 16.2071C6.31658 16.5976 5.68342 16.5976 5.29289 16.2071C4.90237 15.8166 4.90237 15.1834 5.29289 14.7929L11.2929 8.79289Z" fill={`${activeBlock ? "#266EFE" : "#AEAEAE"}`}/>
         </svg>
       </div>
       
       <div style={{display: `${activeBlock ? "block" : "none"}`}} className="blockMain">
         {Array.from({length: timesCount}, (_, index)=>(
            <SelectsLine addNewTime={handleAddTimeCount} index={index} deleteTime={handleDeleteTime} data={timesData} changeData={handleChangeData}/>
         ))}
       </div>
     
     </div>
  )
}

export default WorkingHoursDay