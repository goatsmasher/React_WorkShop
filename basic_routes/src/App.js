import React, { Component } from 'react';
import './App.css';
import Link from './Link';
import TextCard from './TextCard';


class App extends Component {
	reRender = () => {
		this.forceUpdate();
	}
	render() {
		return (
			<div className="App">
				<Link to="JavaScript" update={this.reRender}/>
				<Link to="Haskell" update={this.reRender}/>
				<Link to="CoffeeScript" update={this.reRender}/>
				<hr />
				<TextCard component={window.location.pathname.split("/")[1]} />
			</div>
		);
	}
}

export default App;
