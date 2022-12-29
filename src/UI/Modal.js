import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modal} onClick={props.onExit}></div>,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <div className={styles.content}>{props.children}</div>,
        document.getElementById("overlay")
      )}
    </>
  );
}

export default Modal;
