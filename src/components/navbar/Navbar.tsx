import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assests/logo.png";
import { Generic } from "./Generic";
import { LoggedIn } from "./LoggedIn";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        {loggedIn ? <LoggedIn /> : <Generic />}
      </div>
    </nav>
  );
};
