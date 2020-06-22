import React from "react"
import Aux from "../../../hoc/Auxilary";
import Backdrop from "../backdrop/backdrop"

 class Modal extends React.Component{

   componentDidUpdate(){
     console.log("[modal did update]");
   }

   shouldComponentUpdate(nextProps,nextState){
      return nextProps.show!==this.props.show;
   }


   render(){
     return(
       <Aux>
         <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
         <div className="modal" style={{
           transform: this.props.show? "translateY(0)":"translateY(-100vh)",
           opacity:this.props.show?"1":"0"
         }}>
           {this.props.children}
         </div>
       </Aux>
     )
   }
 }

export default Modal;
