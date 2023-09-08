// src/components/Login.js
import React from 'react';
// import Navbar from './Navbar';
import LoginCard from './LoginCard';
// import "C:\\Users\\ndwarak\\login-page\\new\\src\\components\\Login.css"
import './Login.css';
import Navbar from './Navbar';

function Login() {
  return (
    <div className="login-page">
     <Navbar/>
      <div className="login-container">
        {/* <LoginCard title="Donor Login" img = "./donor.png" userType= "donor"/>
        <LoginCard title="Recipient Login" img = "./recipient.png" userType="recipient" /> */}
        <LoginCard/>
      </div>
    </div>
  );
}
export default Login;
