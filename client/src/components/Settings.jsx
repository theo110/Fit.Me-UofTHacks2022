import React, {useState, useEffect,} from 'react'

function Settings(props){
    const [accountData, setAccountData] = useState(props.accountData);
    const [loginStatus] = useState(props.loginStatus);

    useEffect(()=>{
        if(!loginStatus){
            alert("Please log in first");
            //Redirect to login
        }
    });

    //Get various options such as toggle buttons, form fields and stuff to fill out settings 
    //and a save button to save to databases
    return(
        <>
            <h1>Settings</h1>
        </>
    )
}

export default Settings;