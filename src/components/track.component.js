import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Track extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			startDate: new Date(),
			chaptersDone: [],
		}
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangePassword = this.onChangePassword.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	render() {
		return(
			<h1>Tracker Page</h1>
		)
	}
}