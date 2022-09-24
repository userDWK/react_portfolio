import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styleUtil/styles.css";
import Community from "./common/main/Community";
import Department from "./common/main/Department";
import Join from "./common/main/Join";
import Youtube from "./common/main/Youtube";
import Location from "./common/main/Location";
import Main from "./common/main/Main";
import Gallery from "./common/main/Gallery";

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
