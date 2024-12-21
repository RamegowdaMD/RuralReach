import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/bg.jpeg'; 
import { useUser } from '../UserContext'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser(); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Login', { email, password })
            .then(result => {
                if (result.data !== "No User Found" && result.data !== "Password is Incorrect") {
                    alert("User logged in successfully");
                    setUser(result.data); 
                    navigate('/Main');
                } else {
                    alert(result.data);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div
                className="bg-gradient p-5 rounded shadow w-100"
                style={{
                    maxWidth: '450px',
                    background: 'linear-gradient(to bottom right, #ff7e5f, #feb47b)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 className="text-center mb-4 text-white">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control border-light rounded-3"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ backgroundColor: "#fff1e6" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-white">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control border-light rounded-3"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ backgroundColor: "#fff1e6" }}
                        />
                    </div>
                    <button type="submit" className="btn btn-light w-100 rounded-3 shadow-sm mb-3">
                        Login
                    </button>
                </form>
                <p className="text-center text-white">
                    Don't have an account?{' '}
                    <Link to="/Register" className="text-decoration-none text-light fw-bold">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;