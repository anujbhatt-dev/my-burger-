import React from "react";
import BuildControl from "./build-control/build-control"
const controls =[
  {label:"salad",type:"salad"},
  {label:"bacon",type:"bacon"},
  {label:"cheese",type:"cheese"},
  {label:"meat",type:"meat"}
]
const buildControls = props =>{
  return  <div className="buildControls">
       <p>
         current price:
         <strong> ₹{props.price}</strong>
       </p>
       {controls.map(ctrl=>(
         <BuildControl
         key={ctrl.label}
         label={ctrl.label}
         added={()=>props.ingredientAdded(ctrl.type)}
         removed={()=>props.ingredientRemoved(ctrl.type)}
         disabled={props.disabled[ctrl.type]}/>
       ))}
       <button className="OrderButton">ORDER NOW</button>
  </div>
};
export default buildControls;
