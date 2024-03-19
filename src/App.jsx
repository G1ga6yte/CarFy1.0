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
import InsuranceStep2 from "./pages/insurance/InsuranceStep2/InsuranceStep2";
import InsuranceStep3 from "./pages/insurance/InsuranceStep3/InsuranceStep3";
import InsuranceVignette from "./pages/InsuranceVignette/insuranceVignette";
import Vignette from "./pages/vignette/vignette";
import Profile from "./pages/profile/profile";
import {useCartContext} from "./CartContext";
import Shops from "./pages/Shops/shops";
import {useTranslation} from "react-i18next";
import FindServiceStep1 from "./pages/findService/findServiceStep1/findServiceStep1";
import FindServiceStep2 from "./pages/findService/findServiceStep2/findServiceStep2";
import InsuranceStep1 from "./pages/insurance/InsuranceStep1/InsuranceStep1";
import AllRequests from "./pages/allRequests/allRequests/allRequests";
import LogInReq from "./pages/findService/logInReq/logInReq";
import Requests from "./pages/allRequests/requests";
import ResponsesBlock from "./pages/allRequests/allRequests/responsesBlock/responsesBlock";
import EachServiceBlock from "./pages/allRequests/allRequests/eachServiceBlock/eachServiceBlock";
import ConfirmationBlock from "./pages/allRequests/allRequests/confirmationBlock/confirmationBlock";
import ErrorBlock from "./pages/errorBlock/errorBlock";
import ReviewBlock from "./pages/allRequests/allRequests/reviewBlock/reviewBlock";
import SearchOnMap from "./pages/profile/searchOnMap/searchOnMap";
import ProfileSettings from "./pages/profile/profileSettings/profileSettings";
import ChatBlock from "./pages/chatBlock/chatBlock";
import Dashboard from "./pages/dashboard/dashboard";
import {DashboardProvider} from "./pages/dashboard/dashboardContext";
import PartnerHome from "./pages/dashboard/home/partnerHome";
import RequestsHistory from "./pages/dashboard/requestsHistory/requestsHistory";
import Balance from "./pages/dashboard/balance/balance";
import Emergency from "./pages/dashboard/emergency/emergency";
import RequestsPartner from "./pages/dashboard/requests/requests";
import Stock from "./pages/dashboard/stock/stock";
import StockHome from "./pages/dashboard/stock/stockHome/stockHome";
import ProductPage from "./pages/dashboard/stock/productPage/productPage";
import CartBlock from "./pages/dashboard/cartBlock/cartBlock";
import Checkout from "./pages/dashboard/checkout/checkout";
import Sent from "./pages/dashboard/checkout/sent";
import Statistics from "./pages/dashboard/statistics/statistics";
import Reviews from "./pages/dashboard/statistics/reviews";
import Promotion from "./pages/dashboard/promotion/promotion";
import Settings from "./pages/dashboard/settings/settings";
import PartnerHelp from "./pages/dashboard/partnerHelp/partnerHelp";


function App() {
  const {authorization} = useCartContext()
  const {t, i18n} = useTranslation()
  
  useEffect(()=>{
  }, [])
  
  return (
    <div className="App">
  
      <Navigation/>
      
      <MobileApp/>
      
      
      
      <Routes>
        <Route path="*" element={<ErrorBlock/>}/>
        <Route path="/" element={<Home />}/>  // Main (Home)
        <Route path="/home" element={<Home />}/> // Home
        <Route path="/blog" element={<Blog />}/> // Blog
        <Route path="/blog/article" element={<Article />} /> // blog - article - id
        <Route path="/forBusiness" element={<ForBusiness />} /> // For Business
        <Route path="/help" element={<Help />} /> // Help
        <Route path="/shops" element={<Shops/>} /> // Shops
        
        <Route path="/profile" element={authorization ? <Profile/> : <LogIn/>} /> // Profile - Dashboard
        <Route path="/profile/map" element={<SearchOnMap/>}/>
        <Route path="/logIn" element={<LogIn />} /> // LogIn
        <Route path="/profile/settings" element={<ProfileSettings/>}/> // Settings
        <Route path="/chat" element={<ChatBlock/>}/>
        
        <Route path="/partner" element={
          <DashboardProvider>
            <Dashboard/>
          </DashboardProvider>
        }>
          <Route exact path="/partner/" element={<PartnerHome/>}/>
          <Route path="/partner/requests&history" element={<RequestsHistory/>}/>
          <Route path="/partner/balance" element={<Balance/>}/>
          <Route path="/partner/emergency" element={<Emergency/>}/>
          <Route path="/partner/requests" element={<RequestsPartner/>}/>
          <Route path="/partner/stock" element={<Stock/>}>
            <Route exact path="/partner/stock/" element={<StockHome/>} />
            <Route path="/partner/stock/product/:id" element={<ProductPage/>} />
          </Route>
          <Route path="/partner/cart" element={<CartBlock/>}/>
          <Route path="/partner/checkout" element={<Checkout/>}/>
          <Route path="/partner/checkout/sent" element={<Sent/>}/>
          <Route path="/partner/statistics" element={<Statistics/>}/>
          <Route path="/partner/statistics/reviews" element={<Reviews/>}/>
          <Route path="/partner/promotion" element={<Promotion/>}/>
          <Route path="/partner/settings" element={<Settings/>}/>
          <Route path="/partner/help" element={<PartnerHelp/>}/>
        </Route>
        
        <Route path="/insurance&vignette" element={<InsuranceVignette/>} /> // Insurance & Vignette Mutual +scroll
        <Route path="/vignette" element={<Vignette/>} /> // Vignette
        <Route path="/insurance/step1" element={<InsuranceStep1/>} /> // Insurances step1
        <Route path="/insurance/step2" element={<InsuranceStep2/>} /> // Insurance step2
        <Route path="/insurance/step3" element={<InsuranceStep3/>} /> // Insurance step3
       
        <Route path="/findService" element={<FindServiceStep1/>} /> // Find Service Step 1
        <Route path="/findService/newRequest" element={<FindServiceStep2/>} /> // Find Service Step 2
        <Route path="/findService/logIn" element={<LogInReq/>} /> // Find Service Log In ?
        
        
        <Route path="/requests" element={<Requests/>} >
          <Route exact path="/requests/" element={<AllRequests/>} />
          <Route path="/requests/responses/:id" element={<ResponsesBlock/>}/>
          <Route path="/requests/response/:id" element={<EachServiceBlock/>}/>
        </Route> // All Requests
        <Route path="/request/confirmation/:id" element={<ConfirmationBlock/>} />
        <Route path="/request/review/:id" element={<ReviewBlock/>}/>
        
      </Routes>
      
      <Footer/>
    
    </div>
  );
}

export default App;
