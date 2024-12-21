
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div
    className="scientific-consultation-wrapper"
    style={{
      minHeight: '100vh', // Full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '20px', // Optional padding for better spacing
    }}
  >
    <div className="container mt-5">
      <h2 className="text-center">Profile</h2>
      <div className="card mx-auto" style={{ width: '30rem' }}>
        <img src={user?.image || 'https://via.placeholder.com/150'} alt="Profile" className="card-img-top rounded-circle" style={{ width: '150px', margin: '0 auto' }} />
        <div className="card-body">
          <h5 className="card-title text-center">{user?.name}</h5>
          <p className="card-text text-center">{user?.email}</p>
          <p><strong>Role:</strong> {user?.Role || 'N/A'}</p>
          <p><strong>Member Since:</strong> {user?.Member_Since || 'N/A'}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
