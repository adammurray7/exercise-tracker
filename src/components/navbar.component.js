import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.component.css";
import logo from "../logo.png";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<Link to="/" className="brand">
					<img src={logo} alt="Exercise Tracker" className="logo" />
					<h1>Exercise Tracker</h1>
				</Link>
				<div className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Exercises
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/create" className="nav-link">
							Create Exercise Log
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/user" className="nav-link">
							Create User
						</Link>
					</li>
				</div>
			</nav>
		);
	}
}
