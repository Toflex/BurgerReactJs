import React, { Component } from "react";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  DrawerToggleClicked = () => {
    const drawerState = this.state.showSideDrawer;
    this.setState({ showSideDrawer: !drawerState });
  };

  render() {
    return (
      <Aux>
        <Toolbar DrawerToggleClicked={this.DrawerToggleClicked} />
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
