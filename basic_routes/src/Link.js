import React from 'react';

class Link extends React.Component {
	state = {
		refresh: this.props.update,
		direction: this.props.to
	}
	handleRoute = (event) => {
		event.preventDefault();
		if (this.state.direction === "CoffeeScript"){
			this.coffescriptChange();
		}
		this.changeURL();
		this.state.refresh();
	} 
	changeURL = () => {
		history.pushState({}, null, this.state.direction);
	}
	coffescriptChange = () => {
		console.log("returning to javascript")
	}
	render() {

		return (
			<div>
				<a href="" onClick={this.handleRoute}><h3>{this.state.direction}</h3></a>
			</div>
		);
	}
}

export default Link;