import React from "react";
import styles from './HeaderAuth.module.css'

function HeaderAuth() {
  return (
    <div className={styles.action}>
      <button className={styles.signup}>Sign Up</button>
      <button className={styles.login}>Log In</button>
    </div>
  );
}

export default HeaderAuth;
