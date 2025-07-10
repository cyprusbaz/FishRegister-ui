import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./Pages/Home";
import { LogIn } from "./components/logIn/LogIn";
import { Footer } from "./components/footer/Footer";
import { Register } from "./components/register/Register";
import { Feed } from "./Pages/Feed";
import { Leaderboard } from "./Pages/Leaderboard";
import { MyAccount } from "./Pages/MyAccount";
import { Settings } from "./Pages/Settings";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<LogIn />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Feed" element={<Feed />}></Route>
            <Route path="/Leaderboard" element={<Leaderboard />}></Route>
            <Route path="/MyAccount" element={<MyAccount />}></Route>
            <Route path="/Settings" element={<Settings />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
