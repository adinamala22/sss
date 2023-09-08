import React, { useState } from "react";
import axios from "axios";
// import './App.css';
import './RecipientDashboard.css'
import User from "./User";
import avatar from './profilecircle.png';

const RecipientDashboard = () => {
    const [searchAddress, setSearchAddress] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:8085/api/v1/login/donors/address?address=${searchAddress}`)
            .then((response) => {
                setSearchResults(response.data);
            })
            .catch((error) => {
                console.error("Error searching donors:", error);
            });
    };

    return (
        <div className="user-profile">
            <div className="nav-bar">
                <div className="nav-logo">
                    <h1>MOTHER'S GIFT</h1>
                </div>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Help</a>
                </div>
                <div className="loggedin-user">
                    <img src={avatar} alt="user-profile" height={50} width={50} />
                    <p>Recipient UserName</p>
                </div>
            </div>
            <div className="profile-search">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-bar"
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            <div className="users">
    {searchResults.map((donor) => (
        <User key={donor.id} donor={donor} />
    ))}
</div>

        </div>
    );
};

export default RecipientDashboard;
