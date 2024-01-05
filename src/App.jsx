import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";
import Footer from "./pages/footer/footer";
import MobileApp from "./pages/home/mobileNote/MobileApp";
import Blog from "./pages/blog/blog";

function App() {
  
  return (
    <div className="App">
  
      <Navigation/>
      
      <MobileApp/>
      
      <Routes>
        <Route path="/" element={<Home />}/>  // home
        <Route path="/home" element={<Home />}/> // home
        <Route path="/blog" element={<Blog />}/> // blog
      </Routes>
      
      <Footer/>
    
    </div>
  );
}

export default App;
