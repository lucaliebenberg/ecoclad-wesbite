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

        <div className="w-full h-auto">
          <div className="flex flex-col ml-auto mr-auto md:flex-row md:justify-between">
            <img
              src="https://picsum.photos/200/300"
              width="54%"
              height="auto"
              alt=""
              className="rounded-[12px]"
            />
            <h2 className="text-[30px] font-semibold text-black">
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
        </div>
      </div>
    </>
  );
};

export default OurServices;
