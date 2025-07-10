import { useState, type ChangeEvent } from "react";
import styles from "./Register.module.css";
import type { UserRegister } from "../../models/user/userApi";
import { handleRegister } from "../../api/user/useRegister";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();
  function goToLogin(): void {
    navigate("/Login");
  }

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      setUsername(event.target.value);
    }
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) setPassword(event.target.value);
  }
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) setName(event.target.value);
  }
  function handleSurnameChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) setSurname(event.target.value);
  }
  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) setEmail(event.target.value);
  }

  async function handleButtonClick() {
    const login: UserRegister = {
      username: username,
      password: password,
      email: email,
      name: name,
      surname: surname,
    };
    await handleRegister(login);
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
        <input type="email" placeholder="email" onChange={handleEmailChange} />
        <input type="text" placeholder="name" onChange={handleNameChange} />
        <input
          type="text"
          placeholder="surname"
          onChange={handleSurnameChange}
        />
        <button onClick={handleButtonClick}>Register</button>
        <a onClick={goToLogin}>Log in to your account</a>
      </div>
    </section>
  );
};
