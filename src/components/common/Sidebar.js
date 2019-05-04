import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class sideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="side-nav">
			<div className="logo">
				<i className="fa fa-tachometer"></i>
				<span>Brand</span>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/addbook">
							<span><i className="fa fa-user"></i></span>
							<span>Add Books</span>
						</Link>
					</li>
					<li>
						<Link to="/">

							<span><i className="fa fa-envelope"></i></span>
							<span>All Books</span>
						</Link>
					</li>
					<li className="active">
						<Link to="#">
							<span><i className="fa fa-bar-chart"></i></span>
							<span>Analytics</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span><i className="fa fa-credit-card-alt"></i></span>
							<span>Payments</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
      </React.Fragment>
    )
  }
}
