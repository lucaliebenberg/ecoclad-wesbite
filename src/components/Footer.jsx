import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import Onesheet from "../assets/logo.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full h-auto bg-white pl-[3.3rem]"
      data-aos="fade-in"
    >
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col justify-start">
          <img src={Onesheet} alt="" width="180px" />
          <h2 className="font-semibold mb-5">
            Want to resolve some questions you might have?
          </h2>
          <a
            href="https://whatsap.chat/"
            target="_blank"
            rel="noreferrer"
            alt=""
            className="bg-gray-100 rounded-md w-[120px] text-center h-[26px]  mb-5"
          >
            Get in touch
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <ul className="list-none">
            <li className="font-semibold">Quick Links</li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              Home
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              Our Services
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              Solutions
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              Contact Us
            </li>
          </ul>
          <ul className="list-none">
            <li className="font-semibold">Contact Details</li>
            <li className="text-gray-600 hover:text-[#DEE21B] hover:cursor-pointer duration-200 transition-all ease-in-out">
              021 712 3390
            </li>
            <li className="text-gray-600 hover:text-[#DEE21B] hover:cursor-pointer duration-200 transition-all ease-in-out">
              info@ecoclad.co.za
            </li>
            <li className="text-gray-600 hover:text-[#DEE21B] hover:cursor-pointer duration-200 transition-all ease-in-out">
              Unit 11, Denval Industrial Park Fisher Avenue, Epping 1
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-between align-middle pt-[6rem] pb-8 text-[#CCC]">
        <p className="text-[12px] pt-1 ml-4 lg:ml-10">
          &copy; 2023 ECOClad. All Rights Reserved.
        </p>
        <div className="flex flex-row mr-4 lg:mr-8">
          <a
            href="https://www.facebook.com/Ecoclad.co.za?notif_id=1684522769639268&notif_t=page_user_activity&ref=notif"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#DEE21B] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillFacebook size={24} className="mr-3" />
          </a>
          {/* <a
            href="https://www.twitter.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#DEE21B] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillTwitterSquare size={24} className="mr-3" />
          </a> */}
          <a
            href="https://www.instagram.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#DEE21B] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillInstagram size={24} className="mr-3" />
          </a>
          <a
            href="https://www.linkedin.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#DEE21B] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
