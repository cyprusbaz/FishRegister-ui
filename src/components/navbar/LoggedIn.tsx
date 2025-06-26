import { useState } from "react";
import styles from "./LoggedIn.module.css";

export const LoggedIn = () => {
  const [onHovered, setOnHovered] = useState<boolean>(false);

  return (
    <div className={styles.buttons}>
      <div className={styles.buttons_transperent}>
        <a>Home</a>
        <a>Feed</a>
        <a>Leaderboard</a>
      </div>
      <div
        className={styles.account}
        onMouseEnter={() => setOnHovered(true)}
        onMouseLeave={() => setOnHovered(false)}
      >
        <div className={styles.account_trigger}>
          <a>My Account</a>
        </div>
        {onHovered && (
          <div className={styles.account_dropdowns}>
            <div className={styles.account_dropdown}>
              <a>Settings</a>
            </div>
            <div className={styles.account_dropdown}>
              <a>Sign Out</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
