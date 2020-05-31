import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class Home extends Component {
	render() {
		return (
			<div className="welcomeText">
				<h1>Hi!</h1>
				<div className="welcomeBody">
					<p>Welcome to Study Tracker.</p>
					<p>Join the community of go-getters who want to
					take control of their studying today!</p>
				</div>
			</div>
		)
	}
}