import React, { useState } from "react";
import '../css/UserProfile.css';
import orders from "../assets/orders.png";
import needs from "../assets/needs.png";

const UserProfile = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="user-profile">
      <h2 className="profile-header">User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        {address ? (
          <p><strong>Address:</strong> {address}</p>
        ) : (
          <div className="address-input">
            <label htmlFor="address">Enter Address:</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="profile-buttons">
        <button className="profile-action-button">
          <img src={orders} alt="Your Orders Icon" className="button-icon" />
          Your Orders
        </button>
        <button className="profile-action-button">
        <img src={needs} alt="Future Needs Icon" className="button-icon" />
          Future Needs
        </button>
      </div>
    </div>
  );
};
//sbdjn
export default UserProfile;
