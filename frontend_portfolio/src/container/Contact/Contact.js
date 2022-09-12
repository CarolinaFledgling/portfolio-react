import React, { useState } from "react";
import "./Contact.scss";
import { client } from "../../client";
import isValidEmail from "../../helpers/isValidEmail";
import fieldValidation from "../../helpers/fieldValidation";
import emailValidation from "../../helpers/emailValidation";
import reasonValidation from "../../helpers/reasonValidation";
import SocialFields from "../../components/SocialFields/SocialFields";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import MeditingImg from "../../components/MeditingImg/MeditingImg";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    reason: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    reason: "",
  });

  const { name, email, message, reason } = formData;

  // Rules validation
  // value which we will get from form
  const validateRules = {
    name: (value) => fieldValidation("name", value),
    message: (value) => fieldValidation("message", value),
    email: (value) => emailValidation(value),
    reason: (value) => reasonValidation(value),
  };

  const validationSubmit = () => {
    let nextErrors = {};
    if (!name) {
      nextErrors = {
        ...nextErrors,
        name: "Please enter your name",
      };
    }

    if (!email || !isValidEmail(email)) {
      nextErrors = {
        ...nextErrors,
        email: "Please enter a valid email",
      };
    }

    if (!message) {
      nextErrors = {
        ...nextErrors,
        message: "Please write message here",
      };
    }

    if (!reason) {
      nextErrors = {
        ...nextErrors,
        reason: "Please choose an option 1 or 2",
      };
    }

    setErrors(nextErrors);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log("e.target", e.target);
    // thanks to added own Attributes "name" to input // we can get info which input is used
    // key:attr

    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // modify errors objects when we leave input

    // validate  the current value
    const error = validateRules[name](value);
    console.log("error validate curent value", error);

    const touchedError = {
      ...errors,
      [name]: error,
    };
    setErrors(touchedError);

    console.log("test values on blur", touchedError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validationSubmit();

    if (!name || !email || !message || !reason || !isValidEmail(email)) return;

    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
      reason: reason,
    };

    //Upload data to Sanity
    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <section id="contact" className="app__contact section">
      <div className="container">
        <h2 className="heading-text">
          Let's Get In <span className="color-text">Touch</span>!
        </h2>
        <div className="app__contact-wrapper">
          <div className="app__contact-details">
            <ContactDetails />
            <SocialFields />
          </div>
          <MeditingImg />
          {!isFormSubmitted ? (
            <div className="app__contact-form">
              <h3 className="app__contact-form-title">Contact form 📨</h3>
              <form>
                <div className="app__contact-form-box">
                  <input
                    className={`p-text ${errors.name ? "error-border" : ""}`}
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                    onBlur={handleBlur}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div className="app__contact-form-box">
                  <input
                    className="p-text"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                    onBlur={handleBlur}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className="app__contact-form-box">
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    value={message}
                    onChange={handleChangeInput}
                    onBlur={handleBlur}
                  />
                  {errors.message && (
                    <p className="error-text">{errors.message}</p>
                  )}
                </div>
                <div className="app__contact-form-box">
                  <h3 className="app__contact-heading">Check options:</h3>
                  <select
                    name="reason"
                    onChange={handleChangeInput}
                    onBlur={handleBlur}
                  >
                    <option value="" defaultValue>
                      -- Please choose an option --
                    </option>
                    <option value="job offer">
                      {" "}
                      1. I have a job offer for you! 😊
                    </option>
                    <option value="checking, if you get this message in your Sanity Studio">
                      {" "}
                      2. I'm just checking, if you get this message in your
                      Sanity Studio 😂
                    </option>
                  </select>
                  {errors.reason && (
                    <p className="error-text">{errors.reason}</p>
                  )}
                </div>
                <button
                  type="button"
                  className="app__contact-btn"
                  onClick={handleSubmit}
                >
                  {isLoading ? "Sending" : "Send Message"}
                </button>
              </form>
            </div>
          ) : (
            <div className="app__contact-message">
              <h3 className="head-text">Thank you for getting in touch!❤️</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
