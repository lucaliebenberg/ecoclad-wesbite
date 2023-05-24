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
      className="w-full h-auto bg-white pl-[3.3rem] pt-[5rem]"
      data-aos="fade-in"
    >
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col justify-start">
          <img src={Onesheet} alt="" width="180px" />
          <h2 className="max-w-[80vw] md:max-w-[70%] font-semibold mb-5">
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
        <div className="flex flex-col md:flex-row md:justify-between gap-8 pt-[2rem]">
          <ul className="list-none">
            <li className="font-semibold">Quick Links</li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/home" target="_blank" rel="noreferrer">
                Home
              </a>
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/aboutus" target="_blank" rel="noreferrer">
                About Us
              </a>
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/ourservices" target="_blank" rel="noreferrer">
                Our Services
              </a>
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/solutions" target="_blank" rel="noreferrer">
                Solutions
              </a>
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/conatctus" target="_blank" rel="noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="list-none">
            <li className="font-semibold">Contact Details</li>
            <li className="text-gray-600 hover:text-[#DEE21B] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="tel:+27 826808198" target="_blank" rel="noreferrer">
                021 712 3390
              </a>
            </li>
            <li className="text-gray-600 hover:text-[#DEE21B] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a
                href="mailto:infoecoclad@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                info@ecoclad.co.za
              </a>
            </li>
            <li className="text-gray-600 hover:text-[#DEE21B] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a
                href="https://www.google.com/maps/dir//ecoclad/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1dcc5b6f667555a1:0xdd8eca45857b3d06?sa=X&ved=2ahUKEwiYrNbOo43_AhXHa8AKHRw0CNIQ9Rd6BAg-EAU"
                target="_blank"
                rel="noreferrer"
              >
                Unit 11, Denval Industrial Park Fisher Avenue, Epping 1
              </a>
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
