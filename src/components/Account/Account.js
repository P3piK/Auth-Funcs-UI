import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Card from "../../UI/Card";
import styles from "./Account.module.css";
import AccountList from "./AccountList";
import CreateAccountModal from "./CreateAccountModal";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Account() {
  const [showAddModal, setShowAddModal] = useState(false);

  const addHandler = () => {
    setShowAddModal(true);
  };

  const exitModalHandler = () => {
    setShowAddModal(false);
  };

  return (
    <Card className={styles.account}>
      {showAddModal && <CreateAccountModal onExit={exitModalHandler} />}
      <AccountHeader onAddAccount={addHandler} />
      <AccountList />
    </Card>
  );
}

function AccountHeader(props) {
  return (
    <div className={styles.header}>
      <h2>Accounts</h2>
      <button className={styles["circle-button"]} onClick={props.onAddAccount}>
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    </div>
  );
}

export default Account;
