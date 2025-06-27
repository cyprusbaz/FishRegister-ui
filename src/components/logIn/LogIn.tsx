import React from "react";
import styles from "./LogIn.module.css";

export const LogIn = () => {
  return (
    <section className={styles.logIn}>
      <div className={styles.container}>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Log In</button>
      </div>
    </section>
  );
};
