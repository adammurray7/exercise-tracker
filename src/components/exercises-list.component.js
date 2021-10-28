import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
	<tr>
		<td>{props.exercise.username}</td>
		<td>{props.exercise.description}</td>
		<td>{props.exercise.duration}</td>
		<td>{props.exercise.date.substring(0, 10)}</td>
		<td>
			<Link to={"/edit/" + props.exercise._id}>Edit</Link> |
			<button onClick={() => props.deleteExercise(props.exercise._id)}>
				Delete
			</button>
		</td>
	</tr>
);

export default class ExercisesList extends Component {
	constructor(props) {
		super(props);

		this.deleteExercise = this.deleteExercise.bind(this);

		this.state = { exercises: [] };
	}

	componentDidMount() {
		axios
			.get("https://exercise-tracker-ra-server.herokuapp.com/exercises")
			.then((res) => this.setState({ exercises: res.data }))
			.catch((err) => console.log(err));
	}

	deleteExercise(id) {
		axios
			.delete(
				"https://exercise-tracker-ra-server.herokuapp.com/exercises" +
					id
			)
			.then((res) => console.log(res.data));

		this.setState({
			exercises: this.state.exercises.filter(
				(exercise) => exercise._id !== id
			),
		});
	}

	exerciseList() {
		return this.state.exercises.map((currentExercise) => {
			return (
				<Exercise
					exercise={currentExercise}
					deleteExercise={this.deleteExercise}
					key={currentExercise._id}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<h3>Exercise Log</h3>
				<table>
					<thead>
						<tr>
							<th>Username</th>
							<th>Description</th>
							<th>Duration</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{this.exerciseList()}</tbody>
				</table>
			</div>
		);
	}
}
