import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import Avatar from "@mui/material/Avatar";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const PreviousBtn = (props) => {
  // console.log(props);
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowLeft style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowRight style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center", marginTop: "1rem" }}>
        <h1
          style={{
            marginBottom: 20,
            fontFamily: "sans-serif",
            fontSize: "1.2rem",
            fontWeight: "medium",
          }}
        >
          TESTIMONIALS
        </h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
            paragraph="Ecoclad Solutions has undertaken various projects for this Practice over the last few years. We have found the service provided by Ecoclad Solutions and David Petrie and his team to be extremely professional and to incorporate a high level of extensive experience and skill"
            name="Neville Adler"
            title="Adler Price Architects CC"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
            paragraph="From pricing the contract to carrying out work the as well as the final account, all stages were handled professionally with as little disruption to our Tenants as was possible. I would recommend Ecoclad to any owner who is intending to carry out a similar operation to their buildings "
            name="Brian Brice"
            title="M/Partner"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
            paragraph="I want to take a minute and commend you and your company for the service you are delivering here at Iziko. I must say that your whole teams attitude to the works, project and my construction staff can only be described as positive and pragmatic. Please applaud your staff, and I hope that we may complete several more projects with a firm such as yourselves."
            name="Wayne Frazer"
            title="Site Agent"
          />
        </Slider>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ img, paragraph, name, title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>{paragraph}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,{" "}
        {title}
      </p>
    </div>
  );
};

export default Testimonial;
