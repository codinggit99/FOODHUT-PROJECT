// Banner.js
import React, { useState } from 'react';
import CustomAlert from '../CustomAlert/customAlert.js';
import './Banner.css';

const Banner = ({handleAboutUsClick}) => {
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      showAlertMessage('error', 'Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch
      ('https://foddhut-server-uy6t.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submitted successfully
        showAlertMessage('success', `
          Form submitted successfully!
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Password: ${formData.password}
        `);

        // Clear the form and hide it
        setFormData({ name: '', email: '', phone: '', password: '' });
        setShowForm(false);
      } else {
        // Handle error response from the server
        const errorData = await response.json();
        showAlertMessage('error', `Error: ${errorData.message}`);
      }
    } catch (error) {
      // Handle network error or other exceptions
      console.error('Error submitting form:', error);
      showAlertMessage('error', 'Internal server error');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRemoveForm = () => {
    setShowForm(false);
  };

  const showAlertMessage = (type, message) => {
    setShowAlert(true);
    setAlertType(type);
    setAlertMessage(message);
  };

  const handleAlertOk = () => {
    setShowAlert(false);
  };

  return (
    <div className="banner-container">
      <h1>
        🦐F<b>oo</b>
        <b3>d</b3>
        <b4>H</b4>
        <b5>u</b5>T
      </h1>
      <div className="banner">
        <div className="heading">
          <button className="your-button-class" onClick={handleButtonClick}>
            Create Account
          </button>
          <button className='about-btn' onClick={handleAboutUsClick}>
            About Us!
          </button>
          <b1>YOUR <b8> ONLY ON</b8> <b9>FOOD</b9> DESTINATION!😋😋</b1>
          <h2>BEST FOOD</h2>
          <h3>
            <b7>FASTEST</b7> DELIVERY
          </h3>
        </div>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="your-form-container">
            <h4>CREATE OUR ACCOUNT...</h4>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">
                  Submit
                </button>
                <button className="remove-button" onClick={handleRemoveForm}>
                  Later!
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAlert && (
        <CustomAlert
          message={alertMessage}
          type={alertType}
          onClose={handleAlertOk}
        />
      )}
    </div>
  );
};

export default Banner;
