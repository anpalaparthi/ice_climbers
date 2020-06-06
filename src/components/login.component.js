import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import "../login.css";
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:''
		}
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangePassword = this.onChangePassword.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value
		})
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()

		const user = {
			email: this.state.email,
			password: this.state.password
		}

		axios.post('http://localhost:5000/users/login', user)
			.then(response => {
				console.log("res from login: ", response)
				console.log("Login successful")
				window.location = '/timer'
			})
			.catch(error => {
				console.log("Error status: ", error)
				alert("Error - Incorrect Username or Password" )
			})
	}

	render() {
		return (
			<div style={{ margin: this.props.margin, width: this.props.width}}>
				<form className="loginForm" id="loginForm" onSubmit={this.handleSubmit}>
					<h1 style={{ fontFamily: "Chelsea Market", fontSize: "1.5em", textAlign: "center" }}>Login</h1>
					<div class="form-group">
						<label for="email">
						Email
						<input type="email"
							   class="form-control loginEmail"
							   id="email"
							   placeholder="Email"
							   value={this.state.email}
							   onChange={this.onChangeEmail}/>
						</label>
					</div>
					<div class="form-group">
						<label for="password">
						Password
						<input type="password"
							   class="form-control loginPass"
							   id="password"
							   aria-describedby='passwordHelp'
							   placeholder="Password"
							   value={this.state.password}
							   onChange={this.onChangePassword}/>
						</label>
					</div>
					<input class="btn btn-primary loginSubmit"
						   type="submit"
						   value="Login"
							/>
					<br/><br/>
					<Link to="/register" className="registerLink">No account? Register here</Link>
				</form>
			</div>
		)
	}
}