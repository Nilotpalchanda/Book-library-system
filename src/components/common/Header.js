import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="logo">
                        <i className="fa fa-tachometer"></i>
                        <span>Brand</span>
                    </div>
                    <a href="#" className="nav-trigger"><span></span></a>
                </div>
            </React.Fragment>
        )
    }
}

export default Header
