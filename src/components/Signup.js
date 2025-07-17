import React, { useEffect, useState} from 'react'
import { Button } from './Button';
import '../css/Signup.css' 
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    
    let navigate = useNavigate();
    
    /**
     * Frontend-only signup simulation
     * Creates a mock user registration for demo purposes
     */
    async function signup(){
        // Simple validation
        if (!name || !email || !phone || !password) {
            alert("Please fill in all fields");
            return;
        }

        // Simple email validation
        if (!email.includes('@')) {
            alert("Please enter a valid email address");
            return;
        }

        console.log("Signup attempt:", {name, email, phone});
        
        // Simulate successful registration
        alert("Registration successful! You can now login with your credentials.");
        navigate("/login");
    }
    
    return (
        <>
        <div className="container">
            <h1>Let's Get Started</h1>
              <form action="" className="form-control">
                <div>
                    <label htmlFor="username">Name*</label>
                    <input type="text" name="name" onChange={(e)=>setName(e.target.value)} id="name" />
                </div>

                <div>
                    <label htmlFor="email">Email*</label>
                    <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} id="email" />
                </div>

                <div>
                    <label htmlFor="phone">Phone*</label>
                    <input type="text" name="phone" onChange={(e)=>setPhone(e.target.value)} id="phone" />
                </div>

                <div>
                    <label htmlFor="password">Password*</label>
                    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} id="password" />
                </div>

                <div>
                    <Button onClick={signup}>Sign Up</Button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Signup
