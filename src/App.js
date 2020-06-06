import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Login from "./components/login.component";
import Plan from "./components/plan.component";
import Timer from "./components/timer.component";
import Track from "./components/track.component";
import Calendar from "./components/calendar.component";
import Register from "./components/register.component";
import ReactTimerStopwatch from "./components/stopwatch.component";
import Stopwatch from "./components/stopwatch.component";
import StopwatchTimer from "./components/timer.component";
import showPlanComponent from "./components/showPlan.component";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
	    return (
		  	<Router>
		    	<Navbar />
		    	<br/>
		    	<Route path="/" exact component={Home} />
		    	<Route path="/login" render={(props) => <Login margin="40vh 0 0 12vw" width="20%" />}/>
		    	<Route path="/register" component={Register} />
		    	<Route path="/plan" component={Plan} />
		    	<Route path="/showPlan" component={showPlanComponent} />
		    	<Route path="/timer" component={Stopwatch} />
		    	<Route path="/track" component={Track} />
		        <Route path="/calendar" component={Calendar}/>
		    </Router>
	    )
	}
}
