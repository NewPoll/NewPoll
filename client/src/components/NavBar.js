import './NavBar.css'
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div id="navbar">
            <Link to={"/"}> <button id="homeButton"> NewPoll </button > </Link>
           
            <div id="rightButtons">
                <Link to={"/login"}> <button id="loginButton"> Login </button > </Link>
                <Link to={"/register"}> <button id="registerButton"> Register </button > </Link>
            </div>


        </div>
        



    )




}

export default Navbar;