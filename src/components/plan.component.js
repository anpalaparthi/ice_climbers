import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "../plan.css";
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
//import Select from "react-select/src/Select";
//import {SelectContainer} from "react-select/src/components/containers";

export default class Plan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
			resources: [],
			resourceNames:[],
			search: "",
			searchResults: [],
			showPlan: false,
			selectedOption: null,

			resourceUsed: {},

			testType: "",
			testDate: new Date(),
			timePerWeek: new Number(),
			speedMode: new Number(),
			resourceName:"",
			username:"gabbar"
		};

		this.searchForQuery = this.updateResult.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this)
		this.onClickSearch = this.onClickSearch.bind(this)
		this.onSubmit = this.showPlan.bind(this);
		this.handleChange = this.handleChange.bind(this)

		this.onSelectTest = this.onSelectTest.bind(this)
		this.onSelectDate = this.onSelectDate.bind(this)
		this.onChangeWeekTime = this.onChangeWeekTime.bind(this)
		this.onChangeMode = this.onChangeMode.bind(this)
		this.onSelectResource = this.onSelectResource.bind(this)

		this.createPlan = this.createPlan.bind(this);
		this.onAddNewPlan = this.onAddNewPlan.bind(this);
		this.onGeneratePlan = this.onGeneratePlan.bind(this);

	}

	handleChange = selectedOption => {
		this.setState({selectedOption})
	}

	componentDidMount() {
		axios.get('http://localhost:5000/resources')
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						resourceNames: response.data.map(resource => resource.resourceName),
						resourceName: response.data[0].resourceName
					})
				}
			})
	}

	onGeneratePlan() {
		this.createPlan()
		window.location = '/showPlan'
	}

	onSelectTest(e) {
		this.setState({
			testType: e.target.value
		})
	}

	onSelectDate(e) {
		this.setState({
			testDate: e.target.value
		})
	}

	onChangeWeekTime(e) {
		this.setState({
			timePerWeek: e.target.value
		})
	}

	onChangeMode(e) {
		this.setState({
			speedMode: e.target.value
		})
	}

	onSelectResource(e) {
		this.setState({
			resourceName: e.target.value
		})

	}

	createPlan() {
		const timePerWeekMin = (this.state.timePerWeek) * 60
		let speedNum
		if (this.state.speedMode === "slow") {
			speedNum = 0
		} else if (this.state.speedMode === "normal") {
			speedNum = 1
		} else if (this.state.speedMode === "fast") {
			speedNum = 2
		} else {
			speedNum = 1
		}

		console.log("before get")

		/*axios.get('http://localhost:5000/resources/Princeton-Cracking-the-SAT-2020')
			.then(response => {
				console.log("sdfgh console")
				//console.log("res.data json.stringify: " + JSON.stringify(response.data))
				this.state.resourceUsed = response.data
			}, (error) => {
				console.log("axios get error: ", error)
				}
			)*/

		console.log("this.state.resourceName = ", this.state.resourceName)
		//console.log("resource used: ", this.state.resourceUsed)

		const plan = {
			username: this.state.username,
			testType: this.state.testType,
			testDate: this.state.testDate,
			timePerWeek: timePerWeekMin,
			resourceName: this.state.resourceName,
			speedMode: speedNum
		}

		console.log(plan)

		axios.post('http://localhost:5000/plans', plan)
			.then(res => console.log(res.data))

		this.setState ({
			testType: "",
			testDate: new Date(),
			timePerWeek: new Number(),
			speedMode: new Number(),
			resourceName:"",
			resources: [],
			resourceNames:[],
			username:""
		})
	}

	onAddNewPlan() {
		this.createPlan()
		window.location.reload(false)
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value
		})
		axios.post('http://localhost:5000/resources/search', this.state.search)
			.then(res => {
				console.log(res.data)
				if (res.data.length > 0) {
					this.setState({
						searchResults: res.data.map(searchResult => searchResult.resourceName),
						//resourceName: res.data[0].resourceName
					})
					console.log(this.state.searchResults)
				}
			})
	}

	onClickSearch(e) {

	}

	updateResult(event) {
		this.setState({search: event.target.value});
		var query = this.state.search;
		var resList = document.querySelector(".resultResources");
		for(var i=0; i < this.state.resources.length; i++) {
			if(resList.innerHTML.indexOf(this.state.resources[i]) === -1 && this.state.resources[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
				if(resList.innerHTML.indexOf(`<p>Oops! No resources found!</p>`) !== -1) {
					resList.innerHTML = "";
				}
				resList.innerHTML += 
					`<label className="resultResources" for="${this.state.resources[i]}">${this.state.resources[i]}</label>
					<input type="radio" name="${this.state.resources[i]}" />&emsp;`;
				console.log(resList.innerHTML.indexOf(this.state.resources[i]) === -1 && this.state.resources[i].toLowerCase().indexOf(query.toLowerCase()) >= 0);
				console.log(resList.innerHTML);
			} else if(query.length > 0) {
				resList.innerHTML = `<p>Oops! No resources found!</p>`;
			}
		}
		event.preventDefault();
	}

	showPlan(event) {
		this.setState({showPlan: true});
		// note to anisha: you can add the post req to the express web server here :)
	}

	render() {
		if(!this.state.loggedIn) {
			return <Redirect to={{ pathname: '/login', state: {loggedIn: false}}}/>
		}
		if(!this.state.showPlan) {
			return(
			<div style={{marginLeft: "1vw"}}>
				<br/>
				<form onSubmit={this.onSubmit}>
					<h1 className="title">PLAN YOUR TEST</h1>
					<div className="container testDate">
						<h2 className="subHeader">Choose Test</h2>&emsp;
						<select name="selectTest" onChange={this.onSelectTest}>
							<option value="sat">SAT</option>
							<option value="act">ACT</option>
							<option value="calcbc">AP Calc BC</option>
							<option value="compsci">AP Comp Sci</option>
						</select>
						&emsp;&emsp;&emsp;&emsp;
						<h2 className="subHeader">Test Date</h2>&emsp;
						<div class='input-group date'>
							<input type='date' className="selectDate" name="date" onChange={this.onSelectDate}/>
							{/*<DatePicker
								value={this.state.testDate}
								onChange={this.onSelectDate}
								/>*/}&emsp;
						</div>
					</div>
					{/*< div>
						<SelectContainer
							value={this.state.selectedOption}
							options={this.state.searchResults}
							onChange={this.handleChange()}
							placeHolder="Search..."
							openMenuOnClick={false}
						/>
					</div>*/}
					<div className="container chooseResource">
						<h2 className="subHeader">Choose a Resource</h2>
						&emsp;&emsp;&emsp;

						<select ref="userInput"
								required
								className="form-control"
								value={this.state.resourceName}
								onChange={this.onSelectResource}>
							{
								this.state.resourceNames.map(function (resource) {
									return <option
										key={resource}
										value={resource}>{resource}
									</option>
								})
							}
						</select>
						<div className="resultResources" id="resultResources"></div>
					</div>
					<div className="container hoursMode">
						<h2 className="subHeader">How many hours/week?</h2>&emsp;
						<input type="text" className="selectDate" name="hoursWeek"
							   style={{marginTop: "0", height: "4vh"}} placeholder="Hours" onChange={this.onChangeWeekTime}/>&emsp;
						<h2 className="subHeader">Choose Mode: </h2>&emsp;
						<select name="selectMode" onChange={this.onChangeMode}>
							<option value="slow">Take it Slow Mode</option>
							<option value="normal" selected>Normal Mode</option>
							<option value="fast">Fast Paced</option>
						</select>
					</div>
					<div className="container planButtons">
						<input class="submitPlan" type="submit" value="ADD ANOTHER PLAN" onClick={this.onAddNewPlan}/>&emsp;
						<input class="submitPlan" type="submit" value="GENERATE PLAN" onClick={this.onGeneratePlan}/>
					</div>
				</form>
			</div>
			)}
		}
	}
