import React from "react";
import userLogo from './profile logo.jpg';
// import './App.css';
import './User.css'
const User = ({ donor }) => {
    return (
        <div className="profile-section">
            <div className="profile-info">
                <h2 style={{ fontSize: '2rem', marginTop: 0 }}>Profile</h2>
                <div>
                    <div className="detail">
                        <label>Name:</label>
                        <span>{donor.name}</span>
                    </div>
                    <div className="detail">
                        <label>Location:</label>
                        <span>{donor.address}</span>
                    </div>
                    {/* Add more details as needed */}
                </div>
                <div>
                    <div className="detail">
                        <label>Medical Prescription</label>
                    </div>
                    <div className="detail">
                        <button className="download-btn">Download as PDF</button>
                    </div>
                </div>
            </div>
            <div className="user-profile-details">
                <img src={userLogo} alt="Profile" className="profile-image" width={200} />
                <button className="view-profile-button">View</button>
            </div>
        </div>
    );
};

export default User;
