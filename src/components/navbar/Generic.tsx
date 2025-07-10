import { useState } from "react";
import styles from "./Generic.module.css";
import { useNavigate } from "react-router-dom";

export const Generic = () => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/LogIn");
  }
  return (
    <div className={styles.buttons}>
      <div className={styles.buttons_transperent}>
        <a href="/">Home</a>
        <a href="/Feed">Feed</a>
        <a href="/Leaderboard">Leaderboard</a>
      </div>
      <div className={styles.account} onClick={handleButtonClick}>
        <a>Sign Up</a>
      </div>
    </div>
  );
};
