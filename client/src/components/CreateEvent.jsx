import React, { useState, useEffect, } from 'react'
import SDrop from './SDrop';

function CreateEvent(props) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [capacity, setCapacity] = useState(0);
    const [time, setTime] = useState("");

    function changeName(e) {
        setName(e.target.value)
    }
    function changeLocation(e) {
        setLocation(e.target.value)
    }
    function changeActivityLevel(e) {
        setActivityLevel(e.target.value)
    }
    function changeTime(e) {
        setTime(e.target.value)
    }
    function changeDescription(e) {
        setDescription(e.target.value)
    }

    function addType(e) {
        setType(e.label)
    }

    function onSubmit(e) {

        const event = {
            name: name,
            location: location,
            type: type,
            activityLevel: activityLevel,
            description: description,
            capacity: 69,
            time: time,
            author: props.accountData.username,
        }

        const request = {
            method: "POST",
            body: JSON.stringify(event),
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            fetch("/api/newEvent", request).then(console.log(event))
        } catch (e) {
            console.log(e)
        }

        e.preventDefault();
    }

    return (
        <>
            <h1>Enter Details</h1>
            <form onSubmit={onSubmit}>
                <label>Name of Activity: </label>
                <input type="text" name="name" onChange={changeName}></input>
                <label>Location: </label>
                <input type="text" name="location" onChange={changeLocation}></input>
                <label>Activitiy Level
                    <select onChange={changeActivityLevel}>
                        <option value=""> Please Select</option>
                        <option value="light">Light intensity</option>
                        <option value="moderate">Moderate intensity</option>
                        <option value="vigorous">Vigorous intensity</option>
                    </select>
                </label>
                <label>Please describe a brief description</label>
                <input type="text" name="description" onChange={changeDescription}></input>
                <SDrop addFilters = {addType}></SDrop>
                <label>Select Time</label>
                <input type="text" name="time" onChange={changeTime}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default CreateEvent;