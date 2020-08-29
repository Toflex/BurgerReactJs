import React, { Component } from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../../hoc/Aux/Aux";


class Modal extends Component{

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  render(){
    return (
      <Aux>
        <BackDrop clicked={this.props.modelClosed} show={this.props.show}  />
      <div
        className={classes.Modal}
        style={{
          transform: this.props.show ? "translateY(0)" : "translateY-100vh)",
          display: this.props.show ? 'block' : "none",
        }}
      >
        {this.props.children}
      </div>
      </Aux>
    );
  }
}

export default Modal;
