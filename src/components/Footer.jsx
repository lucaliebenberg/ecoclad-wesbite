import {
  AiFillFacebook,
  // AiFillInstagram,
  // AiFillLinkedin,
} from "react-icons/ai";

import WhatsappIcon from "../assets/whatsapp-icon.png";
import Onesheet from "../assets/logo.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full h-auto bg-white pl-[3.3rem] pt-[8rem] overflow-x-hidden"
      data-aos="fade-in"
    >
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col justify-start">
          <img src={Onesheet} alt="Ecoclad logo" width="120px" />
          <h2 className="text-[#818285] max-w-[80vw] md:max-w-[70%] font-semibold mt-5 mb-5">
            Want to resolve some questions you might have?
          </h2>
          <div className="">
            <a
              href="https://web.whatsapp.com/send?phone=+27825723840&text="
              target="_blank"
              rel="noreferrer"
              alt="Whatsapp chat"
              className="mt-auto mb-auto bg-white shadow-md p-2 rounded-md w-[142px] text-center h-auto flex flex-row justify-between border border-gray-50 hover:border-none hover:cursor-pointer hover:bg-[#659F19] hover:text-white duration-300 ease-in-out transition-all"
            >
              <img
                src={WhatsappIcon}
                alt="Whatsapp icon"
                className="w-[1.5rem] h-auto"
              />
              Get in touch
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 pt-[2rem]">
          <ul className="list-none">
            <li className="font-semibold mb-5">Quick Links</li>
            <li className="mb-2 text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/">Home</a>
            </li>
            <li className="mb-2 text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/aboutus">About Us</a>
            </li>
            <li className="mb-2 text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/ourservices">Our Services</a>
            </li>
            <li className="mb-2 text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/solutions">Solutions</a>
            </li>
            <li className="mb-2 text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
          <ul className="list-none md:ml-12">
            <li className="font-semibold mb-5">Contact Details</li>
            <li className="mb-2 text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out">
              <a href="tel:+27 826808198">021 712 3390</a>
            </li>
            <li className="mb-2 text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out text-underline">
              <a
                href="mailto:infoecoclad@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                info@ecoclad.co.za
              </a>
            </li>
            <li className="text-gray-600 hover:text-[#475D2A] hover:cursor-pointer duration-200 transition-all ease-in-out md:max-w-[80%]">
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

      <div className="flex flex-row justify-between align-middle pt-[6rem] pb-4 text-[#CCC]">
        <p className="text-[12px] pt-1 ml-1">
          &copy; 2023 ECOClad. All Rights Reserved.
        </p>
        <div className="flex flex-row mr-4 lg:mr-8">
          <a
            href="https://www.facebook.com/Ecoclad.co.za?notif_id=1684522769639268&notif_t=page_user_activity&ref=notif"
            target="_blank"
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#475D2A] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillFacebook size={24} className="mr-[3rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
