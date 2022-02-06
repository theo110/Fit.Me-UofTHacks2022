import React, { useState, useEffect, } from 'react'
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

function Navbar(props) {
    const location = useLocation();
    let constCurr = location.pathname;
    console.log(constCurr)
    //Change to conditional navbar later.
    return (
        <div className='nav-wrapper'>
            <div className='elements'>
                <div className={classNames('text',{'active': constCurr==="/signup"})}><NavLink to="/signup">Sign Up</NavLink></div>
                <div className={classNames('text',{'active': constCurr==="/login"})}><NavLink to="/login">Login</NavLink></div>
                <div className={classNames('text',{'active': constCurr==="/settings"})}><NavLink to="/settings">Settings</NavLink></div>
                <div className={classNames('text',{'active': constCurr==="/create"})}><NavLink to="/create">Create Events</NavLink></div>
                <div className={classNames('text',{'active': constCurr==="/events"})}><NavLink to="/events">Browse Events</NavLink></div>
                <div className={classNames('text',{'active': constCurr==="/"})}><NavLink to="/">Home</NavLink></div>
            </div>
        </div>
    )
}

export default Navbar;