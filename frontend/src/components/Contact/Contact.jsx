import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [focus, setFocus] = useState(false);

  const focusFunc = () => {
    setFocus(true);
  };

  const blurFunc = (e) => {
    if (e.target.value === "") {
      setFocus(false);
    }
  };

  return (
    <div className="contact-container">
      <span className="contact-big-circle"></span>
      <img src="../../../images/shape.png" className="contact-square" alt="" />
      <div className="contact-form-container">
        <div className="contact-info">
          <h3 className="contact-title">Let's get in touch</h3>
          <p className="contact-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="contact-info">
            <div className="contact-info-section">
              <img src="../../../images/location.png" className="contact-icon" alt="" />
              <p>IIIT Una, Himachal Pradesh 177209</p>
            </div>
            <div className="contact-info-section">
              <img src="../../../images/email.png" className="contact-icon" alt="" />
              <p>example@iiitu.ac.in</p>
            </div>
            <div className="contact-info-section">
              <img src="../../../images/phone.png" className="contact-icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>
        </div>

        <div className={`contact-form ${focus ? 'focus' : ''}`}>
          <span className="contact-circle one"></span>
          <span className="contact-circle two"></span>

          <form >
            <h3 className="contact-title">Contact us</h3>
            <div className="contact-input-container">
              <input
                type="text"
                name="name"
                className="contact-input"
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="name">Username</label>
              <span>Username</span>
            </div>
            <div className="contact-input-container">
              <input
                type="email"
                name="email"
                className="contact-input"
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="email">Email</label>
              <span>Email</span>
            </div>
            <div className="contact-input-container">
              <input
                type="tel"
                name="phone"
                className="contact-input"
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="phone">Phone</label>
              <span>Phone</span>
            </div>
            <div className="contact-input-container textarea">
              <textarea
                name="message"
                className="contact-input"
                onFocus={focusFunc}
                onBlur={blurFunc}
              ></textarea>
              <label htmlFor="message">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="contact-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
