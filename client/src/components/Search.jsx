import React, { useState, useEffect, } from 'react'
import MsDrop from './MsDrop';


function Search(props) {
    const [location] = useState(props.location);
    const [preferences] = useState(props.preferences);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState([]);
    const [matchingEvents, setMatchingEvents] = useState([])
    const [displayEvents, setDisplayEvents] = useState([]);


    function changeSearch(e) {
        setSearch(e.target.value)

    }

    function onSubmit(e) {
        let allEvents = matchingEvents;
        let filteredEvents = []

        if (filters.length !== 0) {
            filters.forEach(filter => {
                allEvents.forEach(event => {
                    if (filter === event.type) {
                        filteredEvents.push(event);
                    }
                })
            })
            allEvents = filteredEvents;
            filteredEvents = [];
        }


        allEvents.forEach(event => {
            if (event.name.search(search) !== -1 || event.type.search(search) !== -1 || event.description.search(search) !== -1) {
                filteredEvents.push(event);
            }
        })

        // reset search bar then display
        setDisplayEvents([]);
        setDisplayEvents([...filteredEvents]);
        e.preventDefault();
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
        <div className = "searchContainer">
            <h1>Search for Events</h1>
            <form onSubmit={onSubmit} className = "searchForm">
                <label className = 'searchLabel'>Search: </label>
                <input type="text" name="search" onChange={changeSearch} className = "searchInput"></input>
                <label className = 'searchLabel'>Filter by Sport: </label>
                <MsDrop addFilters={addFilters} className = "searchInput"></MsDrop>
                <input type="submit" value="Submit" className = "searchInput button"></input>
            </form>
            <ul className = "searchList">
                {
                    displayEvents.map((event) => {
                        return <li key = {event._id} className = "searchItem" data-aos = "fade-left">
                            <h3>{event.name} - {event.type}, {event.activityLevel}</h3>
                            <h4>Location: {event.location}</h4>
                            <h4>Time: {event.time}</h4>
                            <p>{event.description}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Search;