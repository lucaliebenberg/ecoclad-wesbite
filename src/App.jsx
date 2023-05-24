import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";

// pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Solutions from "./pages/Solutions";
import ContactUs from "./pages/ContactUs";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
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
