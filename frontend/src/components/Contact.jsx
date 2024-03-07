import React, { useState } from 'react';
import '../css/contact.css';

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
    <div className="container">
      <span className="big-circle"></span>
      <img src="../../../images/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            {/* ... */}
            <div className="information">
              <img src="../../../images/location.png" className="icon" alt="" />
              <p>IIIT Una, Himachal Pradesh 177209</p>
            </div>
            <div className="information">
              <img src="../../../images/email.png" className="icon" alt="" />
              <p>example@iiitu.ac.in</p>
            </div>
            <div className="information">
              <img src="../../../images/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>
        </div>

        <div className={`contact-form ${focus ? 'focus' : ''}`}>
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="name">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="email">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="phone">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                onFocus={focusFunc}
                onBlur={blurFunc}
              ></textarea>
              <label htmlFor="message">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
