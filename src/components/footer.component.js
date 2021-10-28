import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/footer.component.css";

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<small className="footer-wrapper">
					<div className="col">
						<strong>Exercise Tracker App</strong>
						<span>2021 &copy;</span>
					</div>
					<div className="col">
						<em>Adam Murray</em>
						<em>Richárd Szilágyi</em>
					</div>
				</small>
			</footer>
		);
	}
}
