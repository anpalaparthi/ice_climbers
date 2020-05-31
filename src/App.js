<<<<<<< HEAD
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Login from "./components/login.component";
import Plan from "./components/plan.component";
import Timer from "./components/timer.component";
import Track from "./components/track.component";
import Calendar from "./components/calendar.component";
import Register from "./components/register.component";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openLogin: true,
			openRegister: false
		};
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
		    	<Route path="/timer" component={Timer} />
		    	<Route path="/track" component={Track} />
		      <Route path="/calendar" component={Calendar} />
		    </Router>
	    )
	}
}
=======
import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import HelloWorldText from "./components/HelloWorldText";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Login from "./components/login.component";
import Plan from "./components/plan.component";
import Timer from "./components/timer.component";
import Track from "./components/track.component";

function App() {
    return (
        <Router>
            <Navbar />
            <br/>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/plan" component={Plan} />
            <Route path="/timer" component={Timer} />
            <Route path="/track" component={Track} />

             {/*Anisha Testing out */}
            <Route path='/potato' exact component={HelloWorldText}/>
        </Router>
    );

}

export default App;
>>>>>>> 5d7f74a08b9cdfbc0ac47c359bb72ab030211b5b
