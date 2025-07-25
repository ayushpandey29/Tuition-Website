import React, { useEffect, useState } from 'react'
import { Button } from './Button';
import '../css/Login.css'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("");       // Store email input
    const [password, setPassword] = useState(""); // Store password input
    
    // Hook for programmatic navigation between routes
    let navigate = useNavigate();
    
    // Effect hook that runs when component mounts
    useEffect(() => {
        validateToken() // Check if user is already logged in
    }, []); // Empty dependency array means this runs only once
    
    /**
     * Function to validate if user has a valid token stored locally
     * For demo purposes, just check if user data exists
     */
    async function validateToken() {
        // Get user info from browser's local storage
        var user = JSON.parse(localStorage.getItem('user-info'));
        
        // Check if user data exists
        if (user != null) {
            // User already logged in, redirect to home
            navigate("/");
        }
    }

    /**
     * Frontend-only login simulation
     * Creates a mock user session for demo purposes
     */
    async function login() {
        // Simple validation
        if (!email || !password) {
            alert("Please fill in both email and password");
            return;
        }

        // Create mock user data for frontend demo
        const mockUserData = {
            message: "Login successful!",
            token: {
                data: {
                    id: 1,
                    name: "Demo User",
                    email: email,
                    phone: "123-456-7890",
                    is_instructor: 0
                },
                exp: Math.round(Date.now() / 1000) + (24 * 60 * 60) // 24 hours from now
            }
        };

        // Store user info in localStorage for frontend demo
        localStorage.setItem('user-info', JSON.stringify(mockUserData));
        
        alert("Login successful! (Frontend Demo Mode)");

        // Refresh the page after login
        window.location.reload();
    }
    
    // Render the login form
    return (
        <>
            {/* Main container for login form */}
            <div className='container'>
                <h1>Welcome Back</h1>
                
                {/* Login form - action is empty since we handle submission with JavaScript */}
                <form action="" className="form-control">

                    {/* Email input field */}
                    <div>
                        <label htmlFor="email">Email*</label>
                        <input 
                            type="text" 
                            name="email" 
                            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                            id="email" 
                            placeholder="Enter Your Email" 
                        />
                    </div>

                    {/* Password input field */}
                    <div>
                        <label htmlFor="password">Password*</label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                            id="password" 
                            placeholder="Enter Your Password" 
                        />
                    </div>

                    {/* Login button - calls login function when clicked */}
                    <div>
                        <Button onClick={login}>Login</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
