import React from "react"
import Nav from "./Navigation"
import Store from "./Store"
import FullPage from "./FullPageFortnite"
import { BrowserRouter, Route } from "react-router-dom"
import { getAllData } from "../Redux/Actions"
import "../fortnite.css"
import { connect } from "react-redux"
import gsap from "gsap"

class App extends React.Component {
	componentDidMount() {
		this.props.getAllData()
		gsap.from(".homePage", { duration: 1, opacity: 0, delay: 0.5 })
	}

	homePage = () => {
		return <div className="homePage"></div>
	}
	aboutPage = () => {
		return <div>About</div>
	}
	render() {
		return (
			<BrowserRouter>
				<div className="fortniteShop">
					<Nav />

					<Route component={this.homePage} path="/" exact />
					<Route component={this.aboutPage} path="/about" />
					<Route component={Store} path="/store" exact />
					<Route component={FullPage} path="/store/:id" />
				</div>
			</BrowserRouter>
		)
	}
}

var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps, { getAllData: getAllData })(App)
