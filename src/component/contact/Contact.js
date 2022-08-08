import React from "react";
import "./contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lblhvcf",
        "template_0xfpufn",
        form.current,
        "nwqUtlSWhBh4vaEL4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h6>Get in Touch</h6>
      <h2>Contact Me</h2>

      <div className="contact__container container">
        <div className="contact__details">
          <article className="contact__detail">
            <AiOutlineMail className="contact__icon" />
            <h5>Email</h5>
            {/* <small>Stephenohaeri4018@gmail.com</small> */}
            <a href="mailto:stephenohaer4018@gmail.com" target="_blank">
              send a message
            </a>
          </article>

          <article className="contact__detail">
            <FiTwitter className="contact__icon" />
            <h5>Twitter</h5>
            <small>@stephenjaspers</small>
            <a
              href="https://twitter.com/Stephenjaspers?t=YKmKWQxWTDyesSSIcOvaSA&s=08"
              target="_blank"
            >
              send a message
            </a>
          </article>

          <article className="contact__detail">
            <BsWhatsapp className="contact__icon" />
            <h5>Whatsapp</h5>
            <small>+2348026405073</small>
            <a
              href="https://api.whatsapp.com/send/?phone+2348026405073"
              target="_blank"
            >
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <textarea name="message" rows="10" placeholder="Enter your message" />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
