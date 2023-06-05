import AboutImg from "../assets/img/portrait-img-1.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar-white";

import Team1 from "../assets/img/solution_specification.jpeg";
import Team2 from "../assets/img/solution_design.jpeg";
import Team3 from "../assets/img/consulting.jpeg";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div
        id="AboutUs"
        className="w-[100vw] mr-0 h-auto bg-white flex flex-col md:flex-row md:justify-between md:ml-[8rem] md:mb-[4rem]"
        data-aos="fade-in"
      >
        <div className="flex flex-col mt-[5rem]">
          <h1 className="text-[48px] text-black font-semibold pb-4">
            About Us
          </h1>
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
              Light Sheet Metal workshop and manufacturing facility for the
              supply of Retail and Building components to Client’s requirements.
            </li>
          </ul>
        </div>

        {/* image sizing needs to be looked at, forced sizing being used */}
        <div className="pl-[3.3rem] mt-3 pr-0 mr-0 w-[50%] md:mt-[8rem]">
          <img
            src={AboutImg}
            alt=""
            height="51%"
            width="48%"
            className="hidden md:block mr-0 md:r-0 pr-0"
          />
        </div>
      </div>

      <div className="flex flex-col mt-[4rem] pt-0 p-[5rem] h-full md:flex-row md:justify-between md:mt-[6rem]">
        <div className="flex flex-col mr-2 md:mt-[5rem] lg:mt-14 xl:mr-0">
          <img
            src="https://i.ibb.co/gj9dz2X/ecoclad-favicon-logo.png"
            alt="Feature 1 icon"
            className="h-[32px] w-[32px] ml-auto mr-auto mb-10"
          />
          <h2 className="text-[16px] md:text-[18px] text-black font-bold justify-center text-center mb-4">
            EcoClad Materials Specifications
          </h2>
          <p className="ml-auto mr-auto text-[12px] md:text-[12px] md:text-left lg:text-[15px] text-[#ABABAB] justify-center text-center max-w-[277px]">
            EcoClad is an Independent Roofing Company with no affiliates to any
            specific Suppliers and is consequently able to offer the best and
            cost-effective materials tailormade to your specific contract and
            with alternative offers to suit your budget.
          </p>
        </div>

        <div>
          <div className="flex flex-col mt-14">
            <img
              src="https://i.ibb.co/gj9dz2X/ecoclad-favicon-logo.png"
              alt="Feature 2 icon"
              className="h-[32px] w-[32px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[16px] md:text-[18px] text-black font-bold justify-center text-center mb-4">
              Professional Project Management
            </h2>
            <p className="ml-auto mr-auto text-[12px] md:text-[14px] lg:text-[15px] md:text-left text-[#ABABAB] justify-center  max-w-[277px]">
              All projects and installations are professionally planned and
              managed according to industry codes and best practices. Clients
              are an integral part of the Design and Build process and we
              encourage their full input in regard to all stages of the Projects
              progress
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-14">
            <img
              src="https://i.ibb.co/gj9dz2X/ecoclad-favicon-logo.png"
              alt="Feature 3 icon"
              className="h-[32px] w-[32px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[16px] md:text-[18px] text-black font-bold justify-center text-center mb-4">
              Long Term Service Excellence
            </h2>
            <p className="ml-auto mr-auto text-[12px] md:text-[14px] lg:text-[15px] md:text-left text-[#ABABAB] justify-center  max-w-[260px]">
              EcoClad’s commitment to service excellence does not end with the
              completion of a project, and all installations carry a full
              Workmanship guarantee and Manufacturers Warranty, with all
              supporting documentation.
            </p>
          </div>
        </div>
      </div>

      <div
        id="WhatWeOffer"
        className="w-full h-auto bg-white md:ml-[2rem]"
        data-aos="fade-in"
      >
        <div className="flex flex-col pl-[3.3rem] pt-[5rem] pb-[3rem] md:text-left">
          <h1 className="text-[32px] md:text-[36px] text-black font-semibold pb-4 ">
            Our Comitted Team
          </h1>
          <p className="w-full text-black text-[16px] max-w-[460px] md:max-w-[85%]">
            The EcoClad management team boasts over 30 years of practical
            industry experience. This is complemented by an equally strong
            design understanding. Not surprisingly, the team is exceptionally
            well qualified to advise clients on all local and international
            products including experienced installation procedures.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:w-[90%] pl-[3.3rem] md:flex-wrap gap-8 md:gap-12">
          <div className="w-[60%] h-auto md:w-[28%] md:h-[33%] rounded-[4px] shadow-md">
            <img src={Team1} alt="our ecoclad team" />
          </div>
          <div className="w-[60%] h-auto md:w-[28%] md:h-[33%] rounded-[4px] shadow-md">
            <img src={Team2} alt="our ecoclad team" />
          </div>
          <div className="w-[60%] h-auto md:w-[28%] md:h-[33%] rounded-[4px] shadow-md">
            <img src={Team3} alt="our ecoclad team" />
          </div>
        </div>

        <div className="flex flex-col mt-[5rem] pl-[3.3rem]">
          <p className="w-full text-black text-[18px] max-w-[460px] md:max-w-[80%] mb-[2rem]">
            Installations are carried out by a well-motivated, long-serving
            workforce who are proud of their achievements and have an enviable
            reputation for quality and craftsmanship.
          </p>
          <p className="w-full text-black text-[18px] max-w-[460px] md:max-w-full mb-[2rem]">
            EcoClad is committed to providing high-value services and solutions
            to Clients based on:
          </p>
          <ul className="mb-[2rem] max-w-[460px] md:max-w-[80%] list-disc">
            <li className="mt-[1rem]">
              Comprehensive Inspections and Reports outlining all viable
              alternatives with transparent pricing.
            </li>
            <li className="mt-[1rem]">
              The best materials and technology available according to the
              project design and clients’ budgets
            </li>
            <li className="mt-[1rem]">
              Installation according to the highest standards, backed by
              workmanship guarantees and Manufacturer warranties. Followed up
              with reliable and responsible maintenance and support
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
