import React from "react";
import NavigationItem from "./nav-item/nav-item"
const NavigationItems =(props)=>(
   <ul className="nav-items">
     <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
     <NavigationItem link="/" >checkout</NavigationItem>
   </ul>
)
export default NavigationItems;
