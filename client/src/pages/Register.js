import Navbar from "../components/NavBar.js";
import "./Register.css";
import { useState } from 'react';
import "../images/NewPollLogo.png";
import axios from 'axios';

function Register () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [response, setResponse] = useState(""); 

    function handleRegister(event){
        event.preventDefault();

        if (password !== confirmPassword){
            setResponse("unequalPasswords");
            return;
        }

        axios({
            method: 'post',
            url: 'http://localhost:5000/verifyRegister',
            data: {
              "username": username,
              "password": password,
              "confirmPassword" : confirmPassword
            }
        }).then(function(res){
            setResponse("accountRegistered");
        }).catch(function (e){
            setResponse("usernameExists");
        });
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
                    {response === 'unequalPasswords' && <p id={response}>Password and Confirm Password do not match</p>}
                    {response === 'usernameExists' && <p id={response}>Username already exists</p>}
                    {response === 'accountRegistered' && <p id={response}>Your account has been registered</p>}
                    <button type="submit" id="signUpButton">Sign up</button>
                </form>
            </div>
        </>
    
    );
}
export default Register;