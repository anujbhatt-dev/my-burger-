import React from "react";
import Aux from "../../hoc/Auxilary";

const Layout = props =>{
    return  <Aux>
       <div>toolbar,slideDrawer,backdrop</div>
       <main>{props.children}</main>
    </Aux>
}
export default Layout;
