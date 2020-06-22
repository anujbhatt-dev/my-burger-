import React from "react";
import Logo from "../../logo/logo"
import NavigationItems from "../nav-items/nav-items"
import Backdrop from "../../UI/backdrop/backdrop"
import Aux from "../../../hoc/Auxilary"
const SideDrawer =(props)=>{
   let attachClasses = ["sideDrawer","close"];
   if(props.open){
     attachClasses = ["sideDrawer","open"]
   }
   return(
      <Aux>
       <Backdrop show={props.open} clicked={props.closed}/>
       <div className={attachClasses.join(' ')}>
          <Logo style={{height:"11%",  margin:"50px 0" }}/>
          <nav>
             <NavigationItems />
          </nav>
       </div>
     </Aux>
   )
}
export default SideDrawer;
