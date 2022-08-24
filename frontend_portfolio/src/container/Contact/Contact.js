import React, { useState } from 'react'
import './Contact.scss'

import Map from "../../assets/map.png";
import Phone from "../../assets/phone.png";
import Send from "../../assets/send.png";


//https://www.toptal.com/designers/subtlepatterns/uploads/email-pattern.png

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { name, email, message } = formData

  const handleChangeInput = () => {

  }

  const handleSubmit = () => {

  }



  return (
    <section id="contact" className='app__contact section'>
      <div className='container'>
        <h2 className="heading-text">Let's Get In <span className="color-text"> Touch</span>.</h2>
        <div className='app__contact-wrapper'>

          <div className='app__contact-details'>
            <div className='app__contact-detail'>
              <img src={Map} alt=" icon with map" />
              <span>Norawy</span>
            </div>
            <div className='app__contact-detail'>
              <a href="tel:+479670722">
                <img src={Phone} alt=" icon with phone" />
                <span>+47 96707225</span>
              </a>
            </div>
            <div className='app__contact-detail'>
              <a href="mailto:karolina.kulinska89@gmail.com" target="_blank" rel="noopener noreferrer"
                class="social-icon__link">  <img src={Send} alt=" icon with envelope " />
                <span>karolina.kulinska89@gmail.com</span></a>
            </div>
          </div>
          <div className='app__contact-form'>
            <form>
              <div className="app__contact-form-box">
                <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
              </div>
              <div className="app__contact-form-box">
                <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
              </div>
              <div className="app__contact-form-box">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="app__contact-btn" onClick={handleSubmit}>{isLoading ? "Sending" : "Send Message"}</button>
            </form>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Contact