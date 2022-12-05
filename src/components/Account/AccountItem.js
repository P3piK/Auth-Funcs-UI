import React, { useState } from "react";
import styles from "./AccountItem.module.css";

function AccountItem(props) {
  const { item } = props;
  const [isClicked, setIsClicked] = useState(false);

  const mouseOverHandler = () => {
    setIsClicked(true);
  };

  const mouseLeaveHandler = () => {
    setIsClicked(false);
  };

  const editHandler = () => {
    console.log("edit");
  };

  const deleteHandler = () => {
    console.log("delete");
  }

  return (
    <li className={styles.item}>
      <div className={styles.control}>
        <p className={styles.login}>{item.login}</p>
        <p className={styles.role}>{item.role}</p>
        <p className={styles.status}>{item.status}</p>
      </div>
      <div
        className={`${styles.action} ${isClicked && styles.expanded}`}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {!isClicked && <button>Actions</button>}
        {isClicked && (
          <>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
}

export default AccountItem;
