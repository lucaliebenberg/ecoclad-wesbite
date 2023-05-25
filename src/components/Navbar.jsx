import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import Onesheet from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] bg-white z-[-8] md:ml-[2rem]">
      <div className="px-4 lg:px-14 mx-auto pl-[3.3rem] flex justify-between items-center h-full">
        <motion.div
          initial={{ x: "-200px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="lg:ml-[4.5rem]"
        >
          <h1 className="text-[var(--primary-blue)]">
            <img
              src={Onesheet}
              alt="Onesheet Logo"
              className="w-[140px] hover:cursor-pointer p-0 xl:p-0"
            />
          </h1>
        </motion.div>
        <div className="hidden md:flex">
          <ul className="flex text-black items-center">
            <motion.a
              href="/"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Home
              </li>
            </motion.a>
            <motion.a
              href="/aboutus"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                About Us
              </li>
            </motion.a>
            <motion.a
              href="/ourservices"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Our Services
              </li>
            </motion.a>
            <motion.a
              href="/solutions"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Solutions
              </li>
            </motion.a>
            <motion.a
              href="/contactus"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Contact Us
              </li>
            </motion.a>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          initial={{ y: "-200px" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="block md:hidden"
          onClick={handleNav}
        >
          {nav ? (
            <AiOutlineClose size={28} className="text-gray" />
          ) : (
            <AiOutlineMenu size={28} className="text-gray" />
          )}
        </motion.div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "z-[20] w-[90vw] rounded-md bg-[#3A3A3C] text-white absolute top-[50px] left-0 flex justify-center text-center ml-1 mt-2 md:hidden lg:hidden xl:hidden"
              : // try 'hidden' instead of below
                "absolute left-[-100%]"
          }
        >
          <ul>
            <a href="/">
              <li className="text-2xl pt-10 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Home
              </li>
            </a>

            <a href="/aboutus">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                About Us
              </li>
            </a>
            <a href="/ourservices">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Our Services
              </li>
            </a>
            <a href="/solutions">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Solutions
              </li>
            </a>
            <a href="/contactus">
              <li className="text-2xl pt-5 pb-10 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Contact US
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
