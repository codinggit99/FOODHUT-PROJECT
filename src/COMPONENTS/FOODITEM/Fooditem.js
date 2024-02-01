// Fooditem.js

import React, { useState } from 'react';
import CustomAlert from '../CustomAlert/customAlert.js';
import './Fooditem.css';

const Fooditem = ({ product, onAddClicked }) => {
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    quantity: '',
    city: '',
    pincode: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    phoneNumber: '',
    
  });

  const orderButton = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setFormData({
      name: '',
      phoneNumber: '',
      quantity: '',
      city: '',
      pincode: '',
    });
    setFormErrors({
      name: '',
      phoneNumber: '',
      
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceOrder = async () => {
    if (!formData.name.trim() || !formData.phoneNumber.trim()) {
      setShowAlert(true);
      setAlertType('error');
      setAlertMessage('Please fill out all required fields.');
      return;
    }

    try {
      const response = await fetch
      ('https://foddhut-server-uy6t.onrender.com/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: product.name,
          userName: formData.name,
          item: formData.item,
          phoneNumber: formData.phoneNumber,
          quantity: formData.quantity,
          city: formData.city,
          pincode: formData.pincode,
        }),
      });

      if (response.ok) {
        setShowAlert(true);
        setAlertType('success');
        setAlertMessage(`Order placed successfully for ${product.name} 
        you recive a call from us in just 10 minitus...Thanks🙏`);
      } else {
        console.error('Error placing order:', response.statusText);
        setShowAlert(true);
        setAlertType('error');
        setAlertMessage('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setShowAlert(true);
      setAlertType('error');
      setAlertMessage('Failed to place order. Please try again.');
    }

    setShowForm(false);
    setFormData({
      name: '',
      phoneNumber: '',
      quantity: '',
      city: '',
      pincode: '',
    });
    setFormErrors({
      name: '',
      phoneNumber: '',
    });
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <ul className="food-list">
    <li className="food-item">
    <img src={product.imageUrl} alt={product.name} />
    <h6>{product.name}</h6>
    <h7>{product.price}</h7> 
    <p>{product.text}</p>

    <div className="btn-container">
      <button id="btn" className="order-btn" onClick={orderButton}>
        Order Now
      </button>
    </div>
  
      {showForm && (
        <div className="overlay">
          <div className="buy-now-form">
            <h4>Order for {product.name}!</h4>
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span className="error">{formErrors.name}</span>


              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <span className="error">{formErrors.phoneNumber}</span>

              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />

              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />

              <label htmlFor="pincode">Pincode:</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />

              <div className="button-container">
                <button type="button" onClick={handlePlaceOrder}>
                  Place Order
                </button>
                <button type="button" onClick={handleCancelClick}>
                  Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAlert && (
        <CustomAlert message={alertMessage} type={alertType} onClose={handleAlertClose} />
      )}
      </li>
      </ul>
  );
};

export default Fooditem;
