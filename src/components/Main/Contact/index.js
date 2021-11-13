import React from "react";

function Contact() {
  return (
    <section id="contact-me" className="contact-me">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" name="contact-form">
        <label for="name">Name</label>
        <input name="name" type="text" for="contact-me"></input>
        <label for="email">Email</label>
        <input name="email" type="email" for="contact-me"></input>
        <label for="message">Message</label>
        <textarea name="message" for="contact-me" rows="4"></textarea>
        <button type="submit" for="section-title">Submit</button>
      </form>
    </section>
  )
}

export default Contact;