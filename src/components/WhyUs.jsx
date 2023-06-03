import OfferImg1 from "../assets/img/Industrial-9.jpeg";
import OfferImg2 from "../assets/img/Household-2.jpeg";

const WhyUs = () => {
  return (
    <div
      id="WhyUs"
      className="w-full h-auto pl-[3.3rem] pt-[5rem] bg-[#EDEDED] md:pl-[8rem] md:mt-[6rem] overflow-x-hidden"
      data-aos="fade-in"
    >
      <div className="flex flex-col">
        <h1 className="text-[48px] text-black font-semibold mb-4 md:mb-[3rem]">
          Why Us
        </h1>
      </div>

      <div className="flex flex-col md:flex md:flex-row gap-8 md:gap-12">
        <div>
          <div className="w-[90%] h-auto md:w-[84%] rounded-[4px] shadow-md">
            <img src={OfferImg1} alt="our offers" />
          </div>

          <div className="pt-[2rem] pb-[3rem] max-w-[460px]">
            <h1 className="font-medium text-[1.6rem]">Corporate Clients</h1>
            <ul>
              <li>
                - We will provide a full initial Survey of your Premises - Free
                of Charge
              </li>
              <li>
                - We will carry out 6 monthly inspections of your
                Industrial/Commercial Premises – Free of Charge
              </li>
              <li>
                - We will provide a photographic survey of your roof with a
                fully costed estimate of any problems – Free of Charge
              </li>
              <li>Contact us for immediate action – Epping Industria based</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:justify-between md:flex-wrap gap-8 md:gap-12">
          <div>
            <div className="w-[90%] h-auto md:w-[60%] rounded-[4px] shadow-md ">
              <img src={OfferImg2} alt="our offers" className="" />
            </div>
            <div className="pt-[2rem] pb-[3rem] max-w-[460px]">
              <h1 className="font-medium text-[1.6rem]">
                Domestic Household Clients
              </h1>
              <ul>
                <li>
                  - We will provide a full initial Survey of your Premises -
                  Free of Charge
                </li>
                <li>
                  - We will provide a photographic survey of your roof with a
                  fully costed estimate of any problems – Free of Charge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
