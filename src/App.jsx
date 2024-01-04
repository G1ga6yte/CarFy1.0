import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";
import Footer from "./pages/footer/footer";

function App() {
  
  return (
    <div className="App">
  
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>  // home
        <Route path="/home" element={<Home />}/> // home
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
