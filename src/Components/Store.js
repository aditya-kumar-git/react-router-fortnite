import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import gsap from "gsap"
class Store extends React.Component {
	componentDidMount() {
		var tl = gsap.timeline()
		tl.from(".itemNameList", {
			duration: 0.1,
			stagger: 0.1,
			opacity: 0,
			y: "50%",
		})
	}
	componentDidUpdate(preporp) {
		if (preporp.AllData !== this.props.AllData) {
			var tl = gsap.timeline()
			tl.from(".itemNameList", {
				duration: 0.1,
				stagger: 0.1,
				opacity: 0,
				y: "50%",
			})
		}
	}
	listName = () => {
		return this.props.AllData.map((element) => {
			return (
				<Link key={element.itemId} to={`/store/${element.itemId}`}>
					<div className="itemNameList"> {element.item.name}</div>
				</Link>
			)
		})
	}

	render() {
		return <div className="StorePage">{this.listName()}</div>
	}
}
var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps)(Store)
