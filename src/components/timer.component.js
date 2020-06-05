import React, {Component, useState} from 'react';
import ReactTimerStopwatch from "react-stopwatch-timer";
import { Link } from 'react-router-dom';
import Stopwatch from "./stopwatch.component";

const fromTime = new Date(0,0,0,0,0,0,0)

const StopwatchTimer = () => {

	const [isOn, setIsOn] = useState(false)
	const [isActive, setIsActive] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		//setSeconds(0);
		setIsActive(false);
	}

	return (
		<ReactTimerStopwatch isOn={isOn} className="react-stopwatch-timer__table" watchType="timer"
							 displayCricle={true} color="blue" hintColor="red" fromTime={fromTime} displayHours={false}>
			<button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
				{isActive ? 'Pause' : 'Start'}
			</button>
			<button className="button" onClick={reset}>
				Reset
			</button>
		</ReactTimerStopwatch>
	)
}

export default StopwatchTimer;