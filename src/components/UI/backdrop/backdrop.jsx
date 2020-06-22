import React from "react"
import Aux from "../../../hoc/Auxilary";
const Backdrop =(props)=>{
  return (
    props.show?<div className="backdrop" onClick={props.clicked}></div>:null
  )
}
export default Backdrop
