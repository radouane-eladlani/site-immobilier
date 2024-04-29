import React from "react";
import logo from "../assets/images/logo.png"
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

/*la function Navbar permet de retourner le composant Navbar avec le style*/
function Navbar() {
    return (
        <nav className="navbar">
           <div className="navbar_logo">
            <NavLink to="/"end> 
             
                <img src={logo} alt="Logo Kasa" />
                
            </NavLink>
            </div>
            <NavLink to="/"end>
                <div> Accueil</div>
            </NavLink>
            <NavLink to="/Apropos"end>
            <div>A Propos</div>
            </NavLink>
        </nav>
    );
}
export default Navbar;