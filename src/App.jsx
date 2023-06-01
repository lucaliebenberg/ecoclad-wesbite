import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "../src/components/Navbar";

// pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import OurServices from "./pages/OurServices.jsx";
import Solutions from "./pages/Solutions.jsx";
import ContactUs from "./pages/ContactUs.jsx";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
