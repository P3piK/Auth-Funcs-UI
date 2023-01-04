import React from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

function DeleteAccountModal(props) {
  return (
    <Modal onExit={props.onExit}>
      <Card>
        <p>Not authorised.</p>
        <button onClick={props.onExit}>Cancel</button>
      </Card>
    </Modal>
  );
}

export default DeleteAccountModal;
