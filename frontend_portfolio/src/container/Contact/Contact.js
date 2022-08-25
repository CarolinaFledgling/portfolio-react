import React, { useState } from 'react'
import './Contact.scss'
import { client } from '../../client';

import Map from "../../assets/map.png";
import Phone from "../../assets/phone.png";
import Send from "../../assets/send.png";
import meditating from '../../assets/meditating.svg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import isValidEmail from "../../helpers/isValidEmail"





const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    reason: "",
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    reason: "",
  })

  const { name, email, message, reason } = formData



  const handleChangeInput = (e) => {
    const { name, value } = e.target
    console.log("e.target", e.target)
    // thanks to added own Attributes "name" to input // we can get infor which input is used
    console.log(e.target.name);

    // name:value nie zadzialalo by bo ten name jest dynamiczny, wiec przychodza wartosci z name emaila lub hobby
    // zeby ten klucz stawic dynamicznie musimy uzyc []
    setFormData({ ...formData, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();


    // const errorDisplay = (errorField, nameError) => {
    //   console.log('error in fn', errorField)
    //   if (!errorField) {
    //     setErrors({
    //       ...errors,
    //       errorField: nameError,
    //     })
    //   } else if (errorField) {
    //     setErrors({
    //       ...errors,
    //       errorField: ""
    //     })
    //   }

    // }

    setErrors({
      ...errors,
      name: '',
      email: '',
      message: '',
      reason: "",
    })

    // ***** Validation FIELD FORM

    if (!name) {
      setErrors({
        ...errors,
        name: "Please enter your name"
      })
    } else if (!email || !isValidEmail(email)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email"
      })
    } else if (!message) {
      setErrors({
        ...errors,
        message: "Please write message here"
      })
    } else if (!reason) {
      setErrors({
        ...errors,
        reason: "Please choose an option 1 or 2"
      })
    }

    // errorDisplay(name, "Please enter your name")

    if (!name || !email || !message || !reason || !isValidEmail(email)) return;



    setIsLoading(true)

    const contact = {
      _type: "contact",
      name: name,
      email: name,
      message: message,
      reason: reason,
    }

    //Upload data to Sanity 

    client.create(contact)
      .then(() => {
        setIsLoading(false)
        setIsFormSubmitted(true)
      })
  }



  return (
    <section id="contact" className='app__contact section'>
      <div className='container'>
        <h2 className="heading-text">Let's Get In <span className="color-text"> Touch</span>!</h2>
        <div className='app__contact-wrapper'>

          <div className='app__contact-details'>
            <div className='app__contact-detail'>
              <img src={Map} alt=" icon with map" />
              <span>Norway</span>
            </div>
            <div className='app__contact-detail'>
              <a href="tel:+479670722">
                <img src={Phone} alt=" icon with phone" />
                <span>+47 96707225</span>
              </a>
            </div>
            <div className='app__contact-detail'>
              <a href="mailto:karolina.kulinska89@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Send} alt=" icon with envelope " />
                <span>karolina.kulinska89@gmail.com</span></a>
            </div>

            <div className='app__contact-social'>
              <a href="https://github.com/CarolinaFledgling" target="_blank" rel="noreferrer">
                <div className='app__project-icon github'>
                  <FaGithub />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/karolina-kuli%C5%84ska-870124111/" target="_blank" rel="noreferrer">
                <div className='app__project-icon linkedin'>
                  <FaLinkedin />
                </div>

              </a>
            </div>
          </div>

          <div className='app__contact-img'>
            <img src={meditating} alt="meditating" />
          </div>
          {!isFormSubmitted ? <div className='app__contact-form'>
            <form>
              <div className="app__contact-form-box">
                <input className={`p-text ${errors.name ? 'error-border' : ''}`} type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
                {errors.name ? <p className='error-text'>{errors.name}</p> : ""}
              </div>
              <div className="app__contact-form-box">
                <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                {errors.email && <p className='error-text'>{errors.email}</p>}
              </div>
              <div className="app__contact-form-box">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={handleChangeInput}
                />
                {errors.message && <p className='error-text'>{errors.message}</p>}
              </div>
              <div className="app__contact-form-box">
                <h3 className='app__contact-heading'>Choose an option:</h3>

                <select name="reason" onChange={handleChangeInput}>
                  <option value="">-- Please choose an option --</option>
                  <option value="job offer"> 1. I have a job offer for you! 😊</option>
                  <option value="checking, if you get this message in your Sanity Studio"> 2. I'm just checking, if you get this message in your Sanity Studio 😂</option>
                </select>
                {errors.reason && <p className='error-text'>{errors.reason}</p>}
              </div>
              <button type="button" className="app__contact-btn" onClick={handleSubmit}>{isLoading ? "Sending" : "Send Message"}</button>
            </form>
          </div> : <div>
            <h3 className="head-text">
              Thank you for getting in touch!❤️
            </h3>
          </div>}
        </div>


      </div>
    </section>
  )
}

export default Contact