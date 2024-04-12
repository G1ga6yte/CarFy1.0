import React, {useState, useEffect} from "react";
import {useDashboardContext} from "./dashboardContext";
import {Link, Outlet, useNavigate} from "react-router-dom";
import "./dashboard.scss";
import {Images} from "./images/images";
import {useTranslation} from "react-i18next";
import {SvgData} from "../../source/svgs/svgsData";
import EachNotifications from "../navigation/eachNote/eachNotifications";
import ViewWorkDialog from "./viewWorkDialog/viewWorkDialog";


function Dashboard() {
  const {t, i18n} = useTranslation()
  const {activePage, setActivePage} = useDashboardContext();
  const [orderSwitch,setOrderSwitch] = useState(false)
  const [notes, setNotes] = useState(false); // false
  const navigate = useNavigate()
  const [opc, setOpc] = useState(true)
  useEffect(() => {
    let timeoutId;
    let timeoutId2;
    
    const handleMouseEnter = () => {
      setNotes(true);
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      setOpc(true)
    };
    
    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
        setNotes(false);
      }, 3000);
      timeoutId2 = setTimeout(() => {
        setOpc(false)
      }, 1000);
    };
    
    const cleanup = () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2)
    };
    
    const block3 = document.getElementById('messages2');
    const block4 = document.getElementById('messagesBlock2')
    
    if (block3) {
      block3.addEventListener('click', handleMouseEnter)
      block3.addEventListener('mouseleave', handleMouseLeave);
    }
    if (block4) {
      block4.addEventListener('mouseenter', handleMouseEnter);
      block4.addEventListener('mouseleave', handleMouseLeave);
    }
    
  
  
    return () => {
      cleanup();
      if (block3) {
        block3.removeEventListener('click', handleMouseEnter)
        block3.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (block4) {
        block4.removeEventListener('mouseenter', handleMouseEnter);
        block4.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
     <div className="Dashboard G-flex">
       <ViewWorkDialog/>
       
       
       
       <div className="navBlock">
         <div className="fixedBlock">
           <Link to="/partner/" className="homeLogo">
             <img src={Images.Logo} alt=""/>
           </Link>
           
           <div onClick={() => {
             setOrderSwitch(prev => !prev);
           }} className="switcherBlock G-flex G-align-center G-justify-between">
             <p className="miniPrg">{t("dashboard.orders")}</p>
             <div id="orderSwitch"  className={`switcher G-flex ${orderSwitch ? "activeSwitch" : ""}`}>
               <div className="circle"></div>
             </div>
           </div>
           
           <div className="pageLinks">
             
             <Link onClick={()=>{setActivePage("Home")}} to="/partner/" className={`link ${activePage === "Home" ? "activeLink" : ""}`}>
               <div className="markLine"></div>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M7.65153 0.890945C7.87973 0.829158 8.12026 0.829158 8.34846 0.890945C8.61337 0.962671 8.8364 1.13778 9.01441 1.27753C9.0314 1.29087 9.04799 1.30389 9.06416 1.31647L13.5857 4.83322C13.6031 4.84676 13.6204 4.86016 13.6375 4.87345C13.8886 5.06831 14.1098 5.23998 14.2746 5.46285C14.4193 5.65843 14.5271 5.87877 14.5926 6.11304C14.6674 6.37999 14.6671 6.65999 14.6667 6.97782C14.6667 6.99951 14.6667 7.02137 14.6667 7.04341V11.8924C14.6667 12.2438 14.6667 12.547 14.6463 12.7967C14.6248 13.0603 14.5772 13.3224 14.4487 13.5747C14.2569 13.951 13.951 14.257 13.5746 14.4487C13.3224 14.5772 13.0602 14.6248 12.7967 14.6463C12.547 14.6667 12.2438 14.6667 11.8924 14.6667H4.10762C3.75619 14.6667 3.45302 14.6667 3.20331 14.6463C2.93975 14.6248 2.6776 14.5772 2.42535 14.4487C2.04902 14.257 1.74306 13.951 1.55132 13.5747C1.42279 13.3224 1.37524 13.0603 1.35371 12.7967C1.33331 12.547 1.33332 12.2438 1.33333 11.8924L1.33333 7.04341C1.33333 7.02136 1.33331 6.9995 1.33328 6.97782C1.33294 6.65999 1.33264 6.37999 1.40736 6.11304C1.47293 5.87877 1.5807 5.65843 1.72536 5.46285C1.8902 5.23998 2.1114 5.06831 2.36249 4.87346C2.37962 4.86016 2.39689 4.84676 2.4143 4.83322L6.93583 1.31647C6.952 1.30389 6.96859 1.29087 6.98558 1.27753C7.16359 1.13778 7.38662 0.962671 7.65153 0.890945Z" fill="#AEAEAE"/>
               </svg>
               <span>{t("dashboard.Home")}</span>
               <div className="countBlock">
                 2
               </div>
             </Link>
  
             <Link onClick={()=>{setActivePage("Emergency")}} to="/partner/emergency" className={`link ${activePage === "Emergency" ? "activeLink" : ""}`}>
               <div className="markLine"></div>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M11.8924 1.33331H4.10763C3.75621 1.3333 3.45302 1.33329 3.20331 1.35369C2.93975 1.37523 2.6776 1.42277 2.42535 1.5513C2.04902 1.74305 1.74306 2.04901 1.55132 2.42533C1.42279 2.67759 1.37524 2.93973 1.35371 3.2033C1.33331 3.453 1.33332 3.75617 1.33333 4.10759V11.8923C1.33332 12.2438 1.33331 12.547 1.35371 12.7967C1.37524 13.0602 1.42279 13.3224 1.55132 13.5746C1.74306 13.951 2.04902 14.2569 2.42535 14.4487C2.6776 14.5772 2.93975 14.6247 3.20331 14.6463C3.45302 14.6667 3.75619 14.6667 4.10762 14.6666H11.8924C12.2438 14.6667 12.547 14.6667 12.7967 14.6463C13.0602 14.6247 13.3224 14.5772 13.5746 14.4487C13.951 14.2569 14.2569 13.951 14.4487 13.5746C14.5772 13.3224 14.6248 13.0602 14.6463 12.7967C14.6667 12.547 14.6667 12.2438 14.6667 11.8924V4.1076C14.6667 3.75618 14.6667 3.45301 14.6463 3.2033C14.6248 2.93973 14.5772 2.67759 14.4487 2.42533C14.2569 2.04901 13.951 1.74305 13.5746 1.5513C13.3224 1.42277 13.0602 1.37523 12.7967 1.35369C12.547 1.33329 12.2438 1.3333 11.8924 1.33331ZM7.52859 4.86191C7.78894 4.60156 8.21105 4.60156 8.4714 4.86191L11.1381 7.52858C11.3984 7.78893 11.3984 8.21104 11.1381 8.47139L8.4714 11.1381C8.21105 11.3984 7.78894 11.3984 7.52859 11.1381C7.26824 10.8777 7.26824 10.4556 7.52859 10.1952L9.05719 8.66665H5.33333C4.96514 8.66665 4.66666 8.36817 4.66666 7.99998C4.66666 7.63179 4.96514 7.33331 5.33333 7.33331H9.05719L7.52859 5.80472C7.26824 5.54437 7.26824 5.12226 7.52859 4.86191Z" fill="#AEAEAE"/>
               </svg>
               <span>{t("dashboard.Emergency")}</span>
               <div className="countBlock">
                 2
               </div>
             </Link>
  
             <Link onClick={()=>{setActivePage("Request")}} to="/partner/requests" className={`link ${activePage === "Request" ? "activeLink" : ""}`}>
               <div className="markLine"></div>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M11.8924 1.33331H4.10763C3.75621 1.3333 3.45302 1.33329 3.20331 1.35369C2.93975 1.37523 2.6776 1.42277 2.42535 1.5513C2.04902 1.74305 1.74306 2.04901 1.55132 2.42533C1.42279 2.67759 1.37524 2.93973 1.35371 3.2033C1.33331 3.453 1.33332 3.75617 1.33333 4.10759V11.8923C1.33332 12.2438 1.33331 12.547 1.35371 12.7967C1.37524 13.0602 1.42279 13.3224 1.55132 13.5746C1.74306 13.951 2.04902 14.2569 2.42535 14.4487C2.6776 14.5772 2.93975 14.6247 3.20331 14.6463C3.45302 14.6667 3.75619 14.6667 4.10762 14.6666H11.8924C12.2438 14.6667 12.547 14.6667 12.7967 14.6463C13.0602 14.6247 13.3224 14.5772 13.5746 14.4487C13.951 14.2569 14.2569 13.951 14.4487 13.5746C14.5772 13.3224 14.6248 13.0602 14.6463 12.7967C14.6667 12.547 14.6667 12.2438 14.6667 11.8924V4.1076C14.6667 3.75618 14.6667 3.45301 14.6463 3.2033C14.6248 2.93973 14.5772 2.67759 14.4487 2.42533C14.2569 2.04901 13.951 1.74305 13.5746 1.5513C13.3224 1.42277 13.0602 1.37523 12.7967 1.35369C12.547 1.33329 12.2438 1.3333 11.8924 1.33331ZM7.52859 4.86191C7.78894 4.60156 8.21105 4.60156 8.4714 4.86191L11.1381 7.52858C11.3984 7.78893 11.3984 8.21104 11.1381 8.47139L8.4714 11.1381C8.21105 11.3984 7.78894 11.3984 7.52859 11.1381C7.26824 10.8777 7.26824 10.4556 7.52859 10.1952L9.05719 8.66665H5.33333C4.96514 8.66665 4.66666 8.36817 4.66666 7.99998C4.66666 7.63179 4.96514 7.33331 5.33333 7.33331H9.05719L7.52859 5.80472C7.26824 5.54437 7.26824 5.12226 7.52859 4.86191Z" fill="#AEAEAE"/>
               </svg>
               <span>{t("dashboard.Request")}</span>
               <div className="countBlock">
                 2
               </div>
             </Link>
  
             <Link onClick={()=>{setActivePage("Stock")}} to="/partner/stock" className={`link ${activePage === "Stock" ? "activeLink" : ""}`}>
               <div className="markLine"></div>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path d="M1.33334 2.00003H2.08847L2.38734 4.0921L3.09148 9.26754C3.13325 9.57463 3.16956 9.84155 3.21679 10.0611C3.26696 10.2944 3.33871 10.5229 3.476 10.739C3.68268 11.0644 3.97898 11.3231 4.32925 11.4841C4.56192 11.591 4.79805 11.6312 5.03594 11.6495C5.25986 11.6667 5.52924 11.6667 5.83916 11.6667H11.5907C11.8855 11.6667 12.1424 11.6667 12.3567 11.6507C12.5848 11.6337 12.8111 11.5961 13.036 11.4971C13.3756 11.3476 13.6669 11.1065 13.8773 10.8009C14.0166 10.5986 14.0959 10.3833 14.1553 10.1624C14.2111 9.95489 14.2591 9.70253 14.3143 9.413L15.2043 4.74057C15.222 4.64752 15.2425 4.54018 15.2521 4.44552C15.263 4.33903 15.2692 4.17716 15.2068 4.00036C15.1279 3.7769 14.9722 3.58873 14.7674 3.4694C14.6054 3.37498 14.4452 3.35084 14.3386 3.34155C14.2438 3.33328 14.1345 3.33332 14.0398 3.33336L3.62582 3.33336L3.3901 1.68332C3.3803 1.61452 3.36834 1.53052 3.35194 1.4566C3.33263 1.36956 3.29797 1.24937 3.21917 1.12659C3.11556 0.965144 2.96771 0.83691 2.79323 0.757175C2.66054 0.69653 2.53665 0.679213 2.44776 0.672409C2.37227 0.666631 2.28742 0.666664 2.21793 0.666691L1.33334 0.666694C0.965149 0.666694 0.666672 0.965171 0.666672 1.33336C0.666672 1.70155 0.965149 2.00003 1.33334 2.00003Z" fill="#AEAEAE"/>
                 <path d="M4.66667 14C4.66667 13.2636 5.26363 12.6667 6.00001 12.6667C6.73638 12.6667 7.33334 13.2636 7.33334 14C7.33334 14.7364 6.73638 15.3334 6.00001 15.3334C5.26363 15.3334 4.66667 14.7364 4.66667 14Z" fill="#AEAEAE"/>
                 <path d="M10 14C10 13.2636 10.597 12.6667 11.3333 12.6667C12.0697 12.6667 12.6667 13.2636 12.6667 14C12.6667 14.7364 12.0697 15.3334 11.3333 15.3334C10.597 15.3334 10 14.7364 10 14Z" fill="#AEAEAE"/>
               </svg>
               <span>{t("dashboard.Stock")}</span>
               <div className="countBlock">
                 2
               </div>
             </Link>
  
             <Link onClick={()=>{setActivePage("Statistics")}} to="/partner/statistics" className={`link ${activePage === "Statistics" ? "activeLink" : ""}`}>
               <div className="markLine"></div>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M2.37874 1.33331C2.38582 1.33332 2.39291 1.33332 2.40001 1.33332L2.93334 1.33332C2.94044 1.33332 2.94752 1.33332 2.95461 1.33331C3.12286 1.33329 3.28672 1.33328 3.42549 1.34461C3.57789 1.35706 3.75771 1.38644 3.93866 1.47864C4.18955 1.60647 4.39352 1.81045 4.52135 2.06133C4.61355 2.24228 4.64293 2.4221 4.65538 2.5745C4.66672 2.71327 4.6667 2.87713 4.66668 3.04539C4.66668 3.05247 4.66668 3.05955 4.66668 3.06665L4.66668 12.9546C4.6667 13.1228 4.66672 13.2867 4.65538 13.4255C4.64293 13.5779 4.61355 13.7577 4.52135 13.9386C4.39352 14.1895 4.18954 14.3935 3.93866 14.5213C3.75771 14.6135 3.57789 14.6429 3.42549 14.6554C3.28673 14.6667 3.12287 14.6667 2.95462 14.6667H2.37873C2.21048 14.6667 2.04662 14.6667 1.90786 14.6554C1.75546 14.6429 1.57564 14.6135 1.39469 14.5213C1.14381 14.3935 0.939831 14.1895 0.812 13.9386C0.719802 13.7577 0.690423 13.5779 0.677972 13.4255C0.666634 13.2867 0.666654 13.1228 0.666674 12.9546L0.666675 3.06665C0.666675 3.05955 0.666674 3.05247 0.666673 3.04538C0.666653 2.87713 0.666634 2.71327 0.677972 2.5745C0.690423 2.4221 0.719802 2.24228 0.812 2.06133C0.939831 1.81045 1.14381 1.60647 1.39469 1.47864C1.57564 1.38644 1.75546 1.35706 1.90786 1.34461C2.04663 1.33328 2.21049 1.33329 2.37874 1.33331Z" fill="#AEAEAE"/>
                 <path fillRule="evenodd" clipRule="evenodd" d="M7.71208 3.99998C7.71916 3.99998 7.72625 3.99998 7.73335 3.99998H8.26668C8.27378 3.99998 8.28086 3.99998 8.28795 3.99998C8.4562 3.99996 8.62006 3.99994 8.75883 4.01128C8.91123 4.02373 9.09105 4.05311 9.272 4.14531C9.52289 4.27314 9.72686 4.47711 9.85469 4.728C9.94689 4.90895 9.97627 5.08877 9.98872 5.24116C10.0001 5.37994 10 5.5438 10 5.71205C10 5.71913 10 5.72622 10 5.73332L10 12.9546C10 13.1228 10.0001 13.2867 9.98872 13.4255C9.97627 13.5779 9.94689 13.7577 9.85469 13.9386C9.72686 14.1895 9.52288 14.3935 9.272 14.5213C9.09105 14.6135 8.91123 14.6429 8.75883 14.6554C8.62006 14.6667 8.45619 14.6667 8.28794 14.6667H7.71209C7.54384 14.6667 7.37997 14.6667 7.2412 14.6554C7.0888 14.6429 6.90898 14.6135 6.72803 14.5213C6.47714 14.3935 6.27317 14.1895 6.14534 13.9386C6.05314 13.7577 6.02376 13.5779 6.01131 13.4255C5.99997 13.2867 5.99999 13.1228 6.00001 12.9546L6.00001 5.73332C6.00001 5.72622 6.00001 5.71913 6.00001 5.71205C5.99999 5.5438 5.99997 5.37994 6.01131 5.24116C6.02376 5.08877 6.05314 4.90895 6.14534 4.728C6.27317 4.47711 6.47714 4.27314 6.72803 4.14531C6.90898 4.05311 7.0888 4.02373 7.2412 4.01128C7.37997 3.99994 7.54383 3.99996 7.71208 3.99998Z" fill="#AEAEAE"/>
                 <path fillRule="evenodd" clipRule="evenodd" d="M13.0454 6.66665C13.0525 6.66665 13.0596 6.66665 13.0667 6.66665H13.6C13.6071 6.66665 13.6142 6.66665 13.6213 6.66665C13.7895 6.66663 13.9534 6.66661 14.0922 6.67795C14.2446 6.6904 14.4244 6.71978 14.6053 6.81197C14.8562 6.93981 15.0602 7.14378 15.188 7.39466C15.2802 7.57561 15.3096 7.75543 15.322 7.90783C15.3334 8.0466 15.3334 8.21046 15.3333 8.37872C15.3333 8.3858 15.3333 8.39289 15.3333 8.39998L15.3333 12.9546C15.3334 13.1228 15.3334 13.2867 15.322 13.4255C15.3096 13.5779 15.2802 13.7577 15.188 13.9386C15.0602 14.1895 14.8562 14.3935 14.6053 14.5213C14.4244 14.6135 14.2446 14.6429 14.0922 14.6554C13.9534 14.6667 13.7895 14.6667 13.6213 14.6667H13.0454C12.8772 14.6667 12.7133 14.6667 12.5745 14.6554C12.4221 14.6429 12.2423 14.6135 12.0614 14.5213C11.8105 14.3935 11.6065 14.1895 11.4787 13.9386C11.3865 13.7577 11.3571 13.5779 11.3446 13.4255C11.3333 13.2867 11.3333 13.1228 11.3333 12.9546L11.3333 8.39998C11.3333 8.39289 11.3333 8.3858 11.3333 8.37872C11.3333 8.21046 11.3333 8.0466 11.3446 7.90783C11.3571 7.75543 11.3865 7.57561 11.4787 7.39466C11.6065 7.14378 11.8105 6.93981 12.0614 6.81197C12.2423 6.71978 12.4221 6.6904 12.5745 6.67795C12.7133 6.66661 12.8772 6.66663 13.0454 6.66665Z" fill="#AEAEAE"/>
               </svg>
               <span>{t("dashboard.Statistics")}</span>
               <div className="countBlock">
                 2
               </div>
             </Link>
  
             <Link onClick={()=>{setActivePage("Promotion")}} to="/partner/promotion" className={`link ${activePage === "Promotion" ? "activeLink" : ""}`}>
               <div className="markLine"></div>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M5.02636 0.820559C5.52174 0.615356 6.07836 0.615355 6.57375 0.820559L7.73582 1.30193C7.90445 1.37154 8.09402 1.37145 8.26253 1.30153L8.26385 1.30098L9.42695 0.821268C9.92217 0.616343 10.4789 0.616276 10.9741 0.821384C11.4693 1.02655 11.8629 1.42003 12.0681 1.91529L12.5382 3.05034C12.5424 3.0593 12.5464 3.06838 12.5502 3.0776C12.6199 3.24615 12.7536 3.38015 12.922 3.45019L14.0853 3.93206C14.5807 4.13726 14.9743 4.53086 15.1794 5.02625C15.3846 5.52164 15.3846 6.07825 15.1794 6.57364L14.6979 7.73631C14.6278 7.90541 14.628 8.09487 14.6979 8.26266L14.6984 8.26407L15.179 9.42587C15.2806 9.67118 15.3331 9.93431 15.3331 10.1998C15.3331 10.4655 15.2809 10.7285 15.1792 10.9739C15.0776 11.2193 14.9286 11.4422 14.7407 11.63C14.5529 11.8178 14.33 11.9667 14.0847 12.0682L12.922 12.5498C12.7536 12.6195 12.6192 12.7533 12.5491 12.9216L12.0672 14.0851C11.862 14.5805 11.4685 14.9741 10.9731 15.1793C10.4777 15.3845 9.92107 15.3845 9.42568 15.1793L8.26361 14.6979C8.09492 14.6282 7.90547 14.6284 7.7369 14.6983L7.73621 14.6986L6.57275 15.1799C6.07764 15.3846 5.52144 15.3845 5.02645 15.1794C4.53147 14.9744 4.13811 14.5813 3.93278 14.0864L3.45056 12.9222C3.38082 12.7535 3.24679 12.619 3.07823 12.549L1.91532 12.0673C1.42015 11.8622 1.02669 11.4689 0.821422 10.9738C0.616157 10.4786 0.615878 9.92229 0.820648 9.42698L1.30217 8.26445C1.37178 8.0958 1.3717 7.9062 1.30177 7.73768L0.820812 6.57316C0.719202 6.32791 0.666714 6.06465 0.666672 5.79918C0.666629 5.53357 0.718922 5.27056 0.820564 5.02516C0.922206 4.77977 1.0712 4.55681 1.25905 4.36902C1.44684 4.18128 1.66977 4.03238 1.91512 3.93081L3.07774 3.44922C3.24611 3.3796 3.38041 3.2459 3.4505 3.07772L3.9322 1.91475C4.13739 1.41936 4.53097 1.02576 5.02636 0.820559ZM11.1381 5.80473C11.3984 5.54438 11.3984 5.12227 11.1381 4.86192C10.8777 4.60157 10.4556 4.60157 10.1953 4.86192L4.86193 10.1953C4.60158 10.4556 4.60158 10.8777 4.86193 11.1381C5.12228 11.3984 5.54439 11.3984 5.80474 11.1381L11.1381 5.80473ZM5.00001 5.99999C5.00001 5.4477 5.44772 4.99999 6.00001 4.99999C6.55229 4.99999 7.00001 5.4477 7.00001 5.99999C7.00001 6.55227 6.55229 6.99999 6.00001 6.99999C5.44772 6.99999 5.00001 6.55227 5.00001 5.99999ZM9.00001 9.99999C9.00001 9.4477 9.44772 8.99999 10 8.99999C10.5523 8.99999 11 9.4477 11 9.99999C11 10.5523 10.5523 11 10 11C9.44772 11 9.00001 10.5523 9.00001 9.99999Z" fill="#AEAEAE"/>
               </svg>
               <span>{t("dashboard.Promotion")}</span>
               <div className="countBlock">
                 2
               </div>
             </Link>
  
             <Link onClick={()=>{setActivePage("Settings")}} to="/partner/settings" className={`link ${activePage === "Settings" ? "activeLink" : ""}`}>
               <div className="markLine"></div>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M6.49483 14.3694L6.05982 13.4055C5.90482 13.0615 5.64306 12.7747 5.31219 12.5866C4.98113 12.3984 4.59815 12.3183 4.21805 12.3576L3.15368 12.4692C2.83687 12.5021 2.5172 12.4437 2.23334 12.3013C1.94948 12.1588 1.7136 11.9384 1.55423 11.6667C1.39481 11.3949 1.31887 11.0835 1.3356 10.77C1.35234 10.4566 1.46104 10.1547 1.64851 9.90095L2.2787 9.04784C2.50344 8.74333 2.62446 8.37649 2.62439 7.99999C2.62446 7.62349 2.50344 7.25665 2.2787 6.95214L1.64851 6.09903C1.46104 5.84528 1.35234 5.54337 1.3356 5.22995C1.31887 4.91653 1.39481 4.60505 1.55423 4.33332C1.71344 4.06143 1.9493 3.84088 2.2332 3.69842C2.5171 3.55596 2.83685 3.49771 3.15368 3.53073L4.22136 3.64236C4.60146 3.68169 4.98444 3.60155 5.3155 3.4134C5.64514 3.22471 5.90569 2.93805 6.05982 2.59451L6.49483 1.63058C6.62414 1.34365 6.83518 1.09985 7.10236 0.928749C7.36952 0.75765 7.68134 0.666605 8 0.666657C8.31865 0.666605 8.63047 0.75765 8.89764 0.928749C9.16481 1.09985 9.37585 1.34365 9.50516 1.63058L9.94348 2.59451C10.0976 2.93805 10.3582 3.22471 10.6878 3.4134C11.0189 3.60155 11.4018 3.68169 11.7819 3.64236L12.8463 3.53073C13.1631 3.49771 13.4829 3.55596 13.7668 3.69842C14.0507 3.84088 14.2865 4.06143 14.4458 4.33332C14.6052 4.60505 14.6811 4.91653 14.6644 5.22995C14.6477 5.54337 14.539 5.84528 14.3515 6.09903L13.7213 6.95214C13.4966 7.25665 13.3755 7.62349 13.3756 7.99999C13.3737 8.37752 13.4936 8.74588 13.718 9.05192L14.3482 9.90503C14.5356 10.1588 14.6443 10.4607 14.6611 10.7741C14.6778 11.0875 14.6019 11.399 14.4425 11.6707C14.2832 11.9426 14.0474 12.1632 13.7635 12.3056C13.4796 12.4481 13.1598 12.5063 12.843 12.4733L11.7786 12.3617C11.3985 12.3224 11.0155 12.4025 10.6845 12.5907C10.3555 12.7783 10.095 13.0634 9.94018 13.4055L9.50516 14.3694C9.37585 14.6563 9.16481 14.9001 8.89764 15.0712C8.63047 15.2423 8.31865 15.3334 8 15.3333C7.68134 15.3334 7.36952 15.2423 7.10236 15.0712C6.83518 14.9001 6.62414 14.6563 6.49483 14.3694ZM10 7.99999C10 9.10456 9.10456 9.99999 8 9.99999C6.89543 9.99999 6 9.10456 6 7.99999C6 6.89542 6.89543 5.99999 8 5.99999C9.10456 5.99999 10 6.89542 10 7.99999Z" fill="#AEAEAE"/>
               </svg>
               <span>{t("dashboard.Settings")}</span>
               <div className="countBlock">
                 2
               </div>
             </Link>
             
           </div>
  
  
           <div className="logOutCont">
             <div className="logOutBtn G-flex G-align-center">
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M4.4251 0.333283C4.95535 0.332996 5.34912 0.332783 5.69023 0.424181C6.61047 0.67076 7.32926 1.38955 7.57584 2.3098C7.66724 2.6509 7.66703 3.04468 7.66674 3.57493V3.93333C7.66674 4.3067 7.66674 4.49339 7.59408 4.63599C7.53016 4.76143 7.42818 4.86342 7.30274 4.92734C7.16013 5 6.97344 5 6.60008 5H5.00004C3.89547 5 3.00004 5.89543 3.00004 7C3.00004 8.10457 3.89547 9 5.00004 9H6.60007C6.97344 9 7.16013 9 7.30274 9.07266C7.42818 9.13658 7.53016 9.23856 7.59408 9.36401C7.66674 9.50661 7.66674 9.6933 7.66674 10.0667V10.425C7.66703 10.9553 7.66724 11.3491 7.57584 11.6902C7.32926 12.6104 6.61047 13.3292 5.69023 13.5758C5.34912 13.6672 4.95535 13.667 4.42509 13.6667L3.97719 13.6666C3.53067 13.6667 3.16209 13.6667 2.86035 13.6461C2.54749 13.6247 2.2581 13.579 1.97955 13.4637C1.32614 13.193 0.807013 12.6739 0.536363 12.0205C0.420987 11.7419 0.375298 11.4525 0.353951 11.1397C0.333365 10.8379 0.333369 10.4694 0.333374 10.0228V3.97712C0.333369 3.5306 0.333365 3.16202 0.353952 2.86029C0.375298 2.54743 0.420987 2.25804 0.536364 1.97949C0.807014 1.32608 1.32614 0.806955 1.97955 0.536304C2.2581 0.420928 2.54749 0.375239 2.86035 0.353893C3.16209 0.333305 3.53067 0.33331 3.9772 0.333316L4.4251 0.333283Z" fill="#0D172F"/>
                 <path d="M9.1953 3.19526C9.45565 2.93491 9.87776 2.93491 10.1381 3.19526L13.4714 6.5286C13.7318 6.78894 13.7318 7.21105 13.4714 7.4714L10.1381 10.8047C9.87776 11.0651 9.45565 11.0651 9.1953 10.8047C8.93495 10.5444 8.93495 10.1223 9.1953 9.86193L11.3906 7.66667H5.00004C4.63185 7.66667 4.33337 7.36819 4.33337 7C4.33337 6.63181 4.63185 6.33333 5.00004 6.33333H11.3906L9.1953 4.13807C8.93495 3.87772 8.93495 3.45561 9.1953 3.19526Z" fill="#0D172F"/>
               </svg>
               {t("dashboard.logOut")}
             </div>
           </div>
           
         </div>
       </div>
       
       <div className="mainBlock G-flex G-flex-column">
         <div className="headerBlock G-flex G-align-center G-justify-between">
            <p className="sectionPrg">
              {
                activePage === "Help" ? `${t("dashboard.Help")}` :
                   activePage === "Home" ? `${t("dashboard.Home")}` :
                      activePage === "Emergency" ? `${t("dashboard.Emergency")}` :
                         activePage === "Request" ? `${t("dashboard.Request")}` :
                            activePage === "Stock" ? `${t("dashboard.Stock")}` :
                               activePage === "Statistics" ? `${t("dashboard.Statistics")}` :
                                  activePage === "Promotion" ? `${t("dashboard.Promotion")}` :
                                     activePage === "Settings" ? `${t("dashboard.Settings")}` :
                                        activePage === "RequestsHistory" ? `${t("dashboard.RequestsHistory")}` :
                                           activePage === "Balance" ? `${t("dashboard.Balance")}` :
                                              activePage === "Cart" ? `${t("dashboard.Cart")}` :
                                                 activePage === "Checkout" ? `${t("dashboard.Checkout")}` :
                                                    activePage === "ManageReviews" ? `${t("dashboard.ManageReviews")}` :
                                                       activePage === "Messages" ? `${t("dashboard.Messages")}` : `${t("dashboard.Home")}`
  
  
  
              }
            </p>
           
           <div className="buttonsBlock G-flex G-align-center">
              <Link onClick={()=>{setActivePage("Help")}} to="/partner/help" className="helpLink">{t("dashboard.needHelp")}</Link>
             <Link className="LinkToMessages" to="/chat"><img
                src={SvgData.message} alt=""/>
               <div className="newMessage"></div>
             </Link>
             <div id="messages2" className="LinkToNotifications">
               <img src={SvgData.notification} alt=""/>
               <div className="newMessage"></div>
             </div>
             <Link className="linkToCart" to="/partner/cart"><img src={Images.cartIcon} alt=""/>
              <div className="CartCount">2</div>
             </Link>
             
             <div className="profileBlock G-flex G-align-center">
               <div className="imgCircle G-flex G-justify-center G-align-center">
                 <img src={Images.userLogo} alt=""/>
               </div>
               <span className="name">CarFy service</span>
             </div>
  
  
             <div id="messagesBlock2" style={{display: `${notes ? "flex" : "none"}`, opacity: `${opc ? 1 : 0}`}} className="notificationsBlock G-flex-column">
               <div className="buttons-block G-justify-between G-align-center">
                 <div className="notesBlock G-align-center">
                   <img src={SvgData.notification} alt=""/>
                   <span className="spanNotification">{t('navigator.notes')}</span>
                   <span className="num">3</span>
                 </div>
                 <img className="closeButton" onClick={() => setNotes(false)} src={SvgData.closeIcon} alt=""/>
               </div>
               <EachNotifications/>
               <EachNotifications/>
  
  
             </div>
             <div onClick={()=>{setNotes(false)}} style={{display:`${notes ? "block" : "none"}`, opacity:`${opc ? 1 : 0}`}} className="backgroundBlock"></div>

           </div>
         </div>
         
         
         <Outlet/>
         
         <p className="copyRightText">© Copyright 2023, All Rights Reserved by Fy Technology OU</p>
       </div>
     </div>
  );
}

export default Dashboard;