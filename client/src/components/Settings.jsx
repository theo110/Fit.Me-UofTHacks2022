import React, { useState, useEffect, } from 'react'
import { useNavigate } from "react-router-dom"
import Alert from './Alerts';

function Settings(props) {
    const [accountData, setAccountData] = useState(props.accountData);
    const [loginStatus] = useState(props.loginStatus);
    const [userLocation, setUserLocation] = useState(accountData ? accountData.location : '');
    const navigate = useNavigate();

    const updateLocation = (e) => {
        setUserLocation(e.target.value)
    }

    const updateData = (e) => {
        e.preventDefault();
        console.log({
            location: userLocation,
            preferences: []
        })
        const request = {
            method: "PUT",
            body: JSON.stringify({
                location: userLocation,
                preferences: []
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(`/api/updateLocation/${accountData.username}`, request)
            .then((result) => console.log('Request sent'))
            .catch((err) => console.log('err'))

    }

    //Get various options such as toggle buttons, form fields and stuff to fill out settings 
    //and a save button to save to databases
    return (
        <>
            <h1>Settings</h1>
            {!accountData ?
                <Alert onClose={(e)=>navigate("/login")}>
                    <div className='alert-message'>Please Log In</div>
                </Alert>
                :
                <form onSubmit={updateData}>
                    <div className='welcome-back'>Welcome back, {accountData ? accountData.username : "Not logged in"}</div>
                    <label htmlFor="location">Location</label>
                    <input name="location" id="location" type="text" onChange={updateLocation}></input>
                    {/* somebody change this later */}
                    <label htmlFor="preferences">Event Preferences</label>
                    <input name="preferences" id="preferences" type="text"></input>
                    <input type="submit" value="Save Changes"></input>
                </form>
            }
        </>
    )
}

export default Settings;