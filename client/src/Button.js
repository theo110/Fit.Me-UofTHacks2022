import React from 'react';
import Login from './components/Login'
import { Link } from "react-router-dom"


function Button() {
    return (
        <div>

            <Link to="/Login">
                <button>
                    Log In
                </button>
            </Link>

            <Link to="/Signup">
                <button>
                    Sign Up
                </button>
            </Link>

            <Link to="/Events">
                <button>Events</button>
            </Link>

            <Link to="/Settings">
                <button>Settings</button>
            </Link>

            <Link to="/create">
                <button>Create Event</button>
            </Link>

            <Link to="/events">
                <button>Find Events</button>
            </Link>

        </div>
        /*
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <p>
                    Edit <code>src/App.js</code>

                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div >
        */

    );
}
export default Button