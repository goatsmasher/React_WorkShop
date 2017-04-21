import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
			<h2>URL Params</h2>
        </div>
			<Accounts />
      </div>
    );
  }
}

export default App;

const Accounts = () => (
	<Router>
		<div>
			<h2>Accounts</h2>
				<ul>
					<li><Link to="/netflix">Netflix</Link></li>
					<li><Link to="/zillow_group">Zillow Group</Link></li>
					<li><Link to="/yahoo">Yahoo</Link></li>
					<li><Link to="/modus_create">Modus Create</Link></li>
				</ul>
				<Route path="/:id" component={Child}/>
		</div>
	</Router>
)

const Child = ({ match }) => (
	<div>
		<h3>ID: {match.params.id}</h3>
	</div>
)