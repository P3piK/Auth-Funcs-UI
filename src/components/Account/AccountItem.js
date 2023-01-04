import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import styles from "./AccountItem.module.css";
import DeleteAccountModal from "./DeleteAccountModal";
import EditAccountModal from "./EditAccountModal";

function AccountItem(props) {
  const { item } = props;
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const editHandler = () => setShowEditModal(true);
  const deleteHandler = () => setShowDeleteModal(true);

  const exitModalHandler = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  }
  return (
    <>
      {showEditModal && <EditAccountModal item={item} onExit={exitModalHandler} />}
      {showDeleteModal && <DeleteAccountModal onExit={exitModalHandler} />}
      <li className={styles.item}>
        <div className={styles.control}>
          <p className={styles.login}>{item.login}</p>
          <p className={styles.role}>{item.role}</p>
          <p className={styles.status}>{item.status}</p>
        </div>
        <AccountDropdown onEdit={editHandler} onDelete={deleteHandler} />
      </li>
    </>
  );
}

function AccountDropdown(props) {
  const [isClicked, setIsClicked] = useState(false);

  const activateDropdownHandler = () => {
    setIsClicked((prevState) => {
      return !prevState;
    });
  };

  const editHandler = () => {
    props.onEdit();
  };

  const deleteHandler = () => {
    props.onDelete();
  };

  return (
    <div
      className={`${styles.dropdown} ${isClicked && styles["dropdown-active"]}`}
    >
      <div
        className={styles["dropdown-header"]}
        onClick={activateDropdownHandler}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles["dropdown-icon"]}
        />
      </div>
      <ul className={styles["dropdown-menu"]}>
        <li onClick={editHandler}>
          <span>
            <FontAwesomeIcon icon={faPenToSquare} />
            <p>Edit</p>
          </span>
        </li>
        <li onClick={deleteHandler}>
          <span>
            <FontAwesomeIcon icon={faTrashCan} />
            <p>Delete</p>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AccountItem;
