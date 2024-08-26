import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Create this CSS file for styling if needed

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., sending login data to an API)
    console.log('Login Data Submitted:', loginData);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
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
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit"><Link to="/Houses">Login</Link></button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
