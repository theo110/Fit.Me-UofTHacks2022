import React, { useState, useEffect, } from 'react'
import { useNavigate } from "react-router-dom"
import Alert from './Alerts';



function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    //True is logged in false is not
    const [currAccounts, setCurrAccounts] = useState(null);

    const navigate = useNavigate()

    function changeUser(e) {
        setUsername(e.target.value)
    }

    function changeEmail(e) {
        setEmail(e.target.value)
    }

    function changePassword(e) {
        setPassword(e.target.value)
    }

    function onSubmit(e) {
        //Store in database
        for (let i = 0; i < currAccounts.length; i++) {
            if (currAccounts[i].username === username) {
                alert("username taken")
                break;
                //Handle username taken.
            }
        }

        const account = {
            username: username,
            password: password,
            email: email,
            info: {
                location: '',
                preferences: []
            }
        }

        const request = {
            method: "POST",
            body: JSON.stringify(account),
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            fetch("/api/newUser", request).then()
        } catch (e) {
            console.log(e)
        }

        e.preventDefault();
    }

    //Fetch accounts data
    useEffect(() => {
        async function fetchAccountData() {

            try {
                const accounts = await fetch("/api/userData");
                const accountData = await accounts.json();
                console.log(accountData)
                return accountData
            } catch (e) {
                console.log(e)
            }
        }
        fetchAccountData().then(accounts => {
            setCurrAccounts(accounts);
        })
    }, []);

    return (
        <>
            <h1>Sign Up Here</h1>
            {props.accountData ?
                <Alert onClose={(e) => navigate("/")}>
                    <div className='alert-message'>Already Logged In</div>
                </Alert>
                :
                <form onSubmit={onSubmit}>
                    <div className='form-container'>
                        <label>Username: </label>
                        <input type="text" name="username" onChange={changeUser}></input>
                        <label>Email: </label>
                        <input type="email" name="email" onChange={changeEmail}></input>
                        <label>Password: </label>
                        <input type="password" name="password" onChange={changePassword}></input>
                        <input type="submit" value="Sign Up"></input>
                    </div>
                </form>
            }
        </>
    )
}

export default SignUp;