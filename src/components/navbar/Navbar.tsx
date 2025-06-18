import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assests/logo.png";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.buttons}></div>
      </div>
    </nav>
  );
};
