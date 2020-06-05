import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../login.css";
import axios from 'axios'

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this)
		this.onChangePassword = this.onChangePassword.bind(this)
		this.onChangeConfPassword = this.onChangeConfPassword.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			username: '',
			password:'',
			confirmPass:'',
			email:''
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

	onChangeEmail(e) {
		this.setState({
			email: e.target.value
		})
	}

	onChangeConfPassword(e) {
		this.setState({
			confirmPass: e.target.value
		})
	}

	handleSubmit = () => {
		const {password, confirmPass} = this.state
		if (password !== confirmPass) {
			alert("Passwords don't match")
		} else {
			const user = {
				username: this.state.username,
				password: this.state.password,
				email: this.state.email
			}

			console.log(user)

			axios.post('http://localhost:5000/users', user)
				.then(res => console.log(res.data))

			this.setState({
				username: '',
				password: '',
				confirmPass: '',
				email: ''
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()
			const user = {
				username: this.state.username,
				password: this.state.password,
				email: this.state.email
			}

			console.log(user)

			axios.post('http://localhost:5000/users', user)
				.then(res => console.log(res.data))

			this.setState({
				username: '',
				password: '',
				confirmPass: '',
				email: ''
			})
		}


	render() {
		return (
			<div style={{ margin: "35vh 0 0 12vw", width: "20%" }}>
				<form className="loginForm" id="loginForm" onSubmit={this.handleSubmit}>
					<h1 style={{ fontFamily: "Chelsea Market", fontSize: "1.5em", textAlign: "center" }}>Register</h1>
					<div class="form-group">
						<label for="name" className="loginLabel">
						Name
						<input type="text"
							   class="form-control loginEmail"
							   id="name"
							   placeholder="Name"
							   value={this.state.username}
							   onChange={this.onChangeUsername}/>
						</label>
					</div>
					<div class="form-group">
						<label for="email" className="loginLabel">
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
						<label for="password" className="loginLabel">
						Password
						<input type="password"
							   class="form-control loginPass"
							   id="password"
							   placeholder="Password"
							   value={this.state.password}
							   onChange={this.onChangePassword}/>
						</label>
					</div>
					<div class="form-group">
						<label for="confirmPass" className="loginLabel">
						Confirm Password
						<input type="password"
							   class="form-control loginPass"
							   id="confirmPass"
							   placeholder="Password"
							   value={this.state.confirmPass}
							   onChange={this.onChangeConfPassword}/>
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