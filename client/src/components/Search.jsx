import React, {useState, useEffect,} from 'react'

function Search(props){
    const [location] = useState(props.location);
    const [preferences] = useState(props.preferences);

    //Should have search bar options to filter based on preferences and location Search logic should be implemented here.
    //Will do when database done.

    return(
        <>
            <h1>Search bar and stuff</h1>
        </>
    )
}

export default Search;