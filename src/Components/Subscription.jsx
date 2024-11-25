// Subscription.js (Frontend - React)
import React, { useState } from 'react';

const Subscription = () => {
  const [email, setEmail] = useState('');  // State to store the email input
  const [agreed, setAgreed] = useState(false);  // State to track agreement to terms

  // Enhanced email validation function
  const isValidEmail = (email) => {
    // Regex: Ensures username starts with a letter, followed by alphanumerics, and domain includes "@"
    const emailRegex = /^[a-zA-Z0-9._!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate the email before proceeding
    if (!isValidEmail(email)) {
      alert('Error: Please enter a valid email address. The username must start with a letter and can only contain alphanumeric characters.'); // Show validation error in a prompt box
      return; // Stop further execution
    }

    // Ensure the user agrees to the terms
    if (!agreed) {
      alert('Error: You must agree to the terms before subscribing.'); // Show validation error in a prompt box
      return; // Stop further execution
    }

    try {
      // Send the subscription data to the backend
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, agreedToTerms: agreed }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Success: Subscription saved successfully!'); // Show success message in a prompt box
        setEmail(''); // Clear email input
        setAgreed(false); // Reset the checkbox
      } else {
        alert(`Error ${response.status}: ${data.message || 'An error occurred. Please try again.'}`); // Show error message with status code
      }
    } catch (error) {
      alert('Error: An error occurred. Please try again later.'); // Handle network or server errors
    }
  };

  return (
    <div className="subscribe">
      <h2 className="subscribe__title">Let's keep in touch</h2>
      <p className="subscribe__copy">Subscribe to keep your garden fresh and updated. We promise not to spam you!</p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          className="form__email"
          placeholder="Enter your email address"
          value={email} // Bind the email input to the state
          onChange={(e) => setEmail(e.target.value)} // Update state when input changes
          required // Ensure email input is not empty
        />
        <button type="submit" className="form__button">Send</button>
      </form>
      <div className="notice">
        <input
          type="checkbox"
          checked={agreed} // Bind the checkbox to the state
          onChange={() => setAgreed(!agreed)} // Toggle agreement state
        />
        <span className="notice__copy">I agree to my email being stored and used to receive monthly updates.</span>
      </div>
    </div>
  );
};

export default Subscription;
