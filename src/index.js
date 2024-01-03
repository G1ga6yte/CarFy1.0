import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./CartContext";
import './index.css';
import './source/font/font.scss';
import './source/Global.scss'
import './source/mixin.scss'
import './source/variables.scss'
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
     <CartProvider>
       <App/>
     </CartProvider>
   </BrowserRouter>,
);

