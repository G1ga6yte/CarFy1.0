import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";

function App() {
  return (
    <div className="App">
  
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>  // home
        <Route path="/home" element={<Home />}/> // home
      </Routes>
    
    </div>
  );
}

export default App;
