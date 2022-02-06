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
            <div className='all-wrapper'>
                <div className='logo-wrapper'>
                    <div className='fit'>
                        Fit.
                    </div>
                    <div className='me'>
                        ME
                    </div>
                </div>
                <div className='about-wrapper'>
                    <HomePage />
                </div>
            </div>
        </>
    )
}

export default Home;