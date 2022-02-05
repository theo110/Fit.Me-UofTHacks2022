import React, {useState, useEffect,} from 'react'



function Login(props){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    //True is logged in false is not
    const [loginStatus,toggleLoginStatus] = useState(props.loginStatus);
    const [error,setError] = useState(false);


    function changeUser(e){
        setUsername(e.target.value)
    }
    function changePassword(e){
        setPassword(e.target.value)
    }

    function onSubmit(e){
        //Database to see if true/false
        const isSuccess = true;
        console.log(username + "|" + password)
        if(isSuccess){
            props.logOn(username)
            //navitgate
        }else{
            setError(true);
        }
        e.preventDefault();
    }

    useEffect(()=>{
        if(loginStatus){
            alert("already logged in");
            //Redirect
        }
    });

    return(
        <>
            <h1>Login Here</h1>
            <form onSubmit={onSubmit}>
                <label>Username: </label>
                <input type="text" name="username" onChange={changeUser}></input>
                <label>Password: </label>
                <input type="password" name="password" onChange={changePassword}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default Login;