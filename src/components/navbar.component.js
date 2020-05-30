import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-light bg-light">
		        <div className="collapse navbar-collapse" id="navbarCollapse">
		            <ul className="navbar-nav nav-tabs">
		                <Link to="/plan" className="nav-item nav-link tab">PLAN</Link>
		                <Link to="/track" className="nav-item nav-link tab">TRACK</Link>
		                <Link to="/" className="nav-item nav-link tab">HOME</Link>
		                <Link to="/login" className="nav-item nav-link tab">LOGIN</Link>
		                <Link to="/timer" className="nav-item nav-link tab">TIMER</Link>
		            </ul>
		        </div>
		    </nav>
		)
	}
}