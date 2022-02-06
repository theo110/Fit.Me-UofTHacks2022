import React, { useState, useEffect, } from 'react';
import ReactDOM from 'react-dom';
// import HomePage from "./HomePage";
// import './Home.css' 
import Button from '../Button'
import logo from '../background.png'

function Home(props) {

    return (
        <>
            <h1 style = {{textAlign:"center"}}>Welcome</h1>
            
            <img src = {logo} alt = "Logo" height="650px" width="100%"/>;
            <Button/>
        </> 
        
        )
}

export default Home;