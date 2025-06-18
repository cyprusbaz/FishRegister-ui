import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
