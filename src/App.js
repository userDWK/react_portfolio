import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Community from "./components/Community";
import Department from "./components/Department";
import Gallery from "./components/Gallery";
import Join from "./components/Join";
import Youtube from "./components/Youtube";
import Location from "./components/Location";
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
