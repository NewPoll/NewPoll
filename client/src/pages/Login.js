import Navbar from "../components/NavBar.js";
import "./Login.css";
import { useState } from 'react';
import axios from 'axios';

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event){
        event.preventDefault();
        
        axios({
            method: 'post',
            url: 'http://localhost:5000/verifyLogin',
            data: {
              "username": username,
              "password": password
            }
        }).then(function(res){
            console.log(res)
        }).catch(function (e){
            console.log(e)
        });
    }

    return (
        <>
            <Navbar/>
            <div id="signInBackground">
                <form id="signInForm" onSubmit={handleLogin}>
                    <img id="logo" alt="logo" src={require("../images/NewPollLogo.png")}/>
                    <input className="signInInputs" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <input className="signInInputs" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button type="submit" id="signInButton">Sign In</button>
                </form>
            </div>
        </>
    
    );
}

export default Login;