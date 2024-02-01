import React from 'react';
import './About.css'; 

const AboutUsModal = ({ onClose }) => {
  return (
    <div className="about-us-modal">
      <div className="modal-content">
        <p>
        HEY! WELCOME TO 🦐FOODHUT, THIS A ONLINE FOOD DELEVERY APP
        AND OUR BEST PART GET THE SUPER FAST DELEVERY IN JUST 20-30
        MINITUS AFTER YOUR ORDER AND EASY PAYMENT OPTION THAT
        WE SEND YOU ON YOUR WATTSAPP PLACING ON ORDER.
       <img src='https://foundersguide.com/wp-content/uploads/2019/09/delivery.jpg'
       alt='delivery-img'/> 
      WE ARE RECYCLE OUR PACKAGING FOR ECOSYSYEM EARTH 
      AND FOR HELP CHEAK OUR FOOTER SECTION 
      TO ALL HELPLINE DETAILS.

        </p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutUsModal;
