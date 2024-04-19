import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling

const ContactUs = () => {
    return (
        <div className="contact-us-container" id='contact-page'>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number:</label>
                        <input type="tel" id="mobile" name="mobile" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Select Date:</label>
                        <input type="date" id="date" name="date" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Select Time:</label>
                        <input type="time" id="time" name="time" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-img">
                <img src="your-image-url.jpg" alt="Contact" />
            </div>
        </div>
    );
}

export default ContactUs;
