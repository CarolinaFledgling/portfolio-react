import Map from "../../assets/map.png";
import Phone from "../../assets/phone.png";
import Send from "../../assets/send.png";
import "./ContactDetails.scss";

function ContactDetails() {
  return (
    <>
      <div className="app__contact-detail">
        <img src={Map} alt=" icon with map" height="35px" />
        <span>Norway</span>
      </div>
      <div className="app__contact-detail">
        <a href="tel:+479670722" aria-label='phone number'>
          <img src={Phone} alt=" icon with phone" height="35px" />
          <span>+47 96707225</span>
        </a>
      </div>
      <div className="app__contact-detail">
        <a
          href="mailto:karolina.kulinska89@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='email'
        >
          <img src={Send} alt="icon with envelope" height="35px" />
          <span>karolina.kulinska89@gmail.com</span>
        </a>
      </div>
    </>
  );
}

export default ContactDetails;
