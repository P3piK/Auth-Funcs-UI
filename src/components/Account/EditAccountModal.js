import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import styles from "./EditAccountModal.module.css";

function EditAccountModal(props) {
  const { item } = props;
  const loginInput = useInput((val) => val.includes("@"), item.login);
  const [role, setRole] = useState(item.role);
  const [status, setStatus] = useState(item.status);

  const statusChangeHandler = (event) => {
    setStatus(event.target.value);
  };

  const roleChangeHandler = (event) => {
    setRole(event.target.value);
  };

  return (
    <Modal onExit={props.onExit}>
      <Card className={styles["edit-card"]}>
        <form>
          <div>
            <Input
              className={styles.input}
              type="email"
              input={loginInput}
              errorText="Input is not valid email address."
            >
              Login
            </Input>
            <div className={styles.input}>
              <label>Status</label>
              <select value={status} onChange={statusChangeHandler}>
                <option value={"Active"}>Active</option>
                <option value={"Inactive"}>Inactive</option>
                <option value={"NotConfirmed"}>Not Confirmed</option>
                <option value={"PasswordReset"}>Password Reset</option>
              </select>
            </div>
            <div className={styles.input}>
              <label>Role</label>
              <select value={role} onChange={roleChangeHandler}>
                <option value="User">User</option>
                <option value="Superuser">Superuser</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>
          <div>
            <button onClick={props.onExit}>Cancel</button>
            <button onClick={props.onExit}>Submit</button>
          </div>
        </form>
      </Card>
    </Modal>
  );
}

export default EditAccountModal;
