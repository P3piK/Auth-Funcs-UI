import React from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

function EditAccountModal(props) {
  return (
    <Modal onExit={props.onExit}>
      <Card>
        <p>EditAccountModal</p>
        <button onClick={props.onExit}>Cancel</button>
      </Card>
    </Modal>
  );
}

export default EditAccountModal;
