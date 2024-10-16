import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import eyeImg from './assets/img/eye.png'
import phoneImg from './assets/img/phone-call.png'
const Register: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    // const [AgreeToTerm, setConfirmPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic
        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }
        console.log("Registering", { phoneNumber, password });
    };

    return (
        <div className="login-container">
            <span className="header">REGISTER</span>
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

                <div className="inputs-div">
                    <img className="icon-img" src={eyeImg} alt="Confirm Password" />
                    <input
                        className="inputs"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                </div>

                <div className="policy-section">
                    <input type="checkbox" id="terms" required />
                    <span>
                        By checking this message, I hereby confirm that I agree with the{" "}
                        <a href="#">Terms and Conditions</a>, the{" "}
                        <a href="#">Privacy Policy</a>, that I am 18 years old or over and
                        that all information given is true.
                    </span>
                </div>

                <button type="submit">Register</button>
            </form>

            <div className="login-link">
                <p>
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
