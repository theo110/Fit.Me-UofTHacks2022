import React, { useState, useEffect, } from 'react';
import ReactDOM from 'react-dom';
// import HomePage from "./HomePage";
// import './Home.css' 
import Button from '../Button'
import logo from '../background.png'
import HomePage from './HomePage'

function Home(props) {

    return (
        <>
            <h1 style={{textAlign: "center"}}>Fit.Me</h1>
            <h1 class="searchInput" style={{ textAlign: "center" }}>Welcome</h1>

            <img src={logo} alt="Logo" height="650px" width="100%" />;

            <HomePage />

            <Button />
        </>
    )
}

export default Home;