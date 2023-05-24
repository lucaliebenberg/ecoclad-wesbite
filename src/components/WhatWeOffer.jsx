import OfferImg1 from "../assets/img/landscape-img-1.jpeg";

const WhatWeOffer = () => {
  return (
    <div id="WhatWeOffer" className="w-full h-auto bg-white" data-aos="fade-in">
      <div className="flex flex-col pl-[3.3rem] pt-[5rem] pb-[3rem]">
        <h1 className="text-[48px] text-black font-semibold">What We Offer</h1>
        <p className="w-full text-black text-[18px] max-w-[460px] md:max-w-[592px]">
          Select a service to find out more about it or visit the services page
          to see more!
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between pl-[3.3rem] md:flex-wrap gap-8 md:gap-8 w-[80%]">
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={OfferImg1} alt="our offers" />
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={OfferImg1} alt="our offers" />
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={OfferImg1} alt="our offers" />
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={OfferImg1} alt="our offers" />
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={OfferImg1} alt="our offers" />
        </div>
        <div className="w-[90%] h-auto md:w-[38%] md:h-[32%] rounded-[4px] shadow-md hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
          <img src={OfferImg1} alt="our offers" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
