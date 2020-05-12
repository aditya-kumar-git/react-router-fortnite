import Axios from "axios"

export var getAllData = () => {
	return async (dispatch) => {
		var data = await Axios({
			url: "https://fortnite-api.theapinetwork.com/store/get",
		})
		dispatch({ type: "FORTNITE_DATA", payload: data.data.data })
	}
}
export var selectedItemAction = (data) => {
	return {
		type: "SELECTED",
		payload: data,
	}
}
