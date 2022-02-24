import Home from "./pages/home/Home";
import Header from "./Header";
import Footer from "./Footer";
import "../client/styles/app.css";
import LeftMenu from "./LeftMenu";
import Signup from "./pages/forms/Signup";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header/>
        <LeftMenu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes >
      <Footer/>
    </div>
  );
}

export default App;
