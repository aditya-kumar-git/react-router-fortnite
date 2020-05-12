import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App"
import { Provider } from "react-redux"
import myStore from "./Redux/Store"
ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.querySelector(`#root`)
)
