import OfferImg1 from "../assets/img/landscape-img-1.jpeg";

const Testimonials = () => {
  return (
    <div
      id="Testimonials"
      className="w-full h-auto bg-white pt-[5rem]"
      data-aos="fade-in"
    >
      <div className="flex flex-col pl-[3.3rem]">
        <h1 className="text-[48px] text-black font-semibold">Testimonials</h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between pl-[3.3rem] md:flex-wrap gap-8 md:gap-12">
        <div className="w-[384px] h-[326px] rounded-[4px] shadow-md">
          <img src={OfferImg1} alt="our offers" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
