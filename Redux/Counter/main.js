let count = 0;
const setter = document.getElementById("num");
const render = () => {
	setter.innerHTML = count;
};

function decreaseCount() {
	count -= 1;
	render();
}
function increaseCount() {
	count += 1;
	render();
}


// const createStore = () => {
// 	let state = {
// 		count : 0
// 	};
// 	const callbackCounter = [];
// 	const reducer = (state, action) => {
// 		const newState = Object.assign({}, state);
// 		switch (action) {
// 			case INC:
// 				newState.count += 1;
// 				break;
// 			case DEC:
// 				newState.count += 1;
// 				break;
// 			default:
// 				break;
// 		}
// 		return newState;
// 	};

// 	return {
// 		dispatch(action){
// 			console.log("Dispatching: ", action);
// 		}, 
// 		subscribe(callback){
// 			callbackCounter.push(callback);
// 		},
// 		getState() {
// 			return state;
// 		}
// 	};
// };