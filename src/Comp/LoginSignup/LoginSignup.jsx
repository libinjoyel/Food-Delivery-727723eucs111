/*import React, { useState } from "react";
import './LoginSignup.css'


import user_icon from '../Assets/user.png'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/pass.png'



const LoginSignup = () => {
    
    const [action,setAction] = useState("Sign up");
    return(<>
        <div className="bold">
           </div>
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} style={{height:"30px"}} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
                
                
                <div className="input">
                    <img src={email_icon} style={{height:"30px"}} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={password_icon} style={{height:"30px"}} alt="" />
                    <input type="password"  placeholder="Password"/>
                </div>
            </div>
            {action==="Sign up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
                <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> 
            </div> 
        
        </div>
        </>
    );
};

export default LoginSignup;*/
import React, { useState } from "react";
import axios from "axios"; // Import Axios
import './LoginSignup.css';
import { useNavigate } from "react-router-dom";

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/mail.png';
import password_icon from '../Assets/pass.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign up");
    const [username, setUsername] = useState(""); // State for username
    const [email, setEmail] = useState("");       // State for email
    const [password, setPassword] = useState(""); // State for password
    const [error, setError] = useState("");       // State for error messages
    const navigate= useNavigate();

    const handleSubmit = async () => {
        // Prepare user data
        const userData = {
            username,
            email,
            password,
        };

        // Send POST request to the JSON server using Axios
        try {
            if(userData.username!=="")
            await axios.post("http://localhost:3001/users", userData);
            // Reset form fields after successful submission
            setUsername("");
            setEmail("");
            setPassword("");
            setError(""); // Clear any previous errors
        } catch (error) {
            console.error("Error saving user data:", error);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.get("http://localhost:3001/users");
            const users = response.data;
            const user = users.find((user) => user.email === email);

            if (!user) {
                setError("Username doesn't exist");
            } else if (user.password !== password) {
                setError("Wrong password");
            } else {
                setError(""); // Clear error
                // Redirect to homepage or handle successful login here
                // For example: window.location.href = '/home';
                console.log("Login successful, redirecting to homepage...");
                navigate('/')
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <>
            <div className="bold"></div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                {error && <div className="error-message">{error}</div>} {/* Display error message */}
                <div className="inputs">
                    {action === "Login" ? null : 
                    <div className="input">
                        <img src={user_icon} style={{ height: "30px" }} alt="" />
                        <input 
                            type="text" 
                            placeholder="Name" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} // Update username state
                        />
                    </div>}
                    
                    <div className="input">
                        <img src={email_icon} style={{ height: "30px" }} alt="" />
                        <input 
                            type="email" 
                            placeholder="Email Id" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                        />
                    </div>
                    <div className="input">
                        <img src={password_icon} style={{ height: "30px" }} alt="" />
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                        />
                    </div>
                </div>
                {action === "Sign up" ? null : 
                <div className="forgot-password">Lost Password? <span>Click here</span></div>}
                
                <div className="submit-container">
                    {action === "Sign up" && (
                        <div className="submit" onClick={handleSubmit}>Sign up</div>
                    )}
                    {action === "Login" && (
                        <div className="submit" onClick={handleLogin}>Login</div>
                    )}
                    {action==="Login"&&(<div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up") }}>Sign up</div>)}
                    {action==="Sign up"&&(<div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>)}
                </div>
            </div>
        </>
    );
};

export default LoginSignup;
