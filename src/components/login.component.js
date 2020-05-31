import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../login.css";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div style={{ margin: this.props.margin, width: this.props.width}}>
				<form className="loginForm" id="loginForm">
					<h1 style={{ fontFamily: "Chelsea Market", fontSize: "1.5em", textAlign: "center" }}>Login</h1>
					<div class="form-group">
						<label for="email">
						Email
						<input type="email" class="form-control loginEmail" id="email" placeholder="Email" />
						</label>
					</div>
					<div class="form-group">
						<label for="password">
						Password
						<input type="password" class="form-control loginPass" id="password" aria-describedby='passwordHelp' placeholder="Password" />
						</label>
					</div>
					<input class="btn btn-primary" type="submit" value="Login"/>
					<br/><br/>
					<Link to="/register" className="registerLink">No account? Register here</Link>
				</form>
			</div>
		)
	}
}