import React from "react"
import { Link } from "react-router-dom"

class Nav extends React.Component {
	render() {
		return (
			<div className="NAV">
				<Link to="/">
					<div>Home</div>
				</Link>
				<Link to="/about">
					<div>About</div>
				</Link>
				<Link to="/store">
					<div>Store</div>
				</Link>
			</div>
		)
	}
}
export default Nav
