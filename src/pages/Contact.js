import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.scss'; // Import the CSS file for styling
import contactImage from '../assets/letter.png'; // Import the PNG image

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzprnvg");

  if (state.succeeded) {
    return <div className="success-message">Thank you for your message! We will get back to you soon.</div>;
  }

  return (
    <div className="contact-page">
      <div className="header-container">
        <img src={contactImage} alt="Contact Header" className="header-image" />
        <h2 className="header-text">LET'S WORK TOGETHER</h2>
      </div>
      <p className="contact-info">
        Please fill the contact form below. For all other inquiries, please email us at <a href="mailto:thenscreationfilms@gmail.com">thenscreationfilms@gmail.com</a>
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="eventDate"
            name="eventDate"
            placeholder="Event Date (mm/dd/yyyy)"
          />
          <ValidationError
            prefix="EventDate"
            field="eventDate"
            errors={state.errors}
          />
        </div>
        <div className="form-group split-form">
          <div className="form-half">
            <input
              type="text"
              id="howDidYouHear"
              name="howDidYouHear"
              placeholder="How did you hear about us? What draws you to our work?*"
              required
            />
            <ValidationError
              prefix="HowDidYouHear"
              field="howDidYouHear"
              errors={state.errors}
            />
          </div>
          <div className="form-half">
            <input
              type="text"
              id="instagramHandles"
              name="instagramHandles"
              placeholder="Instagram handles"
            />
          </div>
        </div>
        <div className="form-group split-form">
          <div className="form-half">
            <input
              type="text"
              id="cityCountry"
              name="cityCountry"
              placeholder="City/ Country*"
              required
            />
            <ValidationError
              prefix="CityCountry"
              field="cityCountry"
              errors={state.errors}
            />
          </div>
          <div className="form-half">
            <input
              type="text"
              id="planner"
              name="planner"
              placeholder="Do you have a planner?"
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Message*"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
  <label htmlFor="phoneNumber" className="phone-label">
    Prefer to call us? Reach out at:
  </label>
  <input
    type="text"
    id="phoneNumber"
    name="phoneNumber"
    value="+1 (919) 945-6880"
    readOnly
    className="phone-input"
  />
</div>
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
