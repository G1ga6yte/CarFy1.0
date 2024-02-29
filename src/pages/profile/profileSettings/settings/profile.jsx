import React,{useState} from "react";

function Profile (){
  const [image, setImage] = useState(null);
  
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  
  return(
     <div className="settings">
       <div className="headerBlock G-flex G-justify-between G-align-center">
         <p className="miniHeader">Contact information</p>
         <span className="saved">Saved</span>
       </div>
       
       <div className="imgInputCont G-flex">
        
        <div className="profileImg">
          <label htmlFor="profileImg"></label>
          
          <div className="emptyBlock G-flex G-align-center G-justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M26 10C26 8.89543 25.1046 8 24 8C22.8954 8 22 8.89543 22 10V22H10C8.89543 22 8 22.8954 8 24C8 25.1046 8.89543 26 10 26H22V38C22 39.1046 22.8954 40 24 40C25.1046 40 26 39.1046 26 38V26H38C39.1046 26 40 25.1046 40 24C40 22.8954 39.1046 22 38 22H26V10Z" fill="#266EFE"/>
            </svg>
          </div>
  
          {image && (<div style={{backgroundImage: `url("${image}")`}} className="selectedImage"></div>)}
          
          <input
             id="profileImg"
             type="file"
             accept="image/*"
             onChange={handleImageUpload}
          />
        </div>
         
         <div className="inputsBlock G-flex">
           <input type="text" className="profileInput" placeholder="Name"/>
           <input type="number" className="profileInput" placeholder="Phone"/>
           <input type="email" className="profileInput" placeholder="Email"/>

         </div>
        
        
        
       </div>
       
       <div className="headerBlock">
         <p className="miniHeader">Password</p>
       </div>
       
       <div className="inputsBlock G-flex G-flex-column">
         <input type="password" className="profileInput" placeholder="Current password"/>
         <input type="password" className="profileInput" placeholder="New password"/>
         <input type="password" className="profileInput" placeholder="New password"/>


       </div>
  
       <button className="saveBtn">Save</button>


     </div>
  )
}

export default Profile