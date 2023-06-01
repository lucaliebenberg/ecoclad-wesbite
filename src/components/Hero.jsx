import { useEffect } from "react";
// import Product1 from "../assets/product1.png";
import { motion, useAnimation } from "framer-motion";

import HeroBg from "../assets/img/roof.jpg";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, 20, 0],
      transition: { duration: 5, repeat: Infinity },
    });
  }, []);

  return (
    <motion.div
      id="hero"
      className="w-full h-full relative pb-5 md:pb-[11.1rem] bg-white overflow-x-hidden z-8"
    >
      {/* background img */}
      <div className="absolute w-full z-[8] overflow-y-hidden h-[80vh] bg-black opacity-85">
        <img
          src={HeroBg}
          alt="Ecoclad Roofing"
          className="w-full object-fit over"
        />
      </div>
      <div className="w-full h-full flex flex-row justify-between align-middle pt-[6rem] lg:pt-[10rem]">
        <motion.div className="flex flex-col pl-[3.3rem] lg:pl-[6rem] lg:pt-8 z-[20] mt-[1rem]">
          <motion.h1
            initial={{ x: "-200px" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-[40px]  lg:max-w-[508px] text-black font-bold text-left leading-tight mb-8 lg:text-[52px]"
          >
            Roofing Solutions
          </motion.h1>
          <motion.p
            initial={{ x: "-200px" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-[18px] max-w-[360px] lg:max-w-[508px] text-white font-regular text-left leading-tight mb-8 md:text-[26px]"
          >
            High Quality, Eco-Friendly Roofing, Cladding & Insulation Solutions
            To The Industrial, Commercial & Domestic Markets
          </motion.p>
          <div className="flex flex-row">
            <div className="hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
              <motion.button
                initial={{ x: "-200px" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[115px] h-[41px] rounded-[5px] bg-[#7A983D] mr-3 text-white  lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer lg:hover:cursor-pointer lg:scale-105"
              >
                <a href="/aboutus">Learn More</a>
              </motion.button>
            </div>
            <div className="hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
              <motion.button
                initial={{ x: "-200px" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[115px] h-[41px] rounded-[5px] bg-white text-[#7A983D] lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer lg:hover:cursor-pointer lg:hover:scale-105"
              >
                <a href="/contactus">Contact Now</a>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
