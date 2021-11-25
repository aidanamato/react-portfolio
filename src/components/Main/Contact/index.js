import React from "react";

function Contact() {
  return (
    <section id="contact-me" className="contact-me">
      <h2 className="section-title">Contact Me</h2>
      <div class="contact-flex">
        <div class="contact-text">
          <h3>Phone:</h3>
          <a href="tel:8509809094"><p>(850) 980-9094</p></a>
        </div>
        <div class="contact-text">
          <h3>Email:</h3>
          <a href="mailto:aidanamato@comcast.net"><p>aidanamato@comcast.net</p></a>
        </div>
      </div>
    </section>
  )
}

export default Contact;