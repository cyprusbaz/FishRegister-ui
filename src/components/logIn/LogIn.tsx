import { useState, type ChangeEvent, type ChangeEventHandler } from "react";
import styles from "./LogIn.module.css";
import type { UserLogin } from "../../models/user/userApi";
import "../../api/user/useLogin";
import { check, handleLogin } from "../../api/user/useLogin";

export const LogIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      setUsername(event.target.value);
      console.log(username);
    }
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) setPassword(event.target.value);
  }
  function handleButtonClick() {
    const login: UserLogin = {
      username: username,
      password: password,
    };

    console.log(login.password + " " + login.username);

    handleLogin(login);
  }

  return (
    <section className={styles.logIn}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="username"
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <button onClick={handleButtonClick}>Log In</button>
      </div>
    </section>
  );
};
