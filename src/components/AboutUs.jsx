import AboutImg from "../assets/img/portrait-img-1.jpeg";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="w-full h-auto bg-white" data-aos="fade-in">
      <div className="flex flex-col mt-[5rem] pl-[3.3rem] md:flex-row md:justify-between">
        <h1 className="text-[48px] text-black font-semibold">About Us</h1>
        <p className="w-full text-black text-[18px] max-w-[460px] md:max-w-[592px] mb-[2rem]">
          EcoClad provides high quality, eco-friendly roofing, cladding and
          insulation solutions to the industrial, commercial and domestic
          markets. Our services include consulting, design, specification,
          procurement, installation and maintenance in terms of:
        </p>
        <ul className="mb-[2rem] max-w-[460px] list-disc">
          <li className="mt-[1rem]">
            Design, supply and installation of New roofing, cladding and
            insulation systems with alternative eco-friendly materials to suit
            the Client’s requirements.
          </li>
          <li className="mt-[1rem]">
            Alterations of existing roofing, cladding and related structures
            including design, preparation of drawings and installation.
          </li>
          <li className="mt-[1rem]">
            Light Sheet Metal workshop and manufacturing facility for the supply
            of Retail and Building components to Client’s requirements.
          </li>
        </ul>
        <div className="hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
          <button className="w-[115px] h-[41px] mt-[1rem] rounded-[5px] bg-[#7A983D] text-white lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer lg:hover:cursor-pointer lg:hover:scale-105">
            <a href="/aboutus">Read More</a>
          </button>
        </div>
      </div>

      <div className="pl-[3.3rem] mt-[2rem] ]">
        <img src={AboutImg} alt="" height="51%" width="49%" />
      </div>
    </div>
  );
};

export default AboutUs;
