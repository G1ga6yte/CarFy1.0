import cart from "./helpIcons/shopping-cart-01.svg"
import pencil from "./helpIcons/pencil-02.svg"
import card from "./helpIcons/credit-card-02.svg"
import truck from "./helpIcons/truck-02.svg"
import packageMinus from "./helpIcons/package-minus.svg"
import star from "./helpIcons/star-06.svg"
import {useState} from "react";

export const HelpData = [
  {
    name: "Checkout",
    status: false,
    icon: cart,
    source: [
      {
        name: "Minimum order amount",
        text: "You will see the minimum amount at checkout. It may vary depending on the region of delivery, the seller and other parameters."
      },
      {
        name: "Can't choose pickup",
        text: ""
      },
      {
        name: "The delivery date has changed in the cart",
        text: ""
      },
      {
        name: "Promo code not applied",
        text: ""
      },
      {
        name: "How to know the status of an order",
        text: ""
      }
    ]
  },
  {
    name: "Changing and canceling order",
    status: false,
    icon: pencil,
    source: [
      {
        name: "How to change an order",
        text: ""
      },
      {
        name: "How to cancel the order",
        text: ""
      },
      {
        name: "When will the money, bonuses and promotional codes be returned when the order is canceled",
        text: ""
      }
    ]
  },
  {
    name: "Payment and documents",
    status: false,
    icon: card,
    source: [
      {
        name: "Payment Methods",
        text: ""
      },
      {
        name: "How to pay for an order online",
        text: ""
      },
      {
        name: "Online payment error",
        text: ""
      },
      {
        name: "Credit",
        text: ""
      },
      {
        name: "Checks",
        text: ""
      },
      {
        name: "For legal entities",
        text: ""
      }
    ]
  },
  {
    name: "Delivery",
    status: false,
    icon: truck,
    source: [
      {
        name: "Cost and delivery time",
        text: ""
      },
      {
        name: "Shipping Tracking",
        text: ""
      },
      {
        name: "What delivery details can be changed",
        text: ""
      },
      {
        name: "How is the order received",
        text: ""
      },
      {
        name: "Oversized delivery",
        text: ""
      },
      {
        name: "Delivery by courier on click",
        text: ""
      },
      {
        name: "What is \"Get it Today\"",
        text: ""
      }
    ]
  },
  {
    name: "Return",
    status: false,
    icon: packageMinus,
    source: [
      {
        name: "Product problem",
        text: ""
      },
      {
        name: "Return of good quality goods",
        text: ""
      },
      {
        name: "When will the money, bonuses and promotional codes be returned when returning the goods",
        text: ""
      },
      {
        name: "Buying medicines",
        text: ""
      },
      {
        name: "Easy return",
        text: ""
      },
      {
        name: "Warranty and service",
        text: ""
      }
    ]
  },
  {
    name: "Promotions and bonuses",
    status: false,
    icon: star,
    source: [
      {
        name: "Bonus accrual for reviews",
        text: ""
      },
      {
        name: "Promotion \"Best Price Guarantee\"",
        text: ""
      },
      {
        name: "Switching to the loyalty program",
        text: ""
      },
      {
        name: "What is Availability Guarantee",
        text: ""
      },
      {
        name: "Promo code not applied",
        text: ""
      }
    ]
  },
  {
    name: "Personal data",
    status: false,
    source: []
  },
  {
    name: "Site rule",
    status: false,
    source: []
  },
  {
    name: "Finding service",
    status: false,
    source: []
  }
]