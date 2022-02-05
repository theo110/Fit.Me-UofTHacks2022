
import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";



function App() {
  const [loginStatus, toggleLoginStatus] = useState(false)

  //Accounts data object from database
  const [accountData, setAccountData] = useState(null)

  function logOn(user) {
    toggleLoginStatus(true);
    //Get data from database depending on user?
    const data = "someData"
    setAccountData(data)
  }


  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element = {<Home />}></Route>
      <Route path="/login" element = {<Login logOn={logOn} loginStatus = {loginStatus}/>}></Route>
      <Route path="/signup" element = {<SignUp logOn={logOn} loginStatus = {loginStatus}/>}></Route>
    </Routes>
    </>
  );
}

export default App;

/*
    <Navbar></Navbar>
      <Route path="/signup" element = {<Signup />}></Route>
*/