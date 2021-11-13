import React, { useState } from "react";
import { capitalizeFirstLetter, validateEmail } from '../../../utils/helpers';

function Contact() {
  // formState will hold the user response, later this will be sent to a back end
  const [formState, setFormState] = useState({name: '', email: '', message: ''});

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function blurHandler(event) {
    setSuccessMessage('');
    
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      
      if (!isValid) {
        setErrorMessage('Invalid email address.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(event.target.name)} is required.`)
      } else {
        setErrorMessage('');
      }
    }
    console.log(errorMessage);
    if (!errorMessage) {
      setFormState({...formState, [event.target.name]: event.target.value});
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    
    if (!errorMessage) {
      setSuccessMessage('Message sent.');
      event.target.reset();
    }
  }

  return (
    <section id="contact-me" className="contact-me">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" name="contact-form" onSubmit={submitHandler}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <label for="name">Name</label>
        <input name="name" type="text" for="contact-me" onBlur={blurHandler}></input>
        <label for="email">Email</label>
        <input name="email" type="email" for="contact-me" onBlur={blurHandler}></input>
        <label for="message">Message</label>
        <textarea name="message" for="contact-me" rows="4" onBlur={blurHandler}></textarea>
        <button type="submit" for="contact-form">Submit</button>
      </form>
    </section>
  )
}

export default Contact;