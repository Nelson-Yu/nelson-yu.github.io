import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    senderName: false,
    senderEmail: false,
    subject: false,
    message: false,
  });

  const onFormChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const validateFormFields = (e) => {
    if (!e.target.value) {
      setFormErrors({ ...formErrors, [e.target.name]: true });
      return;
    }

    if (e.target.name === 'senderEmail') {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape

      if (!regex.test(e.target.value)) {
        setFormErrors({ ...formErrors, [e.target.name]: true });
        return;
      }
    }

    setFormErrors({ ...formErrors, [e.target.name]: false });
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
              className={formErrors.senderName ? 'input-error' : ''}
              name="senderName"
              type="text"
              value={contactFormData.senderName}
              onChange={onFormChange}
              onBlur={validateFormFields}
            />
            {formErrors.senderName && <span>This field is required.</span>}
          </div>
          <div className="contact_form_email">
            <label htmlFor="senderEmail">E-mail:</label>
            <input
              className={formErrors.senderEmail ? 'input-error' : ''}
              name="senderEmail"
              type="email"
              value={contactFormData.senderEmail}
              onChange={onFormChange}
              onBlur={validateFormFields}
            />
            {formErrors.senderEmail &&
              contactFormData.senderEmail.length === 0 && (
                <span>This field is required.</span>
              )}
            {formErrors.senderEmail &&
              contactFormData.senderEmail.length > 0 && (
                <span>Please enter a valid e-mail.</span>
              )}
          </div>
          <div className="contact_form_subject">
            <label htmlFor="subject">Subject:</label>
            <input
              className={formErrors.subject ? 'input-error' : ''}
              name="subject"
              type="text"
              value={contactFormData.subject}
              onChange={onFormChange}
              onBlur={validateFormFields}
            />
            {formErrors.subject && <span>This field is required.</span>}
          </div>
          <div className="contact_form_message">
            <label htmlFor="message">Message:</label>
            <textarea
              className={formErrors.message ? 'input-error' : ''}
              name="message"
              rows="4"
              value={contactFormData.message}
              onChange={onFormChange}
              onBlur={validateFormFields}
            />
            {formErrors.message && <span>This field is required.</span>}
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
