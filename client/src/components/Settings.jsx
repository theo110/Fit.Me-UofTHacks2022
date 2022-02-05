import React, {useState, useEffect,} from 'react'
import {useNavigate} from "react-router-dom"

function Settings(props){
    const [accountData, setAccountData] = useState(props.accountData);
    const [loginStatus] = useState(props.loginStatus);
    const [userLocation, setUserLocation] = useState(accountData? accountData.location : '');
    const navigate = useNavigate();

    useEffect(()=>{
        if(!accountData){
            alert("Please log in first");
            navigate("/login")
        }
    });

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
    return(
        <>
            <h1>Settings</h1>
            {!accountData? "Please login first!" : 
                <form onSubmit = {updateData}>
                    <p>Username: {accountData? accountData.username : "Not logged in"}</p>
                    <label htmlFor = "location">Location</label>
                    <input name = "location" id = "location" type = "text" onChange = {updateLocation}></input>
                    {/* somebody change this later */}
                    <label htmlFor = "preferences">Event Preferences</label>
                    <input name = "preferences" id = "preferences" type = "text"></input>
                    <button type = "submit">Edit Data</button>
                </form>
            }
        </>
    )
}

export default Settings;