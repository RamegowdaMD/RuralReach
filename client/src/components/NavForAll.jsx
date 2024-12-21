// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import ProfPic from '../assets/profile.png';
// import { useTheme } from '../pages/ThemeContext'; // Import useTheme hook
// import { useUser } from '../UserContext'; // Import useUser hook

// const NavForAll = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const navigate = useNavigate();
//     const { isDarkMode, toggleTheme } = useTheme(); // Get dark mode state
//     const { user } = useUser(); // Get the current user state

//     // Toggle sidebar open/close
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     // Close sidebar
//     const closeSidebar = () => {
//         setIsSidebarOpen(false);
//     };

//     return (
//         <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm py-2 fixed-top`}>
//             <div className="container-fluid">
//                 {/* Brand Logo */}
//                 <Link className="navbar-brand fw-bold text-primary" to="/" style={{ fontSize: '40px' }}>
//                     RuralReach
//                 </Link>

//                 {/* Mobile Toggle Button */}
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                     aria-controls="navbarNav"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* Navbar Links */}
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className={`nav-link fw-semibold ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/loan/investor">
//                                 Become an Investor
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <a
//                                 href="https://www.instagram.com/iam_sjeevan?igsh=YmxxODVsMWhuMzEz"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className={`nav-link text-reset ${isDarkMode ? 'text-light' : 'text-dark'}`}
//                             >
//                                 Contact Us
//                             </a>
//                         </li>
//                     </ul>

//                     {/* Language Selector and Profile Picture */}
//                     <div className="d-flex align-items-center">
//                         <select
//                             className={`form-select mx-3 ${isDarkMode ? 'text-light bg-dark' : ''}`}
//                             aria-label="Select Language"
//                             style={{ maxWidth: '180px', margin: '0 auto' }}
//                         >
//                             <option value="english">English</option>
//                             <option value="hindi">हिन्दी</option>
//                             <option value="kannada">ಕನ್ನಡ</option>
//                             <option value="tamil">தமிழ்</option>
//                             <option value="telugu">తెలుగు</option>
//                         </select>

//                         {/* Profile Picture */}
//                         <img
//                             src={ProfPic}
//                             alt="Profile"
//                             className="rounded-circle me-2"
//                             style={{ width: '40px', height: '40px', cursor: 'pointer' }}
//                             onClick={toggleSidebar}
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Sidebar for User Info */}
//             {isSidebarOpen && (
//                 <div
//                     className={`position-fixed top-0 end-0 vh-100 ${isDarkMode ? 'bg-dark text-light' : 'bg-white text-dark'} shadow-lg`}
//                     style={{
//                         width: '300px',
//                         zIndex: 1050,
//                         transition: 'transform 0.3s ease-in-out',
//                     }}
//                 >
//                     <div className="p-3">
//                         {/* Profile Button */}
//                         <button
//                             className={`btn ${isDarkMode ? 'btn-light' : 'btn-primary'} mb-3 w-100`}
//                             onClick={() => navigate('/profile')}
//                         >
//                             Profile
//                         </button>

//                         {/* Close Sidebar Button */}
//                         <button
//                             className={`btn ${isDarkMode ? 'btn-light' : 'btn-danger'} mb-3 w-100`}
//                             onClick={closeSidebar}
//                         >
//                             Close
//                         </button>

//                         {/* Toggle Dark Mode */}
//                         <button
//                             onClick={toggleTheme}
//                             className={`btn ${isDarkMode ? "btn-light" : "btn-dark"} w-100 mb-3`}
//                         >
//                             {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//                         </button>

//                         {/* User Details or Login Prompt */}
//                         {user ? (
//                             <div>
//                                 <h4>User Details</h4>
//                                 <hr />
//                                 <p><strong>Name:</strong> {user.name}</p>
//                                 <p><strong>Email:</strong> {user.email}</p>
//                                 <button
//                                     className="btn btn-outline-danger mt-5 w-100"
//                                     onClick={() => navigate('/logout')}
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         ) : (
//                             <p>Please log in to see profile details.</p>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default NavForAll;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfPic from '../assets/profile.png';
import { useTheme } from '../pages/ThemeContext'; // Import useTheme hook
import { useUser } from '../UserContext'; // Import useUser hook

const NavForAll = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showUserDetails, setShowUserDetails] = useState(false);
    const navigate = useNavigate();
    const { isDarkMode, toggleTheme } = useTheme(); // Get dark mode state
    const { user } = useUser(); // Get the current user state

    // Toggle sidebar open/close
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setShowUserDetails(false); // Reset user details view
    };

    // Close sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setShowUserDetails(false); // Reset user details view
    };

    // Show user details
    const handleProfileClick = () => {
        setShowUserDetails(true);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm py-2 fixed-top`}>
            <div className="container-fluid">
                {/* Brand Logo */}
                <Link className="navbar-brand fw-bold text-primary" to="/" style={{ fontSize: '40px' }}>
                    RuralReach
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link fw-semibold ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/loan/investor">
                                Become an Investor
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://www.instagram.com/iam_sjeevan?igsh=YmxxODVsMWhuMzEz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`nav-link text-reset ${isDarkMode ? 'text-light' : 'text-dark'}`}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    {/* Language Selector and Profile Picture */}
                    <div className="d-flex align-items-center">
                        <select
                            className={`form-select mx-3 ${isDarkMode ? 'text-light bg-dark' : ''}`}
                            aria-label="Select Language"
                            style={{ maxWidth: '180px', margin: '0 auto' }}
                        >
                            <option value="english">English</option>
                            <option value="hindi">हिन्दी</option>
                            <option value="kannada">ಕನ್ನಡ</option>
                            <option value="tamil">தமிழ்</option>
                            <option value="telugu">తెలుగు</option>
                        </select>

                        {/* Profile Picture */}
                        <img
                            src={ProfPic}
                            alt="Profile"
                            className="rounded-circle me-2"
                            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                            onClick={toggleSidebar}
                        />
                    </div>
                </div>
            </div>

            {/* Sidebar for User Info */}
            {isSidebarOpen && (
                <div
                    className={`position-fixed top-0 end-0 vh-100 ${isDarkMode ? 'bg-dark text-light' : 'bg-white text-dark'} shadow-lg`}
                    style={{
                        width: '300px',
                        zIndex: 1050,
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    <div className="p-3">
                        {showUserDetails ? (
                            <div>
                                <h4>User Details</h4>
                                <hr />
                                {user ? (
                                    <>
                                        <p><strong>Name:</strong> {user.name}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <button
                                            className="btn btn-outline-danger mt-5 w-100"
                                            onClick={() => navigate('/')}
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <p>Please log in to see profile details.</p>
                                )}
                                <button className="btn btn-danger w-100 mt-3" onClick={() => setShowUserDetails(false)}>
                                    Back
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Profile Button */}
                                <button
                                    className={`btn ${isDarkMode ? 'btn-light' : 'btn-primary'} mb-3 w-100`}
                                    onClick={handleProfileClick}
                                >
                                    Profile
                                </button>

                                {/* Close Sidebar Button */}
                                <button
                                    className={`btn ${isDarkMode ? 'btn-light' : 'btn-danger'} mb-3 w-100`}
                                    onClick={closeSidebar}
                                >
                                    Close
                                </button>

                                {/* Toggle Dark Mode */}
                                <button
                                    onClick={toggleTheme}
                                    className={`btn ${isDarkMode ? "btn-light" : "btn-dark"} w-100 mb-3`}
                                >
                                    {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavForAll;
