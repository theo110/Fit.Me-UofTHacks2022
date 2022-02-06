import React, { useState, useEffect, } from 'react'
import { useNavigate } from "react-router-dom"
import Alert from './Alerts';

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    function changeUser(e) {
        setUsername(e.target.value)
    }
    function changePassword(e) {
        setPassword(e.target.value)
    }

    function onSubmit(e) {
        /*
        const Account = new mongoose.model('Account', new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        info: {
            location: {
                type: String,
                required: true
            },
            preferences: []
        }
        }));
        */

        //Fetch all users please implement it i need it please
        async function fetchAccountData() {
            try {
                const accounts = await fetch("http://localhost:5000/api/userData");
                const accountData = await accounts.json();
                console.log(accountData)
                return accountData
            } catch (e) {
                console.log(e)
            }
        }

        fetchAccountData().then(accounts => {
            let currUser = null;
            for (let account of accounts) {
                if (account.username === username && account.password === password) {
                    currUser = account;
                    break;
                }
            }
            if (currUser !== null) {
                props.logOn(currUser);
                //Incorrect username password combination
            } else {
                setError(true);
            }
        })
        e.preventDefault();
    }


    return (
        <>
            <div className="login">
                <h1>Login Here</h1>
                {props.accountData ?
                    <Alert onClose={(e) => navigate("/")}>
                        <div className='alert-message'>Already Logged In</div>
                    </Alert>
                    :
                    <form onSubmit={onSubmit}>
                        
                        <form class="login-form" onSubmit={onSubmit}>
                            <label className="userpass">Username: </label>
                            <input type="text" name="username" onChange={changeUser}></input>
                            <label className="userpass">Password: </label>
                            <input type="password" name="password" onChange={changePassword}></input>
                            <input type="submit" className="button" value="Submit"></input>
                            <label className="message"> </label>
                        </form>
                    </form>
                }
            </div>

        </>
    )
}

export default Login;