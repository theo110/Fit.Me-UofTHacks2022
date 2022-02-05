import React, {useState, useEffect,} from 'react'
import { NavLink } from "react-router-dom";

function Navbar(props){

    //Change to conditional navbar later.
    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/create">Create Event</NavLink>
        </>
    )
}

export default Navbar;