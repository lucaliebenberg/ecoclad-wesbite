import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhatWeOffer from "./components/WhatWeOffer";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <WhyUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
