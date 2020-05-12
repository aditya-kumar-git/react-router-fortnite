import { combineReducers } from "redux"
var AllData = (initialState = [], action) => {
	switch (action.type) {
		case "FORTNITE_DATA": {
			return action.payload
		}

		default: {
			return initialState
		}
	}
}

var selectedItem = (initialState = [], action) => {
	switch (action.type) {
		case "SELECTED": {
			return action.payload
		}
		default: {
			return initialState
		}
	}
}

var allReducers = combineReducers({
	AllData: AllData,
	selectedItem: selectedItem,
})
export default allReducers
