import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclose}>{props.children}</div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div >{props.children}</div>
    </div>
  );
};

const Modal = (props) => {

const elementPortal = document.getElementById("overlays")

  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onclose={props.onClose}/>, elementPortal)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        elementPortal
      )}
    </React.Fragment>
  );
};

export default Modal;
