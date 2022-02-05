
import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import Events from './components/Events';
import Settings from './components/Settings';
import CreateEvent from './components/CreateEvent';

/* 
TODO:
  CSS Everything
  Basic structure -> Done
  Database
  Conditional Redirect...
  Map
  Searching logic
  Filter logic
  Ability to set preferences locations in a good way
  Make everything look nice
  Optimization
*/


function App() {
  //Accounts data object from database
  const [accountData, setAccountData] = useState(null)

  function logOn(data) {
    setAccountData(data);
  }


  //We can replace loginStatus with checkign if accountData.username is Null. Still here for testing until database is done.
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element = {<Home />}></Route>
      <Route path="/login" element = {<Login logOn={logOn} accountData = {accountData}/>}></Route>
      <Route path="/signup" element = {<SignUp logOn={logOn} accountData = {accountData}/>}></Route>
      <Route path="/events" element = {<Events  accountData = {accountData}/>}></Route>
      <Route path="/settings" element = {<Settings accountData = {accountData}/>}></Route>
      <Route path="/create" element = {<CreateEvent accountData = {accountData}/>}></Route>
      <Route path="/events" element = {<Events/>}></Route>
    </Routes>
    </>
  );
}

export default App;

