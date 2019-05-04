import React, { Component } from 'react'

export default class card extends Component {
    render() {
        return (
            <div className="column" id={this.props.id}>
                <div className="card">
                    <img className="cardImage" src={this.props.image} alt={this.props.name} />
                    <div className="container" style={{ height: "161px" }}>
                        <h4><b>{this.props.name}</b></h4>
                        <p>{this.props.author}</p>
                        <button onClick={this.props.onClick} className="btn btn-danger">
                            Remove
                         </button>

                    </div>
                </div>
            </div>
        )
    }
}

