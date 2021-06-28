import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles.module.scss";

class Modal extends Component {

  render() {
    return (
      this.props.open ? ReactDOM.createPortal(
        <div className={styles.modal}>
        <span onClick = {this.props.close}>X</span>
        { this.props.children }
        </div>, document.body) : null
    )
  }
}

export default Modal;