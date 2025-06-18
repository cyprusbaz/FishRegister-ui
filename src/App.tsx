import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./Pages/Home";
import { TestPage } from "./Pages/TestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
