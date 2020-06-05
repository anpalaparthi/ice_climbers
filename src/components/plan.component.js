import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "../plan.css";
export default class Plan extends Component {
	constructor(props) {
		super(props);
		this.state = {loggedIn: true, resources: ["Barrons", "Princeton", "Kaplan"], search: "", showPlan: false};

		this.searchForQuery = this.updateResult.bind(this);
		this.onSubmit = this.showPlan.bind(this);
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
			return (
				<div style={{ marginLeft: "1vw" }}>
					<br/>
					<form onSubmit={this.onSubmit}>
						<h1 className="title">PLAN YOUR TEST</h1>
						<div className="container testDate">
							<h2 className="subHeader">Choose Test</h2>&emsp;
							<select name="selectTest">
		    					<option value="sat">SAT</option>
		    					<option value="act">ACT</option>
							    <option value="calcbc">AP Calc BC</option>
							    <option value="compsci">AP Comp Sci</option>
							</select>
							&emsp;&emsp;&emsp;&emsp;
							<h2 className="subHeader">Test Date</h2>&emsp;
							<div class='input-group date'>
		                    	<input type='date' className="selectDate" name="date"/>&emsp;
		                    </div>
						</div>
						<div className="container chooseResource">
							<input type="text" className="selectDate" style={{ marginTop: "0" }} value={this.state.search} placeholder="Search" onChange={this.searchForQuery}/>&emsp;
							<h2 className="subHeader">Choose a Resource</h2>
							<div className="resultResources" id="resultResources"></div>
						</div>
						<div className="container hoursMode">
							<h2 className="subHeader">How many hours/week?</h2>&emsp;
							<input type="text" className="selectDate" name="hoursWeek" style={{ marginTop: "0", height: "4vh"}} placeholder="Hours"/>&emsp;
							<h2 className="subHeader">Choose mode: </h2>&emsp;
							<select name="selectMode">
								<option value="slow">Slow</option>
								<option value="normal" selected>Normal</option>
								<option value="fast">Fast</option>
							</select>
						</div>
						<div className="container planButtons">
							<input class="submitPlan" type="submit" value="ADD ANOTHER PLAN"/>&emsp;
							<input class="submitPlan" type="submit" value="GENERATE PLAN"/>
						</div>
					</form>
				</div>
			)
		}
		return (
			<div style={{ marginLeft: "1vw" }}>
				<h1 className="title">TEST SCHEDULE</h1>
				<div className="container congratsMessage">
					<h2 className="subHeader">Congratulations! You are one step farther on your test prep journey. Happy Studying!!</h2>
				</div>
				<div className="container" style={{ paddingTop: "2vh"}}>
					<h2 className="subHeader">Wk 1 - 5/1 to 5/8</h2>
				</div>
				<div className="container">
					<label for="wk1task1" className="taskLabel">
					<input type="checkbox" name="wk1task1" />
					<span className="taskBox" />
					<br/>
					Chapter 1, Barrons SAT
					</label>
				</div>
				<div className="container">
					<label for="wk1task2" className="taskLabel">
					<input type="checkbox" name="wk1task2" className="form-check-label"/>
					<span className="taskBox" />
					<br/>
					Chapter 2, Barrons SAT
					</label>
				</div>
				<div className="container">
					<label for="wk1task3" className="taskLabel">
					<input type="checkbox" name="wk1task3" />
					<span className="taskBox" />
					<br/>
					Chapter 3, Barrons SAT
					</label>
				</div>
				<div className="container addMoreResources">
					<p>Stuff</p>
				</div>
				<div className="container" style={{ paddingTop: "2vh"}}>
					<h2 className="subHeader">Wk 2 - 5/9 to 5/16</h2>
				</div>
				<div className="container">
					<label for="wk1task1" className="taskLabel">
					<input type="checkbox" name="wk2task1" />
					<span className="taskBox" />
					<br/>
					Chapter 4, Barrons SAT
					</label>
				</div>
				<div className="container">
					<label for="wk1task2" className="taskLabel">
					<input type="checkbox" name="wk2task2" className="form-check-label"/>
					<span className="taskBox" />
					<br/>
					Chapter 5, Barrons SAT
					</label>
				</div>
				<div className="container">
					<label for="wk1task3" className="taskLabel">
					<input type="checkbox" name="wk2task3" />
					<span className="taskBox" />
					<br/>
					Chapter 6, Barrons SAT
					</label>
				</div>
				<div className="container" style={{ paddingTop: "2vh"}}>
					<h2 className="subHeader">Wk 3 - 5/17 to 5/24</h2>
				</div>
				<div className="container">
					<label for="wk1task1" className="taskLabel">
					<input type="checkbox" name="wk3task1" />
					<span className="taskBox" />
					<br/>
					Chapter 7, Barrons SAT
					</label>
				</div>
				<div className="container">
					<label for="wk1task2" className="taskLabel">
					<input type="checkbox" name="wk3task2" className="form-check-label"/>
					<span className="taskBox" />
					<br/>
					Chapter 8, Barrons SAT
					</label>
				</div>
				<div className="container">
					<label for="wk1task3" className="taskLabel">
					<input type="checkbox" name="wk3task3" />
					<span className="taskBox" />
					<br/>
					Chapter 9, Barrons SAT
					</label>
				</div>
			</div>
		)
	}
}