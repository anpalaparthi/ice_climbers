import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import "../login.css";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this)
		this.onChangePassword = this.onChangePassword.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			loggedIn: false,
			username: '',
			password: '',
		}
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		})
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value
		})
	}

	handleSubmit = () => {
		const user = {
			username: this.state.username,
			password: this.state.password
		}

		axios.post('http://localhost:5000/users', user)
			.then(res => console.log(res.data))

		this.setState({
			username: '',
			password: '',
		})
	}

	onSubmit(e) {
		e.preventDefault()
			const user = {
				username: this.state.username,
				password: this.state.password,
			}

			console.log(user)

			axios.post('http://localhost:5000/users', user)
				.then(res => console.log(res.data))

			this.setState({
				username: '',
				password: ''
			})
		}
	render() {
		if(this.state.loggedIn) {
			return (
				<Redirect to={{ pathname: '/', state: {loggedIn: true}}} />
			)
		}
		return (
			<div style={{ margin: this.props.margin, width: this.props.width}}>
				<form className="loginForm" id="loginForm">
					<h1 style={{ fontFamily: "Chelsea Market", fontSize: "1.5em", textAlign: "center" }}>Login</h1>
					<div class="form-group">
						<label className="loginLabel" htmlFor="username">
						Username
						<input type="text" class="form-control loginEmail" id="username" placeholder="Username" />
						</label>
					</div>
					<div class="form-group">
						<label className="loginLabel" htmlFor="password">
						Password
						<input type="password" class="form-control loginPass" id="password" aria-describedby='passwordHelp' placeholder="Password" />
						</label>
					</div>
					<input class="btn btn-primary loginSubmit" type="submit" value="Login"/>
					<br/><br/>
					<Link to="/register" className="registerLink">No account? Register here</Link>
				</form>
			</div>
		)
	}
}