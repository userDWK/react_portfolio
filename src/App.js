import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styleUtil/styles.css";
import Community from "./common/main/community/Community";
import Department from "./common/main/department/Department";
import Gallery from "./common/main/gallery/Gallery";
import Join from "./common/main/join/Join";
import Youtube from "./common/main/youtube/Youtube";
import Location from "./common/main/location/Location";
import Main from "./common/main/main/Main";

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
