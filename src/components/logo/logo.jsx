import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
const Logo =(props)=>(
  <div style={props.style} className="logo">
    <img  src={burgerLogo} alt="burgerLogo"/>
  </div>
)
export default Logo;
