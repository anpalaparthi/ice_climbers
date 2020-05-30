import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import HelloWorldText from "./components/HelloWorldText";

function App() {
    return (
      <Router>
          <div className="container">
            <Route path='/' exact component={HelloWorldText}/>
              <Route path='/potato' exact component={HelloWorldText}/>
          </div>
      </Router>
  );
}

export default App;
