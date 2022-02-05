import React, { useState, useEffect, } from 'react'
import MsDrop from './MsDrop';


function Search(props) {
    const [location] = useState(props.location);
    const [preferences] = useState(props.preferences);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState([]);
    const [matchingEvents, setMatchingEvents] = useState([])


    function changeSearch(e) {
        setSearch(e.target.value)

    }

    function onSubmit(e) {
        //Gets all events from db
        let allEvents = matchingEvents;
        let filteredEvents = []
        console.log(filters)
        filters.forEach(filter => {
            //Do something with each filter
            //look at .filter function
            allEvents.forEach(event => {
                if (filter === event.type) {
                    filteredEvents.push(event);
                }
            })
        })
        setMatchingEvents(filteredEvents);
        filteredEvents.forEach(element => console.log(element));

        //Make filterevent only contain results that contain the searched field {search} if it's in events.description or events.title
    }

    function addFilters(e) {
        setFilters(Array.isArray(e) ? e.map(target => target.label) : []);
    }

    //Fetch accounts data
    useEffect(() => {
        async function fetchEventData() {
            try {
                const events = await fetch("/api/eventData");
                const eventData = await events.json();
                console.log(eventData)
                return eventData
            } catch (e) {
                console.log(e)
            }
        }
        fetchEventData().then(events => {
            setMatchingEvents(events);
        })
    }, []);

    //Should have search bar options to filter based on preferences and location Search logic should be implemented here.
    //Will do when database done.

    return (
        <>
            <h1>Search bar and stuff</h1>
            <form onSubmit={onSubmit}>
                <label>Search: </label>
                <input type="text" name="search" onChange={changeSearch}></input>
                <label>Filter by Sport: </label>
                <MsDrop addFilters={addFilters}></MsDrop>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default Search;