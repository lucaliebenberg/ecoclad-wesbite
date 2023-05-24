import OfferImg1 from "../assets/img/landscape-img-1.jpeg";

const Testimonials = () => {
  return (
    <div
      id="Testimonials"
      className="w-full h-auto bg-white pt-[5rem]"
      data-aos="fade-in"
    >
      <div className="flex flex-col pl-[3.3rem]">
        <h1 className="text-[48px] text-black font-semibold md:text-center">
          Testimonials
        </h1>
      </div>

      <div className="flex flex-col pl-[3.3rem] gap-8 md:gap-12">
        <div className="w-[90%] h-[40%] md:w-[50vw] rounded-[4px] shadow-md md:ml-auto md:mr-auto md:mt-[3rem] md:mb-[3rem]">
          <img src={OfferImg1} alt="our offers" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
