import { useState } from "react";
import styles from "./Generic.module.css";

export const Generic = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttons_transperent}>
        <a>Home</a>
        <a>Feed</a>
        <a>Leaderboard</a>
      </div>
      <div className={styles.account}>
        <a>Sign Up</a>
      </div>
    </div>
  );
};
