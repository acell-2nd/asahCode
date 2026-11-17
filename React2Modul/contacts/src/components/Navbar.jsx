import React from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
function Navbar(){
    return(
        <>
        <nav className="navbar">
            <ul>
                <li><Link to="/"><CiHome className="icon__Home"/></Link></li>
                <li><Link to="/add"><IoIosAddCircle className="icon__Add"/></Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;