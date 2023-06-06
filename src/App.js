import "../src/css/zsite-core.css";
import "../src/zs-customcss.css";
import "../src/template/c57b4172d5124eb39900599ff8d6c85b/stylesheets/style.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
// import Services from "./Components/Services";
import Header from "./components/Header"
import Footer from "./components/Footer";
// import Contact from "./Components/Contact";
// import Registration from "./Components/Registration";
import Candiadteserver from "./components/Candiadteserver";
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/services" element={<Services />}></Route> */}
        <Route path="/src/components/About.jsx" element={<About />}></Route>
        <Route path="/src/components/Candiadteserver.jsx" element={<Candiadteserver />}></Route>
        {/* <Route path="/registration" element={<Registration />}></Route> */}
        {/* <Route path="/contact" element={<Contact />}></Route> */}

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
