import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from "./login.component"
import '../index.css';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="welcomeText">
					<h1>Hi!</h1>
					<div className="welcomeBody">
						<p>Welcome to Paddle.</p>
						<p>Join the community of go-getters who want to
						take control today!</p>
					</div>
					<Login />
				</div>
			</div>
		)
	}
}