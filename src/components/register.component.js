import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../login.css";

export default class Register extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{ margin: "35vh 0 0 12vw", width: "20%" }}>
				<form className="loginForm" id="loginForm">
					<h1 style={{ fontFamily: "Chelsea Market", fontSize: "1.5em", textAlign: "center" }}>Register</h1>
					<div class="form-group">
						<label for="name" className="loginLabel">
						Name
						<input type="text" class="form-control loginEmail" id="name" placeholder="Name" />
						</label>
					</div>
					<div class="form-group">
						<label for="email" className="loginLabel">
						Email
						<input type="email" class="form-control loginEmail" id="email" placeholder="Email" />
						</label>
					</div>
					<div class="form-group">
						<label for="password" className="loginLabel">
						Password
						<input type="password" class="form-control loginPass" id="password" placeholder="Password" />
						</label>
					</div>
					<div class="form-group">
						<label for="confirmPass" className="loginLabel">
						Confirm Password
						<input type="password" class="form-control loginPass" id="confirmPass" placeholder="Password" />
						</label>
					</div>
					<input class="btn btn-primary loginSubmit" type="submit" value="Register"/>
					<br/><br/>
					<Link to="/login" className="registerLink">Have an account? Login here</Link>
				</form>
			</div>
		)
	}
}