import React from "react"
import { connect } from "react-redux"
import { selectedItemAction } from "../Redux/Actions"
import gsap from "gsap"
class FullPage extends React.Component {
	componentDidUpdate(preprops) {
		if (preprops.selectedItem !== this.props.selectedItem) {
			var tl = gsap.timeline()
			tl.from(".pp", { duration: 0.5, stagger: 0.2, opacity: 0 })
		}
	}
	renderFullPage = () => {
		if (this.props.selectedItem.itemId) {
			return (
				<div className="productProduct">
					<div
						style={{
							backgroundImage: `url("${this.props.selectedItem.item.images.icon}")`,
						}}
						className="productImage pp"
					></div>
					<div className="pp" style={{ fontSize: "6vw" }}>
						{this.props.selectedItem.item.name}
					</div>
					<div className="productCost pp">
						{`Cost : ${this.props.selectedItem.store.cost}`}
					</div>
					<div className="rare pp">
						{this.props.selectedItem.item.rarity.toUpperCase()}
					</div>
				</div>
			)
		} else {
			return <div className="productProduct">Loading...</div>
		}
	}
	componentDidMount() {
		this.props.AllData.map((ele) => {
			if (ele.itemId === this.props.match.params.id) {
				this.props.selectedItemAction(ele)
			}
			return 0
		})
	}
	render() {
		return <div className="fullPage">{this.renderFullPage()}</div>
	}
}
var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps, {
	selectedItemAction: selectedItemAction,
})(FullPage)
