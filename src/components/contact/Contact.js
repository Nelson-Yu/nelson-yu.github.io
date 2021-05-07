import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
  });

  const onFormChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactFormData);
  };

  return (
    <div id="contact" className="contact_container">
      <div className="contact_title">
        <span>Contact</span>
      </div>
      <div className="contact_form_container">
        <form onSubmit={handleSubmit}>
          <div className="contact_form_name">
            <label htmlFor="senderName">Name:</label>
            <input
              name="senderName"
              type="text"
              value={contactFormData.senderName}
              onChange={onFormChange}
            />
          </div>
          <div className="contact_form_email">
            <label htmlFor="senderEmail">E-mail:</label>
            <input
              name="senderEmail"
              type="email"
              value={contactFormData.senderEmail}
              onChange={onFormChange}
            />
          </div>
          <div className="contact_form_subject">
            <label htmlFor="subject">Subject:</label>
            <input
              name="subject"
              type="text"
              value={contactFormData.subject}
              onChange={onFormChange}
            />
          </div>
          <div className="contact_form_message">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="4"
              value={contactFormData.message}
              onChange={onFormChange}
            />
          </div>
          <button className="contact_form_button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
