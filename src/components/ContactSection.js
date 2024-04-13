import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = ({ background }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form submission (e.g., send formData to server)
        console.log('Submitting form:', formData);

        // Clear form fields
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });

        // Optionally display a success message or perform other actions after submission
        alert('Form submitted successfully!');
    };
    return (
        <div>
            <section className="contact-section spad" style={{ backgroundColor: background }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title contact-title">
                                <span>Contact Us</span>
                                <h2>GET IN TOUCH</h2>
                            </div>
                            <div className="contact-widget">
                                <div className="cw-text">


                                    <i> <FontAwesomeIcon icon={faMapMarker} /> </i>
                                    <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
                                </div>
                                <div className="cw-text">
                                    <i> <FontAwesomeIcon icon={faMobile} /> </i>
                                    <p>125-711-811</p>
                                </div>
                                <div className="cw-text email">
                                    <i> <FontAwesomeIcon icon={faEnvelope} /> </i>
                                    <p>Support.gymcenter@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="leave-comment">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactSection
