import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../login.css";
import axios from 'axios'

export default class showPlanComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <>
            <div style={{marginLeft: "1vw"}}>
                <h1 className="title">TEST SCHEDULE</h1>
                <div className="container congratsMessage">
                    <h2 className="subHeader">Congratulations! You are one step farther on your test prep journey. Happy
                        Studying!!</h2>
                </div>
                <div className="container" style={{paddingTop: "2vh"}}>
                    <h2 className="subHeader">Wk 1 - 5/1 to 5/8</h2>
                </div>
                <div className="container">
                    <label htmlFor="wk1task1" className="taskLabel">
                        <input type="checkbox" name="wk1task1"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 1, Barrons SAT
                    </label>
                </div>
                <div className="container">
                    <label htmlFor="wk1task2" className="taskLabel">
                        <input type="checkbox" name="wk1task2" className="form-check-label"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 2, Barrons SAT
                    </label>
                </div>
                <div className="container">
                    <label htmlFor="wk1task3" className="taskLabel">
                        <input type="checkbox" name="wk1task3"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 3, Barrons SAT
                    </label>
                </div>
                <div className="container addMoreResources">
                    <p>Stuff</p>
                </div>
                <div className="container" style={{paddingTop: "2vh"}}>
                    <h2 className="subHeader">Wk 2 - 5/9 to 5/16</h2>
                </div>
                <div className="container">
                    <label htmlFor="wk1task1" className="taskLabel">
                        <input type="checkbox" name="wk2task1"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 4, Barrons SAT
                    </label>
                </div>
                <div className="container">
                    <label htmlFor="wk1task2" className="taskLabel">
                        <input type="checkbox" name="wk2task2" className="form-check-label"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 5, Barrons SAT
                    </label>
                </div>
                <div className="container">
                    <label htmlFor="wk1task3" className="taskLabel">
                        <input type="checkbox" name="wk2task3"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 6, Barrons SAT
                    </label>
                </div>
                <div className="container" style={{paddingTop: "2vh"}}>
                    <h2 className="subHeader">Wk 3 - 5/17 to 5/24</h2>
                </div>
                <div className="container">
                    <label htmlFor="wk1task1" className="taskLabel">
                        <input type="checkbox" name="wk3task1"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 7, Barrons SAT
                    </label>
                </div>
                <div className="container">
                    <label htmlFor="wk1task2" className="taskLabel">
                        <input type="checkbox" name="wk3task2" className="form-check-label"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 8, Barrons SAT
                    </label>
                </div>
                <div className="container">
                    <label htmlFor="wk1task3" className="taskLabel">
                        <input type="checkbox" name="wk3task3"/>
                        <span className="taskBox"/>
                        <br/>
                        Chapter 9, Barrons SAT
                    </label>
                </div>
            </div>
        </>)
    }
}