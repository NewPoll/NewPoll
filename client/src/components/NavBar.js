import './NavBar.css'
import { Link } from "react-router-dom";
import "../images/NavbarLogo.png";
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'

function Navbar () {
    const {logout} = useLogout()
    const {user} = useAuthContext()
    const handleClick = () => {
        logout()
    }
    return (
        <div id="navbar">
            <Link to={"/"}> <img id="homeButton" alt="logo" src={require("../images/NavbarLogo.png")}/> </Link>
           
            <div id="rightButtons">
              {!user && <button id="loginButton"> <Link to={"/login"} id="loginButton">Login</Link> </button> }
              {!user &&  <button id="registerButton"> <Link to={"/register"} id="registerButton">Register</Link> </button> }
              {user &&  <span  id="username">{user.username}</span>}
              {user &&  <button onClick={handleClick} id="logoutButton">Sign Out</button>}
             
                
            </div>
            


        </div>
        



    )




}

export default Navbar;