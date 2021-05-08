import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [showForm, setShowForm] = useState(true);
  const [showSent, setShowSent] = useState(false);
  const [showError, setShowError] = useState(false);
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
  const [sendAnimation, setSendAnimation] = useState('');

  const onFormChange = (e) => {
    setFormErrors({ ...formErrors, [e.target.name]: false });
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const validateFormFields = (name, value) => {
    let errors = formErrors;

    if (!value || value.length === 0) {
      errors[name] = true;
    }

    if (name === 'senderEmail') {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape

      if (!regex.test(value)) {
        errors[name] = true;
      }
    }

    setFormErrors({ ...errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const prop in contactFormData) {
      validateFormFields(prop, contactFormData[prop]);
    }

    const { senderName, senderEmail, subject, message } = formErrors;
    if ((senderName, senderEmail, subject, message)) {
      console.log('error');
      return;
    }

    setSendAnimation('fly');

    console.log('a-ok');
  };

  return (
    <div id="contact" className="contact_container">
      <div className="contact_title">
        <span>Contact</span>
      </div>
      <div className="contact_form_container">
        {showForm && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="contact_form_name">
              <label htmlFor="senderName">Name:</label>
              <input
                className={formErrors.senderName ? 'input-error' : ''}
                name="senderName"
                type="text"
                value={contactFormData.senderName}
                onChange={onFormChange}
                onBlur={(e) =>
                  validateFormFields(e.target.name, e.target.value)
                }
              />
              <span className={formErrors.senderName ? 'error-text' : ''}>
                This field is required.
              </span>
            </div>
            <div className="contact_form_email">
              <label htmlFor="senderEmail">E-mail:</label>
              <input
                className={formErrors.senderEmail ? 'input-error' : ''}
                name="senderEmail"
                type="email"
                value={contactFormData.senderEmail}
                onChange={onFormChange}
                onBlur={(e) =>
                  validateFormFields(e.target.name, e.target.value)
                }
              />
              <span className={formErrors.senderEmail ? 'error-text' : ''}>
                {contactFormData.senderEmail.length > 0
                  ? 'Please enter a valid e-mail.'
                  : 'This field is required.'}
              </span>
            </div>
            <div className="contact_form_subject">
              <label htmlFor="subject">Subject:</label>
              <input
                className={formErrors.subject ? 'input-error' : ''}
                name="subject"
                type="text"
                value={contactFormData.subject}
                onChange={onFormChange}
                onBlur={(e) =>
                  validateFormFields(e.target.name, e.target.value)
                }
              />
              <span className={formErrors.subject ? 'error-text' : ''}>
                This field is required.
              </span>
            </div>
            <div className="contact_form_message">
              <label htmlFor="message">Message:</label>
              <textarea
                className={formErrors.message ? 'input-error' : ''}
                name="message"
                rows="4"
                value={contactFormData.message}
                onChange={onFormChange}
                onBlur={(e) =>
                  validateFormFields(e.target.name, e.target.value)
                }
              />
              <span className={formErrors.message ? 'error-text' : ''}>
                This field is required.
              </span>
            </div>
            <div className="contact_form_submit">
              <button
                className="contact_form_button"
                type="submit"
                fly={sendAnimation}
              >
                <div className="contact_form_plane_container">
                  <img src="/assets/icons/plane.png" alt="Send" />
                </div>
                <span>Submit</span>
              </button>
            </div>
          </form>
        )}
        {showSent && (
          <div className="contact_form_sent">
            Thanks for taking time to reach out! I&apos;ll try my best to get
            back to you as soon as possible.
          </div>
        )}
        {showError && (
          <div className="contact_form_error">
            Oops! Your message was unable to be sent. Please try again at a
            later time or e-mail me directly at{' '}
            <a href="mailto:nelson.tm.yu@gmail.com">nelson.tm.yu@gmail.com</a>.
            Thanks!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
