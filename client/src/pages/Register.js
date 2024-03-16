import Navbar from "../components/NavBar.js";
import "./Register.css";
import { useState } from 'react';
import "../images/NewPollLogo.png";
import { useSignup } from "../hooks/useSignup.js";
import axios from 'axios';

function Register () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {signup,error, isLoading,success} = useSignup()
    const handleRegister = async (event) => {
        event.preventDefault();

        await signup(username,password,confirmPassword)
        
    }
       

        
    

    return (
        <>
            <Navbar/>
            <div id="registerBackground">
                <h1 id="registerSlogan"> Register for an account to view your past polls!</h1>
                <form id="registerForm" onSubmit={handleRegister}>
                    <img id="logo" alt="logo" src={require("../images/NewPollLogo.png")}/>
                    <input className="registerInputs" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <input className="registerInputs" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <input className="registerInputs" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    {error && <p id='responseError'> {error}</p>}
                    {success && <p id = 'responseGood'> Your account has been registered</p>}
                    <button disabled={isLoading} type="submit" id="signUpButton">Sign up</button>
                </form>
            </div>
        </>
    
    );
}
export default Register;