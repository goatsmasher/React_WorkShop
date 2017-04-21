import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router, Route, Link
} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>SideBar Fun</h2>
				</div>
				<Sidebar />
			</div>
		);
	}
}

const Sidebar = () => (
	<Router>
		<ul style={{ listStyleType: 'none', padding: 0 }}>
			<li><Link to="/home">Home</Link></li>
			<li><Link to="/bubblegum">Bubblegum</Link></li>
			<li><Link to="/shoelaces">Shoelaces</Link></li>
		</ul>


	</Router>
)

export default App;
