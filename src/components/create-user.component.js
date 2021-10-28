import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CreateUser extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: "",
		};
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			username: this.state.username,
		};

		console.log(user);

		this.setState({ username: "" });
	}

	render() {
		return (
			<div className="wrapper">
				<h3>Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						></input>
					</div>
					<div className="form-group">
						<button type="submit" className="btn form-control">
							Create User
						</button>
					</div>
				</form>
			</div>
		);
	}
}
