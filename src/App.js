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
      <Route path="/calendar" component={Calendar} />
    </Router>
  );
}

export default App;
