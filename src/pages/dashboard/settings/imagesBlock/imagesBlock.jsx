import React, {useState} from "react";
import {Images} from "../images/images";

function ImagesBlock (){
  
  const [imagesData, setImagesData] = useState([
     null, null, null, null,  null, null, null, null,  null, null, null, null,  null, null
  ])
  const [render, setRender] = useState(false)
  
  function handleAddPhoto(e){
    let x = imagesData
    let state = true
    let y = []
    
    x.map((el)=>{
      if (state){
        if (el===null){
          let img = e.target.files[0]
          if (img){
            y.push(URL.createObjectURL(img))
          }else{
            y.push(el)
          }
          state=false
        } else{
          y.push(el)
        }
      }else{
        y.push(el)
      }
    })
    
    setImagesData(y)
  }
  
  function handleDeletePhoto (index){
    let x = imagesData
    x[index] = null
    
    let y = []
    
    x.map((el)=>{
      if (el !== null){
        y.push(el)
      }
    })
    
    while (y.length <14){
      y.push(null)
    }
    
    setImagesData(y)
    setRender(prev=>!prev)
  }
  
  
  
  return(
     <div className="ImagesBlock G-flex G-justify-between">
       {imagesData.map((el, index)=>{
         return(
            <div key={index} className="imageBlock G-flex G-justify-center G-align-center">
              <img src={Images.plusIcon} alt=""/>
              <input id={`photoInput${index}`} type="file" accept="image/*" onChange={handleAddPhoto}/>
              <label htmlFor={`photoInput${index}`}></label>
              {el && <div style={{backgroundImage: `url("${el}")`}} onClick={()=>{}} className="imageDiv">
                <div onClick={()=>{handleDeletePhoto(index)}} className="removeIcon"><img src={Images.xClose} alt=""/></div>
              </div>}
            </div>
         )
       })}
     </div>
  )
}

export default ImagesBlock