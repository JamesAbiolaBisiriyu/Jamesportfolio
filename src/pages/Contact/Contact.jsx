/* eslint-disable react/no-unknown-property */
import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2714186951766!2d3.3720373105723347!3d6.613160893353272!2m3!
        1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ab8f0ab3f3%3A0x98715e9598fa4c17!2s9%20Femi%20Ogun%20St%2C%20Off%2C%20Shangisha
        %20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1712677676714!5m2!1sen!2sng"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form">
          <div className="input-wrapper">
            <input type="text" name="fullName" id="fullname" className="form-input" placeholder ="Full Name" required />
          </div>
          <div className="input-wrapper">
            <input type="email" name="email" id="email" className="form-input" placeholder ="E-Mail Address" required />
          </div>
          <textarea name="message" className="form-input" placeholder='Your Message'></textarea>
          <button className="form-btn" type='submit'><span>Send Message</span></button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
