import Home from "./pages/home/Home";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import "../client/styles/app.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
