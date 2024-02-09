import './NavBar.css'
import { Link } from "react-router-dom";
import "../images/NavbarLogo.png";

function Navbar () {
    return (
        <div id="navbar">
            <Link to={"/"}> <img id="homeButton" alt="logo" src={require("../images/NavbarLogo.png")}/> </Link>
           
            <div id="rightButtons">
                <button id="loginButton"> <Link to={"/login"} id="loginButton">Login</Link> </button>
                <button id="registerButton"> <Link to={"/register"} id="registerButton">Register</Link> </button>
            </div>


        </div>
        



    )




}

export default Navbar;