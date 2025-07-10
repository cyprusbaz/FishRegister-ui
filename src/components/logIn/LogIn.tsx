import { useEffect, useState, type ChangeEvent } from "react";
import styles from "./LogIn.module.css";
import type { UserLogin } from "../../models/user/userApi";
import "../../api/user/useLogin";
import { handleLogin } from "../../api/user/useLogin";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  function goToRegister(): void {
    navigate("/Register");
  }

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      setUsername(event.target.value);
    }
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) setPassword(event.target.value);
  }
  async function handleButtonClick() {
    const login: UserLogin = {
      username: username,
      password: password,
    };
    await handleLogin(login);

    if (localStorage.getItem("access_token")) window.location.href = "/";
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
        <a onClick={goToRegister}>Create an account</a>
      </div>
    </section>
  );
};
