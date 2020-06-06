import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../track.css";

export default class Track extends Component {
	render() {
		return (
			<div style={{ marginLeft: "1vw"}}>
				<h1 className="title">TRACK YOUR PROGRESS</h1>
				<div className="container">
					<h2 className="subHeader">This Week (in progress)</h2>
				</div>
				<div className="container">
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

				<div className="container">
					<div className="star"></div>
						<div className="chaptersLeft">
							Great Work! Only 1 Chapter to go!
						</div>
				</div>
				<br/>
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
				</div>
			</div>
		)
	}
}