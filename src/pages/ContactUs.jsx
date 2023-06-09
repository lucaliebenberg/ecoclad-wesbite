import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar-white";
import emailjs from "@emailjs/browser";

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t81iaza",
        "template_19gvd5q",
        formRef.current,
        "wJ_eg3F_5dW2PJfop"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          // setLoading(false);
          console.log(error.text);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div
        id="ContactUs"
        className="w-full h-auto bg-white md:pl-[3rem]"
        data-aos="fade-in"
      >
        {/* left */}
        <div className="flex flex-col mt-[5rem] pl-[3.3rem]">
          <h1 className="text-[48px] text-black font-semibold">Contact Us</h1>
          <p className="w-full text-black text-[18px] max-w-[460px] md:max-w-[592px] mb-[2rem]">
            Our friendly team would love to hear from you
          </p>

          <div>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="w-[90%] mt-12 flex flex-col gap-8 p-4 bg-white shadow-md rounded-lg"
            >
              <label className="flex flex-col">
                <span className="text-black font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your full name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border border-light-50 font-light"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border border-light-50 font-light"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border border-light-50 font-light"
                />
              </label>

              <button
                type="submit"
                value="Send"
                className="bg-[tertiary] py-3 px-8 rounded-xl outline-none w-fit text-black font-medium shadow-md shadow-primary hover:bg-[#659F19] hover:text-white duration-300 ease-in-out transition-all"
              >
                {/* {loading ? "Sending..." : "Send"} */}
                Send
              </button>
            </form>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col w-full justify-start pt-0 p-[5rem] h-auto md:flex-row md:justify-between mt-[5rem]">
          <div className="w-full flex flex-row mr-2  lg:mt-14 xl:mr-0 mb-12">
            <img
              src="https://i.ibb.co/gj9dz2X/ecoclad-favicon-logo.png"
              alt="Feature 1 icon"
              className="h-[20px] w-[20px] mb-10 mr-6 rounded-md md:mt-2.5"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-[20px] md:text-[22px] text-black font-bold lg:text-[24px] justify-center text-left md:text-left mb-4">
                Give Us A Call
              </h2>
              <p className="text-[13px] md:text-[14px] md:text-left lg:text-[18px] text-[#ABABAB] justify-center text-left max-w-[277px] underline underline-light-500">
                <a href="tel:+27 826808198">021 712 3390</a>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row mr-2 lg:mt-14 xl:mr-0 mb-12">
            <img
              src="https://i.ibb.co/gj9dz2X/ecoclad-favicon-logo.png"
              alt="Feature 1 icon"
              className="h-[20px] w-[20px] mb-10 mr-6 rounded-md md:mt-2.5"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-[20px] md:text-[22px] text-black font-bold lg:text-[24px] justify-center text-left mb-4">
                Email Us
              </h2>
              <p className="text-[13px] md:text-[14px] md:text-left lg:text-[18px] text-[#ABABAB] justify-center text-left max-w-[277px] underline underline-light-500">
                <a
                  href="mailto:infoecoclad@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  info@ecoclad.co.za
                </a>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row mr-2 lg:mt-14 xl:mr-0 mb-12">
            <img
              src="https://i.ibb.co/gj9dz2X/ecoclad-favicon-logo.png"
              alt="Feature 1 icon"
              className="h-[20px] w-[20px] mb-10 mr-6 rounded-md md:mt-2.5"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-[20px] md:text-[22px] text-black font-bold lg:text-[24px] justify-center text-left mb-4">
                Our Location
              </h2>
              <p className="text-[13px] md:text-[14px] md:text-left lg:text-[18px] text-[#ABABAB] justify-center text-left max-w-[320px] underline underline-light-500">
                <a
                  href="https://www.google.com/maps/dir//ecoclad/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1dcc5b6f667555a1:0xdd8eca45857b3d06?sa=X&ved=2ahUKEwiYrNbOo43_AhXHa8AKHRw0CNIQ9Rd6BAg-EAU"
                  target="_blank"
                  rel="noreferrer"
                >
                  Unit 11, Denval Industrial Park Fisher Avenue, Epping 1
                </a>
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
