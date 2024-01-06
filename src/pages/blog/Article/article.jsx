import React from "react";
import ParkingImg from "./parking-sign 1.png"
import "./Article.scss"
import {Link} from "react-router-dom";

function Article (){
  return(
     <div className="ArticleCont G-container G-flex-column G-align-center">
       
       <div className="TopImgBlock">
         <span className="span">FEATURED</span>
         <p className="prg">How to pay for parking?</p>
         <img src={ParkingImg} alt=""/>
       </div>
       
       <p className="header">How to Pay for Parking: A Comprehensive Guide</p>

      <div className="TextBlock">
        <p className="textPrg">Parking is an essential part of driving, but it can be a hassle to find a spot and pay for it. Fortunately, there are many ways to pay for parking that are convenient and easy to use. In this guide, we'll explore the different methods of paying for parking and help you choose the best one for your needs.</p>
        <p className="headerPrg">Paying with Cash</p>
        <p className="textPrg">Paying with cash is the traditional way of paying for parking. You simply find a parking meter, insert coins or bills, and wait for your ticket to print. This method is straightforward and doesn't require any special equipment or technology. However, it can be inconvenient if you don't have exact change or if the meter is out of order.</p>
        <p className="headerPrg">Paying with Credit Card</p>
        <p className="textPrg">Many parking meters now accept credit cards as a form of payment. To use this method, you simply insert your credit card into the meter and follow the instructions on the screen. This method is convenient if you don't have cash on hand, but you'll need to make sure your card has enough available credit to cover the parking fee.</p>
        <p className="headerPrg">Paying with Mobile Apps</p>
        <p className="textPrg">Mobile apps like ParkMobile, PayByPhone, and SpotHero allow you to pay for parking using your smartphone. To use these apps, you'll need to create an account and link your payment method. Then, you can use the app to find parking spots, pay for your spot, and even extend your time if needed. This method is convenient and eliminates the need for physical tickets or cash.</p>
        <p className="headerPrg">Paying with Contactless Payment</p>
        <p className="textPrg">Contactless payment methods like Apple Pay, Google Pay, and Samsung Pay are becoming more common at parking meters. To use this method, you simply hold your smartphone or contactless credit card near the meter's payment terminal. This method is fast, secure, and eliminates the need for physical tickets or cash.</p>
        <p className="headerPrg">Conclusion</p>
        <p className="textPrg">There are many ways to pay for parking, each with its own advantages and disadvantages. Whether you prefer cash, credit card, mobile apps, or contactless payment, there's a method that will work for you. By understanding your options and choosing the best one for your needs, you can make parking a hassle-free part of your day.</p>
      </div>
       
       
       <div className="similarPosts">
         <p className="miniHeader">Similar posts</p>
         
         <div className="posts G-justify-between G-align-center">
         
           <Link to="/" className="post">
             <p className="prg">How to pay for parking?</p>
             <img src={ParkingImg} alt=""/>
           </Link>
           <Link to="/" className="post">
             <p className="prg">How to pay for parking?</p>
             <img src={ParkingImg} alt=""/>
           </Link>
           <Link to="/" className="post">
             <p className="prg">How to pay for parking?</p>
             <img src={ParkingImg} alt=""/>
           </Link>
           <Link to="/" className="post">
             <p className="prg">How to pay for parking?</p>
             <img src={ParkingImg} alt=""/>
           </Link>
           
         </div>
       </div>
      
      
      
     </div>
  )
}

export default Article