import Home from "./pages/home/Home";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import "../client/styles/app.css";
import Signup from "./pages/forms/Signup";
import SignIn from "./pages/forms/SignIn";
import Forum from "./pages/forum/Forum";
import { Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <div className="app">
      <Header/>
        <LeftMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes >
      <Footer/>
    </div>
  );
}

export default App;
