import OfferImg1 from "../assets/img/landscape-img-1.jpeg";

const WhyUs = () => {
  return (
    <div
      id="WhyUs"
      className="w-full h-auto pl-[3.3rem] bg-white"
      data-aos="fade-in"
    >
      <div className="flex flex-col">
        <h1 className="text-[48px] text-black text-semibold">Why Us</h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap gap-8 md:gap-12">
        <div>
          <div className="w-[450px] h-[250px] rounded-[4px] shadow-md">
            <img src={OfferImg1} alt="our offers" />
          </div>
          <h1>Corporate Clients</h1>
          <ul>
            <li>
              We will provide a full initial Survey of your Premises - Free of
              Charge
            </li>
            <li>
              We will carry out 6 monthly inspections of your
              Industrial/Commercial Premises – Free of Charge
            </li>
            <li>
              We will provide a photographic survey of your roof with a fully
              costed estimate of any problems – Free of Charge
            </li>
            <li>Contact us for immediate action – Epping Industria based</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap gap-8 md:gap-12">
          <div className="w-[450px] h-[250px] rounded-[4px] shadow-md">
            <img src={OfferImg1} alt="our offers" />
          </div>
          <h1>Domestic Household Clients</h1>
          <ul>
            <li>
              We will provide a full initial Survey of your Premises - Free of
              Charge
            </li>
            <li>
              We will provide a photographic survey of your roof with a fully
              costed estimate of any problems – Free of Charge
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
