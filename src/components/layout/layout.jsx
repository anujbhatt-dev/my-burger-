import React from "react";
import Aux from "../../hoc/Auxilary";
import Toolbar from "../navigation/toolbar/toolbar"
import SideDrawer from "../navigation/side-drawer/side-drawer"
class Layout extends React.Component{
    state = {
      showSideDrawer:true
    }

    sideDrawerHandler=()=>{
       this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
       this.setState((prevState)=>({showSideDrawer:!prevState.showSideDrawer}))
    }

    render(){
      return  (
        <Aux>
           <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
           <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
           <main style={{marginTop:"72px"}}>{this.props.children}</main>
       </Aux>
  )}
}
export default Layout;
