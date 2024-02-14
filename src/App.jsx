import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";
import Footer from "./pages/footer/footer";
import MobileApp from "./pages/home/mobileNote/MobileApp";
import Blog from "./pages/blog/blog";
import Article from "./pages/blog/Article/article";
import ForBusiness from "./pages/forBusiness/forBusiness";
import Help from "./pages/navigation/help/help";
import LogIn from "./pages/navigation/logIn/logIn";
import Insurance from "./pages/insurance/insurance";
import InsuranceStep2 from "./pages/insurance/InsuranceStep2/InsuranceStep2";
import InsuranceStep3 from "./pages/insurance/InsuranceStep3/InsuranceStep3";
import InsuranceVignette from "./pages/InsuranceVignette/insuranceVignette";
import Vignette from "./pages/vignette/vignette";
import Profile from "./pages/profile/profile";
import {useCartContext} from "./CartContext";
import Shops from "./pages/Shops/shops";
import FindService from "./pages/findService/findService";
// import { withTranslation } from 'react-i18next';


function App() {
  const {authorization} = useCartContext()
  
  useEffect(()=>{
  }, [])
  
  return (
    <div className="App">
  
      <Navigation/>
      
      <MobileApp/>
      
      
      
      <Routes>
        <Route path="/" element={<Home />}/>  // Main (Home)
        <Route path="/home" element={<Home />}/> // Home
        <Route path="/blog" element={<Blog />}/> // Blog
        <Route path="/blog/article" element={<Article />} /> // blog - article - id
        <Route path="/forBusiness" element={<ForBusiness />} /> // For Business
        <Route path="/help" element={<Help />} /> // Help
        <Route path="/shops" element={<Shops/>} /> // Shops
        
        <Route path="/profile" element={authorization ? <Profile/> : <LogIn/>} /> // Profile
        <Route path="/logIn" element={<LogIn />} /> // LogIn
        
        <Route path="/insurance&vignette" element={<InsuranceVignette/>} /> // Insurance & Vignette Mutual +scroll
        <Route path="/vignette" element={<Vignette/>} /> // Vignette
        <Route path="/insurance/step1" element={<Insurance/>} /> // Insurances step1
        <Route path="/insurance/step2" element={<InsuranceStep2/>} /> // Insurance step2
        <Route path="/insurance/step3" element={<InsuranceStep3/>} /> // Insurance step3
        <Route path="/findService" element={<FindService/>} /> // Find Service
      </Routes>
      
      <Footer/>
    
    </div>
  );
}

export default App;
