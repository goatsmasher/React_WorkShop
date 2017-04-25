/* eslint-disable */
import React from 'react';

const JavaScript = <p>A high-level, dynamic, untyped, and interpreted programming language.</p>
const Haskell = <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>

const TextCard = ({pattern, component}) => {
	// const toRender = component.split("/")
	if (component === "JavaScript") {
		return (
			<div>
				{JavaScript}
			</div>
		)
	}
	if (component === "Haskell") {
		return (
			<div>
				{Haskell}
			</div>
		)
	}
	else{
		return (
			<p></p>
		)
	}
}




export default TextCard;