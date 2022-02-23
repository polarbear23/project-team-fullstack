import Home from "./pages/home/Home";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes >
      <Footer/>
    </div>
  );
}

export default App;
