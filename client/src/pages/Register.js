import Navbar from "../components/NavBar.js";
import "./Register.css";
import { useState } from 'react';
import "../images/NewPollLogo.png";

function Register () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <Navbar/>
            <div id="registerBackground">
                <h1 id="registerSlogan"> Register for an account to view your past polls!</h1>
                <form id="registerForm">
                    <img id="logo" alt="logo" src={require("../images/NewPollLogo.png")}/>
                    <input className="registerInputs" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <input className="registerInputs" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <input className="registerInputs" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    <button type="submit" id="signUpButton">Sign up</button>
                </form>
            </div>
        </>
    
    );
}
export default Register;