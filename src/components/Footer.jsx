import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-auto bg-white" data-aos="fade-in">
      <div className="flex flex-col justify-center mt-[5rem]">
        <p className="text-[#909090] font-semibold text-[12px] text-center">
          LIKE WHAT YOU SEE?
        </p>
        <h1 className="text-[#7A983D] font-semibold text-[28px] text-center">
          Want to work together
        </h1>
        <p className="mt-5 max-w-[300px] md:max-w-[384px] lg:max-w-[384px] text-black text-center justify-center text-[16px] ml-auto mr-auto">
          If you’re looking for a kick-ass software company, we’re here to help!
        </p>
        <button className="w-[134px] h-[40px] rounded-[5px] bg-[#7A983D] text-white mt-5 ml-auto mr-auto hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
          <a
            href="mailto:onesheetsolutions@gmail.com"
            target={"_blank"}
            rel="noreferrer"
            className=""
          >
            Get in touch
          </a>
        </button>
      </div>
      <div className="w-[90vw] border-stone-900"></div>
      <div className="flex flex-row justify-between align-middle pt-[6rem] pb-8 text-[#CCC]">
        <p className="text-[12px] pt-1 ml-4 lg:ml-10">
          &copy; 2023 ECOClad. All Rights Reserved.
        </p>
        <div className="flex flex-row mr-4 lg:mr-8">
          <a
            href="https://www.facebook.com/Ecoclad.co.za?notif_id=1684522769639268&notif_t=page_user_activity&ref=notif"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#55AA8A] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillFacebook size={24} className="mr-3" />
          </a>
          {/* <a
            href="https://www.twitter.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#55AA8A] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillTwitterSquare size={24} className="mr-3" />
          </a> */}
          <a
            href="https://www.instagram.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#55AA8A] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillInstagram size={24} className="mr-3" />
          </a>
          <a
            href="https://www.linkedin.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#CCC] font-semibold hover:text-[#55AA8A] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
