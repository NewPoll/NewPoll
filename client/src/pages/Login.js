import Navbar from "../components/NavBar.js";
import "./Login.css";
import { useState } from 'react';
import axios from 'axios';
import {useSignin} from '../hooks/useSignin.js'
import { useNavigate } from 'react-router-dom';

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {signin, error, isLoading, success} = useSignin();
    const navigate = useNavigate();
  

    const handleLogin = async (event) => {
        event.preventDefault();

        await signin(username,password)
    }

    return (
        <>
            <Navbar/>
            <div id="signInBackground">
                <form id="signInForm" onSubmit={handleLogin}>
                    <img id="logo" alt="logo" src={require("../images/NewPollLogo.png")}/>
                    <input className="signInInputs" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <input className="signInInputs" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button disabled={isLoading} type="submit" id="signInButton">Sign In</button>
                    {error && <p id='responseError'> {error}</p>}
                    {success && navigate("/")}
                </form>
            </div>
        </>
    
    );
}

export default Login;