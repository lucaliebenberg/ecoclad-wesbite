import Footer from "../components/Footer";

const OurServices = () => {
  return (
    <>
      <div
        id="OurServices"
        className="w-full h-auto bg-white"
        data-aos="fade-in"
      >
        <div className="flex flex-col mt-[5rem] pl-[3.3rem] md:flex-row md:justify-between">
          <h1 className="text-[48px] text-black font-semibold">Our Services</h1>
          <p className="w-full text-black text-[18px] max-w-[460px] md:max-w-[592px] mb-[2rem]">
            Typically, all of the below are seamlessly integrated into a single,
            unified EcoClad service. However, should it be required, each
            component can be accessed as a separate service.
          </p>
        </div>

        <div className="w-full h-auto pl-[3.3rem] mt-[4rem]">
          <div className="w-full flex flex-col ml-auto mr-auto md:flex-row md:justify-between pr-8">
            <img
              src="https://picsum.photos/550/320"
              alt=""
              className="rounded-[12px] h-auto"
            />
            <h2 className="text-[18px] pt-3 pb-3 md:text-[30px] font-semibold text-black">
              Clients Roof Design And Insulation
            </h2>
            <p className="text-[16px] font-regular text-black">
              EcoClad offers specialist design and consulting input on
              eco-efficient roofing, cladding and insulation projects of all
              scales and building types. This can take the form of an assessment
              of existing structures and advice on best to improve them, or
              advice and input in terms of the roofing, cladding and/or
              insulation component of new projects. As such, EcoClad will often
              work alongside engineers, architects and other building
              specialists.
            </p>
          </div>

          <div className="w-full flex flex-col ml-auto mr-auto md:flex-row md:justify-between pr-8">
            <img
              src="https://picsum.photos/550/320"
              alt=""
              className="rounded-[12px] h-auto"
            />
            <h2 className="text-[18px] pt-3 pb-3 md:text-[30px] font-semibold text-black">
              Roof Structure Comprehensive Design
            </h2>
            <p className="text-[16px] font-regular text-black">
              Based on assessments, the development brief and a thorough
              knowledge of what is available in the Market, EcoClad will design
              a suitable solution. This will entail selecting the preferred
              materials and structural design to suit the Client’s requirements.
            </p>
          </div>

          <div className="w-full flex flex-col ml-auto mr-auto md:flex-row md:justify-between pr-8">
            <img
              src="https://picsum.photos/550/320"
              alt=""
              className="rounded-[12px] h-auto"
            />
            <h2 className="text-[18px] pt-3 pb-3 md:text-[30px] font-semibold text-black">
              Roof Material Specification
            </h2>
            <p className="text-[16px] font-regular text-black">
              Based on an approved design – whether created by ourselves or a
              third party consultant, EcoClad will draw up a full project plan
              and specification. This to ensure the procurement of materials and
              the construction process for the Project.
            </p>
          </div>

          <div className="w-full flex flex-col ml-auto mr-auto md:flex-row md:justify-between pr-8">
            <img
              src="https://picsum.photos/550/320"
              alt=""
              className="rounded-[12px] h-auto"
            />
            <h2 className="text-[18px] pt-3 pb-3 md:text-[30px] font-semibold text-black">
              Roof Material Procurement Options
            </h2>
            <p className="text-[16px] font-regular text-black">
              EcoClad will source and deliver materials strictly in accordance
              with the project specification. We will ensure correct material
              selection as well as availability since this dictates the price,
              functional performance and life-span of the project.
            </p>
          </div>

          <div className="w-full flex flex-col ml-auto mr-auto md:flex-row md:justify-between pr-8">
            <img
              src="https://picsum.photos/550/320"
              alt=""
              className="rounded-[12px] h-auto"
            />
            <h2 className="text-[18px] pt-3 pb-3 md:text-[30px] font-semibold text-black">
              Low Price Installation By Experienced Crew
            </h2>
            <p className="text-[16px] font-regular text-black">
              EcoClad’s construction and installation teams work under strict
              project management Supervision. All installations are subject to
              management oversight throughout. Strict quality control is imposed
              at all times and all installations are guaranteed accordingly.
            </p>
          </div>

          <div className="w-full flex flex-col ml-auto mr-auto md:flex-row md:justify-between pr-8">
            <img
              src="https://picsum.photos/550/320"
              alt=""
              className="rounded-[12px] h-auto"
            />
            <h2 className="text-[18px] pt-3 pb-3 md:text-[30px] font-semibold text-black">
              Roof Maintenance Of Industrial, Commercial Complexes
            </h2>
            <p className="text-[16px] font-regular text-black">
              All roofing and related structures will perform for many years. In
              order to ensure this, EcoClad offers a full maintenance service
              over and above their workmanship guarantee and Manufacturers
              warranty for completed installations.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OurServices;
