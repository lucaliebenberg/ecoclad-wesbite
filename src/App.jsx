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
        <Route exact="true" path="/home" element={<Home />} />
        <Route exact="true" path="/aboutus" element={<AboutUs />} />
        <Route exact="true" path="/ourservices" element={<OurServices />} />
        <Route exact="true" path="/solutions" element={<Solutions />} />
        <Route exact="true" path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
