import React from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

function DeleteAccountModal(props) {
  return (
    <Modal onExit={props.onExit}>
      <Card>
        <p>You're not authorised to do this.</p>
        <button onClick={props.onExit}>Cancel</button>
      </Card>
    </Modal>
  );
}

export default DeleteAccountModal;
