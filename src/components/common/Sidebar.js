import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class sideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNav: false
		}}

	_showMenu(){
		this.setState({showNav: !this.state.showNav})
	}
	render() {
		return (
			<React.Fragment>
				<div className="header">
					<div className="logo">
					<Link to="/">
						<i className="fa fa-book"></i>
						<span>Book Stack</span>
					</Link>
					</div>
					<a href="#" onClick={()=>this._showMenu()} className="nav-trigger"><span></span></a>
				</div>
				<div className={this.state.showNav ? "side-nav visible" : "side-nav"}>
					<div className="logo">
					<Link to="/">
						<i className="fa fa-book"></i>
						<span>Book Stack</span>
					</Link>
					</div>
					<nav>
						<ul>
							<li>
								<Link to="/">

									<span><i className="fa fa-dashboard"></i></span>
									<span>Dashboard</span>
								</Link>
							</li>
							<li>
								<a href="/addbook">
									<span><i className="fa fa-plus-square-o"></i></span>
									<span>Add Books</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</React.Fragment>
		)
	}
}
