import { useState } from "react";
import styles from "./LoggedIn.module.css";
import { deleteToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export const LoggedIn = ({
  setLoggedIn,
}: {
  setLoggedIn: (value: boolean) => void;
}) => {
  const [onHovered, setOnHovered] = useState<boolean>(false);

  function logout() {
    deleteToken();
    window.location.href = "/";
    setLoggedIn(false);
  }

  return (
    <div className={styles.buttons}>
      <div className={styles.buttons_transperent}>
        <a href="/">Home</a>
        <a href="/Feed">Feed</a>
        <a href="/Leaderboard">Leaderboard</a>
      </div>
      <div
        className={styles.account}
        onMouseEnter={() => setOnHovered(true)}
        onMouseLeave={() => setOnHovered(false)}
      >
        <div className={styles.account_trigger}>
          <a href="/MyAccount">My Account</a>
        </div>
        {onHovered && (
          <div className={styles.account_dropdowns}>
            <div className={styles.account_dropdown}>
              <a href="/Settings">Settings</a>
            </div>
            <div className={styles.account_dropdown} onClick={logout}>
              <a>Sign Out</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
