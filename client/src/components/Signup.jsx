import React, {useState, useEffect,} from 'react'



function SignUp(props){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    //True is logged in false is not
    const [loginStatus,toggleLoginStatus] = useState(props.loginStatus);

    function changeUser(e){
        setUsername(e.target.value)
    }
    function changePassword(e){
        setPassword(e.target.value)
    }

    function onSubmit(e){
        //Store in database
        alert(username+password)
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
            <h1>Sign Up Here</h1>
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

export default SignUp;