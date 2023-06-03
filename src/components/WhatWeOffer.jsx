import Consulting from "../assets/img/consulting.jpeg";
import SolutionDesign from "../assets/img/solution_design.jpeg";
import SolutionSpec from "../assets/img/solution_specification.jpeg";
import Procurement from "../assets/img/procurement.jpeg";
import Installation from "../assets/img/installation.jpeg";
import Maintenance from "../assets/img/maintenance.jpeg";

const WhatWeOffer = () => {
  return (
    <div
      id="WhatWeOffer"
      className="w-full h-auto bg-white md:ml-[5rem] md:mt-[6rem] overflow-x-hidden"
      data-aos="fade-in"
    >
      <div className="flex flex-col pl-[3.3rem] pt-[5rem] pb-[3rem]">
        <h1 className="text-[48px] text-black font-semibold ">What We Offer</h1>
        <p className="w-full text-black text-[18px] max-w-[460px] md:max-w-[592px]">
          Select a service to find out more about it or visit the services page
          to see more!
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between pl-[3.3rem] md:flex-wrap gap-8 md:gap-8 w-[80%]">
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={Consulting} alt="Consulting" />
          <h2 className="text-[1.5rem] text-black font-semibold p-1.5">
            Consulting
          </h2>
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={SolutionDesign} alt="Solution Design" />
          <h2 className="text-[1.5rem] text-black font-semibold p-1.5">
            Solution Design
          </h2>
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={SolutionSpec} alt="Solution Specification" />
          <h2 className="text-[1.5rem] text-black font-semibold p-1.5">
            Solution Specification
          </h2>
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={Procurement} alt="Procurement" />
          <h2 className="text-[1.5rem] text-black font-semibold p-1.5">
            Procurement
          </h2>
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={Installation} alt="Installation" />
          <h2 className="text-[1.5rem] text-black font-semibold p-1.5">
            Installation
          </h2>
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={Maintenance} alt="Maintenance" />
          <h2 className="text-[1.5rem] text-black font-semibold p-1.5">
            Maintenance
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
