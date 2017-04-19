import React from "react";
import "./App.css";
import validator from "validator";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.validInputs = this.validInputs.bind(this);
		this.state = {
			nameInputVal: "",
			emailInputVal: "",
		};
		this.validations = {
			nameLength: "",
			validEmail: "",
			valid: false,
			valid1: false,
			valid2: false
		};
	}
	validInputs(){
		if(this.validations.valid1 && this.validations.valid2){
			this.validations.valid = true;
		}
		else{
			this.validations.valid = false;
		}
	}
	handleNameChange(event) {
		this.setState({ nameInputVal: event.target.value });
		if(validator.isLength(this.state.nameInputVal, {min:4, max:20})){
			this.validations.nameLength = "";
			this.validations.valid1 = true;
			this.validInputs();

		}
		else{
			this.validations.nameLength = "Your name must be at least 4 characters";
			this.validations.valid1 = false;

		}
	}
	handleEmailChange(event) {
		this.setState({ emailInputVal: event.target.value });
		if(validator.isEmail(this.state.emailInputVal)){
			this.validations.validEmail = "";
			this.validations.valid2 = true;
			this.validInputs();	
		}
		else{
			this.validations.validEmail = "Please enter a valid email";
			this.validations.valid2 = false;

		}
	}
	render() {
		return (
			<div className="App">
				<h1>Registration Form</h1>
				<form>
					<p>{this.validations.nameLength}</p>
					<p>{this.validations.validEmail}</p>

					<input type="text" onChange={this.handleNameChange} value={this.state.nameInputVal} placeholder="Name" /><br />
					<input type="text" onChange={this.handleEmailChange} value={this.state.emailInputVal} placeholder="Email" /><br />
					<input type="submit" disabled={!this.validations.valid} />
				</form>
			</div>
		);
	}
}

export default App;
