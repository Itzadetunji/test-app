// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const SignIn = () => {
	return <h2>Sign In Page</h2>;
};

const Login = () => {
	return <h2>Login Page</h2>;
};

const Home = () => {
	return <h2>Home Page</h2>;
};

const App = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/signin">Sign In</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/home">Home</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						path="/signin"
						element={<SignIn />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/home"
						element={<Home />}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
