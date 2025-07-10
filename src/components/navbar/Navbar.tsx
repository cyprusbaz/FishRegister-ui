import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assests/logo.png";
import { Generic } from "./Generic";
import { LoggedIn } from "./LoggedIn";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="Logo" className={styles.logoSvg} />
          </a>
        </div>
        {loggedIn ? <LoggedIn setLoggedIn={setLoggedIn} /> : <Generic />}
      </div>
    </nav>
  );
};
