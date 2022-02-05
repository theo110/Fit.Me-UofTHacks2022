import React, { useState, useEffect, } from 'react'
import MsDrop from './MsDrop';


function Search(props) {
    const [location] = useState(props.location);
    const [preferences] = useState(props.preferences);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState("");

    function changeSearch(e) {
        setSearch(e.target.value)
    }

    function onSubmit(e) {
        //Search depending on database fetch.
        console.log("submit")
    }

    function addFilters(e) {
        setFilters(Array.isArray(e)?e.map(target => target.value):[]);
    }

    //Should have search bar options to filter based on preferences and location Search logic should be implemented here.
    //Will do when database done.

    return (
        <>
            <h1>Search bar and stuff</h1>
            <form onSubmit={onSubmit}>
                <label>Search: </label>
                <input type="text" name="search" onChange={changeSearch}></input>
                <MsDrop addFilters={addFilters}></MsDrop>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default Search;