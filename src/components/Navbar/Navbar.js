import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router ,Switch,Route,Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <img className="logo" src="logo.jpg" alt="" />
            </Link>
            <div className="links">
                <div className="today_">
                    <Link className="today" to="/today">
                        <p className="navtext">TODAY</p>
                    </Link>
                </div>
                <div className="courses_">
                    <Link className="courses" to="/courses">
                        <p className="navtext bok">COURSES</p>
                    </Link>
                </div>
                <div className="practice_">
                    <Link className="practice" to="/practice">
                        <p className="navtext">PRACTICE</p>
                    </Link>
                </div>
               
            </div>
            <div className="auth">
                    <button className="navbtn1">Log In</button>
                    <button className="navbtn2">Sign Up</button>
                </div>
        </div>
    )
}

export default Navbar;
