import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Footer from "./components/footer.component";

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<main>
					<Route path="/" exact component={ExercisesList} />
					<Route path="/edit/:id" component={EditExercise} />
					<Route path="/create" component={CreateExercise} />
					<Route path="/user" component={CreateUser} />
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
