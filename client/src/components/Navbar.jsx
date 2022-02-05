import React, {useState, useEffect,} from 'react'
import { NavLink } from "react-router-dom";

function Navbar(props){

    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </>
    )
}

export default Navbar;