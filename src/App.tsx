import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./Pages/Home";
import { LogIn } from "./components/logIn/LogIn";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
