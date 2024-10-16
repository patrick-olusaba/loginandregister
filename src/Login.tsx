import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import eyeImg from './assets/img/eye.png'
import phoneImg from './assets/img/phone-call.png'

const Login: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
        console.log("Logging in with", { phoneNumber, password });
    };

    return (
        <div className="login-container">
            <span className="header">LOGIN</span>
            <form className="user-inputs" onSubmit={handleSubmit}>
                <div className="inputs-div">
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <img className="icon-img" src={phoneImg} alt="Phone" />
                </div>

                <div className="inputs-div">
                    <input
                        className="inputs"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <img className="icon-img" src={eyeImg} alt="Password" />
                </div>

                <div className="forget">
                    <a href="#">Forget Password</a>
                </div>

                <button type="submit">Login</button>

                <div className="remember-me">
                    <input type="checkbox" 
                /> <span>Remember me</span>
                </div>
            </form>

            <div className="register">
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
