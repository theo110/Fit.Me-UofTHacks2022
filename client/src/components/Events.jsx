import React, {useState, useEffect,} from 'react'
import Search from './Search';

function Events(props){
    const [loginStatus,toggleLoginStatus] = useState(props.loginStatus);
    const [accountData, setAccountData] = useState(props.accountData);

    /*
    useEffect(()=>{
        if(!loginStatus){
            alert("Please log in first");
            //Redirect to login
        }
    });
    */

    return(
        <>
            <Search></Search>
        </>
    )
}

export default Events;

//<Search location = {accountData.location} preferences = {accountData.preferences}></Search>