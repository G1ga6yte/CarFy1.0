import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";
import Footer from "./pages/footer/footer";
import MobileApp from "./pages/home/mobileNote/MobileApp";
import Blog from "./pages/blog/blog";
import Article from "./pages/blog/Article/article";
import ForBusiness from "./pages/forBusiness/forBusiness";

function App() {
  
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
      </Routes>
      
      <Footer/>
    
    </div>
  );
}

export default App;
