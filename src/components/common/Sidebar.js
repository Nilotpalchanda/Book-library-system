import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class sideBar extends Component {
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
					<a to="#" className="nav-trigger"><span></span></a>
				</div>
				<div className="side-nav">
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
