import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../track.css";
import axios from 'axios'



export default class Track extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "gabbar",
			resourceName:'',
			startDate: new Date(),
			chaptersDone: [],
			numWeeks:0,
			chapterWeeks:[],
			chapterNames: [],
			weekChapters: []
		}
		this.onClick = this.onClick.bind(this)
		this.printPlan = this.printPlan.bind(this)
		//this.onChangeEmail = this.onChangeEmail.bind(this)
		//this.onChangePassword = this.onChangePassword.bind(this)
		//this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		this.printPlan()
	}

	printPlan() {
		axios.get('http://localhost:5000/plans/' + this.state.username)
			.then(response => {
				this.setState({
					resourceName: response.data.resourceName,
					chaptersDone: response.data.chaptersDone,
					chapterNames: response.data.chapterNames,
					chapterWeeks: response.data.chapterWeeks
				})

				console.log("this.state: ", this.state)
				let weekChapters = []
				const numWeeks = this.state.chapterWeeks[this.state.chapterWeeks.length-1]
				for (let i = 1; i <= numWeeks; i++) {

					let currWeekChapters = []

					//one week logic
					for (let j=0; j < this.state.chapterWeeks.length; j++) {
						if (this.state.chapterWeeks[j] == i) {
							currWeekChapters.push(this.state.chapterNames[j])

							console.log("i value: " , i)
							console.log("chapternames j value: ",this.state.chapterNames[j])
						}
					}
					weekChapters.push(currWeekChapters)
				}
				this.setState({weekChapters: weekChapters})
			})
			.catch(error => {
				console.log("Error status: ", error)
			})
	}

	onClick() {
		this.printPlan()
	}

	render() {
		return (
			<div style={{ marginLeft: "1vw"}}>
				<h1 className="title">TRACK YOUR PROGRESS</h1>
				<div className="container">
					<h2 className="subHeader">This Week (in progress)</h2>
				</div>
{/*

				<button onClick={this.onClick}>CLICK HERE FOR FREE COUPONS</button>
*/}

				<tbody>
					{this.state.weekChapters.map(function (week, i) {
						console.log("week: " + week)
						return <div>
									<h2 className="subHeader">Week {i + 1}</h2>
									{/*<h3>{week[i]}</h3> */}

{/*
							{console.log(this.state.weekChapters[i])}
*/}
									{week.map(function (chapters, j) {
										return <div className="container">
											<label className="taskLabel">
												<input type="checkbox" name="{j}" />
												{week[j]}
											</label>
										</div>
									})}
								</div>
					})}
				</tbody>
				{/*<div className="container">
					<label className="taskLabel">
					<input type="checkbox" name="b_ch3" />
					Ch 3, Barrons - name
					</label>
				</div>
				<br/>
				<div className="container">
					<label className="taskLabel">
					<input type="checkbox" name="b_ch4" />
					Ch 4, Barrons - name
					</label>
				</div>
				<br/>
				<div className="container">
					<label className="taskLabel">
					<input type="checkbox" name="b_ch5" />
					Ch 5, Barrons - name
					</label>
				</div>
*/}
				<div className="container">
					<div className="star"></div>
						&emsp;&emsp;&emsp;&emsp;<h1 className="chaptersLeft">
							Great Work!!!
						</h1>
				</div>
				{/*<br/>
				<div className="container">
					<h2 className="subHeader">Next Week</h2>
				</div>
				<div className="container">
					<label className="taskLabel">
					<input type="checkbox" name="p_ch1" />
					Ch 1, Princeton - name
					</label>
				</div>
				<br/>
				<div className="container">
					<label className="taskLabel">
					<input type="checkbox" name="p_ch2" />
					Ch 2, Princeton - name
					</label>
				</div>*/}
			</div>
		)
	}
}