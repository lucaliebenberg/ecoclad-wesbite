import Footer from "../components/Footer";

import Roof1 from "../assets/img/landscape-img-1.jpeg";
import Roof2 from "../assets/img/landscape-img-2.jpeg";

import Industrial1 from "../assets/img/Industrial-1.jpeg";
import Industrial2 from "../assets/img/Industrial-2.jpeg";
import Industrial3 from "../assets/img/Industrial-3.jpeg";
import Industrial4 from "../assets/img/Industrial-4.jpeg";
import Industrial5 from "../assets/img/Industrial-5.jpeg";
import Industrial6 from "../assets/img/Industrial-6.jpeg";
import Industrial7 from "../assets/img/Industrial-7.jpeg";
import Industrial8 from "../assets/img/Industrial-8.jpeg";
import Industrial9 from "../assets/img/Industrial-9.jpeg";

import Commercial1 from "../assets/img/Commercial-1.jpeg";
import Commercial2 from "../assets/img/Commercial-2.jpeg";
import Commercial3 from "../assets/img/Commercial-3.jpeg";
import Commercial4 from "../assets/img/Commercial-4.jpeg";
import Commercial5 from "../assets/img/Commercial-5.jpeg";
import Commercial6 from "../assets/img/Commercial-6.jpeg";

import Household1 from "../assets/img/Household-1.jpeg";
import Household2 from "../assets/img/Household-2.jpeg";

import Light1 from "../assets/img/Light-1.jpeg";
import Light2 from "../assets/img/Light-2.jpeg";
import Light3 from "../assets/img/Light-3.jpeg";
import Light4 from "../assets/img/Light-4.jpeg";

const Solutions = () => {
  return (
    <>
      <div id="Solutions" className="w-full h-auto bg-white" data-aos="fade-in">
        <div className="flex flex-col mt-[5rem] pl-[3.3rem]">
          <h1 className="text-[48px] text-black font-semibold">Solutions</h1>
          {/* roof material */}
          <div className="max-w-[460px] md:max-w-full">
            <h2 className="text-[26px] mt-10 md:text-[32px] text-black font-semibold">
              Roof Material Specification
            </h2>
            <p className="text-[18px] text-black">
              Based on an approved design – whether created by ourselves or a
              third party consultant, EcoClad will draw up a full project plan
              and specification. This is to ensure the procurement of materials
              and the construction process for the Project.
            </p>

            <div className="flex flex-col md:flex-row md:justify-evenly pr-12 gap-6">
              <div className="mb-4 mt-8">
                <img src={Roof1} alt="" className="rounded-[4px] h-auto" />
              </div>
              <div className="mb-4 mt-8">
                <img src={Roof2} alt="" className="rounded-[4px] h-auto" />
              </div>
            </div>
          </div>
          {/* industrial roofing */}
          <div className="max-w-[460px] md:max-w-full md:mt-[2rem]">
            <h2 className="text-[26px] mt-10 md:text-[32px] text-black font-semibold">
              Industrial Roofing Clients
            </h2>
            <p className="text-[18px] text-black">
              Ecoclad specialises in the installation of roofing, cladding and
              insulation solutions for industrial structures such as warehouses,
              workshop areas and factories of all sizes. Typical projects
              include:
            </p>
            <ul className="mb-[2rem] max-w-[460px] list-disc text-black">
              <li className="mt-[1rem]">
                Roofing, cladding and/or insulation of new premises.
              </li>
              <li className="mt-[1rem]">Re-roofing of existing premises</li>
              <li className="mt-[1rem]">
                Safe removal of asbestos cement roof coverings and installation
                of new roof coverings and insulation
              </li>
            </ul>
            <p className="max-w-[460px] text-black text-[16px] md:text-[18] md:max-w-full">
              EcoClad will provide alternative transparent price based solutions
              for roofing, and cladding including insulation material,
              ventilation and rainwater distribution.
              <br />
              All EcoClad industrial installations are formally guaranteed in
              terms of products and workmanship and are backed up with a
              Workmanship guarantee on completion <br />
              We have a fully tooled Sheet Metal Workshop where we manufacture
              Flashings, Louvres, Ventilators and Sheet Metal Gutters these are
              purpose made, welded and tailored to individual site requirements.{" "}
              <br />
              We adhere to all statutory OHS requirements and have a dedicated
              professional OHS Advisor who visits sites weekly and provides Risk
              Assessments and Work Plans for all contracts.
              <br />
              All our staff is regularly checked for Medical conformity, we have
              First Aid Certificates, High-Level Training certificates and
              Scaffold Erection certifications.
            </p>
            <div className="flex flex-col md:flex-row md:justify-evenly pr-12 gap-6">
              <div className="mb-4 mt-8">
                <img
                  src={Industrial1}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Industrial2}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Industrial3}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Industrial4}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Industrial5}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Industrial6}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Industrial7}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Industrial8}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Industrial9}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* commercial roofing */}
          <div className="max-w-[460px] md:max-w-full">
            <h2 className="text-[26px] mt-10 md:text-[32px] text-black font-semibold">
              Commercial Roofing Clients
            </h2>
            <p className="text-[18px] text-black">
              Ecoclad specialises in providing roofing, cladding and insulation
              solutions for:
            </p>
            <ul className="mb-[2rem] max-w-[460px] list-disc text-black md:max-w-full">
              <li className="mt-[1rem]">Office complexes</li>
              <li className="mt-[1rem]">Shopping Centres</li>
              <li className="mt-[1rem]">Other commercial complexes</li>
            </ul>
            <p className="max-w-[460px] text-black text-[16px] md:text-[18] md:max-w-full">
              EcoClad will provide alternative transparent price based solutions
              for roofing, and cladding including insulation material,
              ventilation and rainwater distribution
              <br />
              All EcoClad installations are formally guaranteed in terms of
              products and workmanship and are backed up with a Workmanship
              guarantee on completion
              <br />
              We have a fully tooled Sheet Metal Workshop where we manufacture
              Flashings, Louvres, Ventilators and Sheet Metal Gutters these are
              purpose made, welded and tailored to individual site requirements.
              <br />
              We adhere to all statutory OHS requirements and have a dedicated
              professional OHS Advisor who visits sites weekly and provides Risk
              Assessments and Work Plans for all contracts.
              <br />
              All our staff is regularly checked for Medical conformity, we have
              First Aid Certificates, High-Level Training certificates and
              Scaffold Erection certifications.
            </p>
            <div className="flex flex-col md:flex-row md:justify-evenly pr-12 gap-6">
              <div className="mb-4 mt-8">
                <img
                  src={Commercial1}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Commercial2}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Commercial3}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Commercial4}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Commercial5}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
              <div className="mb-4 mt-8">
                <img
                  src={Commercial6}
                  alt=""
                  className="rounded-[4px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* domestic roofing */}
          <div className="max-w-[460px] md:max-w-full">
            <h2 className="text-[26px] mt-10 md:text-[32px] text-black font-semibold">
              Domestic Metal Roofing For House Owners
            </h2>
            <p className="text-[18px] text-black">
              Ecoclad provides new and existing homeowners with the same quality
              of service as that provided to larger clients and will ensure that
              the completed installations are fully guaranteed and serviced for
              the duration of the warranty.
            </p>
            <p className="text-[18px] text-black">
              Our household services cover all new or replacement roofing
              installation requirements through the utilization of a specialist
              workforce and where possible focus on the following:
            </p>
            <ul className="mb-[2rem] max-w-[460px] list-disc text-black md:max-w-full">
              <li className="mt-[1rem]">Thermal and energy efficiency</li>
              <li className="mt-[1rem]">
                Integrated rainwater harvesting run-off management
              </li>
            </ul>
            <p className="max-w-[460px] text-black text-[16px] md:text-[18] md:max-w-full">
              Quotations are free and fully transparent, allowing our clients an
              accurate view of the cost implications of the various roofing
              systems, materials and techniques proposed. This allows owners to
              make the best decisions from both a long and short term
              perspective. <br />
              Full Quality Assured Workmanship and Manufacturers warranties will
              be provided to Clients on completion of the installation and the
              Ecoclad Team will be available for service calls during the full
              guarantee period.
            </p>
            <div className="flex flex-col md:flex-row md:justify-evenly pr-12 gap-6">
              <div className="mb-4 mt-8">
                <img src={Household1} alt="" className="rounded-[4px] h-auto" />
              </div>
              <div className="mb-4 mt-8">
                <img src={Household2} alt="" className="rounded-[4px] h-auto" />
              </div>
            </div>
          </div>

          {/* light engineering */}
          <div className="max-w-[460px] md:max-w-full">
            <h2 className="text-[26px] mt-10 md:text-[32px] text-black font-semibold">
              Light Engineering
            </h2>
            <p className="text-[18px] text-black">
              Light Sheet-Metal Fabrication & Manufacture
            </p>
            <p className="text-[18px] text-black">
              EcoClad fabricate and manufacture a variety of items for Industry
              and Retail use from their comprehensive Sheet-Metal Workshop in
              Epping:
            </p>
            <ul className="mb-[2rem] max-w-[460px] list-disc text-black">
              <li className="mt-[1rem]">
                Various retail items designed by Abode CC:
              </li>
              <li className="mt-[1rem] list-none">
                - Hanging Chairs of various designs
              </li>
              <li className="mt-[1rem] list-none">
                - Metal Lights Large and Small
              </li>
              <li className="mt-[1rem] list-none">
                - Metal purpose made shelving units
              </li>
              <li className="mt-[1rem]">
                Integrated rainwater harvesting run-off management
              </li>
            </ul>
            <div className="flex flex-col md:flex-row md:justify-evenly pr-12 gap-6">
              <div className="mb-4 mt-8">
                <img src={Light1} alt="" className="rounded-[4px] h-auto" />
              </div>
              <div className="mb-4 mt-8">
                <img src={Light2} alt="" className="rounded-[4px] h-auto" />
              </div>
              <div className="mb-4 mt-8">
                <img src={Light3} alt="" className="rounded-[4px] h-auto" />
              </div>
              <div className="mb-4 mt-8">
                <img src={Light4} alt="" className="rounded-[4px] h-auto" />
              </div>
            </div>
          </div>

          {/* END */}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Solutions;
