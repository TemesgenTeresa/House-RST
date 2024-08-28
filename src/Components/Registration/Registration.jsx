import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import axios from 'axios'; // Import Axios for HTTP requests
import './Registration.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); // For handling errors

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend to save the form data
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data.message); // Alert the user on success
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.'); // Set error message
    }
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error">{error}</p>} {/* Display error message if any */}
          <button type="submit">Register</button>
          <div className="login-link">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
