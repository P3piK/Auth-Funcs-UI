import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import styles from "./AccountItem.module.css";

function AccountItem(props) {
  const { item } = props;
  const [isClicked, setIsClicked] = useState(false);

  const activateDropdownHandler = () => {
    setIsClicked((prevState) => {
      return !prevState;
    });
  };

  const editHandler = () => {
    console.log("edit");
  };

  const deleteHandler = () => {
    console.log("delete");
  };

  return (
    <li className={styles.item}>
      <div className={styles.control}>
        <p className={styles.login}>{item.login}</p>
        <p className={styles.role}>{item.role}</p>
        <p className={styles.status}>{item.status}</p>
      </div>
      <div
        className={`${styles.dropdown} ${
          isClicked && styles["dropdown-active"]
        }`}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles["dropdown-icon"]}
          onClick={activateDropdownHandler}
        />
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
    </li>
  );
}

export default AccountItem;
