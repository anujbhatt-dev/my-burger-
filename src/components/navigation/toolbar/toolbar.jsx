import React from "react";
import Logo from "../../logo/logo"
import NavigationItems from "../nav-items/nav-items"
import DrawerToggle from "../side-drawer/drawer-toggle/drawer-toggle"
const Toolbar =(props)=>(
  <header className="toolbar">
     <DrawerToggle clicked={props.drawerToggleClicked}/>
     <Logo/>
     <nav className="deskTopOnly">
     <NavigationItems />
     </nav>
  </header>
)
export default Toolbar
