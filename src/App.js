import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/main/header/navItem/Main";
import Community from "./components/main/header/navItem/Community";
import Department from "./components/main/header/navItem/Department";
import Gallery from "./components/main/header/navItem/Gallery";
import Join from "./components/main/header/navItem/Join";
import Youtube from "./components/main/header/navItem/Youtube";
import Location from "./components/main/header/navItem/Location";
import "./styleUtil/styles.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Community" element={<Community />} />
        <Route exact path="/Department" element={<Department />} />
        <Route exact path="/Gallery" element={<Gallery />} />
        <Route exact path="/Join" element={<Join />} />
        <Route exact path="/Youtube" element={<Youtube />} />
        <Route exact path="/Location" element={<Location />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
