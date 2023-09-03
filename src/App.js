import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Detection from "./pages/Detection";
import Statistic from "./pages/Statistic";
import Readmore from "./pages/Readmore";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/explore" element={<Explore />} ></Route>
          <Route exact path="/detection" element={<Detection />} ></Route>
          <Route exact path="/statistic" element={<Statistic />} ></Route>
          <Route exact path="/readmore" element={<Readmore />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
