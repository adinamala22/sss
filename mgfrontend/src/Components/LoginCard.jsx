// src/components/LoginCard.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
// import './LoginCard.css';

function LoginCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    userType: 'donor',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let apiUrl;
      if (formData.userType === 'donor') {
        apiUrl = 'http://localhost:8085/api/v1/login/donor/authenticate';
      } else if (formData.userType === 'recipient') {
        apiUrl = 'http://localhost:8085/api/v1/login/recipient/authenticate';
      }

      const requestData = {
        userName: formData.username,
        password: formData.password,
      };

      console.log('requestData:', requestData);

      // Rest of your code for making the API request
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      });
      console.log('Authentication success', response.data);
      navigate('/dashboard');

      setFormData({
        username: '',
        password: '',
        userType: 'donor',
      });
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };

  return (
    <div className="login-card">
      <img src= './recipient.png' alt='lc' className='lc'/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Select User Role:</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="donor">Donor</option>
            <option value="recipient">Recipient</option>
          </select>
        </div>
        <button type="submit" className="login-button" >
          Login
        </button>
      </form>
      <p className="new-user">
        New User? <Link href="#">Sign up here</Link>
      </p>
    </div>
  );
}

export default LoginCard;
