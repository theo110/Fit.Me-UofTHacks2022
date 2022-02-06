import React, { useState, useEffect, } from 'react';
import ReactDOM from 'react-dom';
// import HomePage from "./HomePage";
// import './Home.css' 
import Button from '../Button'
import logo from '../background.png'

function Home(props) {

    return (
        <>
            <h1 style={{textAlign: "center"}}>Fit.Me</h1>
            <h2 style = {{textAlign:"center"}}>Welcome</h2>
            
            <img src = {logo} alt = "Logo" height="450px" width="100%" align = "center"/>;
            <Button/>
        </> 
        
        )
}

export default Home;