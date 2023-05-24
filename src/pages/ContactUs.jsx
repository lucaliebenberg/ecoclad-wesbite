import { useRef, useState } from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_m3d6aih",
  //       "template_qra90cs",
  //       formRef.current,
  //       "1MTBPSM2I49c_z_oI"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setLoading(false);
  //         alert("Thank you. Luca will get back to you as soon as possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.log(error.text);

  //         alert("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };

  return (
    <>
      <div id="ContactUs" className="w-full h-auto bg-white" data-aos="fade-in">
        <div className="flex flex-col mt-[5rem] pl-[3.3rem] md:flex-row md:justify-between">
          <h1 className="text-[48px] text-black font-semibold">Contact Us</h1>
          <p className="w-full text-black text-[18px] max-w-[460px] md:max-w-[592px] mb-[2rem]">
            Our friendly team would love to hear from you
          </p>

          <div>
            <form
              ref={formRef}
              // onSubmit={sendEmail}
              className="mt-12 flex flex-col gap-8 p-4 bg-[#CCC] rounded-lg"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                value="Send"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {/* {loading ? "Sending..." : "Send"} */}
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col mt-[4rem] pt-0 p-[5rem] h-full md:flex-row md:justify-between lg:mt-auto lg:mb-auto">
          <div className="flex flex-col mr-2 lg:mt-14 xl:mr-0">
            <img
              src="https://picsum.photos/200"
              alt="Feature 1 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#56AC8B] font-bold lg:text-[28px] justify-center text-center mb-4">
              Give Us A Call
            </h2>
            <p className="text-[13px] md:text-[14px] md:text-center lg:text-[18px] text-[#ABABAB] justify-center text-center max-w-[277px]">
              +27 82 680 8198
            </p>
          </div>

          <div>
            <div className="flex flex-col mt-14">
              <img
                src="https://picsum.photos/200"
                alt="Feature 2 icon"
                className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
              />
              <h2 className="text-[20px] md:text-[22px] text-[#56AC8B] font-bold lg:text-[28px] justify-center text-center mb-4">
                Email Us
              </h2>
              <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#ABABAB] justify-center text-center max-w-[277px]">
                info@ecoclad.co.za
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-14">
              <img
                src="https://picsum.photos/200"
                alt="Feature 3 icon"
                className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
              />
              <h2 className="text-[20px] md:text-[22px] text-[#56AC8B] font-bold lg:text-[28px] justify-center text-center mb-4">
                Our Location
              </h2>
              <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#ABABAB] justify-center text-center max-w-[260px]">
                Unit 11, Denval Industrial ParkFisher Avenue, Epping 1
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
